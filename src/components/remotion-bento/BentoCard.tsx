import React, { type ReactNode } from 'react';
import { cn } from '../../lib/utils';

export type AccentColor = {
  bg: string;
};

interface BentoCardProps {
  name: string;
  className?: string;
  background: ReactNode;
  Icon: React.ElementType;
  description: string;
  accent?: AccentColor;
}

export function BentoCard({
  name,
  className,
  background,
  Icon,
  description,
  accent,
}: BentoCardProps) {
  const isColored = !!accent;
  const textColor = 'text-white';
  const textMuted = 'text-white/95';

  return (
    <div
      className={cn(
        'relative flex flex-col justify-between overflow-hidden rounded-xl',
        !isColored &&
          'bg-white [box-shadow:0_0_0_1px_rgba(197,49,49,.04),0_2px_4px_rgba(197,49,49,.06),0_12px_24px_rgba(197,49,49,.08)]',
        className
      )}
      style={isColored ? { backgroundColor: accent!.bg } : undefined}
    >
      {isColored && (
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-white/25"
          aria-hidden
        />
      )}
      <div className="relative z-10 min-h-0 flex-1 overflow-hidden">
        {background}
        {isColored && (
          <div
            className="pointer-events-none absolute inset-0 bg-black/5"
            aria-hidden
          />
        )}
      </div>
      <div className="relative z-10 p-4">
        <div className={cn('flex flex-col gap-1', textColor)}>
          <Icon className={cn('h-10 w-10', 'text-[#D4A574]')} />
          <h3 className={cn('text-lg font-semibold', isColored ? textColor : 'text-neutral-700')}>{name}</h3>
          <p className={cn('text-sm line-clamp-2', isColored ? textMuted : 'text-neutral-400')}>{description}</p>
        </div>
      </div>
    </div>
  );
}
