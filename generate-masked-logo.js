const fs = require('fs');

const svg = fs.readFileSync('public/instantclaw-logo.svg', 'utf-8');

// Extract the 4 paths
const ovalMatch = svg.match(/<path class="claw-oval"[^>]*d="([^"]+)" \/>/);
const leftMatch = svg.match(/<path class="claw-left"[^>]*d="([^"]+)" \/>/);
const midMatch = svg.match(/<path class="claw-mid"[^>]*d="([^"]+)" \/>/);
const rightMatch = svg.match(/<path class="claw-right"[^>]*d="([^"]+)" \/>/);

if (!ovalMatch || !leftMatch || !midMatch || !rightMatch) {
    console.error("Could not find all 4 paths!");
    process.exit(1);
}

// SVG stroke lengths for dasharray
// We'll use a large number that definitely covers the length. 4000 is enough.
const dash = 4500;

const outSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 1500" width="100%" height="100%">
  <defs>
    <!-- Oval Mask: Traces the oval clockwise from top -->
    <mask id="mask-oval">
      <path d="M 750, 230 A 550,420 0 1,1 749.9, 230" 
            fill="none" stroke="white" stroke-width="1200" stroke-linecap="round"
            class="mask-path mask-anim-oval" />
    </mask>

    <!-- Left Claw Mask: Traces from top-left downwards -->
    <mask id="mask-left">
      <path d="M 250, 300 Q 50, 650 500, 1050" 
            fill="none" stroke="white" stroke-width="800" stroke-linecap="round"
            class="mask-path mask-anim-left" />
    </mask>

    <!-- Mid Claw Mask: Traces from top-center downwards -->
    <mask id="mask-mid">
      <path d="M 780, 280 Q 850, 650 780, 1100" 
            fill="none" stroke="white" stroke-width="800" stroke-linecap="round"
            class="mask-path mask-anim-mid" />
    </mask>

    <!-- Right Claw Mask: Traces from top-right downwards -->
    <mask id="mask-right">
      <path d="M 1250, 300 Q 1450, 650 1000, 1150" 
            fill="none" stroke="white" stroke-width="800" stroke-linecap="round"
            class="mask-path mask-anim-right" />
    </mask>
  </defs>

  <style>
    .mask-path {
      stroke-dasharray: 4500;
      stroke-dashoffset: 4500;
    }
    
    .mask-anim-oval {
      animation: drawMask 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }

    .mask-anim-left {
      animation: drawMask 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      animation-delay: 1s;
    }

    .mask-anim-mid {
      animation: drawMask 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      animation-delay: 2s;
    }

    .mask-anim-right {
      animation: drawMask 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      animation-delay: 3s;
    }

    @keyframes drawMask {
      0% { stroke-dashoffset: ${dash}; }
      100% { stroke-dashoffset: 0; }
    }
  </style>

  <!-- Group the original paths, each with its respective mask -->
  <g mask="url(#mask-oval)">
    <path class="claw-oval" fill="#c0352e" fill-rule="nonzero" d="${ovalMatch[1]}" />
  </g>
  <g mask="url(#mask-left)">
    <path class="claw-left" fill="#9c2821" fill-rule="nonzero" d="${leftMatch[1]}" />
  </g>
  <g mask="url(#mask-mid)">
    <path class="claw-mid" fill="#9c2821" fill-rule="nonzero" d="${midMatch[1]}" />
  </g>
  <g mask="url(#mask-right)">
    <path class="claw-right" fill="#9c2821" fill-rule="nonzero" d="${rightMatch[1]}" />
  </g>
</svg>`;

fs.writeFileSync('public/instantclaw-logo.svg', outSvg);
console.log("Successfully generated masked animated logo!");
