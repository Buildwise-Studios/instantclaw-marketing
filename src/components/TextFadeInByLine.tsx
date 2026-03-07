import React from 'react';
import { useCurrentFrame, interpolate, Easing } from 'remotion';
import { loadFont } from '@remotion/google-fonts/SpaceGrotesk';

const { fontFamily } = loadFont('normal', { weights: ['400', '700'], subsets: ['latin'] });

const BRAND_GRADIENT =
  'linear-gradient(to right, #1D1C1D, #c53131, #D4A574, #1D1C1D)';

type TextFadeInByLineProps = {
  text: string;
  startFrame?: number;
  staggerFrames?: number;
  fadeDurationFrames?: number;
  className?: string;
  fontSize?: number;
  /** Split by newlines for multiple lines, or use a single line */
};

/**
 * Fade in by line - each line fades in with subtle slide up, staggered.
 * Gradient applied per line so it flows smoothly across the full phrase.
 * Remotion-native (frame-driven), no Framer Motion.
 */
export const TextFadeInByLine: React.FC<TextFadeInByLineProps> = ({
  text,
  startFrame = 0,
  staggerFrames = 12,
  fadeDurationFrames = 15,
  className = '',
  fontSize = 72,
}) => {
  const frame = useCurrentFrame();
  const lines = text.split('\n').filter(Boolean);

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.3em',
        fontFamily,
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
          {
            easing: Easing.out(Easing.cubic),
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }
        );

        const translateY = interpolate(
          lineFrame,
          [0, fadeDurationFrames],
          [16, 0],
          {
            easing: Easing.out(Easing.cubic),
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }
        );

        return (
          <span
            key={i}
            style={{
              display: 'block',
              opacity,
              transform: `translateY(${translateY}px)`,
              background: BRAND_GRADIENT,
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {line}
          </span>
        );
      })}
    </div>
  );
};
