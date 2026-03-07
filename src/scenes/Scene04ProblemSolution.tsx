import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';
import { X, Check } from 'lucide-react';
import { GradientTextTyping } from '../components/GradientTextTyping';

const FPS = 30;
const SCENE_DURATION = 7 * FPS; // 7 seconds (15-22s in full reel)

export const Scene04ProblemSolution = () => {
  const frame = useCurrentFrame();

  const leftOpacity = interpolate(frame, [0, 25], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const rightOpacity = interpolate(frame, [30, 55], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#F8F7F5',
        flexDirection: 'row',
        padding: 0,
      }}
    >
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 48,
          backgroundColor: 'rgba(229, 115, 115, 0.08)',
          borderRight: '2px solid rgba(229, 115, 115, 0.3)',
        }}
      >
        <div style={{ opacity: leftOpacity, textAlign: 'center' }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              backgroundColor: 'rgba(229, 115, 115, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
            }}
          >
            <X size={36} color="#c53030" strokeWidth={3} />
          </div>
          <div
            style={{
              fontSize: 18,
              color: '#7f1d1d',
              marginBottom: 16,
              fontWeight: 600,
            }}
          >
            Servers, SSH, Config
          </div>
          <GradientTextTyping
            text="Complicated to install & host"
            startFrame={60}
            charFrames={2}
            fontSize={32}
            showCursor={false}
          />
        </div>
      </div>

      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 48,
          backgroundColor: 'rgba(212, 165, 116, 0.08)',
          borderLeft: '2px solid rgba(212, 165, 116, 0.4)',
        }}
      >
        <div style={{ opacity: rightOpacity, textAlign: 'center' }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              backgroundColor: 'rgba(16, 185, 129, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
            }}
          >
            <Check size={36} color="#047857" strokeWidth={3} />
          </div>
          <div
            style={{
              fontSize: 18,
              color: '#047857',
              marginBottom: 16,
              fontWeight: 600,
            }}
          >
            1-click deploy
          </div>
          <GradientTextTyping
            text="We handle it"
            startFrame={100}
            charFrames={2}
            fontSize={32}
            showCursor={false}
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};
