import React from "react";
import Promo1 from "../../assets/hero/card.jpg";
import Promo2 from "../../assets/hero/shopping.png";
import Promo3 from "../../assets/hero/women.png";

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative h-[500px] w-90  overflow-hidden shadow-lg hover:shadow-xl transition duration-300 group"
              style={{
                backgroundImage: `url(${card.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-end text-left px-6 pb-6 transition duration-300 group-hover:bg-opacity-60">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-white text-base mb-4">{card.description}</p>
                <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-300 transition">
                  Check It Out
                </button>
   
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
