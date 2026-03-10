import React from 'react';
import { AbsoluteFill } from 'remotion';
import { loadFont } from '@remotion/google-fonts/PlusJakartaSans';
import { TextFadeInByLine } from '../components/TextFadeInByLine';

const { fontFamily: plusJakarta } = loadFont('normal', { weights: ['700'], subsets: ['latin'] });

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
          startFrame={15}
          staggerFrames={8}
          fadeDurationFrames={20}
          fontSize={88}
          fontFamily={plusJakarta}
        />
      </div>
    </AbsoluteFill>
  );
};
