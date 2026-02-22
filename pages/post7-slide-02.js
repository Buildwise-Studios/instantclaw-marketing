import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const Post7Slide02Before = () => {
  return (
    <div className={`${inter.className} min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-8 font-sans antialiased`}>
      {/* Title */}
      <div className="text-center mb-6">
        <h1 className="font-sans text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto] mb-2">
          The Chaos
        </h1>
        <p className="text-xl text-[#616061]">2,847 unread emails. Where do you even start?</p>
      </div>

      {/* Chaotic Inbox */}
      <div className="w-full max-w-[550px] bg-white rounded-xl shadow-xl overflow-hidden mb-6">
        {/* Inbox Header */}
        <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-red-500"></div>
              <span className="font-semibold text-[#1D1C1D]">Inbox</span>
              <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">2,847</span>
            </div>
            <span className="text-sm text-gray-500">All</span>
          </div>
        </div>

        {/* Email List */}
        <div className="divide-y divide-gray-100">
          {/* Email 1 - Urgent but buried */}
          <div className="px-4 py-3 bg-red-50">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <p className="font-semibold text-[#1D1C1D]">URGENT: Deadline Tomorrow</p>
                  <span className="text-xs text-gray-500">2 days ago</span>
                </div>
                <p className="text-sm text-gray-600 truncate">We need your approval on the proposal...</p>
              </div>
            </div>
          </div>

          {/* Email 2 - Newsletter */}
          <div className="px-4 py-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-gray-300 mt-2"></div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <p className="font-medium text-[#1D1C1D]">Marketing Weekly</p>
                  <span className="text-xs text-gray-500">3 days ago</span>
                </div>
                <p className="text-sm text-gray-500 truncate">This week's top 10 marketing trends...</p>
              </div>
            </div>
          </div>

          {/* Email 3 - Another newsletter */}
          <div className="px-4 py-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-gray-300 mt-2"></div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <p className="font-medium text-[#1D1C1D]">Amazon Deals</p>
                  <span className="text-xs text-gray-500">4 days ago</span>
                </div>
                <p className="text-sm text-gray-500 truncate">Your items are waiting with 20% off...</p>
              </div>
            </div>
          </div>

          {/* Email 4 - Important */}
          <div className="px-4 py-3 bg-yellow-50">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2"></div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <p className="font-semibold text-[#1D1C1D]">Client Meeting Rescheduled</p>
                  <span className="text-xs text-gray-500">5 days ago</span>
                </div>
                <p className="text-sm text-gray-600 truncate">Can we move our call to Thursday?</p>
              </div>
            </div>
          </div>

          {/* Email 5 - More noise */}
          <div className="px-4 py-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-gray-300 mt-2"></div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <p className="font-medium text-[#1D1C1D]">LinkedIn</p>
                  <span className="text-xs text-gray-500">1 week ago</span>
                </div>
                <p className="text-sm text-gray-500 truncate">You have 12 new connection requests...</p>
              </div>
            </div>
          </div>

          {/* More emails indicator */}
          <div className="px-4 py-2 bg-gray-50 text-center">
            <p className="text-sm text-gray-500">... and 2,842 more</p>
          </div>
        </div>
      </div>

      {/* The Problem */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        <div className="px-4 py-2 bg-red-100 rounded-full">
          <span className="text-red-600 text-sm font-medium">Urgent emails buried</span>
        </div>
        <div className="px-4 py-2 bg-orange-100 rounded-full">
          <span className="text-orange-600 text-sm font-medium">No organization</span>
        </div>
        <div className="px-4 py-2 bg-yellow-100 rounded-full">
          <span className="text-yellow-600 text-sm font-medium">Wasting hours daily</span>
        </div>
      </div>

      {/* Swipe indicator */}
      <div className="flex items-center gap-2 text-[#616061]">
        <span className="text-sm">Swipe to see the solution →</span>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default Post7Slide02Before;
