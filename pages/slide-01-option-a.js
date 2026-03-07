import React from 'react';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], display: 'swap' });

// Slide 1 Option A: Editorial Asymmetry
const Slide01CoverOptionA = () => {
  return (
    <div className={`${spaceGrotesk.className} min-h-screen w-full flex flex-col bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-8 font-sans antialiased relative`}>
      {/* Logo: Top-left */}
      <div className="flex items-center gap-3 mb-8">
        <img 
          src="/instantclaw-logo.png" 
          alt="InstantClaw" 
          className="h-10 w-auto"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <span className="text-lg font-bold tracking-tight text-[#1D1C1D]">InstantClaw</span>
      </div>

      {/* Main Content - Left aligned with bleed */}
      <div className="flex-1 flex flex-col justify-center pl-4">
        <h1 className="font-sans text-8xl md:text-9xl font-bold tracking-tight leading-[0.9] bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto] -ml-2">
          Your 24/7<br/>AI Assistant
        </h1>
      </div>

      {/* Subhead: Bottom-right */}
      <div className="flex justify-end items-end pb-8">
        <p className="text-4xl md:text-5xl text-[#1D1C1D] font-medium text-right">
          in <span className="font-bold text-[#c53131]">&lt;1 Minute</span>
        </p>
      </div>

      {/* Platform Icons: Avatar/Icon Stack (Minimal) */}
      <div className="absolute bottom-8 left-8 flex flex-col items-start gap-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm">
            <img src="/telegram.svg" alt="Telegram" className="w-6 h-6" />
          </div>
          <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm">
            <img src="/slack.svg" alt="Slack" className="w-6 h-6" />
          </div>
        </div>
        <span className="text-xs text-[#616061] ml-1">Available on</span>
      </div>
    </div>
  );
};

export default Slide01CoverOptionA;
