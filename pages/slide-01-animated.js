import React, { useEffect, useRef } from "react";
import Head from "next/head";

export default function AnimatedLogoSlide() {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Animate everything with simple CSS animations via JS setting classes or just inline styles
    const svg = svgRef.current;

    // We can just rely on the CSS added below!
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "#0a0a0a",
      }}
    >
      <Head>
        <title>Animated Logo Slide</title>
      </Head>

      <style>{`
        .claw-logo {
          width: 500px;
          height: 500px;
          overflow: visible;
        }

        .claw-oval {
          transform-origin: center;
          animation: scaleUp 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        .claw-left {
          transform-origin: center;
          animation: slideInLeft 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;
          opacity: 0;
          transform: translateX(-50px) scale(0.9);
        }

        .claw-mid {
          transform-origin: center;
          animation: slideInDown 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards;
          opacity: 0;
          transform: translateY(-50px) scale(0.9);
        }

        .claw-right {
          transform-origin: center;
          animation: slideInRight 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.1s forwards;
          opacity: 0;
          transform: translateX(50px) scale(0.9);
        }

        @keyframes scaleUp {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          0% {
            transform: translateX(-50px) scale(0.9);
            opacity: 0;
          }
          100% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes slideInDown {
          0% {
            transform: translateY(-50px) scale(0.9);
            opacity: 0;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          0% {
            transform: translateX(50px) scale(0.9);
            opacity: 0;
          }
          100% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }
      `}</style>

      {/* Inline the exact SVG so we can animate individual paths! */}
      {/* We will load it dynamically or just paste the paths here. */}
      {/* But the paths are huge! Let's fetch it on the client and inject classes or just use an object element? */}
      {/* Wait, we have the optimized paths, we can just read them and put them here using a build script or just fetch */}

      <object
        id="logo-svg-obj"
        type="image/svg+xml"
        data="/instantclaw-logo.svg"
        className="claw-logo"
        style={{ opacity: 0 }} // hide until loaded
        onLoad={(e) => {
          const svgDoc = e.target.contentDocument;
          if (!svgDoc) return;
          const svgEl = svgDoc.querySelector("svg");
          if (svgEl) {
            svgEl.style.overflow = "visible";
            const paths = svgEl.querySelectorAll("path");
            if (paths.length >= 4) {
              paths[0].classList.add("claw-oval");
              paths[1].classList.add("claw-left");
              paths[2].classList.add("claw-mid");
              paths[3].classList.add("claw-right");

              // Inject styles into the SVG
              const styleEl = svgDoc.createElementNS(
                "http://www.w3.org/2000/svg",
                "style",
              );
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
          }
          e.target.style.opacity = 1;
        }}
      ></object>

      <h1
        style={{
          color: "white",
          marginTop: "40px",
          fontFamily: "sans-serif",
          fontWeight: 300,
          letterSpacing: "2px",
        }}
      >
        INSTANT CLAW
      </h1>
    </div>
  );
}
