import React from 'react';
import { AbsoluteFill, Img, staticFile, useCurrentFrame } from 'remotion';
import { loadFont } from '@remotion/google-fonts/PlusJakartaSans';
import { GradientTextTyping } from '../components/GradientTextTyping';

const { fontFamily: plusJakarta } = loadFont('normal', { weights: ['700'], subsets: ['latin'] });

const FPS = 30;
const SCENE_DURATION = 3 * FPS; // 3 seconds (27-30s in full reel)

export const Scene06CTA = () => {
  const frame = useCurrentFrame();
  const logoUrl = staticFile('instantclaw-logo.png');
  // Same subtle pulse as Scene03c Orbiting: gentle scale 1 → 1.02 → 1 (~1.5s cycle)
  const logoPulseScale = 1 + 0.02 * Math.sin((frame / 45) * Math.PI * 2);

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
          transform: 'scale(1.35)',
          transformOrigin: 'center center',
        }}
      >
        <Img
          src={logoUrl}
          alt="InstantClaw"
          style={{
            width: 200,
            height: 200,
            transform: `scale(${logoPulseScale})`,
          }}
        />
        <GradientTextTyping
          text="Instantclaw.co"
          startFrame={0}
          charFrames={2}
          fontSize={56}
          showCursor={false}
          fontFamily={plusJakarta}
        />
      </div>
    </AbsoluteFill>
  );
};
