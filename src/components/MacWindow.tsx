import React from 'react';

type MacWindowProps = {
  children: React.ReactNode;
  tiltDeg?: number;
  className?: string;
  style?: React.CSSProperties;
};

export const MacWindow: React.FC<MacWindowProps> = ({
  children,
  tiltDeg = 0,
  className = '',
  style = {},
}) => {
  return (
    <div style={{ perspective: '1200px', width: '100%', ...style }}>
      <div
        style={{
          transform: tiltDeg ? `rotateY(${tiltDeg}deg)` : undefined,
          transformStyle: 'preserve-3d',
        }}
        className={`relative rounded-[24px] bg-white border border-slate-200 shadow-lg overflow-hidden ${className}`}
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
