import React, { useEffect, useState } from "react";
import Head from "next/head";

export default function AnimatedLogoSlide() {
  const [svgContent, setSvgContent] = useState("");

  useEffect(() => {
    fetch("/instantclaw-logo.svg?t=" + new Date().getTime())
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
