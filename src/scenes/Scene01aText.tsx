import React from 'react';
import { AbsoluteFill } from 'remotion';
import { TextFadeInByLine } from '../components/TextFadeInByLine';

export const Scene01aText = () => {
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
          text="Trying to deploy OpenClaw?"
          startFrame={0}
          staggerFrames={8}
          fadeDurationFrames={20}
          fontSize={88}
        />
      </div>
    </AbsoluteFill>
  );
};
