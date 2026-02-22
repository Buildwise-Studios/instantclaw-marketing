import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const Post7Slide05CTA = () => {
  return (
    <div className={`${inter.className} min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-8 font-sans antialiased`}>
      {/* Logo + Brand Name */}
      <div className="flex items-center gap-4 mb-6">
        <img src="/instantclaw-logo.png" alt="InstantClaw" className="w-16 h-16" />
        <h1 className="font-sans text-4xl md:text-5xl font-bold tracking-tight text-[#1D1C1D]">
          InstantClaw
        </h1>
      </div>

      {/* Main Headline */}
      <div className="text-center mb-6">
        <h2 className="font-sans text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto] mb-4">
          Reclaim 5 Hours
        </h2>
        <h3 className="font-sans text-4xl md:text-5xl font-bold tracking-tight text-[#1D1C1D]">
          This Week
        </h3>
      </div>

      {/* Subtitle */}
      <p className="text-xl text-[#616061] text-center max-w-[500px] mb-10">
        Stop drowning in emails. Start focusing on what matters.
      </p>

      {/* Benefits */}
      <div className="max-w-[450px] w-full space-y-3 mb-10">
        <div className="flex items-center gap-3">
          <span className="text-green-500 text-xl">✓</span>
          <span className="text-lg text-[#1D1C1D]">Auto-organize in 60 seconds</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-green-500 text-xl">✓</span>
          <span className="text-lg text-[#1D1C1D]">Works with Telegram & Slack</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-green-500 text-xl">✓</span>
          <span className="text-lg text-[#1D1C1D]">Set up in under 1 minute</span>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mb-4">
        <div className="bg-gradient-to-r from-[#c53131] to-[#D4A574] text-white font-bold text-xl px-12 py-4 rounded-full shadow-xl">
          Get Started Now →
        </div>
      </div>

      {/* URL */}
      <p className="text-lg text-[#616061] font-medium">
        instantclaw.com
      </p>
    </div>
  );
};

export default Post7Slide05CTA;
