import React from 'react';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], display: 'swap' });

const Slide01Revised = () => {
  return (
    <div className={`${spaceGrotesk.className} min-h-screen w-full flex flex-col bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-6 font-sans antialiased relative`}>
      {/* Top: InstantClaw Logo - Left aligned - BIGGER */}
      <div className="flex items-center gap-4 mb-4">
        <img 
          src="/instantclaw-logo.png" 
          alt="InstantClaw" 
          className="h-28 w-28"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <span className="text-4xl font-bold tracking-tight text-[#1D1C1D]">InstantClaw</span>
      </div>

      {/* Main Content - Asymmetrical - BIGGER HEADLINE */}
      <div className="flex-1 flex flex-col justify-center">
        {/* Headline - Left aligned - MASSIVE with full gradient */}
        <h1 className="font-sans text-[125px] font-black tracking-tight leading-[0.9] bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto] -ml-2">
          Your 24/7<br/>AI Assistant
        </h1>
        
        {/* <1 Min in headline area - BIGGER */}
        <p className="text-6xl text-[#1D1C1D] font-bold mt-6">
          Deploy in <span className="text-[#c53131]">&lt;1 Min</span>
        </p>
      </div>

      {/* Bottom Left: Large Platform Logos - MUCH BIGGER */}
      <div className="absolute bottom-16 left-6">
        <p className="text-base text-[#616061] font-bold mb-4 uppercase tracking-wider">
          Works with
        </p>
        <div className="flex items-center gap-5">
          <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-[#D4A574]/30">
            <img src="/telegram.svg" alt="Telegram" className="w-16 h-16" />
          </div>
          <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-[#D4A574]/30">
            <img src="/slack.svg" alt="Slack" className="w-16 h-16" />
          </div>
        </div>
      </div>

      {/* Bottom Right: Powered by OpenClaw - MUCH BIGGER */}
      <div className="absolute bottom-20 right-6 text-right">
        <p className="text-xl text-[#616061] font-bold">
          Powered by
        </p>
        <p className="text-5xl font-black text-[#1D1C1D]">
          OpenClaw
        </p>
      </div>
    </div>
  );
};

export default Slide01Revised;
