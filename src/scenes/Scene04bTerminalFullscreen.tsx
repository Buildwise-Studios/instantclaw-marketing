import React from 'react';
import { AbsoluteFill } from 'remotion';
import { RemotionTerminal } from '../components/RemotionTerminal';

const PREFIX_LINES = [{ text: '# Complicated to install & host', color: '#febc2e' }];

export const Scene04bTerminalFullscreen = () => {
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
          maxWidth: 1040,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <RemotionTerminal
          className="w-full"
          fontSize={44}
          prefixLines={PREFIX_LINES}
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
