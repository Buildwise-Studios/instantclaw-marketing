import React from 'react';
import { AbsoluteFill } from 'remotion';
import { RemotionTerminal } from '../components/RemotionTerminal';
import { GradientTextTyping } from '../components/GradientTextTyping';

export const Scene01Terminal = () => {
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
          gap: 48,
          width: '100%',
          maxWidth: 800,
        }}
      >
        <RemotionTerminal className="w-full max-w-lg" />

        <div
          style={{
            textAlign: 'center',
            marginTop: 24,
          }}
        >
          <GradientTextTyping
            text="Trying to deploy OpenClaw?"
            startFrame={30}
            charFrames={2}
            fontSize={56}
            showCursor={true}
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};
