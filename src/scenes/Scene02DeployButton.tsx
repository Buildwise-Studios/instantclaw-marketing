import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from 'remotion';
import { Check } from 'lucide-react';
import { MacWindow } from '../components/MacWindow';
import { ShimmerButtonStatic } from '../components/ShimmerButtonStatic';
import { GradientTextTyping } from '../components/GradientTextTyping';

const FPS = 30;
const SCENE_DURATION = 5 * FPS; // 5 seconds (3-8s in full reel)

export const Scene02DeployButton = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Button click at ~1.5s (frame 45), show "Live in 60s" at ~2.5s (frame 75)
  const clickFrame = 45;
  const liveBadgeStartFrame = 75;

  const buttonScale = spring({
    frame: frame - clickFrame,
    fps,
    config: { damping: 15, stiffness: 200 },
    durationInFrames: 10,
  });

  const isClicked = frame >= clickFrame;
  const scale = isClicked ? 1 - buttonScale * 0.1 + buttonScale * 0.05 : 1;

  const liveBadgeOpacity = spring({
    frame: frame - liveBadgeStartFrame,
    fps,
    config: { damping: 25 },
    durationInFrames: 15,
  });

  const liveBadgeScale = spring({
    frame: frame - liveBadgeStartFrame,
    fps,
    config: { damping: 20, stiffness: 150 },
    durationInFrames: 12,
  });

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
            marginBottom: 24,
            textAlign: 'center',
          }}
        >
          <GradientTextTyping
            text="Meet InstantClaw"
            startFrame={0}
            charFrames={2}
            fontSize={52}
            showCursor={true}
          />
        </div>

        <MacWindow style={{ width: '100%', maxWidth: 480 }}>
          <div
            style={{
              padding: 48,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 32,
              minHeight: 280,
            }}
          >
            {!isClicked || frame < liveBadgeStartFrame ? (
              <div
                style={{
                  transform: `scale(${scale})`,
                  transition: 'none',
                }}
              >
                <ShimmerButtonStatic className="min-w-[200px] py-4 text-lg">
                  Deploy
                </ShimmerButtonStatic>
              </div>
            ) : null}

            {frame >= liveBadgeStartFrame && (
              <div
                style={{
                  opacity: liveBadgeOpacity,
                  transform: `scale(${liveBadgeScale})`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '16px 24px',
                  borderRadius: 12,
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  border: '2px solid rgba(16, 185, 129, 0.3)',
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    backgroundColor: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Check className="w-5 h-5 text-white" strokeWidth={3} />
                </div>
                <span
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: '#047857',
                  }}
                >
                  Live in 60s
                </span>
              </div>
            )}
          </div>
        </MacWindow>
      </div>
    </AbsoluteFill>
  );
};
