export const CONSENT_DEFAULTS = `window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("consent", "default", {
  analytics_storage: "denied",
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
});
(function () {
  var signals = {
    analytics: ["analytics_storage"],
    advertising: ["ad_storage", "ad_user_data", "ad_personalization"],
  };
  for (var purpose in signals) {
    var choice = null;
    try {
      var saved = JSON.parse(localStorage.getItem("cookie_consent_" + purpose) || "null");
      if (
        saved &&
        typeof saved.at === "number" && isFinite(saved.at) && saved.at >= 0 && saved.at <= Date.now() &&
        (saved.choice === "denied" || (saved.choice === "granted" && Date.now() - saved.at < 365 * 86400000))
      ) {
        choice = saved.choice;
      }
    } catch (e) {}
    if (navigator.globalPrivacyControl === true) choice = "denied";
    if (!choice) continue;
    var update = {};
    signals[purpose].forEach(function (signal) {
      update[signal] = choice;
    });
    gtag("consent", "update", update);
  }
})();`;

// Compatibility with the site's original single-purpose consent key.
export const BG_CONSENT_DEFAULT = `try {
  if (navigator.globalPrivacyControl !== true) {
    var bgChoice = localStorage.getItem("bg_cookie_consent");
    // Legacy acceptance has no timestamp and cannot override the valid per-purpose answer.
    if (bgChoice === "denied") {
      gtag("consent", "update", { analytics_storage: "denied" });
    }
  }
} catch (e) {}`;
