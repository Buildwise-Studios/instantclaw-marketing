import React from 'react';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], display: 'swap' });

// Post with AI face background - overlay to hide logos
const AIFacePost = () => {
  return (
    <div className={`${spaceGrotesk.className} min-h-screen w-full flex flex-col relative overflow-hidden`}>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/ai-face-bg.jpg)',
        }}
      />

      {/* Gradient overlay at bottom to hide logos */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[300px]"
        style={{
          background: 'linear-gradient(to top, #F8F7F5 0%, #F8F7F5 60%, transparent 100%)'
        }}
      />

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10">
        
        {/* Main Headline */}
        <div className="text-center px-8">
          <h1 className="font-sans text-8xl font-black tracking-tight text-[#1D1C1D] leading-[0.9]">
            AI That
          </h1>
          <h2 className="font-sans text-9xl font-black tracking-tight bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto] mt-2">
            Actually
          </h2>
          <h3 className="font-sans text-8xl font-black tracking-tight text-[#1D1C1D] mt-2">
            Works
          </h3>
        </div>

        {/* Subtitle */}
        <p className="mt-12 text-5xl font-bold text-[#616061] text-center">
          No coding. No hardware. Just results.
        </p>
      </div>

      {/* Bottom: InstantClaw Branding - positioned in gradient overlay area */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2 text-center pb-12"
        style={{ bottom: '40px' }}
      >
        <p className="text-2xl text-[#616061] font-bold mb-2">Powered by</p>
        <p className="text-6xl font-black text-[#1D1C1D]">OpenClaw</p>
        <p className="text-3xl font-bold text-[#D4A574] mt-3">InstantClaw</p>
      </div>
    </div>
  );
};

export default AIFacePost;
