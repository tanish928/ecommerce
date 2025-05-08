import React from 'react';

const HeroBanner = () => {
  return (
    <div className="w-70 py-16 flex justify-center items-start bg-white min-h-[200vh]">
      {/* Sticky Image + Text Section */}
      <div
        className="w-[90%] h-[600px]  relative flex items-center justify-start px-10 sticky top-20"
        style={{
          backgroundImage:
            "url('https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2019/12/banner-03.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="text-white max-w-xl">
          <p className="text-sm uppercase tracking-wider mb-2 text-yellow-300">Limited Time Offer</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Special Edition</h1>
          <p className="text-base md:text-lg mb-6">
            Buy This T-shirt At 20% Discount, Use Code <span className="text-yellow-300">OFF20</span>
          </p>
          <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-300 transition">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
