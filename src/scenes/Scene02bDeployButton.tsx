import React from 'react';
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  staticFile,
  interpolate,
  Easing,
} from 'remotion';
import { Video } from '@remotion/media';
import { MacWindow } from '../components/MacWindow';

const DEPLOY_VIDEO = staticFile('assets/deploy-new.mp4');

export const Scene02bDeployButton = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Deploy progress: 0 → 0.85 over ~70% of scene (stops at 85% deployed)
  const deployEndFrame = durationInFrames * 0.7;
  const deployProgress = interpolate(
    frame,
    [0, deployEndFrame],
    [0, 0.85],
    {
      easing: Easing.out(Easing.cubic),
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  // Page-flip: rotateY from 85° (edge-on) to 0° (flat), hinge on right edge
  const tiltDeg = interpolate(deployProgress, [0, 0.85], [85, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Progressive zoom: zoom in over most of scene, zoom out faster at end
  const zoomInEndFrame = durationInFrames * 0.75;
  const zoomOutStartFrame = zoomInEndFrame;
  const zoomOutEndFrame = durationInFrames;
  const zoomIn = interpolate(
    frame,
    [0, zoomInEndFrame],
    [1, 1.42],
    { easing: Easing.out(Easing.cubic), extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );
  const zoomOut = interpolate(
    frame,
    [zoomOutStartFrame, zoomOutEndFrame],
    [1.42, 1],
    { easing: Easing.in(Easing.quad), extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );
  const zoomScale = frame < zoomOutStartFrame ? zoomIn : zoomOut;

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
          transform: `scale(${1.55 * zoomScale})`,
          width: '100%',
          maxWidth: 640,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
          <MacWindow
            tiltDeg={tiltDeg}
            transformOrigin="right center"
            style={{ width: '100%', maxWidth: 640 }}
          >
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: 520,
              overflow: 'hidden',
              background: '#fff',
              paddingTop: 28,
              paddingLeft: 64,
              paddingRight: 16,
              paddingBottom: 16,
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
      </div>
    </AbsoluteFill>
  );
};
