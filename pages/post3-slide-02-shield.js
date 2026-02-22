import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const Post3Slide02Shield = () => {
  return (
    <div className={`${inter.className} min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-8 font-sans antialiased`}>
      {/* Title */}
      <div className="text-center mb-6">
        <h1 className="font-sans text-5xl md:text-6xl font-bold tracking-tight text-[#1D1C1D] mb-2">
          Your Machine is Exposed
        </h1>
        <p className="text-xl text-[#616061]">No protection = No peace of mind</p>
      </div>

      {/* Large Warning Shield */}
      <div className="relative mb-8">
        {/* Shield background */}
        <div className="w-40 h-48 bg-gradient-to-b from-orange-100 to-red-100 rounded-t-full rounded-b-3xl flex items-center justify-center border-4 border-orange-300 shadow-2xl">
          {/* Warning icon inside shield */}
          <svg className="w-20 h-20 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>

        {/* Exclamation badges around shield */}
        <div className="absolute -top-2 -right-2 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
          !
        </div>
        <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
          !
        </div>
      </div>

      {/* Security Issues List */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 max-w-[500px] w-full shadow-lg border border-orange-200 mb-6">
        <h3 className="text-xl font-bold text-[#1D1C1D] mb-4 text-center">Security Vulnerabilities</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0">
              <span className="text-red-500 font-bold">1</span>
            </div>
            <span className="text-[#1D1C1D]">Ports open to the internet</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
              <span className="text-orange-500 font-bold">2</span>
            </div>
            <span className="text-[#1D1C1D]">No firewall protection</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center shrink-0">
              <span className="text-yellow-600 font-bold">3</span>
            </div>
            <span className="text-[#1D1C1D]">Public IP address visible</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0">
              <span className="text-red-500 font-bold">4</span>
            </div>
            <span className="text-[#1D1C1D]">No security monitoring</span>
          </div>
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

export default Post3Slide02Shield;
