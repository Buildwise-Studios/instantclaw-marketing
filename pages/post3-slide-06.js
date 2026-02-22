import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const Post3Slide06CTA = () => {
  return (
    <div className={`${inter.className} min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-8 font-sans antialiased`}>
      {/* Logo + Brand Name Row */}
      <div className="flex items-center gap-4 mb-4">
        <img src="/instantclaw-logo.png" alt="InstantClaw" className="w-20 h-20" />
        <h1 className="font-sans text-6xl md:text-7xl font-bold tracking-tight text-[#1D1C1D]">
          InstantClaw
        </h1>
      </div>

      {/* Main Tagline */}
      <h2 className="font-sans text-3xl md:text-4xl font-bold tracking-tight text-center mb-6 max-w-[600px] bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto]">
        Secure. Maintained. Worry-Free.
      </h2>

      {/* Subtitle */}
      <p className="text-xl text-[#616061] text-center mb-10 max-w-[500px]">
        Deploy your AI agent in under a minute. We handle the rest.
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

export default Post3Slide06CTA;
