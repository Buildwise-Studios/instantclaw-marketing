import React from 'react';
import { RemotionBeam } from '../RemotionBeam';
import { cn } from '../../../lib/utils';

const W = 280;
const H = 180;

export function IntegrationsDemo({ className }: { className?: string }) {
  const center = { x: W / 4, y: H / 2 };
  const user = { x: 20, y: H / 2 };
  const outputs = [
    { x: W - 50, y: 40 },
    { x: W - 50, y: 90 },
    { x: W - 50, y: 140 },
  ];

  return (
    <div
      className={cn(
        'relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-white p-4',
        className
      )}
    >
      <div className="flex h-full w-full items-center justify-between gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-neutral-200 bg-neutral-100">
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 text-neutral-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-neutral-200 bg-neutral-100">
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 text-neutral-600"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        </div>
        <div className="flex flex-col gap-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-blue-200 bg-blue-50"
            />
          ))}
        </div>
      </div>
      <RemotionBeam
        from={user}
        to={center}
        width={W}
        height={H}
        curvature={0}
        startFrame={0}
        durationFrames={20}
      />
      {outputs.map((to, i) => (
        <RemotionBeam
          key={i}
          from={center}
          to={to}
          width={W}
          height={H}
          curvature={(i - 1) * 15}
          startFrame={5 + i * 5}
          durationFrames={25}
        />
      ))}
    </div>
  );
}
