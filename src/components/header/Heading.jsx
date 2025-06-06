import React from 'react'
import { RiSearchLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart, FiChevronDown, FiChevronUp } from "react-icons/fi";
import SelectOption from './SelectOption';

const Heading = () => {
  const [category, setCategory] = React.useState("");
  const [showCart, setShowCart] = React.useState(false);
  const [showProfile, setShowProfile] = React.useState(false);

  const cartCount = 3;     // example count
  const wishlistCount = 5; // example count

  return (
    <div className='flex justify-between items-center p-3 text-[var(--full-black-color)] container mx-auto relative'>
      {/* logo */}
      <div id='logo'>
        <img src="/Logo.png" alt="Logo" />
      </div>

      {/* search */}
      <div id='search' className='flex items-center bg-[var(--grey-color)] text[var(--black-color)]  overflow-hidden'>
        <SelectOption
          selected={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          placeholder='Search for items...'
          className='placeholder:text-[var(--placeholder-color)] outline-none p-2 w-60'
        />
        <button className='bg-[var(--primary-color)] text-white px-5 py-3 cursor-pointer'>
          <RiSearchLine className='size-5' />
        </button>
      </div>

      {/* wishlist */}
      <div id='wishlist' className='flex items-center gap-2 cursor-pointer relative'>
        <div className='relative inline-block'>
          <FaRegHeart className='size-5' />
          {wishlistCount > 0 && (
            <span className="absolute -top-1 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-[var(--primary-color)] rounded-full">
              {wishlistCount}
            </span>
          )}
        </div>
        <span>Wishlist</span>
      </div>

      {/* cart */}
      <div id='cart' className='relative'>
        <div
          className='flex items-center gap-2 cursor-pointer relative'
          onClick={() => setShowCart(prev => !prev)}
        >
          <div className='relative inline-block'>
            <FiShoppingCart className='size-5' />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-[var(--primary-color)] rounded-full">
                {cartCount}
              </span>
            )}
          </div>
          <span className='flex flex-col'>
            <span>My cart</span>
            <span>$0</span>
          </span>
          {showCart ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {showCart && (
          <div className="absolute top-full mt-2 right-0 bg-white border border-gray-200  shadow-md p-4 w-64 z-10">
            <p className="text-sm text-gray-600">Your cart is empty.</p>
          </div>
        )}
      </div>

      {/* user */}
      <div id='user' className='relative'>
        <div
          className='flex items-center gap-2 cursor-pointer'
          onClick={() => setShowProfile(prev => !prev)}
        >
          <div className='h-8 w-8 rounded-full bg-amber-100 overflow-hidden'>
            <img src="/vite.svg" alt="Profile" className='w-full h-full object-cover' />
          </div>
          <span>Jane Doe</span>
          {showProfile ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {showProfile && (
          <div className="absolute top-full mt-2 right-0 bg-white border border-gray-200 rounded shadow-md p-4 w-48 z-10">
            <p className="text-sm text-gray-600">Profile Settings</p>
            <p className="text-sm text-gray-600 mt-2">Logout</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Heading;
