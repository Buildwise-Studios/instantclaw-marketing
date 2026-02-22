import React, { useEffect, useState } from "react";
import Head from "next/head";

export default function AnimatedLogoSlide() {
  const [svgContent, setSvgContent] = useState("");

  useEffect(() => {
    fetch("/instantclaw-logo.svg")
      .then((res) => res.text())
      .then((text) => setSvgContent(text));
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
        .claw-logo-container {
          width: 600px;
          height: 600px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .claw-logo-container svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        /* The SVG paths already have these classes attached from fix-subpaths.js */
        .claw-oval {
          transform-origin: 50% 50%;
          transform-box: fill-box;
          animation: scaleUp 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        .claw-left {
          transform-origin: 50% 50%;
          transform-box: fill-box;
          animation: slideInLeft 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;
          opacity: 0;
          transform: translateX(-50px) scale(0.9);
        }

        .claw-mid {
          transform-origin: 50% 50%;
          transform-box: fill-box;
          animation: slideInDown 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s forwards;
          opacity: 0;
          transform: translateY(-50px) scale(0.9);
        }

        .claw-right {
          transform-origin: 50% 50%;
          transform-box: fill-box;
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
            transform: translateX(-100px) scale(0.9);
            opacity: 0;
          }
          100% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes slideInDown {
          0% {
            transform: translateY(-100px) scale(0.9);
            opacity: 0;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          0% {
            transform: translateX(100px) scale(0.9);
            opacity: 0;
          }
          100% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }
      `}</style>

      {svgContent ? (
        <div
          className="claw-logo-container"
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      ) : (
        <div style={{ width: 600, height: 600 }} />
      )}

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
