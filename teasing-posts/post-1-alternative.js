import React from 'react';
import { Space_Grotesk } from 'next/font/google';
import { Hourglass } from 'lucide-react';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], display: 'swap' });

// Brand gradient + subtle dot grid pattern overlay
const backgroundStyle = {
  backgroundImage: `linear-gradient(to bottom right, #F8F7F5, #D4A574), radial-gradient(circle at center, rgba(29, 28, 29, 0.05) 1px, transparent 1px)`,
  backgroundSize: '100% 100%, 24px 24px',
};

const Slide00Teaser = () => {
  return (
    <div
      className={`${spaceGrotesk.className} min-h-screen w-full flex flex-col items-center justify-center p-8 font-sans antialiased relative overflow-hidden aspect-[3/4]`}
      style={backgroundStyle}
    >
      {/* Main content - centered, 2026 safe zone */}
      <div className="flex flex-col items-center justify-center text-center flex-1 px-4">
        {/* Headline - dominant, brand gradient (matches slide-01) */}
        <h1 className="font-sans text-[125px] font-black tracking-tight leading-[0.9]">
          <span className="bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto]">
            Something big
            <br />
            is coming...
          </span>
          <Hourglass size={100} strokeWidth={3} className="inline-block ml-6 mb-4 text-[#c53131]" />
        </h1>

        {/* Subheadline - secondary size */}
        <p className="text-3xl font-bold text-[#1D1C1D] mt-8 tracking-tight">
          AI automation for everyone
        </p>
      </div>

      {/* Bottom center: Powered by OpenClaw - explicitly forced bottom with inline styles to bypass Tailwind JIT caching issues */}
      <div 
        className="absolute left-0 right-0 text-center" 
        style={{ bottom: '200px' }}
      >
        <p className="text-xl text-[#616061] font-bold">Powered by</p>
        <p className="text-4xl font-black text-[#1D1C1D]">OpenClaw</p>
      </div>
    </div>
  );
};

export default Slide00Teaser;
