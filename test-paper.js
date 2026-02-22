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
          
          let logs = [];
          
          // Get all simple paths
          const items = imported.getItems({class: paper.Path});
          items.forEach((p) => {
            // Find effective fill color
            let fill = p.fillColor;
            let current = p;
            while (!fill && current.parent) {
                current = current.parent;
                fill = current.fillColor;
            }
            if (fill && fill.toCSS(true) === '#9c2821') {
                logs.push("Simple path center: " + p.bounds.center.x);
            }
          });
          
          return logs.join("\\n");
        };
      </script>
    </body>
    </html>
  `;

  await page.setContent(html, {waitUntil: 'networkidle0'});
  const logs = await page.evaluate(() => window.processSVG());
  
  console.log(logs.split('\\n').length + " dark simple paths found.");
  await browser.close();
})();