import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate } from 'remotion';
import { GradientTextTyping } from '../components/GradientTextTyping';

const FPS = 30;
const SCENE_DURATION = 5 * FPS; // 5 seconds (22-27s in full reel)

export const Scene05Timer = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = interpolate(frame, [0, SCENE_DURATION - 1], [0, 100], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const seconds = Math.min(60, Math.floor((progress / 100) * 61));
  const displayMins = Math.floor(seconds / 60);
  const displaySecs = seconds % 60;
  const timerText = `${displayMins}:${displaySecs.toString().padStart(2, '0')}`;

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
          maxWidth: 600,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 24,
          }}
        >
          <GradientTextTyping
            text="Deploy in 1 min"
            startFrame={0}
            charFrames={2}
            fontSize={48}
            showCursor={false}
          />
          <GradientTextTyping
            text="You're live"
            startFrame={45}
            charFrames={2}
            fontSize={40}
            showCursor={false}
          />
        </div>

        <div
          style={{
            width: '100%',
            maxWidth: 400,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              fontFamily: 'ui-monospace, monospace',
              textAlign: 'center',
              marginBottom: 24,
              background: 'linear-gradient(to right, #1D1C1D, #c53131, #D4A574, #1D1C1D)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {timerText}
          </div>
          <div
            style={{
              height: 12,
              borderRadius: 6,
              backgroundColor: '#e5e7eb',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${progress}%`,
                backgroundColor: '#D4A574',
                borderRadius: 6,
                transition: 'none',
              }}
            />
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
