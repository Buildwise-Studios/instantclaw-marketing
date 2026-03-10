import React from 'react';
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Easing,
} from 'remotion';
import { RemotionBentoGrid } from '../components/remotion-bento';

export const Scene03bBento = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const zoomScale = interpolate(
    frame,
    [0, durationInFrames],
    [3.5, 1.0],
    { easing: Easing.out(Easing.cubic), extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#F8F7F5',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          transform: `scale(${zoomScale})`,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <RemotionBentoGrid colored />
      </div>
    </AbsoluteFill>
  );
};
