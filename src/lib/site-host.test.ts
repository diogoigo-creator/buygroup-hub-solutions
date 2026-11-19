import { expect, test } from "bun:test";
import { runInNewContext } from "node:vm";
import { PUBLISHED_HOST_SCRIPT, shouldRedirectLovableHost } from "./site-host";
import { SITE_URL } from "./seo";

for (const [hostname, expected] of [
  ["buygroup-hub-solutions.lovable.app", true],
  ["another.lovable.app", true],
  ["id-preview--8481e0ea-fbb3-434b-b80d-a886baad2d4f.lovable.app", false],
  ["id-preview-6--project.lovable.app", true],
  ["id-preview-abc123--project.lovable.app", true],
  ["buygroup.com.br", false],
  ["www.buygroup.com.br", false],
  ["localhost", false],
  ["example.lovable.app.evil.test", false],
] as const) {
  test(`published-host policy: ${hostname}`, () => {
    expect(shouldRedirectLovableHost(hostname)).toBe(expected);
    const replacements: string[] = [];
    const meta = { content: "" };
    runInNewContext(PUBLISHED_HOST_SCRIPT, {
      window: { location: { hostname, pathname: "/contato", search: "?interesse=bpo", replace: (url: string) => replacements.push(url) } },
      document: { querySelector: () => meta },
    });
    expect(replacements).toEqual(expected ? ["https://buygroup.com.br/contato?interesse=bpo"] : []);
    expect(meta.content).toBe(expected ? "noindex, nofollow" : "");
  });
}

test("canonical origin uses the requested domain without www", () => {
  expect(SITE_URL).toBe("https://buygroup.com.br");
});