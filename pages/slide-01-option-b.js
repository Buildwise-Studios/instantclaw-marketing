import React from 'react';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], display: 'swap' });

// Slide 1 Option B: Vertical Stack with Tension
const Slide01CoverOptionB = () => {
  return (
    <div className={`${spaceGrotesk.className} min-h-screen w-full flex flex-col items-center bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-8 font-sans antialiased`}>
      {/* Logo: Center-top (small) */}
      <div className="flex items-center gap-2 mt-4 mb-12">
        <img 
          src="/instantclaw-logo.png" 
          alt="InstantClaw" 
          className="h-8 w-auto"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <span className="text-base font-bold tracking-tight text-[#1D1C1D]">InstantClaw</span>
      </div>

      {/* Main Content - Vertical Stack */}
      <div className="flex-1 flex flex-col justify-center items-center w-full">
        {/* Headline: Massive */}
        <h1 className="font-sans text-[110px] md:text-[130px] font-bold tracking-tight leading-[0.85] text-center bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto]">
          Your 24/7<br/>AI Assistant
        </h1>

        {/* Subhead: Generous gap below */}
        <p className="text-3xl md:text-4xl text-[#1D1C1D] font-medium mt-16">
          in <span className="font-bold text-[#c53131]">&lt;1 Minute</span>
        </p>
      </div>

      {/* Platform Icons: Bottom-right */}
      <div className="w-full flex justify-end items-center gap-4 mb-4">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 backdrop-blur-sm rounded-full border border-[#D4A574]/30">
          <img src="/telegram.svg" alt="Telegram" className="w-5 h-5" />
          <span className="text-xs font-medium text-[#1D1C1D]">Telegram</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/60 backdrop-blur-sm rounded-full border border-[#D4A574]/30">
          <img src="/slack.svg" alt="Slack" className="w-5 h-5" />
          <span className="text-xs font-medium text-[#1D1C1D]">Slack</span>
        </div>
      </div>
    </div>
  );
};

export default Slide01CoverOptionB;
