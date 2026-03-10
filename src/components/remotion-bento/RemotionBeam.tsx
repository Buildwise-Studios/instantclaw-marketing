import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';

export interface RemotionBeamProps {
  from: { x: number; y: number };
  to: { x: number; y: number };
  width?: number;
  height?: number;
  curvature?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  startFrame?: number;
  durationFrames?: number;
  className?: string;
}

export const RemotionBeam: React.FC<RemotionBeamProps> = ({
  from,
  to,
  width = 200,
  height = 100,
  curvature = 20,
  gradientStartColor = '#D4A574',
  gradientStopColor = '#c53131',
  startFrame = 0,
  durationFrames = 30,
  className,
}) => {
  const frame = useCurrentFrame();
  const controlY = Math.min(from.y, to.y) - curvature;

  const pathD = `M ${from.x},${from.y} Q ${(from.x + to.x) / 2},${controlY} ${to.x},${to.y}`;

  const opacity = interpolate(
    frame,
    [startFrame, startFrame + durationFrames],
    [0, 1],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  const id = React.useId().replace(/:/g, '-');

  return (
    <svg
      fill="none"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        opacity,
      }}
      viewBox={`0 0 ${width} ${height}`}
    >
      <defs>
        <linearGradient
          id={id}
          gradientUnits="userSpaceOnUse"
          x1={from.x}
          y1={from.y}
          x2={to.x}
          y2={to.y}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop stopColor={gradientStartColor} />
          <stop offset="32.5%" stopColor={gradientStopColor} />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d={pathD}
        stroke="rgba(128,128,128,0.2)"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d={pathD}
        stroke={`url(#${id})`}
        strokeWidth={2}
        strokeOpacity={1}
        strokeLinecap="round"
      />
    </svg>
  );
};
