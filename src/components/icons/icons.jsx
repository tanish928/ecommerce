import React from 'react';
import { FaGlobe, FaCheckCircle, FaTags, FaShieldAlt } from 'react-icons/fa';

const features = [
  {
    icon: <FaGlobe size={40} className="text-yellow-300" />,
    title: 'Worldwide Shipping',
    description: 'We deliver your orders wherever you are, across the globe.',
  },
  {
    icon: <FaCheckCircle size={40} className="text-yellow-300" />,
    title: 'Best Quality',
    description: 'Premium quality products guaranteed with every purchase.',
  },
  {
    icon: <FaTags size={40} className="text-yellow-300" />,
    title: 'Best Offers',
    description: 'Unbeatable deals and discounts you won’t want to miss.',
  },
  {
    icon: <FaShieldAlt size={40} className="text-yellow-300" />,
    title: 'Secure Payment',
    description: 'Your transactions are safe with advanced encryption.',
  },
];

const FeatureIcons = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full my-10">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white/40 backdrop-blur-md rounded-xl p-6 flex flex-col items-center text-center text-black hover:shadow-lg transition"
        >
          {feature.icon}
          <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
          <p className="mt-2 text-sm text-gray-800">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureIcons;
