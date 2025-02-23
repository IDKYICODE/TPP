import React from 'react';
import ProductCard from './ProductCard';  
import pick1 from "../assets/pick1.png"
import pick2 from "../assets/pick2.png"
import pick3 from "../assets/pick3.png"
import pick4 from "../assets/pick4.png"
import pick5 from "../assets/pick5.png"
import pick6 from "../assets/pick6.png"
import pick7 from "../assets/pick7.png"

const FeaturedProducts = () => {
  
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
      title: "Mango Avakaya",
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
    },
    {
      image: pick4,
      title: "Mango Avakaya",
      rating: 2,
      reviews: 24,
      discount: 29,
      currentPrice: 180.00,
      originalPrice: 220.00,
      unit: "250gms"
    },
    {
      image: pick5,
      title: "Mango Avakaya",
      rating: 2,
      reviews: 24,
      discount: 29,
      currentPrice: 180.00,
      originalPrice: 220.00,
      unit: "250gms"
    },
    {
      image: pick6,
      title: "Mango Avakaya",
      rating: 2,
      reviews: 24,
      discount: 29,
      currentPrice: 180.00,
      originalPrice: 220.00,
      unit: "250gms"
    },
    {
      image: pick7,
      title: "Mango Avakaya",
      rating: 2,
      reviews: 24,
      discount: 29,
      currentPrice: 180.00,
      originalPrice: 220.00,
      unit: "250gms"
    },
    {
      image: pick6,
      title: "Mango Avakaya",
      rating: 2,
      reviews: 24,
      discount: 29,
      currentPrice: 180.00,
      originalPrice: 220.00,
      unit: "250gms"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mb-15">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Featured Products</h1>
        <p className="text-gray-600 mb-8">
          A highly efficient slip-ring scanner for today's diagnostic requirements.
        </p>
      </div>
      
      <div className="flex justify-end mb-4">
        <a href="#/pickleslist" className="text-red-800 hover:underline font-bold">Browse all pickles</a>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            rating={product.rating}
            reviews={product.reviews}
            discount={product.discount}
            currentPrice={product.currentPrice}
            originalPrice={product.originalPrice}
            unit={product.unit}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;