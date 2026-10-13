export const COLOR_THEME_STORAGE_KEY = "remparia-color-theme";
export const COLOR_THEME_DAY_BG = "#F7F9F1";
export const COLOR_THEME_NIGHT_BG = "#050604";

/** Day window (local time): [DAY_HOUR_START, DAY_HOUR_END). */
export const COLOR_THEME_DAY_HOUR_START = 7;
export const COLOR_THEME_DAY_HOUR_END = 19;

export type BootColorTheme = "night" | "day";

/** Theme from local clock when the visitor has no stored preference. */
export function themeFromLocalHour(
  hour = new Date().getHours(),
): BootColorTheme {
  return hour >= COLOR_THEME_DAY_HOUR_START && hour < COLOR_THEME_DAY_HOUR_END
    ? "day"
    : "night";
}

/**
 * Inline script — apply stored theme before first paint (anti-FOUC).
 * No stored choice → day 07:00–18:59, night otherwise (local time).
 */
export const COLOR_THEME_BOOT_SCRIPT = `(function(){try{var k=${JSON.stringify(COLOR_THEME_STORAGE_KEY)};var t=localStorage.getItem(k);if(t!=="day"&&t!=="night"){var h=(new Date()).getHours();t=(h>=${COLOR_THEME_DAY_HOUR_START}&&h<${COLOR_THEME_DAY_HOUR_END})?"day":"night";}var r=document.documentElement;r.setAttribute("data-theme",t);r.style.colorScheme=t==="day"?"light":"dark";}catch(e){var h2=(new Date()).getHours();var f=(h2>=${COLOR_THEME_DAY_HOUR_START}&&h2<${COLOR_THEME_DAY_HOUR_END})?"day":"night";document.documentElement.setAttribute("data-theme",f);document.documentElement.style.colorScheme=f==="day"?"light":"dark";}})();`;
