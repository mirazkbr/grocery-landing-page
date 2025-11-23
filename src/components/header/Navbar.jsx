import React from 'react';
import { Link } from 'react-router-dom';
import { IoGridOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { PiFireBold } from "react-icons/pi";
import { MdOutlinePercent } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="container mx-auto p-3 text-[var(--full-black-color)] border-t border-gray-100">
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Browse All Categories – hidden on sm, shown on md+ */}
        <div className="hidden md:flex cursor-pointer p-3 bg-[var(--primary-color)] items-center gap-2 text-white rounded">
          <IoGridOutline className="size-5" />
          <span>Browse All Categories</span>
        </div>

        {/* Nav Links – always shown, but compact on sm */}
        <nav className="flex-1 md:flex-none">
          <ul className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-4">
            <li className="cursor-pointer flex items-center gap-1">
              <GoHome className="size-4 md:size-5" />
              <Link to="/" className="text-sm md:text-base">Home</Link>
            </li>
            <li className="cursor-pointer flex items-center gap-1">
              <PiFireBold className="size-4 md:size-5" />
              <Link to="/hot-deals" className="text-sm md:text-base">Hot Deals</Link>
            </li>
            <li className="cursor-pointer flex items-center gap-1">
              <MdOutlinePercent className="size-4 md:size-5" />
              <Link to="/promotions" className="text-sm md:text-base">Promotions</Link>
            </li>
            <li className="cursor-pointer flex items-center gap-1">
              <TfiAnnouncement className="size-4 md:size-5" />
              <Link to="/new-products" className="text-sm md:text-base">New Products</Link>
            </li>
          </ul>
        </nav>

        {/* Support Section – hidden on sm, shown on md+ */}
        <div className="hidden md:flex p-3 text-[var(--primary-color)] items-center gap-2">
          <BsTelephone className="size-5" />
          <span>+0123456789</span>
          <span className="text-[var(--full-black-color)] hidden lg:inline">24/7 support center</span>
        </div>
      </div>

      {/* Mobile-only compact support info (optional) */}
      <div className="mt-2 md:hidden text-center text-xs text-gray-600">
        <div className="flex items-center justify-center gap-1">
          <BsTelephone className="size-3" />
          <span>+0123456789</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;