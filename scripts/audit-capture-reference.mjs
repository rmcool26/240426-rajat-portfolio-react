import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";

const url = "https://www.devashish.design/";
const out = "audit-evidence/reference-devashish";
await mkdir(out, { recursive: true });
const browser = await chromium.launch({ headless: true });
const manifest = { url, capturedAt: new Date().toISOString(), screenshots: [], title: "", headings: [], errors: [] };

try {
  for (const viewport of [
    { name: "desktop", width: 1440, height: 1000 },
    { name: "mobile", width: 390, height: 844 }
  ]) {
    const page = await browser.newPage({ viewport });
    page.on("pageerror", error => manifest.errors.push(error.message));
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.waitForTimeout(2500);
    await page.evaluate(() => document.fonts.ready);
    if (!manifest.title) {
      manifest.title = await page.title();
      manifest.headings = await page.locator("h1,h2,h3").allTextContents();
    }
    await page.screenshot({
      path: out + "/" + viewport.name + "-first-fold.jpg",
      type: "jpeg",
      quality: 90,
      animations: "disabled"
    });
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1200);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({
      path: out + "/" + viewport.name + "-full.jpg",
      type: "jpeg",
      quality: 84,
      fullPage: true,
      animations: "disabled"
    });
    manifest.screenshots.push(viewport);
    await page.close();
  }
} finally {
  await writeFile(out + "/manifest.json", JSON.stringify(manifest, null, 2));
  await browser.close();
}
console.log(JSON.stringify(manifest, null, 2));
