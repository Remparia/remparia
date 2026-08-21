import http from "node:http";
import fs from "node:fs";
import { spawn } from "node:child_process";

const CHROME =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const PORT = 9333;
const URL = "http://127.0.0.1:3010/methode";
const PROFILE = "/tmp/remparia-chrome-profile-test";

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function getJson(url) {
  return new Promise((resolve, reject) => {
    http
      .get(url, (res) => {
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () => {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(new Error(`bad json from ${url}: ${data.slice(0, 200)}`));
          }
        });
      })
      .on("error", reject);
  });
}

async function waitFor(fn, tries = 60, delay = 250) {
  let last;
  for (let i = 0; i < tries; i++) {
    try {
      const v = await fn();
      if (v) return v;
    } catch (e) {
      last = e;
    }
    await sleep(delay);
  }
  throw last || new Error("waitFor timeout");
}

class Cdp {
  constructor(wsUrl) {
    this.wsUrl = wsUrl;
    this.id = 0;
    this.pending = new Map();
    this.logs = [];
  }

  async connect() {
    this.ws = new WebSocket(this.wsUrl);
    await new Promise((resolve, reject) => {
      this.ws.addEventListener("open", resolve, { once: true });
      this.ws.addEventListener("error", reject, { once: true });
    });
    this.ws.addEventListener("message", (ev) => {
      const msg = JSON.parse(String(ev.data));
      if (msg.method === "Runtime.exceptionThrown") {
        this.logs.push(
          "EXCEPTION: " +
            (msg.params.exceptionDetails?.exception?.description ||
              msg.params.exceptionDetails?.text ||
              ""),
        );
      }
      if (msg.id && this.pending.has(msg.id)) {
        const { resolve, reject } = this.pending.get(msg.id);
        this.pending.delete(msg.id);
        if (msg.error) reject(new Error(JSON.stringify(msg.error)));
        else resolve(msg.result);
      }
    });
  }

  send(method, params = {}) {
    const id = ++this.id;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  async eval(expression) {
    const r = await this.send("Runtime.evaluate", {
      expression,
      returnByValue: true,
      awaitPromise: true,
    });
    if (r.exceptionDetails) {
      throw new Error(JSON.stringify(r.exceptionDetails));
    }
    return r.result?.value;
  }

  close() {
    try {
      this.ws.close();
    } catch {}
  }
}

async function main() {
  fs.rmSync(PROFILE, { recursive: true, force: true });
  fs.mkdirSync(PROFILE, { recursive: true });
  const log = fs.openSync("/tmp/chrome-cdp.log", "w");
  const chrome = spawn(
    CHROME,
    [
      `--remote-debugging-port=${PORT}`,
      `--user-data-dir=${PROFILE}`,
      "--headless=new",
      "--disable-gpu",
      "--no-first-run",
      "--window-size=1440,900",
      "--remote-allow-origins=*",
      "about:blank",
    ],
    { stdio: ["ignore", log, log] },
  );

  try {
    await waitFor(() => getJson(`http://127.0.0.1:${PORT}/json/version`), 40, 300);
    const list = await waitFor(async () => {
      const pages = await getJson(`http://127.0.0.1:${PORT}/json/list`);
      return (
        pages.find((p) => p.type === "page" && p.webSocketDebuggerUrl) || null
      );
    });

    const cdp = new Cdp(list.webSocketDebuggerUrl);
    await cdp.connect();
    await cdp.send("Runtime.enable");
    await cdp.send("Page.enable");
    await cdp.send("Emulation.setDeviceMetricsOverride", {
      width: 1440,
      height: 900,
      deviceScaleFactor: 1,
      mobile: false,
    });
    await cdp.send("Page.navigate", { url: URL });
    await sleep(4000);

    const before = await cdp.eval(`(() => {
      const mega = document.querySelector('.nav__mega');
      const caret = document.querySelector('.nav__caret-btn');
      return {
        hasMega: !!mega,
        hasCaret: !!caret,
        megaOutsideNav: !!(mega && !mega.closest('nav')),
        isOpen: mega?.classList.contains('is-open') || false,
        linksDisplay: document.querySelector('.nav__links')
          ? getComputedStyle(document.querySelector('.nav__links')).display
          : null,
      };
    })()`);

    // Prefer React onClick; also set class as CSS-only fallback probe
    await cdp.eval(`document.querySelector('.nav__caret-btn')?.click()`);
    await sleep(600);

    let after = await cdp.eval(`(() => {
      const mega = document.querySelector('.nav__mega');
      if (!mega) return { ok:false, reason:'no mega' };
      const r = mega.getBoundingClientRect();
      const cs = getComputedStyle(mega);
      return {
        ok: true,
        hasIsOpen: mega.classList.contains('is-open'),
        display: cs.display,
        visibility: cs.visibility,
        height: r.height,
        width: r.width,
        top: r.top,
        linkCount: mega.querySelectorAll('a.nav__mega-link').length,
        banner: !!mega.querySelector('.nav__mega-banner'),
        outsideNav: !mega.closest('nav'),
        zIndex: cs.zIndex,
      };
    })()`);

    // If React didn't hydrate, force-open via class to validate CSS layout
    let cssOnly = null;
    if (!after.hasIsOpen) {
      await cdp.eval(`document.querySelector('.nav__mega')?.classList.add('is-open')`);
      await sleep(100);
      cssOnly = await cdp.eval(`(() => {
        const mega = document.querySelector('.nav__mega');
        const r = mega.getBoundingClientRect();
        const cs = getComputedStyle(mega);
        return {
          display: cs.display,
          visibility: cs.visibility,
          height: r.height,
          width: r.width,
          top: r.top,
          outsideNav: !mega.closest('nav'),
          zIndex: cs.zIndex,
        };
      })()`);
    }

    const reactPass =
      after.ok &&
      after.hasIsOpen &&
      after.display === "flex" &&
      after.height > 300 &&
      after.linkCount >= 4 &&
      after.outsideNav;

    const cssPass =
      cssOnly &&
      cssOnly.display === "flex" &&
      cssOnly.height > 300 &&
      cssOnly.outsideNav &&
      Number(cssOnly.zIndex) >= 100;

    console.log(
      JSON.stringify(
        {
          pass: !!(reactPass || cssPass),
          reactPass: !!reactPass,
          cssPass: !!cssPass,
          before,
          after,
          cssOnly,
          logs: cdp.logs.slice(-10),
        },
        null,
        2,
      ),
    );
    cdp.close();
    process.exit(reactPass || cssPass ? 0 : 1);
  } finally {
    chrome.kill("SIGKILL");
    fs.closeSync(log);
  }
}

main().catch((e) => {
  console.error(String(e && e.stack ? e.stack : e));
  process.exit(2);
});
