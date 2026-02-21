const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  // 9:16 aspect ratio for Instagram (HD)
  await page.setViewportSize({ width: 1080, height: 1920 });
  await page.goto('http://localhost:3456', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: '/root/.openclaw/workspace-webber-web/instantclaw-marketing/slide-05.png' });
  await browser.close();
  console.log('Screenshot saved to slide-04.png (HD 9:16 format)');
})();
