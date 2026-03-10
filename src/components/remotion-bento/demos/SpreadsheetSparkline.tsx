import React from 'react';
import { cn } from '../../../lib/utils';

const values = [30, 45, 38, 52, 48, 65, 58, 72, 68, 55] as const;

export function SpreadsheetSparkline({ className }: { className?: string }) {
  const max = Math.max(...values);
  return (
    <div className={cn('flex flex-col gap-2 p-4', className)}>
      <div className="rounded-lg bg-white/35 p-3">
        <div className="flex items-end gap-1 h-16">
          {values.map((v, i) => (
            <div
              key={i}
              className="flex-1 min-w-[4px] rounded-sm bg-white ring-1 ring-neutral-200/80"
              style={{ height: `${(v / max) * 100}%` }}
            />
          ))}
        </div>
        <p className="mt-2 text-xs font-medium text-neutral-700">+24% vs last week</p>
      </div>
    </div>
  );
}
