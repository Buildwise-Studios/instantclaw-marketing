import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { loadFont } from '@remotion/google-fonts/SpaceGrotesk';

const { fontFamily } = loadFont('normal', { weights: ['400', '700'], subsets: ['latin'] });

const BRAND_GRADIENT =
  'linear-gradient(to right, #1D1C1D, #c53131, #D4A574, #1D1C1D)';

type GradientTextTypingProps = {
  text: string;
  startFrame: number;
  charFrames?: number;
  className?: string;
  fontSize?: number;
  showCursor?: boolean;
  blinkFrames?: number;
  fontFamily?: string;
};

export const GradientTextTyping: React.FC<GradientTextTypingProps> = ({
  text,
  startFrame,
  charFrames = 2,
  className = '',
  fontSize = 48,
  showCursor = true,
  blinkFrames = 16,
  fontFamily: customFontFamily,
}) => {
  const frame = useCurrentFrame();

  const charsToShow = Math.max(
    0,
    Math.min(text.length, Math.floor((frame - startFrame) / charFrames))
  );
  const displayedText = text.slice(0, charsToShow);

  const cursorOpacity =
    showCursor && charsToShow < text.length
      ? interpolate(
          frame % blinkFrames,
          [0, blinkFrames / 2, blinkFrames],
          [1, 0, 1],
          { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
        )
      : 0;

  return (
    <span
      className={className}
      style={{
        fontSize,
        fontWeight: 700,
        fontFamily: customFontFamily ?? fontFamily,
        background: BRAND_GRADIENT,
        backgroundSize: '200% auto',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {displayedText}
      {showCursor && charsToShow < text.length && (
        <span style={{ opacity: cursorOpacity }}>|</span>
      )}
    </span>
  );
};
