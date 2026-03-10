import React from 'react';
import { AbsoluteFill } from 'remotion';
import { loadFont } from '@remotion/google-fonts/PlusJakartaSans';
import { TextStackAccumulate } from '../components/TextStackAccumulate';

const { fontFamily: plusJakarta } = loadFont('normal', { weights: ['700'], subsets: ['latin'] });

export const Scene04bTextStack = () => {
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
        <TextStackAccumulate
          text={'VPS\nSSH\nConfig'}
          startFrame={0}
          staggerFrames={12}
          fadeDurationFrames={20}
          fontSize={96}
          fontFamily={plusJakarta}
        />
      </div>
    </AbsoluteFill>
  );
};
