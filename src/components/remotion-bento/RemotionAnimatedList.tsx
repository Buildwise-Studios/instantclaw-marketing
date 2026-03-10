import React, { type ComponentPropsWithoutRef } from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { cn } from '../../lib/utils';

export interface RemotionAnimatedListProps extends ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
  startFrame?: number;
  staggerFrames?: number;
  fadeDurationFrames?: number;
}

export const RemotionAnimatedList: React.FC<RemotionAnimatedListProps> = ({
  children,
  className,
  startFrame = 0,
  staggerFrames = 15,
  fadeDurationFrames = 12,
  ...props
}) => {
  const frame = useCurrentFrame();
  const childrenArray = React.Children.toArray(children);

  const visibleCount = Math.min(
    childrenArray.length,
    Math.max(0, Math.floor((frame - startFrame) / staggerFrames) + 1)
  );
  const itemsToShow = childrenArray.slice(0, visibleCount).reverse();

  return (
    <div
      className={cn('flex flex-col items-center gap-4', className)}
      {...props}
    >
      {itemsToShow.map((item, reversedIndex) => {
        const originalIndex = visibleCount - 1 - reversedIndex;
        const lineStartFrame = startFrame + originalIndex * staggerFrames;
        const lineFrame = frame - lineStartFrame;

        const opacity = interpolate(
          lineFrame,
          [0, fadeDurationFrames],
          [0, 1],
          { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
        );

        const scale = interpolate(
          lineFrame,
          [0, fadeDurationFrames],
          [0.8, 1],
          { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
        );

        return (
          <div
            key={(item as React.ReactElement).key ?? originalIndex}
            style={{
              opacity,
              transform: `scale(${scale})`,
              transformOrigin: 'top center',
              width: '100%',
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};
