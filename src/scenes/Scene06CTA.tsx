import React from 'react';
import { AbsoluteFill, Img, staticFile } from 'remotion';
import { GradientTextTyping } from '../components/GradientTextTyping';

const FPS = 30;
const SCENE_DURATION = 3 * FPS; // 3 seconds (27-30s in full reel)

export const Scene06CTA = () => {
  const logoUrl = staticFile('instantclaw-logo.svg');

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#F8F7F5',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 48,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 40,
        }}
      >
        <Img
          src={logoUrl}
          alt="InstantClaw"
          style={{ width: 200, height: 200 }}
        />
        <GradientTextTyping
          text="Instantclaw.co"
          startFrame={0}
          charFrames={2}
          fontSize={56}
          showCursor={false}
        />
      </div>
    </AbsoluteFill>
  );
};
