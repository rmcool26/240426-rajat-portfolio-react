import { chromium } from "playwright";

const baseUrl = process.env.BASE_URL || "http://127.0.0.1:4173";
const routes = [
  "/",
  "/work",
  "/about",
  "/experience",
  "/process",
  "/contact",
  "/case/terranxt",
  "/case/terranxt-v2",
  "/case/pvnxt-help",
  "/work/spade",
];

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const pageErrors = [];
page.on("pageerror", (error) => pageErrors.push(error.message));

try {
  for (const route of routes) {
    const response = await page.goto(new URL(route, baseUrl).toString(), {
      waitUntil: "domcontentloaded",
      timeout: 30000,
    });

    if (!response || response.status() !== 200) {
      throw new Error(route + ": expected HTTP 200, received " + (response?.status() ?? "no response"));
    }

    await page.locator("main").first().waitFor({ state: "visible", timeout: 15000 });
    const heading = await page.locator("main h1").first().textContent().catch(() => "");
    console.log("PASS route " + route + " — " + (heading || "main content").trim().slice(0, 90));
  }

  await page.goto(new URL("/", baseUrl).toString(), { waitUntil: "domcontentloaded" });
  await page.screenshot({ path: "/tmp/portfolio-smoke-home.png", fullPage: true });
  const helpLink = page.locator('a[href="/case/pvnxt-help"]').first();
  if (!(await helpLink.count())) throw new Error("Homepage is missing the pvNXT Help Portal case-study link.");
  console.log("PASS homepage links to pvNXT Help Portal");

  await page.setViewportSize({ width: 390, height: 844 });
  await page.reload({ waitUntil: "domcontentloaded" });
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page.locator("#mobile-navigation").waitFor({ state: "visible" });
  await page.getByRole("link", { name: "Design process" }).click();
  await page.waitForURL("**/process");
  if (await page.locator("#mobile-navigation").count()) {
    throw new Error("Mobile navigation did not close after route navigation.");
  }
  console.log("PASS mobile navigation opens, navigates and closes");

  await page.goto(new URL("/work", baseUrl).toString(), { waitUntil: "domcontentloaded" });
  await page.getByRole("tab", { name: /Case studies/i }).click();
  const projectCount = await page.locator("#project-grid article").count();
  if (projectCount < 1) throw new Error("Work archive Case studies filter returned no projects.");
  const helpCard = page.locator('a[aria-label="View project: pvNXT Help Portal"]');
  if (!(await helpCard.count())) throw new Error("Work archive is missing the pvNXT Help Portal card.");
  console.log("PASS work archive filters — " + projectCount + " case studies visible, including pvNXT Help Portal");

  await page.goto(new URL("/case/pvnxt-help", baseUrl).toString(), { waitUntil: "domcontentloaded" });
  await page.screenshot({ path: "/tmp/portfolio-smoke-help.png", fullPage: true });
  if (!(await page.getByRole("heading", { name: /pvNXT Help/i }).count())) {
    throw new Error("pvNXT Help Portal page heading is missing.");
  }
  console.log("PASS pvNXT Help Portal case-study renders");

  if (pageErrors.length) {
    throw new Error("Browser JavaScript errors:\n" + pageErrors.join("\n"));
  }
  console.log("PASS no uncaught browser JavaScript errors");
} finally {
  await browser.close();
}
