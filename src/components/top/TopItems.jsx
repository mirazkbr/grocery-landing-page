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
    <div className="flex text-yellow-500 text-sm">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i}>{i < rating ? '★' : '☆'}</span>
      ))}
    </div>
  );
};

// Reusable ProductCard component
const ProductCard = ({ product }) => (
  <div className="flex items-start  overflow-hidden  bg-white">
    <img src={product.image} alt={product.product} className="w-20 h-20 object-cover" />
    <div className="p-2 flex flex-col">
      <p className="font-semibold text-sm">{product.product}</p>
      <StarRating rating={product.ratings} />
      <div className="flex items-center gap-2 mt-1">
        <span className="text-sm text-gray-400 line-through">${product.price.toFixed(2)}</span>
        <span className="text-green-600 font-bold text-sm">${product.discount.toFixed(2)}</span>
      </div>
    </div>
  </div>
);

// Main Component
const TopItems = () => {
  const filterItems = (type) => data.filter((item) => item.type.includes(type));

  return (
    <div className="w-full h-auto py-[var(--section-y-padding)] container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className='flex flex-col gap-4'>
        <h4 className="text-lg font-semibold mb-2">Top Sells</h4>
        {filterItems('topsales').map((item, index) => (
          <ProductCard key={`topsales-${index}`} product={item} />
        ))}
      </div>

      <div className='flex flex-col gap-4'>
        <h4 className="text-lg font-semibold mb-2">Top Rated</h4>
        {filterItems('toprated').map((item, index) => (
          <ProductCard key={`toprated-${index}`} product={item} />
        ))}
      </div>

      <div className='flex flex-col gap-4'>
        <h4 className="text-lg font-semibold mb-2">Trending Items</h4>
        {filterItems('trending').map((item, index) => (
          <ProductCard key={`trending-${index}`} product={item} />
        ))}
      </div>

      <div className='flex flex-col gap-4'>
        <h4 className="text-lg font-semibold mb-2">Recently Added</h4>
        {filterItems('recent').map((item, index) => (
          <ProductCard key={`recent-${index}`} product={item} />
        ))}
      </div>
    </div>
  );
};

export default TopItems;
