const fs = require('fs');

const svg = fs.readFileSync('public/newlogo-final.svg', 'utf-8');

// Match the full <path> tags
const pathsMatch = [...svg.matchAll(/<path[^>]*fill="([^"]+)"[^>]*d="([^"]+)"/g)];

let dLight = '';
let dDarkAll = '';

pathsMatch.forEach((match) => {
    const fill = match[1];
    const d = match[2];
    
    if (fill === '#c0352e') {
        dLight = d; // Keep the exact original d string for the light oval
    } else if (fill === '#9c2821') {
        dDarkAll += d; // If there are multiple, combine them, though there's probably only one
    }
});

// Now split the dark subpaths
const darkSubpaths = dDarkAll.match(/M[^M]*/g) || [];

let dDarkLeft = '';
let dDarkMid = '';
let dDarkRight = '';

darkSubpaths.forEach(sp => {
    const firstM = sp.match(/M\s*(-?\d+\.?\d*)/);
    if (!firstM) return;
    const cx = parseFloat(firstM[1]);
    
    if (cx < 650) {
        dDarkLeft += sp;
    } else if (cx >= 650 && cx < 990) {
        dDarkMid += sp;
    } else {
        dDarkRight += sp;
    }
});

// Generate the final SVG with 4 paths, using the original fill-rule="nonzero"
let outSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 1500" width="100%" height="100%">
  <path class="claw-oval" fill="#c0352e" fill-rule="nonzero" d="${dLight}" />
  <path class="claw-left" fill="#9c2821" fill-rule="nonzero" d="${dDarkLeft}" />
  <path class="claw-mid" fill="#9c2821" fill-rule="nonzero" d="${dDarkMid}" />
  <path class="claw-right" fill="#9c2821" fill-rule="nonzero" d="${dDarkRight}" />
</svg>`;

fs.writeFileSync('public/instantclaw-logo.svg', outSvg);
console.log("Successfully generated perfect logo!");
