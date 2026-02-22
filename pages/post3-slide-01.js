import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const Post3Slide01Cover = () => {
  return (
    <div className={`${inter.className} min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-8 font-sans antialiased`}>
      {/* Warning Icon */}
      <div className="mb-8">
        <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center">
          <svg className="w-14 h-14 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
      </div>

      {/* Main Headline */}
      <div className="text-center max-w-[900px] mb-8">
        <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1D1C1D] mb-4">
          3 Reasons You
        </h1>
        <h2 className="font-sans text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto]">
          DON'T
        </h2>
        <h3 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1D1C1D] mt-4">
          Want OpenClaw<br/>on Your Machine
        </h3>
      </div>

      {/* Subtext */}
      <p className="text-2xl text-[#616061] text-center max-w-[600px]">
        The hidden costs of self-hosting your AI agent
      </p>

      {/* Preview dots for carousel */}
      <div className="mt-12 flex gap-2">
        <div className="w-3 h-3 rounded-full bg-[#1D1C1D]"></div>
        <div className="w-3 h-3 rounded-full bg-[#D4A574]"></div>
        <div className="w-3 h-3 rounded-full bg-[#D4A574]"></div>
        <div className="w-3 h-3 rounded-full bg-[#D4A574]"></div>
        <div className="w-3 h-3 rounded-full bg-[#D4A574]"></div>
        <div className="w-3 h-3 rounded-full bg-[#D4A574]"></div>
      </div>

      {/* Swipe indicator */}
      <div className="mt-8 flex items-center gap-2 text-[#616061]">
        <span className="text-sm">Swipe to see why</span>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default Post3Slide01Cover;
