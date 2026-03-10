import React, { type ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface BentoCardProps {
  name: string;
  className?: string;
  background: ReactNode;
  Icon: React.ElementType;
  description: string;
}

export function BentoCard({
  name,
  className,
  background,
  Icon,
  description,
}: BentoCardProps) {
  return (
    <div
      className={cn(
        'relative flex flex-col justify-between overflow-hidden rounded-xl',
        'bg-white [box-shadow:0_0_0_1px_rgba(197,49,49,.04),0_2px_4px_rgba(197,49,49,.06),0_12px_24px_rgba(197,49,49,.08)]',
        className
      )}
    >
      <div className="min-h-0 flex-1 overflow-hidden">{background}</div>
      <div className="p-4">
        <div className="flex flex-col gap-1">
          <Icon className="h-10 w-10 text-[#D4A574]" />
          <h3 className="text-lg font-semibold text-neutral-700">{name}</h3>
          <p className="text-sm text-neutral-400 line-clamp-2">{description}</p>
        </div>
      </div>
    </div>
  );
}
