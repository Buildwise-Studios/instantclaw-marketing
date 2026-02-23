import React from 'react';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], display: 'swap' });

// Slide 2: VPS vs InstantClaw - Asymmetrical Layout
const Slide02VPS = () => {
  return (
    <div className={`${spaceGrotesk.className} min-h-screen w-full flex flex-col bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] px-6 font-sans antialiased`}>
      
      {/* TOP: Headline centered vertically in the space above the cards */}
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="font-sans text-6xl font-black tracking-tight text-[#1D1C1D] leading-[1.1]">
          Self-Hosting<br/>
          <span className="bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto]">OpenClaw</span> vs InstantClaw
        </h1>
        <p className="text-2xl text-[#616061] mt-2">Why spend days when you can deploy in seconds?</p>
      </div>

      {/* CENTER: Cards at natural height — centered on page by equal flex-1 above and below */}
      <div className="flex items-center gap-6">
        {/* VPS - Left Side (Faded, smaller) */}
        <div className="w-[45%] bg-white/50 backdrop-blur-sm rounded-2xl p-5 border border-red-200/50 opacity-70">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-xl bg-gray-200 flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="8" rx="2"/>
                <rect x="2" y="14" width="20" height="8" rx="2"/>
                <path d="M6 6h.01"/>
                <path d="M6 18h.01"/>
                <path d="M10 6h.01"/>
                <path d="M10 18h.01"/>
              </svg>
            </div>
            <div>
              <span className="text-xl font-bold text-gray-500">VPS</span>
              <p className="text-sm text-gray-400">Self-hosted</p>
            </div>
          </div>
          
          <div className="text-center py-3 bg-red-50 rounded-xl mb-4">
            <span className="text-4xl font-black text-red-500">5 Days</span>
            <p className="text-sm text-red-400 font-medium">setup time</p>
          </div>
          
          <div className="space-y-2 text-gray-500">
            <div className="flex items-start gap-2">
              <span className="text-red-400 text-lg">✗</span>
              <span className="text-base">Not secure by default</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-400 text-lg">✗</span>
              <span className="text-base">No support when things break</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-400 text-lg">✗</span>
              <span className="text-base">Manual updates and maintenance</span>
            </div>
          </div>
        </div>

        {/* VS Badge - Center with Pure Gold Gradient */}
        <div className="flex flex-col items-center justify-center z-10">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#D4A574] via-[#E5C595] to-[#C49464] flex items-center justify-center shadow-xl" style={{ boxShadow: '0 8px 30px rgba(212, 165, 116, 0.35)' }}>
            <span className="text-white font-black text-2xl">VS</span>
          </div>
        </div>

        {/* InstantClaw - Right Side (Dominant) */}
        <div className="w-[45%] bg-white rounded-2xl p-6 border-2 border-[#D4A574] shadow-xl" style={{ boxShadow: '0 15px 40px -10px rgba(197, 49, 49, 0.15)' }}>
          <div className="flex items-center gap-3 mb-4">
            <img 
              src="/instantclaw-logo.png" 
              alt="InstantClaw" 
              className="h-16 w-16"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div>
              <span className="text-2xl font-bold text-[#1D1C1D]">InstantClaw</span>
              <p className="text-sm text-[#616061]">Powered by OpenClaw</p>
            </div>
          </div>
          
          <div className="text-center py-4 bg-gradient-to-r from-[#D4A574]/20 to-[#c53131]/10 rounded-xl border border-[#D4A574]/30">
            <span className="text-5xl font-black text-[#1D1C1D]">&lt;1</span>
            <span className="text-3xl font-bold text-[#1D1C1D] ml-1">Min</span>
            <p className="text-sm text-[#616061] mt-1">deployment</p>
          </div>
          
          <div className="mt-4 space-y-3">
            <div className="flex items-center gap-2 text-[#1D1C1D]">
              <span className="text-green-500 text-xl">✓</span>
              <span className="text-lg font-medium">Secure by default</span>
            </div>
            <div className="flex items-center gap-2 text-[#1D1C1D]">
              <span className="text-green-500 text-xl">✓</span>
              <span className="text-lg font-medium">24/7 support</span>
            </div>
            <div className="flex items-center gap-2 text-[#1D1C1D]">
              <span className="text-green-500 text-xl">✓</span>
              <span className="text-lg font-medium">Auto updates</span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM: Tagline at the bottom of the remaining space */}
      <div className="flex-1 flex items-end justify-center pb-6">
        <p className="text-2xl text-[#616061] font-bold">
          Focus on building, not configuring servers
        </p>
      </div>
    </div>
  );
};

export default Slide02VPS;
