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
    <div className='container mx-auto p-3 text-[var(--full-black-color)] flex gap-3 items-center justify-between border-t border-gray-100 '>
      {/* all category section  */}
      <div className='cursor-pointer p-3 bg-[var(--primary-color)] flex items-center gap-2 text-white'>
        <IoGridOutline className='size-5' />
        <span>Browse All Categories</span>
      </div>
      {/* nav links */}
      <nav>
        <ul className='flex items-center gap-4'>
          <li className='cursor-pointer flex items-center gap-1'>
            <GoHome />
            <Link to="/">Home</Link>
          </li>
          <li className='cursor-pointer flex items-center gap-1'>
            <PiFireBold />
            <Link to="/hot-deals">Hot Deals</Link>
          </li>
          <li className='cursor-pointer flex items-center gap-1'>
            <MdOutlinePercent />
            <Link to="/promotions">Promotions</Link>
          </li>
          <li className='cursor-pointer flex items-center gap-1'>
            <TfiAnnouncement />
            <Link to="/new-products">New products</Link>
          </li>
        </ul>
      </nav>
      {/* support section */}
      <div className=' p-3  text-[var(--primary-color)] flex items-center gap-2'>
        <BsTelephone />
        +0123456789
        <span className='text-[var(--full-black-color)]'>24/7 support center</span>
      </div>
    </div>
  )
}

export default Navbar