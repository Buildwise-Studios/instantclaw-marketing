const fs = require('fs');
const svg = fs.readFileSync('public/newlogo-final.svg', 'utf-8');
const pathsMatch = [...svg.matchAll(/<path[^>]*fill="([^"]+)"[^>]*d="([^"]+)"/g)];
pathsMatch.forEach((match) => {
    if (match[1] === '#c0352e') {
        const subpaths = match[2].match(/M[^M]*/g) || [];
        console.log("Light subpaths:", subpaths.length);
        subpaths.forEach((sp, i) => {
           console.log(`Subpath ${i} length:`, sp.length); 
        });
    }
});
