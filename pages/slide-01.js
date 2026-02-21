import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

// Slide 1: Cover - "Your 24/7 AI Assistant in <1 Minute"
const Slide01Cover = () => {
  return (
    <div className={`${inter.className} min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-8 font-sans antialiased`}>
      {/* Logo at top - bigger */}
      <div className="flex items-center gap-4 mb-10">
        <img 
          src="/instantclaw-logo.png" 
          alt="InstantClaw" 
          className="h-16 w-auto"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <span className="text-3xl font-bold tracking-tight text-[#1D1C1D]">InstantClaw</span>
      </div>

      {/* Main Content */}
      <div className="text-center space-y-4 max-w-[900px]">
        {/* Main Headline */}
        <h1 className="font-sans text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[1.05] bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto]">
          Your 24/7<br/>AI Assistant
        </h1>
        
        {/* Subheadline */}
        <p className="text-5xl md:text-6xl text-[#1D1C1D] font-medium mt-6">
          in <span className="font-bold text-[#c53131]">&lt;1 Minute</span>
        </p>
      </div>

      {/* Platform Icons at bottom */}
      <div className="mt-16 flex items-center gap-6">
        <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-[#D4A574]/30">
          <img src="/telegram.svg" alt="Telegram" className="w-6 h-6" />
          <span className="text-sm font-medium text-[#1D1C1D]">Telegram</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-[#D4A574]/30">
          <img src="/slack.svg" alt="Slack" className="w-6 h-6" />
          <span className="text-sm font-medium text-[#1D1C1D]">Slack</span>
        </div>
      </div>
    </div>
  );
};

export default Slide01Cover;
