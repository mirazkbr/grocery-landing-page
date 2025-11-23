import React from 'react';
import { PiPaperPlaneTilt } from "react-icons/pi";

const Banner = () => {
  return (
    <div className="relative w-full bg-[url('/hero-bg.png')] bg-cover bg-center text-white">
      {/* Hero Image - only visible on medium+ screens to avoid clutter on mobile */}
      <div className="absolute top-0 right-0 w-1/2 h-full hidden md:block">
        <img
          src="/hero-img.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10 px-4 py-12 md:py-20 flex flex-col items-start justify-center min-h-[400px] md:min-h-[500px]">
        <h1 className="text-[32px] md:text-[48px] lg:text-[55px] font-bold text-[var(--black-color)] max-w-full md:max-w-1/2 leading-tight">
          Don’t miss our daily amazing deals.
        </h1>
        <p className="mt-3 text-[16px] md:text-[20px] font-medium text-[var(--second-grey-color)] max-w-full md:max-w-1/2">
          Save up to 60% off on your first order
        </p>

        {/* Email Subscribe Form */}
        <div className="mt-6 w-full md:w-auto flex flex-col sm:flex-row items-start sm:items-center gap-2 bg-white p-1 rounded">
          <div className="flex items-center px-3 py-2 bg-gray-100">
            <PiPaperPlaneTilt className="size-5 text-[var(--placeholder-color)]" />
          </div>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:w-60 px-3 py-2 outline-none text-[var(--black-color)] text-[14px] placeholder:text-[var(--placeholder-color)] bg-transparent"
          />
          <button className="w-full sm:w-auto bg-[var(--primary-color)] text-white px-5 py-2.5 sm:py-3 mt-1 sm:mt-0 rounded cursor-pointer text-sm sm:text-base">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;