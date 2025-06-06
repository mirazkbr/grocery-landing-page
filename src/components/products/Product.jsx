import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaArrowRight, FaCartPlus } from "react-icons/fa6"

const items = [
  { name: 'potatos', image: '/products/potatos.png', category: 'vegetables', ratings: 4, price: 2.5, discount: 0.1 },
  { name: 'brocoli', image: '/products/brocoli.png', category: 'vegetables', ratings: 4, price: 5.0, discount: 0.1 },
  { name: 'redish', image: '/products/redish.png', category: 'vegetables', ratings: 3, price: 4.3, discount: 0.1 },
  { name: 'tomatos', image: '/products/tomatos.png', category: 'fruites', ratings: 5, price: 4.5, discount: 0.1 },
  { name: 'beans', image: '/products/beans.png', category: 'vegetables', ratings: 3, price: 3.2, discount: 0.1 }
]

const Product = () => {
  const activeCategory = "All"
  const navItems = ["All", "Vegetables", "Fruits", "Coffe & teas", "Meat"]

  const renderStars = (count) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={`text-sm ${i < count ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
    ))
  }

  return (
    <div className="py-[var(--section-y-padding)] container mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-[32px] font-semibold">Featured Products</h3>
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-6">
          {items.map((item, index) => {
            const discountedPrice = (item.price * (1 - item.discount)).toFixed(2)
            return (
              <div
                key={index}
                className="bg-white flex flex-col items-center text-center p-4 rounded-xl shadow hover:shadow-md transition border relative"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-contain mb-3"
                />
                <span className="capitalize font-semibold text-gray-800 text-lg mb-1">{item.name}</span>
                <span className="text-xs text-gray-500 capitalize mb-2">{item.category}</span>
                <div className="flex gap-1 mb-2">{renderStars(item.ratings)}</div>
                <div className="mb-2">
                  <span className="text-[15px] font-semibold text-green-600">${discountedPrice}</span>{' '}
                  {item.discount > 0 && (
                    <span className="text-sm text-gray-400 line-through">${item.price.toFixed(2)}</span>
                  )}
                </div>
                <button className="mt-auto bg-[var(--primary-color)] text-white p-2 rounded-full hover:opacity-90 transition">
                  <FaCartPlus />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Product
