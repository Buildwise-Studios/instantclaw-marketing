import React from 'react';
import { cn } from '../../../lib/utils';

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const DAYS = [
  [1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19, 20, 21],
  [22, 23, 24, 25, 26, 27, 28],
  [29, 30, 31],
];
const SELECTED = 11;

export function CalendarDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex flex-col rounded-md border border-neutral-200 bg-white p-3',
        className
      )}
    >
      <div className="mb-2 text-center text-sm font-medium text-neutral-700">
        May 2022
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs">
        {WEEKDAYS.map((d) => (
          <div key={d} className="text-neutral-500 font-medium">
            {d}
          </div>
        ))}
        {DAYS.flatMap((row) =>
          row.map((day, colIndex) => {
            const isSelected = day === SELECTED;
            return (
              <div
                key={`${row}-${colIndex}`}
                className={cn(
                  'flex h-7 w-7 items-center justify-center rounded-md',
                  isSelected
                    ? 'bg-[#D4A574] text-white'
                    : 'text-neutral-700 hover:bg-neutral-100'
                )}
              >
                {day}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
