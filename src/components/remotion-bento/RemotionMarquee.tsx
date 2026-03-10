import React, { type ComponentPropsWithoutRef } from 'react';
import { cn } from '../../lib/utils';

interface RemotionMarqueeProps extends ComponentPropsWithoutRef<'div'> {
  className?: string;
  reverse?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export function RemotionMarquee({
  className,
  reverse = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: RemotionMarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        'flex gap-[var(--gap)] overflow-hidden p-2 [--duration:40s] [--gap:1rem]',
        {
          'flex-row': !vertical,
          'flex-col': vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn('flex shrink-0 justify-around gap-[var(--gap)]', {
              'animate-marquee flex-row': !vertical,
              'animate-marquee-vertical flex-col': vertical,
              '[animation-direction:reverse]': reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
