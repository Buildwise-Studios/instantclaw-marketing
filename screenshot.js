const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1080, height: 1920 });
  await page.goto('http://localhost:3456', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: '/root/.openclaw/workspace-webber-web/instantclaw-marketing/screenshot.png' });
  await browser.close();
  console.log('Screenshot saved to screenshot.png');
})();
