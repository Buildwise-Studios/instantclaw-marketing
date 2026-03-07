import React from 'react';
import {
  AbsoluteFill,
  useCurrentFrame,
  Video,
  staticFile,
  interpolate,
  Easing,
} from 'remotion';
import { MacWindow } from '../components/MacWindow';

const DEPLOY_VIDEO = staticFile('assets/deploy-form.mov');

export const Scene02bDeployButton = () => {
  const frame = useCurrentFrame();

  // Progressive tilt (same as DeploySteps3DTilt): 0° → 14° over first ~2s
  const tiltEndFrame = 60;
  const tiltDeg = interpolate(frame, [0, tiltEndFrame], [0, 14], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#F8F7F5',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
      }}
    >
      <div
        style={{
          transform: 'scale(1.55)',
          width: '100%',
          maxWidth: 640,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <MacWindow tiltDeg={tiltDeg} style={{ width: '100%' }}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: 520,
              overflow: 'hidden',
              background: '#fff',
            }}
          >
            <Video
              src={DEPLOY_VIDEO}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        </MacWindow>
      </div>
    </AbsoluteFill>
  );
};
