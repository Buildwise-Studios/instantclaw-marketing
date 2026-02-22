const fs = require('fs');
const svg = fs.readFileSync('public/newlogo-final.svg', 'utf-8');
const pathsMatch = [...svg.matchAll(/<path[^>]*fill="([^"]+)"[^>]*d="([^"]+)"/g)];
pathsMatch.forEach((match) => {
    const fill = match[1];
    const d = match[2];
    if (fill === '#9c2821') {
        const firstM = d.match(/M\s*(-?\d+\.?\d*)/);
        if (firstM) {
            console.log(firstM[1]);
        }
    }
});
