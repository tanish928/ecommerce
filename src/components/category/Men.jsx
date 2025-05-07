import React from 'react';

const categories = [
  {
    name: "Classic Fit T-shirts",
    image: "/images/classic-fit.jpg",
  },
  {
    name: "Cargos",
    image: "/images/cargos.jpg",
  },
  {
    name: "Pants",
    image: "/images/pants.jpg",
  },
  {
    name: "Full Sleeve T-shirts",
    image: "/images/full-sleeve.jpg",
  },
  {
    name: "Vests",
    image: "/images/vests.jpg",
  },
  {
    name: "Sneakers",
    image: "/images/sneakers.jpg",
  },
];

const CategoryCards = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Shop by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3">
              <h3 className="text-white text-sm font-semibold">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;
