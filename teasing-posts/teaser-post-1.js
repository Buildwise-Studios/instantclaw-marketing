import React from 'react';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], display: 'swap' });

// Teaser Post 1: Pure Tease - Something big is coming
const TeaserPost1 = () => {
  return (
    <div className={`${spaceGrotesk.className} min-h-screen w-full flex flex-col bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-8 font-sans antialiased relative overflow-hidden`}>
      
      {/* Background dot pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, #1D1C1D 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Main Content - Centered */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10">
        
        {/* Large text */}
        <div className="text-center">
          <h1 className="font-sans text-7xl font-black tracking-tight text-[#1D1C1D] leading-[1.1]">
            Something big
          </h1>
          <h2 className="font-sans text-8xl font-black tracking-tight bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto] mt-4">
            is coming...
          </h2>
        </div>

        {/* Hourglass icon using SVG */}
        <div className="mt-12">
          <svg className="w-24 h-24 text-[#c53131]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        {/* Subtext */}
        <p className="mt-12 text-5xl font-bold text-[#616061]">
          AI automation for everyone
        </p>
      </div>

      {/* Bottom: Follow for reveal CTA - Safe zone (200px from bottom) - 2x BIGGER */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2 text-center w-full px-8"
        style={{ bottom: '200px' }}
      >
        <p className="text-5xl font-black text-[#1D1C1D] mb-3">
          Follow for the reveal!
        </p>
        <p className="text-3xl text-[#616061] font-bold">
          3 days to go
        </p>
      </div>

      {/* Very bottom: Powered by OpenClaw - 2x BIGGER */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2 text-center"
        style={{ bottom: '60px' }}
      >
        <p className="text-2xl text-[#616061] font-bold mb-1">Powered by</p>
        <p className="text-5xl font-black text-[#1D1C1D]">OpenClaw</p>
      </div>
    </div>
  );
};

export default TeaserPost1;
