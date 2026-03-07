import React from 'react';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], display: 'swap' });

// Slide 1 Maximalist: Aggressively fills 4:5 space
const Slide01Maximalist = () => {
  return (
    <div className={`${spaceGrotesk.className} min-h-screen w-full flex flex-col items-center justify-between bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] px-6 py-6 font-sans antialiased`}>
      {/* Top: Large InstantClaw Logo */}
      <div className="flex flex-col items-center">
        <img 
          src="/instantclaw-logo.png" 
          alt="InstantClaw" 
          className="h-24 w-24"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <span className="text-3xl font-bold tracking-tight text-[#1D1C1D] mt-3">InstantClaw</span>
      </div>

      {/* Main Content - Fills vertical space */}
      <div className="text-center w-full max-w-[500px] flex-1 flex flex-col justify-center">
        {/* Main Headline - OpenClaw emphasized */}
        <h1 className="font-sans text-6xl md:text-7xl font-black tracking-tight leading-[0.95] text-[#1D1C1D] mb-2">
          OpenClaw
        </h1>
        <h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto] mb-3">
          AI Assistant
        </h2>
        
        {/* Subheadline */}
        <p className="text-4xl md:text-5xl text-[#1D1C1D] font-bold mt-2">
          <span className="text-[#c53131]">&lt;1</span> Minute
        </p>
        <p className="text-xl text-[#616061] mt-2 font-medium">
          to deploy your own AI agent
        </p>
      </div>

      {/* Bottom: Large Platform Avatars */}
      <div className="w-full max-w-[450px]">
        <p className="text-center text-base text-[#616061] font-semibold mb-3 uppercase tracking-wider">
          Works with
        </p>
        <div className="flex items-center justify-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-[#F8F7F5] flex items-center justify-center shadow-lg border-2 border-[#D4A574]/30">
              <img src="/telegram.svg" alt="Telegram" className="w-10 h-10" />
            </div>
            <span className="text-sm font-bold text-[#1D1C1D]">Telegram</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-[#F8F7F5] flex items-center justify-center shadow-lg border-2 border-[#D4A574]/30">
              <img src="/slack.svg" alt="Slack" className="w-10 h-10" />
            </div>
            <span className="text-sm font-bold text-[#1D1C1D]">Slack</span>
          </div>
        </div>
      </div>

      {/* Swipe indicator - minimal */}
      <div className="mt-4 flex items-center gap-2 text-[#616061]">
        <span className="text-sm font-bold">Swipe to see how</span>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default Slide01Maximalist;
