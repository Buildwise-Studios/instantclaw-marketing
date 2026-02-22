import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const Post7Slide04After = () => {
  return (
    <div className={`${inter.className} min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-8 font-sans antialiased`}>
      {/* Title */}
      <div className="text-center mb-6">
        <h1 className="font-sans text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto] mb-2">
          The Result
        </h1>
        <p className="text-xl text-[#616061]">Organized in 60 seconds</p>
      </div>

      {/* Clean Inbox */}
      <div className="w-full max-w-[550px] bg-white rounded-xl shadow-xl overflow-hidden mb-6">
        {/* Inbox Header */}
        <div className="bg-green-50 px-4 py-3 border-b border-green-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-green-500"></div>
              <span className="font-semibold text-[#1D1C1D]">Inbox</span>
              <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">12</span>
            </div>
            <span className="text-sm text-green-600 font-medium">✓ Organized</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex border-b border-gray-100">
          <div className="px-4 py-2 bg-blue-50 border-b-2 border-blue-500">
            <span className="text-sm font-medium text-blue-600">Priority (3)</span>
          </div>
          <div className="px-4 py-2">
            <span className="text-sm text-gray-500">Updates (5)</span>
          </div>
          <div className="px-4 py-2">
            <span className="text-sm text-gray-500">Later (4)</span>
          </div>
        </div>

        {/* Email List */}
        <div className="divide-y divide-gray-100">
          {/* Email 1 - Priority */}
          <div className="px-4 py-3 bg-blue-50">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <p className="font-semibold text-[#1D1C1D]">URGENT: Deadline Tomorrow</p>
                  <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded">Action</span>
                </div>
                <p className="text-sm text-gray-600 truncate">We need your approval on the proposal...</p>
                <p className="text-xs text-blue-600 mt-1">📅 Follow-up: Today 5pm</p>
              </div>
            </div>
          </div>

          {/* Email 2 - Priority */}
          <div className="px-4 py-3 bg-blue-50">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2"></div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <p className="font-semibold text-[#1D1C1D]">Client Meeting Rescheduled</p>
                  <span className="text-xs bg-yellow-100 text-yellow-600 px-2 py-0.5 rounded">Review</span>
                </div>
                <p className="text-sm text-gray-600 truncate">Can we move our call to Thursday?</p>
                <p className="text-xs text-blue-600 mt-1">📅 Follow-up: Tomorrow</p>
              </div>
            </div>
          </div>

          {/* Email 3 - Priority */}
          <div className="px-4 py-3 bg-blue-50">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <p className="font-semibold text-[#1D1C1D]">Invoice Paid</p>
                  <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">Done</span>
                </div>
                <p className="text-sm text-gray-600 truncate">Payment received for Invoice #2045</p>
              </div>
            </div>
          </div>
        </div>

        {/* Archived Info */}
        <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
          <p className="text-sm text-gray-500 text-center">
            ✓ 2,835 emails archived and categorized
          </p>
        </div>
      </div>

      {/* Results */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        <div className="px-4 py-2 bg-green-100 rounded-full">
          <span className="text-green-600 text-sm font-medium">✓ Prioritized</span>
        </div>
        <div className="px-4 py-2 bg-blue-100 rounded-full">
          <span className="text-blue-600 text-sm font-medium">✓ Categorized</span>
        </div>
        <div className="px-4 py-2 bg-purple-100 rounded-full">
          <span className="text-purple-600 text-sm font-medium">✓ Reminders set</span>
        </div>
      </div>

      {/* Time Saved */}
      <div className="text-center mb-6">
        <p className="text-2xl text-[#1D1C1D] font-bold">
          You just saved <span className="text-green-600">5+ hours</span> this week
        </p>
      </div>

      {/* Swipe indicator */}
      <div className="flex items-center gap-2 text-[#616061]">
        <span className="text-sm">Swipe to try it →</span>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default Post7Slide04After;
