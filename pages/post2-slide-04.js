import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const Post2Slide04CTA = () => {
  return (
    <div className={`${inter.className} min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-8 font-sans antialiased`}>
      {/* Main Headline */}
      <div className="text-center max-w-[800px] mb-8">
        <h1 className="font-sans text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] text-[#1D1C1D] mb-6">
          Stop Configuring Servers.
        </h1>
        <h2 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto]">
          Start Building.
        </h2>
      </div>

      {/* Subtext */}
      <p className="text-2xl md:text-3xl text-[#616061] text-center max-w-[600px] mb-10">
        Deploy your AI agent in under a minute and focus on what actually matters.
      </p>

      {/* Value Props */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-[#D4A574]/30">
          <span className="text-green-500 text-xl">✓</span>
          <span className="text-[#1D1C1D] font-medium">No hardware</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-[#D4A574]/30">
          <span className="text-green-500 text-xl">✓</span>
          <span className="text-[#1D1C1D] font-medium">No setup time</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-[#D4A574]/30">
          <span className="text-green-500 text-xl">✓</span>
          <span className="text-[#1D1C1D] font-medium">No maintenance</span>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mb-10">
        <div className="inline-block px-12 py-5 bg-gradient-to-r from-[#D4A574] to-[#c53131] rounded-2xl shadow-2xl">
          <span className="text-3xl font-bold text-white">
            Get Started →
          </span>
        </div>
      </div>

      {/* Link indicator */}
      <div className="flex items-center gap-2 text-[#616061]">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
        <span className="text-lg font-medium">Link in bio</span>
      </div>

      {/* Bottom Branding */}
      <div className="absolute bottom-12 flex items-center gap-3">
        <img 
          src="/instantclaw-logo.png" 
          alt="InstantClaw" 
          className="h-10 w-auto"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <span className="text-2xl font-bold text-[#1D1C1D]">InstantClaw</span>
      </div>
    </div>
  );
};

export default Post2Slide04CTA;
