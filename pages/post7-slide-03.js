import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const Post7Slide03Command = () => {
  return (
    <div className={`${inter.className} min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-8 font-sans antialiased`}>
      {/* Title */}
      <div className="text-center mb-6">
        <h1 className="font-sans text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto] mb-2">
          Just Ask
        </h1>
        <p className="text-xl text-[#616061]">One simple command</p>
      </div>

      {/* Chat Interface */}
      <div className="w-full max-w-[500px] bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
        {/* Chat Header */}
        <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#616061]">Works with:</span>
              <img src="/telegram.svg" alt="Telegram" className="w-6 h-6" />
              <img src="/slack.svg" alt="Slack" className="w-6 h-6" />
            </div>
            <p className="text-xs text-green-600 font-medium">● Online</p>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="p-4 space-y-4">
          {/* User Message */}
          <div className="flex justify-end">
            <div className="bg-[#1D1C1D] text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
              <p className="text-lg">Organize my inbox</p>
            </div>
          </div>

          {/* AI Response */}
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[90%]">
              <p className="text-[#1D1C1D] mb-2">I'll organize your emails by priority. Here's what I'll do:</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Categorize by urgency</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Archive newsletters</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Create follow-up reminders</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Highlight action items</span>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-[#D4A574] rounded-full animate-pulse"></div>
                <span className="text-sm text-[#616061]">Working...</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="px-4 py-3 border-t border-gray-100">
          <div className="bg-gray-100 rounded-full px-4 py-2 text-gray-400 text-sm">
            Type a message...
          </div>
        </div>
      </div>

      {/* Key Point */}
      <div className="text-center max-w-[500px] mb-6">
        <p className="text-2xl text-[#1D1C1D] font-medium">
          No complex setup. <span className="text-[#c53131] font-bold">Just ask.</span>
        </p>
        <p className="text-lg text-[#616061] mt-2">
          Your AI assistant handles the rest.
        </p>
      </div>

      {/* Swipe indicator */}
      <div className="mt-8 flex items-center gap-2 text-[#616061]">
        <span className="text-sm">Swipe to see the result →</span>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default Post7Slide03Command;
