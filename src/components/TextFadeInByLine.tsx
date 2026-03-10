import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { loadFont } from '@remotion/google-fonts/SpaceGrotesk';

const { fontFamily } = loadFont('normal', { weights: ['400', '700'], subsets: ['latin'] });

const BRAND_GRADIENT =
  'linear-gradient(to right, #1D1C1D, #c53131, #D4A574, #1D1C1D)';

type TextFadeInByLineProps = {
  text: string;
  startFrame?: number;
  staggerFrames?: number;
  fadeDurationFrames?: number;
  fontSize?: number;
  fontFamily?: string;
};

/**
 * Fade in text line by line with brand gradient.
 */
export const TextFadeInByLine: React.FC<TextFadeInByLineProps> = ({
  text,
  startFrame = 0,
  staggerFrames = 8,
  fadeDurationFrames = 20,
  fontSize = 88,
  fontFamily: customFontFamily,
}) => {
  const frame = useCurrentFrame();
  const lines = text.split('\n');

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
          [12, 0],
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
