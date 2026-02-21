const { chromium } = require('playwright');

const slides = [
  { name: 'slide-01', component: 'Slide01Cover' },
  { name: 'slide-02', component: 'Slide02Comparison' },
  { name: 'slide-03', component: 'Slide03DeployForm' },
  { name: 'slide-04', component: 'Slide04UseCases' },
  { name: 'slide-04-grid', component: 'Slide04Grid' },
  { name: 'slide-05', component: 'Slide05CTA' }
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1080, height: 1920 });
  
  for (const slide of slides) {
    // Update index.js to use current slide
    const fs = require('fs');
    const indexContent = `import React from 'react';\nimport ${slide.component} from './${slide.name}';\n\nexport default ${slide.component};\n`;
    fs.writeFileSync('/root/.openclaw/workspace-webber-web/instantclaw-marketing/pages/index.js', indexContent);
    
    // Wait for dev server to reload
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Navigate and screenshot
    await page.goto('http://localhost:3456', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: `/root/.openclaw/workspace-webber-web/instantclaw-marketing/${slide.name}.png` });
    console.log(`Screenshot saved: ${slide.name}.png`);
  }
  
  await browser.close();
  console.log('All screenshots done!');
})();
