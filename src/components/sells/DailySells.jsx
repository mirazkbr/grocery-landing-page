import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Card from './Card';
import RegistrationCard from './RegistrationCard';

const DailySells = () => {
  const [timeLeft, setTimeLeft] = useState(12 * 60 * 60); // 12 hours in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <div className="w-full container mx-auto py-[var(--section-y-padding)] px-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-8 md:pb-[50px]">
        {/* Title + Tabs + Timer */}
        <div className="w-full md:max-w-[70%] flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-4">
          <h3 className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold whitespace-nowrap">
            Daily Best Sells
          </h3>

          {/* Tabs */}
          <ul className="flex gap-2 sm:gap-4 text-[14px] sm:text-[16px] font-medium">
            <li className="px-2.5 py-1 bg-gray-100 rounded cursor-pointer">Featured</li>
            <li className="px-2.5 py-1 hover:bg-gray-100 rounded cursor-pointer">Popular</li>
            <li className="px-2.5 py-1 hover:bg-gray-100 rounded cursor-pointer">New</li>
          </ul>

          {/* Countdown Timer */}
          <div className="text-[16px] sm:text-[18px] font-bold bg-[#F35244] text-white px-3 py-1.5 sm:px-4 sm:py-2 whitespace-nowrap">
            Expires in: {formatTime(timeLeft)}
          </div>
        </div>

        {/* Arrows – Optional: Remove if not needed */}
        {/* 
        <div className="flex gap-2">
          <button className="bg-[#f0f0f0] shadow p-2 rounded-full">
            <FaArrowLeft className="text-gray-600" />
          </button>
          <button className="bg-[#f0f0f0] shadow p-2 rounded-full">
            <FaArrowRight className="text-gray-600" />
          </button>
        </div>
        */}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
        <Card />
        <RegistrationCard />
        {/* Add more cards if needed */}
      </div>
    </div>
  );
};

export default DailySells;