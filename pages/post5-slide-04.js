import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const Post5Slide04Docker = () => {
  return (
    <div className={`${inter.className} min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-8 font-sans antialiased`}>
      {/* Title */}
      <div className="text-center mb-6">
        <h1 className="font-sans text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto] mb-2">
          Step 3: Docker Compose
        </h1>
        <p className="text-xl text-[#616061]">It works on my machine... but not on the server</p>
      </div>

      {/* Error Message */}
      <div className="bg-[#1D1C1D] rounded-xl overflow-hidden shadow-2xl max-w-[550px] w-full mb-6">
        <div className="flex items-center gap-2 px-4 py-3 bg-[#2D2C2D]">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-4 text-sm text-gray-400 font-mono">docker-compose up</span>
        </div>
        
        <div className="p-5 font-mono text-sm leading-relaxed">
          <div className="text-red-400">ERROR: for openclaw Cannot start service</div>
          <div className="text-white mt-2">driver failed programming external connectivity</div>
          <div className="text-gray-400 mt-1">Error starting userland proxy: listen tcp 0.0.0.0:3456:</div>
          <div className="text-white">bind: address already in use</div>
          <div className="text-gray-500 mt-3">---</div>
          <div className="text-yellow-400 mt-2">ERROR: Encountered errors while bringing up the project.</div>
          <div className="text-gray-400 mt-2">$ sudo lsof -i :3456</div>
          <div className="text-white mt-1">COMMAND PID USER</div>
          <div className="text-white">nginx 2847 root</div>
          <div className="text-gray-500 mt-1">_</div>
        </div>
      </div>

      {/* The Frustration */}
      <div className="max-w-[500px] w-full space-y-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center shrink-0 shadow-lg">
            <span className="text-white font-bold">!</span>
          </div>
          <span className="text-lg text-[#1D1C1D]">Port already in use (by what?!)</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center shrink-0 shadow-lg">
            <span className="text-white font-bold">!</span>
          </div>
          <span className="text-lg text-[#1D1C1D]">Container keeps restarting</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center shrink-0 shadow-lg">
            <span className="text-white font-bold">!</span>
          </div>
          <span className="text-lg text-[#1D1C1D]">Environment variables missing</span>
        </div>
      </div>

      {/* Key Message */}
      <p className="text-xl text-[#1D1C1D] text-center max-w-[500px] font-medium">
        You follow the guide perfectly. It still breaks.
      </p>

      {/* Swipe indicator */}
      <div className="mt-8 flex items-center gap-2 text-[#616061]">
        <span className="text-sm">Swipe for the solution →</span>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default Post5Slide04Docker;
