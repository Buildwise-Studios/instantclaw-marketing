import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { loadFont } from '@remotion/google-fonts/SpaceGrotesk';

const { fontFamily } = loadFont('normal', { weights: ['400', '700'], subsets: ['latin'] });

const BRAND_GRADIENT =
  'linear-gradient(to right, #1D1C1D, #c53131, #D4A574, #1D1C1D)';

const SHIFT_PER_LINE = 36;
const SHIFT_DURATION = 12;

type TextStackAccumulateProps = {
  text: string;
  startFrame?: number;
  staggerFrames?: number;
  fadeDurationFrames?: number;
  fontSize?: number;
  fontFamily?: string;
};

/**
 * Text lines appear one by one and stack. Each new line pushes the stack upward.
 */
export const TextStackAccumulate: React.FC<TextStackAccumulateProps> = ({
  text,
  startFrame = 0,
  staggerFrames = 12,
  fadeDurationFrames = 20,
  fontSize = 88,
  fontFamily: customFontFamily,
}) => {
  const frame = useCurrentFrame();
  const lines = text.split('\n');

  // Container shifts up as each new line appears (pushes stack upward)
  let containerOffset = 0;
  for (let j = 1; j < lines.length; j++) {
    const shiftStart = startFrame + j * staggerFrames;
    containerOffset += interpolate(
      frame,
      [shiftStart, shiftStart + SHIFT_DURATION],
      [0, -SHIFT_PER_LINE],
      { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.2em',
        fontFamily: customFontFamily ?? fontFamily,
        fontWeight: 700,
        fontSize,
        lineHeight: 1.2,
        textAlign: 'center',
        transform: `translateY(${containerOffset}px)`,
      }}
    >
      {lines.map((line, i) => {
        const lineStartFrame = startFrame + i * staggerFrames;
        const lineFrame = frame - lineStartFrame;

        const opacity = interpolate(
          lineFrame,
          [0, fadeDurationFrames],
          [0, 1],
          { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
        );

        const translateY = interpolate(
          lineFrame,
          [0, fadeDurationFrames],
          [24, 0],
          { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
        );

        return (
          <span
            key={i}
            style={{
              opacity,
              transform: `translateY(${translateY}px)`,
              background: BRAND_GRADIENT,
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {line || '\u00A0'}
          </span>
        );
      })}
    </div>
  );
};
