const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const slides = [
  // Post 2
  { file: 'post2-slide-01.js', output: 'post2/carousel/post2-slide-01.png' },
  { file: 'post2-slide-02-list.js', output: 'post2/carousel/post2-slide-02.png' },
  { file: 'post2-slide-03-progress.js', output: 'post2/carousel/post2-slide-03.png' },
  { file: 'post2-slide-04.js', output: 'post2/carousel/post2-slide-04.png' },
  // Post 3
  { file: 'post3-slide-01.js', output: 'post3/carousel/post3-slide-01.png' },
  { file: 'post3-slide-02-shield-v2.js', output: 'post3/carousel/post3-slide-02.png' },
  { file: 'post3-slide-03.js', output: 'post3/carousel/post3-slide-03.png' },
  { file: 'post3-slide-04.js', output: 'post3/carousel/post3-slide-04.png' },
  { file: 'post3-slide-05-c.js', output: 'post3/carousel/post3-slide-05.png' },
  { file: 'post3-slide-06.js', output: 'post3/carousel/post3-slide-06.png' },
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1080, height: 1920 });

  for (const slide of slides) {
    // Update index.js to point to current slide
    const indexContent = `import React from 'react';\nimport Slide from './${slide.file.replace('.js', '')}';\nexport default Slide;`;
    fs.writeFileSync('pages/index.js', indexContent);
    
    // Wait for dev server to reload
    await new Promise(r => setTimeout(r, 3000));
    
    // Navigate and screenshot
    await page.goto('http://localhost:3456', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    
    // Ensure output directory exists
    const outputDir = path.dirname(slide.output);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    await page.screenshot({ path: slide.output });
    console.log(`✓ ${slide.output}`);
  }

  await browser.close();
  console.log('\nAll screenshots regenerated!');
})();
