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

const BENTO_VIDEO = staticFile('assets/bento5s.mp4');

export const Scene03bBento = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Simpler, subtler tilt: -20° → 0° (right edge tilted toward viewer, hinge on left; negated to flip)
  const tiltEndFrame = durationInFrames * 0.6;
  const tiltDeg = interpolate(
    frame,
    [0, tiltEndFrame],
    [-20, 0],
    {
      easing: Easing.out(Easing.cubic),
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  // Mild zoom: 1 → 1.15 over scene (less movement)
  const zoomScale = interpolate(
    frame,
    [0, durationInFrames * 0.8],
    [1, 1.15],
    { easing: Easing.out(Easing.cubic), extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

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
            transformOrigin="left center"
            brandedBackground
            style={{ width: '100%', maxWidth: 640 }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                paddingTop: 40,
                height: 480,
                overflow: 'hidden',
                background: '#F8F7F5',
              }}
            >
              <Video
                src={BENTO_VIDEO}
                playbackRate={1.25}
                muted
                style={{
                  width: 'calc(100% + 0.5px)',
                  height: '100%',
                  marginLeft: -0.5,
                  objectFit: 'cover',
                  backgroundColor: '#F8F7F5',
                }}
              />
            </div>
          </MacWindow>
        </div>
      </div>
    </AbsoluteFill>
  );
};
