import React from 'react';
import { AbsoluteFill } from 'remotion';
import { TextFadeInByLine } from '../components/TextFadeInByLine';

export const Scene02aText = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#F8F7F5',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 48,
      }}
    >
      <div style={{ maxWidth: '95%' }}>
        <TextFadeInByLine
          text="Meet InstantClaw"
          startFrame={0}
          staggerFrames={8}
          fadeDurationFrames={20}
          fontSize={88}
        />
      </div>
    </AbsoluteFill>
  );
};
