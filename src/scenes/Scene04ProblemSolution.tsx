import React from 'react';
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Easing,
} from 'remotion';
import { X, Check } from 'lucide-react';
import { GradientTextTyping } from '../components/GradientTextTyping';

const FPS = 30;
const SCENE_DURATION = 7 * FPS; // 7 seconds (15-22s in full reel)
const EXIT_FRAMES = 18; // fade out at scene end

// Warm-gold brand colors
const WARM_GOLD_DARK = '#b8864a';

const LEFT_LIST_ITEMS = ['SSH keys', 'Server config', 'Dependencies'];

export const Scene04ProblemSolution = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Exit animation: fade out in last EXIT_FRAMES
  const exitStartFrame = durationInFrames - EXIT_FRAMES;
  const exitOpacity = interpolate(
    frame,
    [exitStartFrame, durationInFrames],
    [1, 0],
    { easing: Easing.in(Easing.cubic), extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  // Wipe: left-to-right reveal of solution (frames 50-110)
  const wipeStartFrame = 50;
  const wipeEndFrame = 110;
  const wipeProgress = interpolate(
    frame,
    [wipeStartFrame, wipeEndFrame],
    [0, 1],
    { easing: Easing.out(Easing.cubic), extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );
  const wipeClipRight = 100 - wipeProgress * 100; // 100% -> 0% (reveal from left)

  // Problem side: full-screen first, staggered fade-in
  const problemIconOpacity = interpolate(frame, [0, 18], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const problemIconScale = interpolate(frame, [0, 18], [0.8, 1], {
    easing: Easing.out(Easing.back(1.2)),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const problemHeadingOpacity = interpolate(frame, [8, 25], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const problemListOpacity = interpolate(frame, [15, 35], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Solution side: staggers in as wipe reveals (offset by wipe start)
  const solutionBaseFrame = frame - wipeStartFrame;
  const solutionIconOpacity = interpolate(solutionBaseFrame, [20, 38], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const solutionIconScale = interpolate(solutionBaseFrame, [20, 38], [0.8, 1], {
    easing: Easing.out(Easing.back(1.2)),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const solutionHeadingOpacity = interpolate(solutionBaseFrame, [28, 45], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const solutionBodyOpacity = interpolate(solutionBaseFrame, [35, 53], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#F8F7F5',
        opacity: exitOpacity,
      }}
    >
      {/* Phase 1: Problem full-screen */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 48,
          backgroundColor: 'rgba(229, 115, 115, 0.08)',
        }}
      >
        <div style={{ textAlign: 'center' }}>
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
              opacity: problemIconOpacity,
              transform: `scale(${problemIconScale})`,
            }}
          >
            <X size={36} color="#c53030" strokeWidth={3} />
          </div>
          <div
            style={{
              fontSize: 18,
              color: '#7f1d1d',
              marginBottom: 12,
              fontWeight: 600,
              opacity: problemHeadingOpacity,
            }}
          >
            Servers, SSH, Config
          </div>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 20px',
              fontSize: 14,
              color: '#991b1b',
              opacity: problemListOpacity,
              textAlign: 'left',
              maxWidth: 280,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            {LEFT_LIST_ITEMS.map((item) => (
              <li
                key={item}
                style={{
                  marginBottom: 6,
                  paddingLeft: 20,
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    color: 'rgba(229, 115, 115, 0.8)',
                  }}
                >
                  •
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div style={{ opacity: problemListOpacity }}>
            <GradientTextTyping
              text="Complicated to install & host"
              startFrame={45}
              charFrames={2}
              fontSize={32}
              showCursor={false}
            />
          </div>
        </div>
      </div>

      {/* Wipe edge line - vertical line at the reveal boundary */}
      {wipeProgress > 0 && wipeProgress < 1 && (
        <div
          style={{
            position: 'absolute',
            left: `${wipeProgress * 100}%`,
            top: 0,
            bottom: 0,
            width: 2,
            backgroundColor: 'rgba(212, 165, 116, 0.4)',
            zIndex: 10,
            transform: 'translateX(-1px)',
          }}
        />
      )}

      {/* Wipe edge line - subtle vertical line at the reveal boundary */}
      {wipeProgress > 0 && wipeProgress < 1 && (
        <div
          style={{
            position: 'absolute',
            left: `${wipeProgress * 100}%`,
            top: 0,
            bottom: 0,
            width: 2,
            backgroundColor: 'rgba(212, 165, 116, 0.4)',
            zIndex: 10,
          }}
        />
      )}

      {/* Wipe edge line - visible during wipe for "page turn" feel */}
      {wipeProgress > 0 && wipeProgress < 1 && (
        <div
          style={{
            position: 'absolute',
            left: `${wipeProgress * 100}%`,
            top: 0,
            bottom: 0,
            width: 2,
            backgroundColor: 'rgba(212, 165, 116, 0.6)',
            zIndex: 10,
          }}
        />
      )}

      {/* Wipe edge line - visible during wipe */}
      {wipeProgress > 0 && wipeProgress < 1 && (
        <div
          style={{
            position: 'absolute',
            left: `${wipeProgress * 100}%`,
            top: 0,
            bottom: 0,
            width: 2,
            backgroundColor: 'rgba(212, 165, 116, 0.6)',
            zIndex: 10,
          }}
        />
      )}

      {/* Phase 2: Solution wipes in from left (on top of problem) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          clipPath: `inset(0 ${wipeClipRight}% 0 0)`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 48,
          backgroundColor: 'rgba(212, 165, 116, 0.15)',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              backgroundColor: 'rgba(212, 165, 116, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
              opacity: solutionIconOpacity,
              transform: `scale(${solutionIconScale})`,
            }}
          >
            <Check size={36} color={WARM_GOLD_DARK} strokeWidth={3} />
          </div>
          <div
            style={{
              fontSize: 18,
              color: WARM_GOLD_DARK,
              marginBottom: 16,
              fontWeight: 600,
              opacity: solutionHeadingOpacity,
            }}
          >
            1-click deploy
          </div>
          <div style={{ opacity: solutionBodyOpacity }}>
            <GradientTextTyping
              text="We handle it"
              startFrame={wipeStartFrame + 55}
              charFrames={2}
              fontSize={32}
              showCursor={false}
            />
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
