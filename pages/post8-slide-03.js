import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const Post8Slide03Results = () => {
  const flights = [
    { airline: 'JAL', time: '10:30 AM - 4:45 PM+1', price: '$749', stops: 'Direct', rating: '4.8 ★' },
    { airline: 'ANA', time: '2:15 PM - 8:30 PM+1', price: '$689', stops: 'Direct', rating: '4.7 ★' },
    { airline: 'United', time: '8:45 AM - 6:20 PM+1', price: '$599', stops: '1 stop', rating: '4.2 ★' },
  ];

  return (
    <div className={`${inter.className} min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F8F7F5] to-[#D4A574] p-8 font-sans antialiased`}>
      {/* Title */}
      <div className="text-center mb-6">
        <h1 className="font-sans text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent bg-[length:200%_auto] mb-2">
          Best Options
        </h1>
        <p className="text-xl text-[#616061]">Compared in seconds</p>
      </div>

      {/* Results Table */}
      <div className="w-full max-w-[550px] bg-white rounded-xl shadow-xl overflow-hidden mb-6">
        {/* Table Header */}
        <div className="bg-gradient-to-r from-[#D4A574] to-[#c53131] px-4 py-3">
          <p className="text-white font-semibold">✈️ Flights to Tokyo</p>
          <p className="text-white/80 text-sm">Sorted by value</p>
        </div>

        {/* Table Content */}
        <div className="divide-y divide-gray-100">
          {flights.map((flight, index) => (
            <div key={index} className={`px-4 py-3 ${index === 1 ? 'bg-green-50 border-l-4 border-green-500' : ''}`}>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-[#1D1C1D]">{flight.airline}</p>
                  <p className="text-sm text-gray-600">{flight.time}</p>
                  <p className="text-xs text-gray-500">{flight.stops}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-[#1D1C1D]">{flight.price}</p>
                  <p className="text-sm text-yellow-600">{flight.rating}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Best Deal Badge */}
        <div className="bg-green-100 px-4 py-2 text-center border-t border-green-200">
          <p className="text-green-700 font-medium">★ Best Deal: ANA Direct Flight - $689</p>
        </div>
      </div>

      {/* Hotels Preview */}
      <div className="w-full max-w-[550px] bg-white rounded-xl shadow-xl overflow-hidden mb-6">
        <div className="bg-blue-50 px-4 py-3 border-b border-blue-100">
          <p className="text-blue-700 font-semibold">🏨 Top Hotel Pick</p>
        </div>
        <div className="px-4 py-3">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-semibold text-[#1D1C1D]">Shinjuku Granbell Hotel</p>
              <p className="text-sm text-gray-600">⭐⭐⭐⭐ 4.6/5 (2,847 reviews)</p>
              <p className="text-xs text-green-600 mt-1">✓ Free cancellation</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-[#1D1C1D]">$145/night</p>
              <p className="text-xs text-gray-500">vs $210 elsewhere</p>
            </div>
          </div>
        </div>
      </div>

      {/* Time Saved */}
      <div className="text-center mb-6">
        <p className="text-xl text-[#1D1C1D]">
          You saved <span className="text-green-600 font-bold">3 hours</span> of searching
        </p>
      </div>

      {/* Swipe indicator */}
      <div className="flex items-center gap-2 text-[#616061]">
        <span className="text-sm">Swipe to book →</span>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default Post8Slide03Results;
