import React from 'react';
import { FaShoppingCart, FaHeart, FaSearch } from 'react-icons/fa';
import ProductCard from './ProductCard';

// Import images
import pick1 from '../assets/pick1.png';
import pick2 from '../assets/pick2.png';
import pick3 from '../assets/pick3.png';

const TrendingProducts = () => {
  const products = [
    {
      image: pick1,
      title: "Mango Avakaya",
      rating: 2,
      reviews: 24,
      discount: 29,
      currentPrice: 180.00,
      originalPrice: 220.00,
      unit: "250gms"
    },
    {
      image: pick2,
      title: "Sesame Mango (Nuvvulu)",
      rating: 2,
      reviews: 24,
      discount: 29,
      currentPrice: 180.00,
      originalPrice: 220.00,
      unit: "250gms"
    },
    {
      image: pick3,
      title: "Mango Avakaya",
      rating: 2,
      reviews: 24,
      discount: 29,
      currentPrice: 180.00,
      originalPrice: 220.00,
      unit: "250gms"
    }
  ];

  // Hover action buttons component for better organization
  const HoverActionButtons = () => (
    <div className="flex gap-2">
      <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full hover:bg-[#95C953] hover:text-white transition-colors shadow-md">
        <FaShoppingCart className="w-4 h-4" />
      </button>
      <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full hover:bg-[#95C953] hover:text-white transition-colors shadow-md">
        <FaHeart className="w-4 h-4" />
      </button>
      <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full hover:bg-[#95C953] hover:text-white transition-colors shadow-md">
        <FaSearch className="w-4 h-4" />
      </button>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-15 mb-15">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Trending Products</h1>
        <p className="text-gray-600">
          A highly efficient slip-ring scanner for today's diagnostic requirements.
        </p>
      </div>
     
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {products.map((product, index) => (
          <div key={`product-${index}`} className="group relative">
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 group-hover:border group-hover:border-[#95C953] transition-all duration-300 w-70" />
            <ProductCard {...product} />
            {/* Hover Icons Overlay */}
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <HoverActionButtons />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;