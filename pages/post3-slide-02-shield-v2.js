import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const Post3Slide02ShieldV2 = () => {
  return (
    <div className={`${inter.className} min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-8 font-sans antialiased`}>
      {/* Title */}
      <div className="text-center mb-6">
        <h1 className="font-sans text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto] mb-2">
          Your Machine is Exposed
        </h1>
        <p className="text-xl text-[#616061]">No protection = No peace of mind</p>
      </div>

      {/* Large Warning Icon with Gradient */}
      <div className="mb-8">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#D4A574] to-[#c53131] flex items-center justify-center shadow-2xl">
          <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
      </div>

      {/* Security Issues List - Directly on background */}
      <div className="max-w-[500px] w-full space-y-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center shrink-0 shadow-lg">
            <span className="text-white font-bold">1</span>
          </div>
          <span className="text-xl text-[#1D1C1D] font-medium">Ports open to the internet</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4A574] to-[#c53131] flex items-center justify-center shrink-0 shadow-lg">
            <span className="text-white font-bold">2</span>
          </div>
          <span className="text-xl text-[#1D1C1D] font-medium">No firewall protection</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center shrink-0 shadow-lg">
            <span className="text-white font-bold">3</span>
          </div>
          <span className="text-xl text-[#1D1C1D] font-medium">Public IP address visible</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4A574] to-[#c53131] flex items-center justify-center shrink-0 shadow-lg">
            <span className="text-white font-bold">4</span>
          </div>
          <span className="text-xl text-[#1D1C1D] font-medium">No security monitoring</span>
        </div>
      </div>

      {/* Bottom Message */}
      <div className="text-center">
        <p className="text-2xl font-bold text-red-500">
          Vulnerable to attacks 24/7
        </p>
      </div>

      {/* Swipe indicator */}
      <div className="mt-8 flex items-center gap-2 text-[#616061]">
        <span className="text-sm">Swipe for reason #2</span>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default Post3Slide02ShieldV2;
