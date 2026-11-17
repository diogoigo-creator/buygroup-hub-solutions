import { expect, test } from "bun:test";
import { shouldShowMobileContact } from "./mobile-contact";

const state = { pathname: "/", viewportWidth: 375, scrollY: 401, footerVisible: false, courseFormVisible: false };

test("mobile bar only appears below 768px", () => {
  expect(shouldShowMobileContact({ ...state, viewportWidth: 767 })).toBe(true);
  expect(shouldShowMobileContact({ ...state, viewportWidth: 768 })).toBe(false);
});
test("mobile bar appears only after 400px of scrolling", () => {
  expect(shouldShowMobileContact({ ...state, scrollY: 400 })).toBe(false);
  expect(shouldShowMobileContact(state)).toBe(true);
});
test("contact page never shows the mobile bar", () => {
  expect(shouldShowMobileContact({ ...state, pathname: "/contato" })).toBe(false);
});
test("visible footer hides the mobile bar", () => {
  expect(shouldShowMobileContact({ ...state, footerVisible: true })).toBe(false);
});
test("visible cookie notice hides the mobile bar", () => {
  expect(shouldShowMobileContact({ ...state, cookieNoticeVisible: true })).toBe(false);
  expect(shouldShowMobileContact({ ...state, cookieNoticeVisible: false })).toBe(true);
});
test("visible Academy form hides the bar only on the Academy page", () => {
  expect(shouldShowMobileContact({ ...state, pathname: "/cursos", courseFormVisible: true })).toBe(false);
  expect(shouldShowMobileContact({ ...state, pathname: "/cursos", courseFormVisible: false })).toBe(true);
  expect(shouldShowMobileContact({ ...state, courseFormVisible: true })).toBe(true);
});