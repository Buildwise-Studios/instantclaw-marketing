import React from 'react';
import { cn } from '../../../lib/utils';

const bullets = [
  'Action items: 3',
  'Decisions: 2',
  'Follow-ups: 5',
];

export function MeetingNotesDemo({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-col gap-2 p-4', className)}>
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
        <span className="text-xs text-neutral-600 font-mono">Recording...</span>
      </div>
      <ul className="space-y-1.5 text-sm text-neutral-700">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[#D4A574]" />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
