import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate } from 'remotion';
import { loadFont } from '@remotion/google-fonts/SpaceGrotesk';

const { fontFamily } = loadFont('normal', { weights: ['400', '700'], subsets: ['latin'] });
const BRAND_GRADIENT = 'linear-gradient(to right, #1D1C1D, #c53131, #D4A574, #1D1C1D)';

const FPS = 30;
const SCENE_DURATION = 5 * FPS; // 5 seconds (22-27s in full reel)
const CHAR_FRAMES = 2;
const BLINK_FRAMES = 16; // cursor blink cycle
const PAUSE_AFTER_LINE1 = FPS; // 1 second pause after line 1 before erase

const LINE1 = "Deploy in 1 min";
const LINE2 = "You're live";

// Phase timing: type line1 → pause 1s → erase line1 → type line2 (all on same line)
const LINE1_TYPE_END = LINE1.length * CHAR_FRAMES;
const PAUSE_END = LINE1_TYPE_END + PAUSE_AFTER_LINE1;
const ERASE_END = PAUSE_END + LINE1.length * CHAR_FRAMES;
const LINE2_TYPE_END = ERASE_END + LINE2.length * CHAR_FRAMES;

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

  // Single-line type → pause 1s → erase → type
  let displayedText = '';
  let showCursor = false;
  if (frame < LINE1_TYPE_END) {
    const chars = Math.floor(frame / CHAR_FRAMES);
    displayedText = LINE1.slice(0, chars);
    showCursor = chars < LINE1.length;
  } else if (frame < PAUSE_END) {
    displayedText = LINE1;
    showCursor = true;
  } else if (frame < ERASE_END) {
    const eraseProgress = frame - PAUSE_END;
    const charsToRemove = Math.floor(eraseProgress / CHAR_FRAMES);
    displayedText = LINE1.slice(0, Math.max(0, LINE1.length - charsToRemove));
    showCursor = true;
  } else if (frame < LINE2_TYPE_END) {
    const typeProgress = frame - ERASE_END;
    const chars = Math.floor(typeProgress / CHAR_FRAMES);
    displayedText = LINE2.slice(0, chars);
    showCursor = chars < LINE2.length;
  } else {
    displayedText = LINE2;
  }

  const cursorOpacity = showCursor
    ? interpolate(
        frame % BLINK_FRAMES,
        [0, BLINK_FRAMES / 2, BLINK_FRAMES],
        [1, 0, 1],
        { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
      )
    : 0;

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
          transform: 'scale(1.35)',
          transformOrigin: 'center center',
        }}
      >
        <div
          style={{
            minHeight: 56,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontSize: 48,
              fontWeight: 700,
              fontFamily,
              background: BRAND_GRADIENT,
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {displayedText}
            {showCursor && (
              <span style={{ opacity: cursorOpacity }}>|</span>
            )}
          </span>
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
