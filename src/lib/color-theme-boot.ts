export const COLOR_THEME_STORAGE_KEY = "remparia-color-theme";
export const COLOR_THEME_DAY_BG = "#F7F9F1";
export const COLOR_THEME_NIGHT_BG = "#050604";

/** Inline script — apply stored theme before first paint (anti-FOUC). */
export const COLOR_THEME_BOOT_SCRIPT = `(function(){try{var t=localStorage.getItem(${JSON.stringify(COLOR_THEME_STORAGE_KEY)});if(t!=="day"&&t!=="night")t="night";var r=document.documentElement;r.setAttribute("data-theme",t);r.style.colorScheme=t==="day"?"light":"dark";}catch(e){document.documentElement.setAttribute("data-theme","night");document.documentElement.style.colorScheme="dark";}})();`;
