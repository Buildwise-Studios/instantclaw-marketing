import React from 'react';
import { AbsoluteFill } from 'remotion';
import { RemotionTerminal } from '../components/RemotionTerminal';

export const Scene01bTerminalFullscreen = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#1e1e1e',
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 1060,
          paddingLeft: 10,
          paddingRight: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <RemotionTerminal
          className="w-full"
          fontSize={40}
          style={{
            borderRadius: 12,
            border: '1px solid #333',
            minHeight: 520,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
