import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const Post5Slide05Solution = () => {
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
        <h2 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto] mb-4">
          There's a Better Way
        </h2>
        <p className="text-2xl text-[#616061] text-center max-w-[600px]">
          VPS power without the complexity
        </p>
      </div>

      {/* Value Props */}
      <div className="max-w-[500px] w-full space-y-4 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shrink-0 shadow-lg">
            <span className="text-white font-bold">✓</span>
          </div>
          <span className="text-lg text-[#1D1C1D]">Same VPS-grade security</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shrink-0 shadow-lg">
            <span className="text-white font-bold">✓</span>
          </div>
          <span className="text-lg text-[#1D1C1D]">Same dedicated resources</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shrink-0 shadow-lg">
            <span className="text-white font-bold">✓</span>
          </div>
          <span className="text-lg text-[#1D1C1D]">Zero server management</span>
        </div>
      </div>

      {/* Tagline */}
      <p className="text-xl text-[#616061] text-center mb-8 max-w-[500px]">
        Deploy in under a minute. We handle the rest.
      </p>

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

export default Post5Slide05Solution;
