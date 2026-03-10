import React from 'react';
import { RemotionBeam } from '../RemotionBeam';
import { cn } from '../../../lib/utils';

const CONTAINER_WIDTH = 220;
const CONTAINER_HEIGHT = 100;
const CIRCLE_SIZE = 32;
const GAP = 16;
const CENTER_Y = 50;

function Circle({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-neutral-200 bg-white text-[10px] font-medium',
        className
      )}
    >
      {children}
    </div>
  );
}

export function LeadQualificationDemo({ className }: { className?: string }) {
  const leadX = 20;
  const enrichX = 76;
  const scoreX = 132;
  const crmX = 188;

  return (
    <div
      className={cn(
        'relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg p-4',
        className
      )}
    >
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Circle className="border-[#D4A574]/40 bg-amber-50">Lead</Circle>
        <Circle className="border-neutral-200">Enrich</Circle>
        <Circle className="border-neutral-200">Score</Circle>
        <Circle className="border-neutral-200">CRM</Circle>
      </div>
      <RemotionBeam
        from={{ x: leadX, y: CENTER_Y }}
        to={{ x: enrichX, y: CENTER_Y }}
        width={CONTAINER_WIDTH}
        height={CONTAINER_HEIGHT}
        curvature={8}
        startFrame={0}
        durationFrames={25}
      />
      <RemotionBeam
        from={{ x: enrichX, y: CENTER_Y }}
        to={{ x: scoreX, y: CENTER_Y }}
        width={CONTAINER_WIDTH}
        height={CONTAINER_HEIGHT}
        curvature={8}
        startFrame={8}
        durationFrames={25}
      />
      <RemotionBeam
        from={{ x: scoreX, y: CENTER_Y }}
        to={{ x: crmX, y: CENTER_Y }}
        width={CONTAINER_WIDTH}
        height={CONTAINER_HEIGHT}
        curvature={8}
        startFrame={16}
        durationFrames={25}
      />
      <span className="absolute bottom-2 right-2 text-[10px] text-neutral-400">
        +47 today
      </span>
    </div>
  );
}
