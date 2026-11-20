import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const baseUrl = process.env.BASE_URL || "http://127.0.0.1:8080";
const label = process.env.AUDIT_LABEL || "stage";
const out = join("audit-evidence", label);
const routes = [
  "/", "/work", "/about", "/process", "/experience", "/contact",
  "/case/terranxt", "/case/terranxt-v2", "/case/pvnxt-help", "/work/spade"
];
const viewports = [
  { name: "desktop", width: 1440, height: 1000 },
  { name: "tablet", width: 1024, height: 900 },
  { name: "mobile", width: 390, height: 844 }
];

await mkdir(out, { recursive: true });
const browser = await chromium.launch({ headless: true });
const manifest = {
  label,
  sourceRef: process.env.SOURCE_REF || "unknown",
  sourceSha: process.env.GITHUB_SHA || "unknown",
  baseUrl,
  capturedAt: new Date().toISOString(),
  viewports,
  routes: [],
  browserErrors: []
};

try {
  for (const viewport of viewports) {
    const context = await browser.newContext({ viewport, deviceScaleFactor: 1 });
    const page = await context.newPage();
    page.on("pageerror", error => manifest.browserErrors.push({ viewport: viewport.name, message: error.message }));

    for (const route of routes) {
      const routeKey = route === "/" ? "home" : route.slice(1).replaceAll("/", "__");
      const folder = join(out, viewport.name);
      await mkdir(folder, { recursive: true });
      let status = null;
      let title = "";
      let heading = "";
      let failure = null;

      try {
        const response = await page.goto(new URL(route, baseUrl).toString(), {
          waitUntil: "domcontentloaded",
          timeout: 45000
        });
        status = response?.status() ?? null;
        await page.locator("body").waitFor({ state: "visible", timeout: 10000 });
        await page.waitForTimeout(900);
        await page.evaluate(async () => {
          const imgs = Array.from(document.images);
          await Promise.all(imgs.map(img => {
            if (img.complete) return Promise.resolve();
            return new Promise(resolve => {
              img.addEventListener("load", resolve, { once: true });
              img.addEventListener("error", resolve, { once: true });
              setTimeout(resolve, 2500);
            });
          }));
          await document.fonts.ready;
        });
        title = await page.title();
        heading = (await page.locator("main h1, main h2").first().textContent().catch(() => ""))?.trim() || "";

        // Trigger lazy-loaded imagery before a full-page evidence capture.
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await page.waitForTimeout(500);
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.waitForTimeout(250);

        await page.screenshot({
          path: join(folder, routeKey + "-full.jpg"),
          type: "jpeg",
          quality: 84,
          fullPage: true,
          animations: "disabled"
        });

        if (route === "/") {
          await page.screenshot({
            path: join(folder, "home-first-fold.jpg"),
            type: "jpeg",
            quality: 88,
            animations: "disabled"
          });
          if (viewport.name === "mobile") {
            const menu = page.locator('button[aria-label="Menu"], button[aria-label*="menu" i]').first();
            if (await menu.count()) {
              await menu.click();
              await page.waitForTimeout(250);
              await page.screenshot({
                path: join(folder, "home-mobile-menu-open.jpg"),
                type: "jpeg",
                quality: 88,
                animations: "disabled"
              });
            }
          }
        }
        manifest.routes.push({ viewport: viewport.name, route, status, title, heading });
        console.log("CAPTURED " + label + " " + viewport.name + " " + route + " (" + status + ")");
      } catch (error) {
        failure = error.message;
        manifest.routes.push({ viewport: viewport.name, route, status, title, heading, failure });
        console.error("FAILED " + label + " " + viewport.name + " " + route + ": " + failure);
      }
    }

    await context.close();
  }
} finally {
  await writeFile(join(out, "manifest.json"), JSON.stringify(manifest, null, 2));
  await browser.close();
}
