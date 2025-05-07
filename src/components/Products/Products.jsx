import React from "react";
import Promo1 from "../../assets/hero/girl photo.jpg";
import Promo2 from "../../assets/hero/girl photo.jpg";
import Promo3 from "../../assets/hero/girl photo.jpg";

const cards = [
  {
    id: 1,
    img: Promo1,
    title: "Spring Collection",
    description: "Fresh styles for the season. Up to 40% off on selected items.",
  },
  {
    id: 2,
    img: Promo2,
    title: "New Arrivals",
    description: "Be the first to shop our latest products this month.",
  },
  {
    id: 3,
    img: Promo3,
    title: "Mega Sale",
    description: "Unbeatable discounts for a limited time only.",
  },
];

const Products = () => {
  return (
    <section className="w-full bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
