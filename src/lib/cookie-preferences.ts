import { saveChoices, type Choice } from "./consent";

export const BG_COOKIE_CONSENT_KEY = "bg_cookie_consent";
export const OPEN_COOKIE_PREFERENCES_EVENT = "bg-open-cookie-preferences";
export const COOKIE_NOTICE_VISIBILITY_EVENT = "bg-cookie-notice-visibility";

export function saveAnalyticsChoice(choice: Choice): void {
  try {
    localStorage.setItem(BG_COOKIE_CONSENT_KEY, choice);
  } catch {
    // The consent module keeps an in-memory answer when storage is unavailable.
  }
  saveChoices({ analytics: choice });
}

export function requestCookiePreferences(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(OPEN_COOKIE_PREFERENCES_EVENT));
}

export function announceCookieNotice(visible: boolean): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(COOKIE_NOTICE_VISIBILITY_EVENT, { detail: visible }));
}
