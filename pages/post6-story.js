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
      <div className="relative z-10 max-w-[850px]">
        {/* Text Box with Background */}
        <div className="bg-black/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center">
          {/* Big Number */}
          <h1 className="font-sans text-[100px] md:text-[150px] font-bold text-white leading-none mb-2">
            5
          </h1>
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-white mb-6">
            days.
          </h2>

          {/* Story Text */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-5">
            That's how long our friend James spent setting up OpenClaw on his VPS, and that is with him following a step-by-step ChatGPT guide and texting us daily.
          </p>

          {/* The Point */}
          <p className="text-lg md:text-xl text-white font-semibold leading-relaxed mb-6">
            VPS is the right way, <span className="text-[#c53131]">spending 5 days is not.</span>
          </p>

          {/* The Alternative */}
          <div className="flex flex-col items-center">
            <p className="text-base text-gray-300 mb-2">The alternative?</p>
            <div className="flex items-center gap-4">
              <img src="/instantclaw-logo.png" alt="InstantClaw" className="w-14 h-14" />
              <p className="font-sans text-3xl md:text-4xl font-bold text-white">
                InstantClaw
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post6Story;
