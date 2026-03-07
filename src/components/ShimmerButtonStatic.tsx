import React from 'react';

type ShimmerButtonStaticProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const ShimmerButtonStatic: React.FC<ShimmerButtonStaticProps> = ({
  children,
  className = '',
  style = {},
}) => {
  return (
    <div
      className={`flex items-center justify-center rounded-full border border-white/20 px-6 py-3 font-medium text-dark-text ${className}`}
      style={{
        backgroundColor: 'rgba(212, 165, 116, 1)',
        boxShadow: 'inset 0 -8px 10px rgba(255,255,255,0.12)',
        ...style,
      }}
    >
      {children}
    </div>
  );
};
