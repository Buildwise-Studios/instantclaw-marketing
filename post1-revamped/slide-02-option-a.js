import React from 'react';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], display: 'swap' });

// Slide 2 Option A: Asymmetrical Comparison
const Slide02ComparisonOptionA = () => {
  return (
    <div className={`${spaceGrotesk.className} min-h-screen w-full flex flex-col bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-8 font-sans antialiased relative`}>
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="font-sans text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto] mb-2">
          Self-Hosting vs InstantClaw
        </h1>
        <p className="text-xl text-[#616061]">Why spend days when you can deploy in seconds?</p>
      </div>

      {/* Asymmetrical Comparison */}
      <div className="flex-1 flex flex-col items-center justify-center relative">
        {/* Mac Mini Card - Smaller, Faded, Higher */}
        <div className="w-[280px] bg-white/40 backdrop-blur-sm rounded-2xl p-5 border border-red-200/50 shadow-md opacity-60 scale-90 -mt-4 self-start ml-8">
          <div className="flex items-center gap-3 mb-4">
            <svg className="w-8 h-8 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.96 1.08-3.11-1.05.05-2.31.72-3.06 1.64-.68.84-1.27 2.18-1.11 3.23 1.18.09 2.38-.71 3.09-1.76"/>
            </svg>
            <h2 className="text-xl font-bold text-gray-600">Mac Mini</h2>
          </div>
          
          <div className="text-center py-3 bg-red-50/50 rounded-xl">
            <span className="text-2xl font-bold text-red-400">$699</span>
            <p className="text-2xl font-bold text-red-400 mt-1">+ 5 Days</p>
          </div>
        </div>

        {/* VS Badge - Off-center */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -ml-8">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4A574] to-[#c53131] flex items-center justify-center shadow-lg rotate-12">
            <span className="text-white font-bold text-lg">VS</span>
          </div>
        </div>

        {/* InstantClaw Card - Larger, Vibrant, Lower */}
        <div className="w-[340px] bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-green-300 shadow-xl scale-105 mt-2 self-end mr-8">
          <div className="flex items-center gap-3 mb-5">
            <img 
              src="/instantclaw-logo.png" 
              alt="InstantClaw" 
              className="h-10 w-auto"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <h2 className="text-2xl font-bold text-[#1D1C1D]">InstantClaw</h2>
          </div>
          
          <div className="text-center py-4 bg-green-50 rounded-xl">
            <span className="text-4xl font-bold text-green-600">&lt;1 Min</span>
            <p className="text-sm text-gray-600 mt-1">deployment</p>
          </div>

          <div className="mt-4 space-y-1 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>One-click deploy</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Auto updates</span>
            </div>
          </div>
        </div>
      </div>

      {/* Key Message */}
      <div className="text-center mt-4">
        <p className="text-xl font-bold text-[#1D1C1D]">
          Focus on building, not configuring servers
        </p>
      </div>
    </div>
  );
};

export default Slide02ComparisonOptionA;
