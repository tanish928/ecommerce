import React from 'react';

const products = [
  {
    id: 1,
    name: 'T-shirt',
    price: 20,
    image:
      'https://plus.unsplash.com/premium_photo-1683141052679-942eb9e77760?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Shoes',
    price: 50,
    image: 'https://images.unsplash.com/photo-1513094735237-8f2714d57c13?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'Hat',
    price: 15,
    image: 'https://cdn.pixabay.com/photo/2017/08/05/00/12/girl-2581913_1280.jpg',
  },
];

const ProductList = ({ onAddToWishlist }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col justify-between h-full w-full border rounded shadow overflow-hidden"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="flex flex-col flex-grow p-4">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="mt-2">${product.price}</p>
            <button
              onClick={() => onAddToWishlist(product)}
              className="mt-auto px-4 py-2 bg-pink-500 text-white rounded"
            >
              ♥ Add to Wishlist
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
