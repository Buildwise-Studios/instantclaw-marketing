import React from 'react';
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Easing,
} from 'remotion';
import { RemotionTerminal } from '../components/RemotionTerminal';

const EXIT_FRAMES = 15;

// Sliding wipe: terminal gets "erased" (clipped) left-to-right
// Wipe runs frames 15-45 (1 second) - faster than before
const WIPE_START = 15;
const WIPE_END = 45;

export const Scene04bTerminalToDeploy = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Wipe progress: 0 = all terminal, 1 = terminal fully erased (cream background)
  const wipeProgress = interpolate(
    frame,
    [WIPE_START, WIPE_END],
    [0, 1],
    { easing: Easing.out(Easing.cubic), extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  // Terminal: visible only on the right portion (gets "erased" from left as wipe moves)
  const terminalClipLeft = wipeProgress * 100;
  const terminalClipPath = `inset(0 0 0 ${terminalClipLeft}%)`;

  // Exit fade
  const exitStartFrame = durationInFrames - EXIT_FRAMES;
  const exitOpacity = interpolate(
    frame,
    [exitStartFrame, durationInFrames],
    [1, 0],
    { easing: Easing.in(Easing.cubic), extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#F8F7F5',
        opacity: exitOpacity,
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 32,
        }}
      >
        {/* Terminal - clipped from left as wipe progresses (gets "erased") */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 32,
            clipPath: terminalClipPath,
          }}
        >
          <div style={{ width: '100%', maxWidth: 920, flex: 1 }}>
            <RemotionTerminal className="w-full" fontSize={28} />
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
