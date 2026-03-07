import React from 'react';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], display: 'swap' });

// Slide 2: Vertical Stack Comparison - fills 4:5 space
const Slide02Vertical = () => {
  return (
    <div className={`${spaceGrotesk.className} min-h-screen w-full flex flex-col bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-6 font-sans antialiased relative`}>
      {/* Title - Top */}
      <div className="text-center mb-4">
        <h1 className="font-sans text-6xl font-black tracking-tight text-[#1D1C1D]">
          5 Days
        </h1>
        <p className="text-2xl text-[#616061] mt-1">vs</p>
        <h2 className="font-sans text-7xl font-black tracking-tight bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto]">
          1 Minute
        </h2>
      </div>

      {/* Mac Mini - Top Section (Smaller, faded) */}
      <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-5 border border-red-200/50 mx-auto w-[90%] opacity-70 scale-95">
        <div className="flex items-center gap-3 mb-3">
          <svg className="w-10 h-10 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.96 1.08-3.11-1.05.05-2.31.72-3.06 1.64-.68.84-1.27 2.18-1.11 3.23 1.18.09 2.38-.71 3.09-1.76"/>
          </svg>
          <span className="text-xl font-bold text-gray-500">Mac Mini Self-Hosting</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <span className="text-red-400 text-xl">•</span>
          <span>5 days of setup & config</span>
        </div>
      </div>

      {/* VS Badge - Middle */}
      <div className="flex justify-center my-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4A574] to-[#c53131] flex items-center justify-center shadow-lg rotate-12">
          <span className="text-white font-bold text-xl">VS</span>
        </div>
      </div>

      {/* InstantClaw - Bottom Section (Dominant) */}
      <div className="bg-white rounded-2xl p-6 border-2 border-[#D4A574] mx-auto w-[95%] shadow-xl" style={{ boxShadow: '0 15px 40px -10px rgba(197, 49, 49, 0.15)' }}>
        <div className="flex items-center gap-3 mb-4">
          <img 
            src="/instantclaw-logo.png" 
            alt="InstantClaw" 
            className="h-12 w-12"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div>
            <span className="text-2xl font-bold text-[#1D1C1D]">InstantClaw</span>
            <p className="text-sm text-[#616061]">Powered by OpenClaw</p>
          </div>
        </div>
        
        <div className="text-center py-4 bg-gradient-to-r from-[#D4A574]/10 to-[#c53131]/10 rounded-xl border border-[#D4A574]/30">
          <span className="text-6xl font-black text-[#1D1C1D]">&lt;1</span>
          <span className="text-4xl font-bold text-[#1D1C1D] ml-2">Minute</span>
        </div>
        
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 text-[#1D1C1D]">
            <span className="text-green-500 text-xl">✓</span>
            <span className="text-lg font-medium">No setup required</span>
          </div>
          <div className="flex items-center gap-2 text-[#1D1C1D]">
            <span className="text-green-500 text-xl">✓</span>
            <span className="text-lg font-medium">Pre-configured OpenClaw</span>
          </div>
        </div>
      </div>

      {/* Bottom tagline */}
      <div className="mt-auto text-center pb-4">
        <p className="text-xl text-[#616061] font-medium">
          Skip the setup. Start building.
        </p>
      </div>
    </div>
  );
};

export default Slide02Vertical;
