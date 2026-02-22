const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({headless: "new"});
  const page = await browser.newPage();

  const svgCode = fs.readFileSync('public/newlogo-final.svg', 'utf-8');

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.12.18/paper-core.min.js"></script>
    </head>
    <body>
      <canvas id="canvas" width="1500" height="1500" style="display:none;"></canvas>
      <script>
        window.processSVG = function() {
          paper.setup(document.getElementById('canvas'));
          const svgCode = \`${svgCode.replace(/`/g, '\\`')}\`;
          const imported = paper.project.importSVG(svgCode, {insert: true});
          
          let unifiedLight = new paper.CompoundPath();
          let unifiedDark1 = new paper.CompoundPath();
          let unifiedDark2 = new paper.CompoundPath();
          let unifiedDark3 = new paper.CompoundPath();
          
          // Get all Simple Paths
          const items = imported.getItems({class: paper.Path});
          
          items.forEach((p) => {
            let fill = p.fillColor;
            let current = p;
            while (!fill && current.parent) {
                current = current.parent;
                fill = current.fillColor;
            }
            
            if (fill && fill.toCSS(true) === '#c0352e') {
                if (unifiedLight.children.length === 0) unifiedLight = p.clone();
                else { const temp = unifiedLight.unite(p); unifiedLight.remove(); unifiedLight = temp; }
            } else if (fill && fill.toCSS(true) === '#9c2821') {
                const cx = p.bounds.center.x;
                if (cx < 450) {
                    if (unifiedDark1.children.length === 0) unifiedDark1 = p.clone();
                    else { const temp = unifiedDark1.unite(p); unifiedDark1.remove(); unifiedDark1 = temp; }
                } else if (cx < 850) {
                    if (unifiedDark2.children.length === 0) unifiedDark2 = p.clone();
                    else { const temp = unifiedDark2.unite(p); unifiedDark2.remove(); unifiedDark2 = temp; }
                } else {
                    if (unifiedDark3.children.length === 0) unifiedDark3 = p.clone();
                    else { const temp = unifiedDark3.unite(p); unifiedDark3.remove(); unifiedDark3 = temp; }
                }
            }
          });
          
          let outSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 1500" width="100%" height="100%">\\n';
          if (unifiedLight) outSvg += '  <path class="claw-oval" fill="#c0352e" fill-rule="evenodd" d="' + unifiedLight.pathData + '" />\\n';
          if (unifiedDark1) outSvg += '  <path class="claw-left" fill="#9c2821" fill-rule="evenodd" d="' + unifiedDark1.pathData + '" />\\n';
          if (unifiedDark2) outSvg += '  <path class="claw-mid" fill="#9c2821" fill-rule="evenodd" d="' + unifiedDark2.pathData + '" />\\n';
          if (unifiedDark3) outSvg += '  <path class="claw-right" fill="#9c2821" fill-rule="evenodd" d="' + unifiedDark3.pathData + '" />\\n';
          outSvg += '</svg>';
          
          return outSvg;
        };
      </script>
    </body>
    </html>
  `;

  await page.setContent(html, {waitUntil: 'networkidle0'});
  const finalSvg = await page.evaluate(() => window.processSVG());
  
  fs.writeFileSync('public/instantclaw-logo.svg', finalSvg);
  console.log("Successfully recreated paths with holes preserved and split claws!");
  await browser.close();
})();