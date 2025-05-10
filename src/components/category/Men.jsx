import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';

SwiperCore.use([Autoplay]);

const categories = [
  {
    name: "Classic Fit T-shirts",
    image: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2019/12/banner-03.jpg",
  },
  {
    name: "Cargos",
    image: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2019/12/home-new-bg-free-img.jpg",
  },
  {
    name: "Pants",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Full Sleeve T-shirts",
    image: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Vests",
    image: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2019/12/home-new-bg-free-img.jpg",
  },
  {
    name: "Sneakers",
    image: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Classic Fit T-shirts",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Cargos",
    image: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2019/12/home-new-bg-free-img.jpg",
  },
  {
    name: "Pants",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Full Sleeve T-shirts",
    image: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2019/12/home-new-bg-free-img.jpg",
  },
  {
    name: "Vests",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sneakers",
    image: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=800&q=80",
  },
];

const CategoryCards = () => {
  return (
    <div className="bg-gray-100 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Shop by Category - Men
      </h2>
      <Swiper
        dir="rtl"
        loop={true}
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div className="relative group overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer h-[300px]">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3">
                <h3 className="text-white text-sm font-semibold">{category.name}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoryCards;
