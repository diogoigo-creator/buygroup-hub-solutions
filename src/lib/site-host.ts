// This policy intentionally follows the published-host rule requested by the owner.
export function shouldRedirectLovableHost(hostname: string): boolean {
  const host = hostname.toLowerCase();
  return host.endsWith(".lovable.app") && !host.startsWith("id-preview--");
}

export function redirectPublishedLovableHost() {
  const host = window.location.hostname.toLowerCase();
  if (!host.endsWith(".lovable.app") || host.startsWith("id-preview--")) return;
  let robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
  if (!robots) {
    robots = document.createElement("meta");
    robots.name = "robots";
    document.head.appendChild(robots);
  }
  robots.content = "noindex, nofollow";
  window.location.replace("https://buygroup.com.br" + window.location.pathname + window.location.search);
}

export const PUBLISHED_HOST_SCRIPT = `(${redirectPublishedLovableHost.toString()})();`;