import React from 'react';

// Sample product data
const data = [
  { product: 'Orange 1 kg', price: 1.5, discount: 1.2, image: '/top/orange.png', ratings: 4, type: ['topsales', 'toprated', 'trending'] },
  { product: 'Vegetable Mix 1 kg', price: 2.0, discount: 1.5, image: '/top/vegitable.png', ratings: 5, type: ['topsales', 'toprated'] },
  { product: 'Strawberry 1 kg', price: 1.2, discount: 1.0, image: '/top/straberry.png', ratings: 3, type: ['topsales', 'recent'] },
  { product: 'Apple 1 kg', price: 1.2, discount: 1.0, image: '/top/apple.png', ratings: 5, type: ['toprated', 'recent'] },
  { product: 'Carrot 1 kg', price: 1.2, discount: 1.0, image: '/top/carrot.png', ratings: 4, type: ['trending', 'recent'] },
  { product: 'Potato 1 kg', price: 1.2, discount: 1.0, image: '/top/potato.png', ratings: 3, type: ['trending'] }
];

// Helper to render stars
const StarRating = ({ rating }) => {
  return (
    <div className="flex text-yellow-500 text-[10px] sm:text-[11px]">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i}>{i < rating ? '★' : '☆'}</span>
      ))}
    </div>
  );
};

// Reusable ProductCard component
const ProductCard = ({ product }) => (
  <div className="flex items-start gap-3 p-2 bg-white rounded-lg hover:shadow-sm transition">
    <img 
      src={product.image} 
      alt={product.product} 
      className="w-14 h-14 sm:w-16 sm:h-16 object-contain flex-shrink-0" 
    />
    <div className="min-w-0 flex flex-col">
      <p className="font-medium text-[13px] sm:text-[14px] text-gray-800 truncate">
        {product.product}
      </p>
      <StarRating rating={product.ratings} />
      <div className="flex items-center gap-1 mt-0.5">
        <span className="text-[11px] sm:text-[12px] text-gray-400 line-through">
          ${product.price.toFixed(2)}
        </span>
        <span className="text-green-600 font-bold text-[12px] sm:text-[13px]">
          ${product.discount.toFixed(2)}
        </span>
      </div>
    </div>
  </div>
);

// Main Component
const TopItems = () => {
  const filterItems = (type) => data.filter((item) => item.type.includes(type));

  const sections = [
    { id: 'topsales', title: 'Top Sells', items: filterItems('topsales') },
    { id: 'toprated', title: 'Top Rated', items: filterItems('toprated') },
    { id: 'trending', title: 'Trending Items', items: filterItems('trending') },
    { id: 'recent', title: 'Recently Added', items: filterItems('recent') },
  ];

  return (
    <div className="w-full py-[var(--section-y-padding)] container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {sections.map((section) => (
          <div key={section.id} className="flex flex-col gap-3">
            <h4 className="text-[16px] sm:text-[18px] font-semibold text-[var(--black-color)]">
              {section.title}
            </h4>
            <div className="flex flex-col gap-2">
              {section.items.map((item, index) => (
                <ProductCard key={`${section.id}-${index}`} product={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopItems;