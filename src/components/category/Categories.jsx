import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const items = [
  { name: 'vegetables', image: '/category/vegetable.png', quantity: "10" },
  { name: 'peach', image: '/category/peach.png', quantity: "40" },
  { name: 'potato', image: '/category/potato.png', quantity: "20" },
  { name: 'strawberry', image: '/category/strawberry.png', quantity: "30" },
  { name: 'carrot', image: '/category/carrot.png', quantity: "15" },
  { name: 'orange', image: '/category/orange.png', quantity: "25" },
  { name: 'apple', image: '/category/apple.png', quantity: "50" },
];

const softColors = [
  'bg-[#fef6f6]',
  'bg-[#f5fbef]',
  'bg-[#eef7f3]',
  'bg-[#fff4ec]',
  'bg-[#f3f3ff]',
  'bg-[#fff8ec]',
  'bg-[#effaf0]'
];

const Categories = () => {
  const activeCategory = "All";
  const navItems = ["All", "Vegetables", "Fruits", "Coffee & Teas", "Meat"];

  return (
    <div className="py-[var(--section-y-padding)] container mx-auto px-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
        <h3 className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold">
          Explore Categories
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

      {/* Category Grid – NO SLIDER */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {items.map((item, index) => (
          <Link
            key={index}
            to={`/category/${item.name.toLowerCase()}`}
            className={`flex flex-col items-center text-center p-3 sm:p-4 rounded-xl shadow hover:shadow-md transition ${softColors[index % softColors.length]}`}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-2"
            />
            <span className="capitalize font-medium text-gray-800 text-[13px] sm:text-[14px] line-clamp-1">
              {item.name}
            </span>
            <span className="text-[11px] sm:text-[12px] text-gray-500 mt-1">
              {item.quantity} items
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;