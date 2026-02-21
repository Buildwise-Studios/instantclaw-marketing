import React from 'react';

const Slide2Comparison = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-8 font-sans antialiased">
      {/* Title */}
      <div className="text-center mb-12 px-4">
        <h1 className="font-sans text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.15] bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length-200%_auto]">
          5 Days vs 1 Minute
        </h1>
      </div>

      {/* Horizontal Layout */}
      <div className="flex flex-row items-center justify-center gap-8 max-w-[1000px] w-full">
        {/* WITHOUT - Left */}
        <div className="flex-1 text-center">
          <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6">
            <span className="text-red-500 text-4xl font-bold">✕</span>
          </div>
          <p className="text-sm text-red-500 font-semibold uppercase tracking-wide mb-2">Without InstantClaw</p>
          <p className="text-5xl md:text-6xl text-[#1D1C1D] font-bold">
            <span className="text-red-500">5 Days</span>
          </p>
          <p className="text-xl text-[#616061] mt-2">setup time</p>
        </div>

        {/* Divider - Vertical */}
        <div className="w-px h-40 bg-[#D4A574]/40"></div>

        {/* WITH - Right */}
        <div className="flex-1 text-center">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <span className="text-green-600 text-4xl font-bold">✓</span>
          </div>
          <p className="text-sm text-green-600 font-semibold uppercase tracking-wide mb-2">With InstantClaw</p>
          <p className="text-5xl md:text-6xl text-[#1D1C1D] font-bold">
            <span className="text-green-600">1 Minute</span>
          </p>
          <p className="text-xl text-[#616061] mt-2">deployment</p>
        </div>
      </div>

      {/* Swipe indicator for carousel */}
      <div className="mt-16 flex items-center gap-2 text-[#616061]">
        <span className="text-sm">Swipe for more</span>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default function Home() {
  return <Slide2Comparison />;
}
