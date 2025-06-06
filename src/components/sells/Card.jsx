import React from 'react'

const data = [
  {
    productName: "Coffe 1kg",
    image: "/sales/coffe.png",
    price: 2.99,
    discount: 1.99,
    ratings: 4,
    category: "Coffe & teas",
    quantity: 50,
    sold: 20,
  },
  {
    productName: "Halal Sausage 350g",
    image: "/sales/sausage.png",
    price: 3.99,
    discount: 2.99,
    ratings: 5,
    category: "Meat",
    quantity: 40,
    sold: 30,
  },
  {
    productName: "Green Tea 250g",
    image: "/sales/greenTea.png",
    price: 4.99,
    discount: 3.99,
    ratings: 3,
    category: "Coffe & teas",
    quantity: 30,
    sold: 10,
  },
  {
    productName: "Onion 1kg",
    image: "/sales/onion.png",
    price: 5.99,
    discount: 4.99,
    ratings: 2,
    category: "Vegetables",
    quantity: 20,
    sold: 5,
  },
]

const getStars = (count) => {
  return '★'.repeat(count) + '☆'.repeat(5 - count)
}

const Card = () => {
  return (
    <>
      {data.map((item, index) => {
        const percentSold = (item.sold / item.quantity) * 100

        return (
          <div key={index} className="bg-white border hover:shadow-lg transition-shadow flex flex-col p-4">
            <img
              src={item.image}
              alt={item.productName}
              className="w-full h-40 object-contain mb-4 rounded-md bg-white"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">{item.productName}</h3>
              <p className="text-sm text-gray-500 mb-1">
                <span className="bg-gray-100 px-2 py-0.5 rounded-full text-xs">{item.category}</span>
              </p>
              <div className="text-yellow-500 text-sm mb-2">{getStars(item.ratings)}</div>
              <div className="flex items-center gap-2 mb-2">
                <p className="text-gray-900 font-bold">${item.discount.toFixed(2)}</p>
                <p className="text-sm line-through text-gray-400">${item.price.toFixed(2)}</p>
              </div>
              <div className="mb-2 text-sm text-gray-600">
                <p>Sold: {item.sold} / {item.quantity}</p>
                <div className="w-full h-2 bg-gray-200 rounded-full mt-1 overflow-hidden">
                  <div
                    className="h-full bg-[var(--primary-color)] rounded-full"
                    style={{ width: `${percentSold}%` }}
                  />
                </div>
              </div>
            </div>
            <button
              className="mt-4 bg-[var(--primary-color)] hover:bg-green-700 text-white text-sm font-medium py-2 transition-all"
              onClick={() => alert(`Added ${item.productName} to cart`)}
            >
              Add to Cart
            </button>
          </div>
        )
      })}
    </>
  )
}

export default Card
