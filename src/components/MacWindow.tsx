import React from 'react';

const BRAND_BG = '#F8F7F5';

type MacWindowProps = {
  children: React.ReactNode;
  tiltDeg?: number;
  transformOrigin?: string;
  className?: string;
  style?: React.CSSProperties;
  /** Use branded background (#F8F7F5) instead of white. Default: false */
  brandedBackground?: boolean;
};

export const MacWindow: React.FC<MacWindowProps> = ({
  children,
  tiltDeg = 0,
  transformOrigin = 'center center',
  className = '',
  style = {},
  brandedBackground = false,
}) => {
  const bgColor = brandedBackground ? BRAND_BG : undefined;
  return (
    <div style={{ perspective: '1200px', width: '100%', ...style }}>
      <div
        style={{
          transform: tiltDeg ? `translateZ(1px) rotateY(${tiltDeg}deg)` : undefined,
          transformOrigin,
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          backgroundColor: bgColor,
        }}
        className={`relative rounded-[24px] border border-slate-200 shadow-lg overflow-hidden ${!brandedBackground ? 'bg-white' : ''} ${className}`}
      >
        <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        {children}
      </div>
    </div>
  );
};
