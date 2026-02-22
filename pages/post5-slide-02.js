import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const Post5Slide02SSH = () => {
  return (
    <div className={`${inter.className} min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-8 font-sans antialiased`}>
      {/* Title */}
      <div className="text-center mb-6">
        <h1 className="font-sans text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto] mb-2">
          Step 1: SSH Setup
        </h1>
        <p className="text-xl text-[#616061]">Hope you remember your commands</p>
      </div>

      {/* Terminal Window */}
      <div className="w-full max-w-[550px] bg-[#1D1C1D] rounded-xl overflow-hidden shadow-2xl mb-6">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#2D2C2D]">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-4 text-sm text-gray-400 font-mono">root@vps-server ~</span>
        </div>
        
        {/* Terminal Content */}
        <div className="p-5 font-mono text-sm leading-relaxed">
          <div className="text-green-400">$ ssh -i ~/.ssh/id_rsa root@192.168.1.100</div>
          <div className="text-gray-500 mt-1">Enter passphrase for key...</div>
          <div className="text-white mt-2">root@vps:~# apt update && apt upgrade -y</div>
          <div className="text-gray-400 mt-1">Get:1 http://deb.debian.org...</div>
          <div className="text-gray-400">Fetched 15.3 MB in 3s...</div>
          <div className="text-yellow-400 mt-2">E: Could not get lock...</div>
          <div className="text-green-400 mt-2">root@vps:~# sudo rm /var/lib/apt/lists/lock</div>
          <div className="text-white mt-2">root@vps:~# curl -fsSL https://...</div>
          <div className="text-red-400 mt-1">curl: (6) Could not resolve host</div>
          <div className="text-gray-400 mt-2">_</div>
        </div>
      </div>

      {/* Frustration indicators */}
      <div className="flex gap-4 mb-6">
        <div className="flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full">
          <span className="text-red-500">😤</span>
          <span className="text-[#1D1C1D] text-sm font-medium">Permission denied</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full">
          <span className="text-orange-500">😵</span>
          <span className="text-[#1D1C1D] text-sm font-medium">DNS errors</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full">
          <span className="text-yellow-600">🤷</span>
          <span className="text-[#1D1C1D] text-sm font-medium">Lock files</span>
        </div>
      </div>

      {/* Swipe indicator */}
      <div className="flex items-center gap-2 text-[#616061]">
        <span className="text-sm">Swipe for firewall hell →</span>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default Post5Slide02SSH;
