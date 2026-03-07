import React from 'react';
import { useCurrentFrame, useVideoConfig, Img, staticFile } from 'remotion';

const ORBIT_RADIUS = 140;
const ICON_SIZE = 36;

type RemotionOrbitingCirclesProps = {
  centerElement: React.ReactNode;
  orbitIcons: React.ReactNode[];
  radius?: number;
  iconSize?: number;
  durationSeconds?: number;
  reverse?: boolean;
  className?: string;
};

export const RemotionOrbitingCircles: React.FC<RemotionOrbitingCirclesProps> = ({
  centerElement,
  orbitIcons,
  radius = ORBIT_RADIUS,
  iconSize = ICON_SIZE,
  durationSeconds = 20,
  reverse = false,
  className = '',
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const totalFrames = durationSeconds * fps;
  const rotationDeg = ((frame / totalFrames) * 360 * (reverse ? -1 : 1)) % 360;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ width: radius * 2 + iconSize * 2, height: radius * 2 + iconSize * 2 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          fill="none"
          stroke="rgba(0,0,0,0.08)"
          strokeWidth={1}
        />
      </svg>
      {orbitIcons.map((icon, index) => {
        const angle = (360 / orbitIcons.length) * index + rotationDeg;
        const rad = (angle * Math.PI) / 180;
        const x = 50 + (radius / (radius + iconSize)) * Math.sin(rad) * 50;
        const y = 50 - (radius / (radius + iconSize)) * Math.cos(rad) * 50;

        return (
          <div
            key={index}
            style={{
              position: 'absolute',
              left: `${x}%`,
              top: `${y}%`,
              transform: 'translate(-50%, -50%)',
              width: iconSize,
              height: iconSize,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              backgroundColor: 'white',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            {icon}
          </div>
        );
      })}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
        }}
      >
        {centerElement}
      </div>
    </div>
  );
};
