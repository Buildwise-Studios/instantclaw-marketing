import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const Post3Slide04DevOps = () => {
  return (
    <div className={`${inter.className} min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-8 font-sans antialiased`}>
      {/* Title */}
      <div className="text-center mb-6">
        <h1 className="font-sans text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto] mb-2">
          It's Not Your Job
        </h1>
        <p className="text-xl text-[#616061]">But suddenly, it is</p>
      </div>

      {/* Terminal Window */}
      <div className="w-full max-w-[550px] bg-[#1D1C1D] rounded-xl overflow-hidden shadow-2xl mb-6">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#2D2C2D]">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-4 text-sm text-gray-400 font-mono">terminal — bash</span>
        </div>
        
        {/* Terminal Content */}
        <div className="p-5 font-mono text-sm leading-relaxed">
          <div className="text-green-400">$ openclaw start</div>
          <div className="text-red-400 mt-2">Error: Port 3000 already in use</div>
          <div className="text-white mt-1">  at Server.listen (net.js:...)</div>
          <div className="text-gray-400 mt-2">$ sudo lsof -i :3000</div>
          <div className="text-white mt-1">COMMAND  PID USER</div>
          <div className="text-white">node    2847 root</div>
          <div className="text-green-400 mt-2">$ sudo kill -9 2847</div>
          <div className="text-green-400 mt-1">$ openclaw start</div>
          <div className="text-red-400 mt-2">Error: SSL certificate expired</div>
          <div className="text-gray-400 mt-2">$ sudo certbot renew</div>
          <div className="text-red-400 mt-1">Failed: Authorization error</div>
          <div className="text-yellow-400 mt-2">_</div>
        </div>
      </div>

      {/* Config Files Floating */}
      <div className="flex flex-wrap justify-center gap-3 mb-6 max-w-[500px]">
        <div className="px-3 py-1.5 bg-red-100 border border-red-200 rounded-lg text-sm text-red-600 font-mono">
          nginx.conf
        </div>
        <div className="px-3 py-1.5 bg-orange-100 border border-orange-200 rounded-lg text-sm text-orange-600 font-mono">
          docker-compose.yml
        </div>
        <div className="px-3 py-1.5 bg-yellow-100 border border-yellow-200 rounded-lg text-sm text-yellow-700 font-mono">
          .env
        </div>
        <div className="px-3 py-1.5 bg-blue-100 border border-blue-200 rounded-lg text-sm text-blue-600 font-mono">
          ssl.crt
        </div>
        <div className="px-3 py-1.5 bg-purple-100 border border-purple-200 rounded-lg text-sm text-purple-600 font-mono">
          config.json
        </div>
      </div>

      {/* Key Message */}
      <div className="text-center max-w-[500px]">
        <p className="text-2xl text-[#1D1C1D] font-medium">
          You wanted an AI assistant, not a second job as a{' '}
          <span className="font-bold text-red-500">sysadmin</span>
        </p>
      </div>

      {/* Swipe indicator */}
      <div className="mt-8 flex items-center gap-2 text-[#616061]">
        <span className="text-sm">Swipe for the solution</span>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default Post3Slide04DevOps;
