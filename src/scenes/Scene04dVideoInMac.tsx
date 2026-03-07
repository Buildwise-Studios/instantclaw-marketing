import React from 'react';
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  Video,
  staticFile,
  interpolate,
  Easing,
} from 'remotion';
import { MacWindow } from '../components/MacWindow';

const SCENE_VIDEO = staticFile('assets/Deployment.mp4');

export const Scene04dVideoInMac = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Progressive tilt (same as Scene02b): 0° → 14° over first ~2s
  const tiltEndFrame = 60;
  const tiltDeg = interpolate(frame, [0, tiltEndFrame], [0, 14], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Progressive zoom: zoom in over most of scene, zoom out faster at end
  const zoomInEndFrame = durationInFrames * 0.75; // ~75% zooming in
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
            {/* Replace SCENE_VIDEO with your video path when ready */}
            <Video
              src={SCENE_VIDEO}
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
