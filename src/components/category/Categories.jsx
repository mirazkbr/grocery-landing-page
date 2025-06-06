import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const items = [
  { name: 'vegetables', image: '/category/vegetable.png', "quantity": "10" },
  { name: 'peach', image: '/category/peach.png', "quantity": "40" },
  { name: 'potato', image: '/category/potato.png', "quantity": "20" },
  { name: 'strawberry', image: '/category/strawberry.png', "quantity": "30" },
  { name: 'carrot', image: '/category/carrot.png', "quantity": "15" },
  { name: 'orange', image: '/category/orange.png', "quantity": "25" },
  { name: 'apple', image: '/category/apple.png', "quantity": "50" },
]

// More subtle pastel background colors
const softColors = [
  'bg-[#fef6f6]',
  'bg-[#f5fbef]',
  'bg-[#eef7f3]',
  'bg-[#fff4ec]',
  'bg-[#f3f3ff]',
  'bg-[#fff8ec]',
  'bg-[#effaf0]'
]

const Categories = () => {
  // For demonstration: manually mark the first item as "active"
  const activeCategory = "All";

  const navItems = ["All", "Vegetables", "Fruits", "Coffe & teas", "Meat"];

  return (
    <div className="py-[var(--section-y-padding)] container mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-[32px] font-semibold">Explore Categories</h3>
        <ul className="flex gap-4 text-[16px] font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to="/"
                className={`px-2 py-1 rounded transition ${
                  activeCategory === item
                    ? 'text-[var(--primary-color)] font-semibold'
                    : 'text-[var(--black-color)]'
                }`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative">
        {/* Dummy Slide Arrows */}
        <button className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-[#f0f0f0] shadow p-2 rounded-full cursor-not-allowed">
          <FaArrowLeft />
        </button>
        <button className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-[#f0f0f0] shadow p-2 rounded-full cursor-not-allowed">
          <FaArrowRight />
        </button>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 px-6">
          {items.map((item, index) => (
            <Link
              key={index}
              to={`/category/${item.name.toLowerCase()}`}
              className={`flex flex-col items-center text-center p-4 rounded-xl shadow hover:shadow-md transition ${softColors[index % softColors.length]}`}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-contain mb-3"
              />
              <span className="capitalize font-medium text-gray-800">{item.name}</span>
              <span className="text-sm text-gray-500">{item.quantity} items</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Categories
