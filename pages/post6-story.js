import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const Post6Story = () => {
  return (
    <div 
      className={`${inter.className} min-h-screen w-full flex flex-col items-center justify-center p-8 font-sans antialiased relative`}
      style={{
        backgroundImage: 'url(/post6-bg.PNG)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[800px] text-center">
        {/* Big Number */}
        <h1 className="font-sans text-[120px] md:text-[180px] font-bold text-white leading-none mb-4">
          5
        </h1>
        <h2 className="font-sans text-4xl md:text-5xl font-bold text-white mb-8">
          days.
        </h2>

        {/* Story Text */}
        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-6">
          That's how long our friend James spent setting up OpenClaw on his VPS, and that is with him following a step-by-step ChatGPT guide and texting us daily.
        </p>

        {/* The Point */}
        <p className="text-xl md:text-2xl text-white font-semibold leading-relaxed mb-8">
          VPS is the right way, <span className="text-[#c53131]">spending 5 days is not.</span>
        </p>

        {/* The Alternative */}
        <div className="inline-block">
          <p className="text-lg text-gray-300 mb-2">The alternative?</p>
          <p className="font-sans text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#D4A574] via-[#c53131] to-[#D4A574] bg-clip-text text-transparent">
            InstantClaw
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post6Story;
