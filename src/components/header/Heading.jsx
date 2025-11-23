import React from 'react';
import { RiSearchLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart, FiChevronDown, FiChevronUp } from "react-icons/fi";
import SelectOption from './SelectOption';

const Heading = () => {
  const [category, setCategory] = React.useState("");
  const [showCart, setShowCart] = React.useState(false);
  const [showProfile, setShowProfile] = React.useState(false);

  const cartCount = 3;
  const wishlistCount = 5;

  return (
    <div className="container mx-auto p-3 relative">
      <div className="flex items-center justify-between w-full">
        {/* Logo - always visible */}
        <div id="logo" className="flex-shrink-0">
          <img src="/Logo.png" alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Middle: Search (full on lg, hidden on sm) */}
        <div className="hidden md:flex flex-1 mx-4">
          <div className="flex items-center bg-[var(--grey-color)] text-[var(--black-color)] overflow-hidden rounded">
            <SelectOption
              selected={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <input
              type="text"
              placeholder="Search for items..."
              className="placeholder:text-[var(--placeholder-color)] outline-none p-2 w-60 lg:w-80"
            />
            <button className="bg-[var(--primary-color)] text-white px-4 lg:px-5 py-2 lg:py-3 cursor-pointer">
              <RiSearchLine className="size-5" />
            </button>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
          {/* Wishlist - icon only on sm, with label on md+ */}
          <div
            id="wishlist"
            className="flex items-center gap-2 cursor-pointer relative"
          >
            <div className="relative inline-block">
              <FaRegHeart className="size-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-2 inline-flex items-center justify-center px-1.5 py-1 text-[10px] font-bold text-white bg-[var(--primary-color)] rounded-full">
                  {wishlistCount}
                </span>
              )}
            </div>
            <span className="hidden md:inline">Wishlist</span>
          </div>

          {/* Cart */}
          <div id="cart" className="relative">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setShowCart((prev) => !prev)}
            >
              <div className="relative inline-block">
                <FiShoppingCart className="size-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-2 inline-flex items-center justify-center px-1.5 py-1 text-[10px] font-bold text-white bg-[var(--primary-color)] rounded-full">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden md:flex flex-col">
                <span>My cart</span>
                <span>$0</span>
              </span>
              {showCart ? (
                <FiChevronUp className="size-4" />
              ) : (
                <FiChevronDown className="size-4" />
              )}
            </div>
            {showCart && (
              <div className="absolute top-full mt-2 right-0 bg-white border border-gray-200 shadow-md p-4 w-64 z-10">
                <p className="text-sm text-gray-600">Your cart is empty.</p>
              </div>
            )}
          </div>

          {/* User */}
          <div id="user" className="relative">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setShowProfile((prev) => !prev)}
            >
              <div className="h-8 w-8 rounded-full bg-amber-100 overflow-hidden">
                <img
                  src="/vite.svg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="hidden sm:inline">Jane Doe</span>
              {showProfile ? (
                <FiChevronUp className="size-4" />
              ) : (
                <FiChevronDown className="size-4" />
              )}
            </div>
            {showProfile && (
              <div className="absolute top-full mt-2 right-0 bg-white border border-gray-200 rounded shadow-md p-4 w-48 z-10">
                <p className="text-sm text-gray-600">Profile Settings</p>
                <p className="text-sm text-gray-600 mt-2">Logout</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Search (visible only on sm) */}
      <div className="mt-3 md:hidden">
        <div className="flex items-center bg-[var(--grey-color)] text-[var(--black-color)] overflow-hidden rounded">
          <SelectOption
            selected={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="text"
            placeholder="Search..."
            className="placeholder:text-[var(--placeholder-color)] outline-none p-2 flex-1 text-sm"
          />
          <button className="bg-[var(--primary-color)] text-white px-3 py-2 cursor-pointer">
            <RiSearchLine className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Heading;