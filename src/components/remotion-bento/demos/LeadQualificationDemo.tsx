import React from 'react';
import { RemotionBeam } from '../RemotionBeam';
import { cn } from '../../../lib/utils';

const CONTAINER_WIDTH = 420;
const CONTAINER_HEIGHT = 200;
const CIRCLE_SIZE = 64;
const GAP = 32;
const CENTER_Y = 100;

// Circle centers: 4 circles in a row, centered in container
// Total width: 4*64 + 3*32 = 352, offset = (420-352)/2 = 34
const leadX = 34 + CIRCLE_SIZE / 2;
const enrichX = 34 + CIRCLE_SIZE + GAP + CIRCLE_SIZE / 2;
const scoreX = 34 + 2 * (CIRCLE_SIZE + GAP) + CIRCLE_SIZE / 2;
const crmX = 34 + 3 * (CIRCLE_SIZE + GAP) + CIRCLE_SIZE / 2;

function Circle({
  className,
  children,
  style,
}: {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={cn(
        'flex shrink-0 items-center justify-center rounded-full border-2 border-neutral-200 bg-white text-base font-medium',
        className
      )}
      style={{ ...style, width: CIRCLE_SIZE, height: CIRCLE_SIZE }}
    >
      {children}
    </div>
  );
}

export function LeadQualificationDemo({ className }: { className?: string }) {
  const circleTop = CENTER_Y - CIRCLE_SIZE / 2;

  return (
    <div
      className={cn(
        'relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg p-4',
        className
      )}
    >
      <div
        style={{
          position: 'relative',
          width: CONTAINER_WIDTH,
          height: CONTAINER_HEIGHT,
        }}
      >
        <Circle
          className="border-[#D4A574]/40 bg-amber-50"
          style={{ position: 'absolute', left: leadX - CIRCLE_SIZE / 2, top: circleTop }}
        >
          Lead
        </Circle>
        <Circle
          className="border-neutral-200"
          style={{ position: 'absolute', left: enrichX - CIRCLE_SIZE / 2, top: circleTop }}
        >
          Enrich
        </Circle>
        <Circle
          className="border-neutral-200"
          style={{ position: 'absolute', left: scoreX - CIRCLE_SIZE / 2, top: circleTop }}
        >
          Score
        </Circle>
        <Circle
          className="border-neutral-200"
          style={{ position: 'absolute', left: crmX - CIRCLE_SIZE / 2, top: circleTop }}
        >
          CRM
        </Circle>
        <RemotionBeam
          from={{ x: leadX, y: CENTER_Y }}
          to={{ x: enrichX, y: CENTER_Y }}
          width={CONTAINER_WIDTH}
          height={CONTAINER_HEIGHT}
          curvature={16}
          strokeWidth={4}
          startFrame={0}
          durationFrames={25}
        />
        <RemotionBeam
          from={{ x: enrichX, y: CENTER_Y }}
          to={{ x: scoreX, y: CENTER_Y }}
          width={CONTAINER_WIDTH}
          height={CONTAINER_HEIGHT}
          curvature={16}
          strokeWidth={4}
          startFrame={8}
          durationFrames={25}
        />
        <RemotionBeam
          from={{ x: scoreX, y: CENTER_Y }}
          to={{ x: crmX, y: CENTER_Y }}
          width={CONTAINER_WIDTH}
          height={CONTAINER_HEIGHT}
          curvature={16}
          strokeWidth={4}
          startFrame={16}
          durationFrames={25}
        />
      </div>
      <span className="absolute bottom-2 right-2 text-sm text-neutral-400">
        +47 today
      </span>
    </div>
  );
}
