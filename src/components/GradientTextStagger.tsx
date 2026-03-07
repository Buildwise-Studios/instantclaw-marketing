import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { loadFont } from '@remotion/google-fonts/SpaceGrotesk';

const { fontFamily } = loadFont('normal', { weights: ['400', '700'], subsets: ['latin'] });

const BRAND_GRADIENT =
  'linear-gradient(to right, #1D1C1D, #c53131, #D4A574, #1D1C1D)';

type GradientTextStaggerProps = {
  text: string;
  startFrame?: number;
  staggerFrames?: number;
  className?: string;
  fontSize?: number;
};

/**
 * Letter stagger fade-up: each character fades in and slides up with a short stagger.
 * Modern, smooth alternative to typing animation.
 */
export const GradientTextStagger: React.FC<GradientTextStaggerProps> = ({
  text,
  startFrame = 0,
  staggerFrames = 3,
  className = '',
  fontSize = 72,
}) => {
  const frame = useCurrentFrame();

  const chars = text.split('');

  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '0.05em',
        fontFamily,
        fontWeight: 700,
        fontSize,
        lineHeight: 1.2,
      }}
    >
      {chars.map((char, i) => {
        const charStartFrame = startFrame + i * staggerFrames;
        const charFrame = frame - charStartFrame;

        const opacity = interpolate(charFrame, [0, 8], [0, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
        });

        const translateY = interpolate(charFrame, [0, 8], [12, 0], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
        });

        return (
          <span
            key={i}
            style={{
              display: 'inline-block',
              opacity,
              transform: `translateY(${translateY}px)`,
              background: BRAND_GRADIENT,
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        );
      })}
    </span>
  );
};
