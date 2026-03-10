import React, { type ReactNode } from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { cn } from '../../lib/utils';

const BENTO_MASK =
  '[mask-image:linear-gradient(to_top,transparent_20%,#000_100%)]';
const BENTO_ABSOLUTE = 'absolute inset-x-0 top-4';

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className, ...props }: BentoGridProps) {
  return (
    <div
      className={cn(
        'grid w-full min-w-0 auto-rows-[18rem] grid-cols-3 gap-3',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface BentoGridCardProps {
  children: ReactNode;
  index: number;
  className?: string;
  startFrame?: number;
  staggerFrames?: number;
}

export function BentoGridCard({
  children,
  index,
  className,
  startFrame = 0,
  staggerFrames = 5,
}: BentoGridCardProps) {
  const frame = useCurrentFrame();
  const cardStart = startFrame + index * staggerFrames;
  const cardFrame = frame - cardStart;

  const opacity = interpolate(
    cardFrame,
    [0, 15],
    [0, 1],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  const translateY = interpolate(
    cardFrame,
    [0, 15],
    [12, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  return (
    <div
      className={className}
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
    >
      {children}
    </div>
  );
}

export { BENTO_MASK, BENTO_ABSOLUTE };
