const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1350 });
  await page.goto('http://localhost:3456/slide-02-vps', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 2000));

  const outputPath = path.join(__dirname, 'post1-revamped', 'slide-02-vps.png');
  await page.screenshot({ path: outputPath });

  await browser.close();
  console.log(`Screenshot saved to ${outputPath}`);
})();
