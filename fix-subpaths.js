const fs = require('fs');
const svg = fs.readFileSync('public/newlogo-final.svg', 'utf-8');

const pathsMatch = [...svg.matchAll(/<path[^>]*fill=\"([^\"]+)\"[^>]*d=\"([^\"]+)\"/g)];

let dLightOuter = '';
let dLightHole = '';

let darkSubpaths = [];

pathsMatch.forEach((match) => {
    const fill = match[1];
    const subpaths = match[2].match(/M[^M]*/g) || [];
    
    if (fill === '#c0352e') {
        subpaths.forEach((sp, i) => {
            if (i === 0) dLightOuter += sp;
            else if (i === 1) dLightHole += sp;
        });
    } else {
        subpaths.forEach(sp => {
            const firstM = sp.match(/M\s*(-?\d+\.?\d*)/);
            if (!firstM) return;
            const cx = parseFloat(firstM[1]);
            darkSubpaths.push({sp, cx});
        });
    }
});

let dDark1 = '';
let dDark2 = '';
let dDark3 = '';

darkSubpaths.forEach(obj => {
    const cx = obj.cx;
    if (cx < 650) {
        dDark1 += obj.sp;
    } else if (cx >= 650 && cx < 990) {
        dDark2 += obj.sp;
    } else {
        dDark3 += obj.sp;
    }
});

let outSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 1500">\n';
outSvg += '  <path className="claw-oval" fill="#c0352e" fill-rule="evenodd" d="' + dLightOuter + dLightHole + '" />\n';
if (dDark1) outSvg += '  <path className="claw-left" fill="#9c2821" fill-rule="evenodd" d="' + dDark1 + '" />\n';
if (dDark2) outSvg += '  <path className="claw-mid" fill="#9c2821" fill-rule="evenodd" d="' + dDark2 + '" />\n';
if (dDark3) outSvg += '  <path className="claw-right" fill="#9c2821" fill-rule="evenodd" d="' + dDark3 + '" />\n';
outSvg += '</svg>';

fs.writeFileSync('public/instantclaw-logo.svg', outSvg);
console.log("File saved as instantclaw-logo.svg");
