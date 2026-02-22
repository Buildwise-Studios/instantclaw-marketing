import React, { useRef, useEffect } from 'react';

export default function AnimatedLogo() {
  const objRef = useRef(null);

  useEffect(() => {
    // Basic setup done via CSS injection, so this could just be a functional component
  }, []);

  return (
    <object 
      ref={objRef}
      type="image/svg+xml" 
      data="/instantclaw-logo.svg" 
      className="claw-logo"
      style={{opacity: 0}}
      onLoad={(e) => {
        const svgDoc = e.target.contentDocument;
        if (!svgDoc) return;
        const svgEl = svgDoc.querySelector('svg');
        if (svgEl) {
           svgEl.style.overflow = 'visible';
           
           const paths = svgEl.querySelectorAll('path');
           if (paths.length >= 4) {
               paths[0].classList.add('claw-oval');
               paths[1].classList.add('claw-left');
               paths[2].classList.add('claw-mid');
               paths[3].classList.add('claw-right');
           }
           
           const styleEl = svgDoc.createElementNS('http://www.w3.org/2000/svg', 'style');
           styleEl.textContent = `
              .claw-oval { transform-origin: 50% 50%; animation: scaleUp 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
              .claw-left { transform-origin: 50% 50%; animation: slideInLeft 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards; opacity: 0; transform: translateX(-100px) scale(0.9); }
              .claw-mid { transform-origin: 50% 50%; animation: slideInDown 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards; opacity: 0; transform: translateY(-100px) scale(0.9); }
              .claw-right { transform-origin: 50% 50%; animation: slideInRight 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.1s forwards; opacity: 0; transform: translateX(100px) scale(0.9); }
              
              @keyframes scaleUp { 0% { transform: scale(0); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
              @keyframes slideInLeft { 0% { transform: translateX(-100px) scale(0.9); opacity: 0; } 100% { transform: translateX(0) scale(1); opacity: 1; } }
              @keyframes slideInDown { 0% { transform: translateY(-100px) scale(0.9); opacity: 0; } 100% { transform: translateY(0) scale(1); opacity: 1; } }
              @keyframes slideInRight { 0% { transform: translateX(100px) scale(0.9); opacity: 0; } 100% { transform: translateX(0) scale(1); opacity: 1; } }
           `;
           svgEl.appendChild(styleEl);
        }
        e.target.style.opacity = 1;
      }}
    ></object>
  );
}
