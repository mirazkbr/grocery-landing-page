import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaCartPlus } from "react-icons/fa6";

const items = [
  { name: 'potatos', image: '/products/potatos.png', category: 'vegetables', ratings: 4, price: 2.5, discount: 0.1 },
  { name: 'brocoli', image: '/products/brocoli.png', category: 'vegetables', ratings: 4, price: 5.0, discount: 0.1 },
  { name: 'redish', image: '/products/redish.png', category: 'vegetables', ratings: 3, price: 4.3, discount: 0.1 },
  { name: 'tomatos', image: '/products/tomatos.png', category: 'fruites', ratings: 5, price: 4.5, discount: 0.1 },
  { name: 'beans', image: '/products/beans.png', category: 'vegetables', ratings: 3, price: 3.2, discount: 0.1 }
];

const Product = () => {
  const activeCategory = "All";
  const navItems = ["All", "Vegetables", "Fruits", "Coffee & Teas", "Meat"];

  const renderStars = (count) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={`text-xs ${i < count ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
    ));
  };

  return (
    <div className="py-[var(--section-y-padding)] container mx-auto px-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
        <h3 className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold">
          Featured Products
        </h3>
        <ul className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4 text-[14px] sm:text-[16px] font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to="/"
                className={`px-3 py-1.5 rounded transition ${
                  activeCategory === item
                    ? 'text-[var(--primary-color)] font-semibold bg-white border border-[var(--primary-color)]'
                    : 'text-[var(--black-color)] hover:bg-gray-100'
                }`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Product Grid – NO SLIDER, FULLY RESPONSIVE */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {items.map((item, index) => {
          const discountedPrice = (item.price * (1 - item.discount)).toFixed(2);
          return (
            <div
              key={index}
              className="bg-white flex flex-col items-center text-center p-3 sm:p-4 rounded-xl shadow hover:shadow-md transition border"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain mb-2"
              />
              <span className="capitalize font-semibold text-gray-800 text-[14px] sm:text-[15px] line-clamp-1">
                {item.name}
              </span>
              <span className="text-[11px] sm:text-[12px] text-gray-500 capitalize mb-1">
                {item.category}
              </span>
              <div className="flex gap-0.5 mb-2">{renderStars(item.ratings)}</div>
              <div className="mb-2">
                <span className="text-[14px] sm:text-[15px] font-bold text-green-600">
                  ${discountedPrice}
                </span>
                {item.discount > 0 && (
                  <span className="text-[12px] sm:text-[13px] text-gray-400 line-through ml-1">
                    ${item.price.toFixed(2)}
                  </span>
                )}
              </div>
              <button
                className="mt-auto bg-[var(--primary-color)] text-white p-2 rounded-full hover:opacity-90 transition"
                aria-label={`Add ${item.name} to cart`}
              >
                <FaCartPlus className="text-sm" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;