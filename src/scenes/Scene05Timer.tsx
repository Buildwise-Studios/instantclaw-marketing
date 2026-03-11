import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';
import { loadFont } from '@remotion/google-fonts/PlusJakartaSans';

const { fontFamily } = loadFont('normal', { weights: ['400', '700'], subsets: ['latin'] });
const BRAND_GRADIENT = 'linear-gradient(to right, #1D1C1D, #c53131, #D4A574, #1D1C1D)';

const CHAR_FRAMES = 2;
const BLINK_FRAMES = 16;
const PAUSE_AFTER_LINE1 = 30; // 1 second at 30fps

const LINE1 = "Install in 1min";
const LINE2 = "You're live";

const LINE1_TYPE_END = LINE1.length * CHAR_FRAMES;
const PAUSE_END = LINE1_TYPE_END + PAUSE_AFTER_LINE1;
const ERASE_END = PAUSE_END + LINE1.length * CHAR_FRAMES;
const LINE2_TYPE_END = ERASE_END + LINE2.length * CHAR_FRAMES;

const FONT_SIZE = 88;

export const Scene05Timer = () => {
  const frame = useCurrentFrame();

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
          maxWidth: '95%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontSize: FONT_SIZE,
            fontWeight: 700,
            fontFamily,
            lineHeight: 1.2,
            textAlign: 'center',
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
    </AbsoluteFill>
  );
};
