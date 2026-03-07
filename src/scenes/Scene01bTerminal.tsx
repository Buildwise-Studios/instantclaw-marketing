import React from 'react';
import { AbsoluteFill } from 'remotion';
import { RemotionTerminal } from '../components/RemotionTerminal';

const FPS = 30;
const SCENE_DURATION = 1.5 * FPS; // 1.5 seconds - terminal scroll

export const Scene01bTerminal = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#F8F7F5',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 32,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 920,
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <RemotionTerminal className="w-full" fontSize={28} />
      </div>
    </AbsoluteFill>
  );
};
