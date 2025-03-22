import React, { useContext } from 'react';
import ProductCard from './ProductCard';  
import { ShopContext } from '../context/ShopContext';
const FeaturedProducts = () => {
  
  const {products}=useContext(ShopContext);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mb-15">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Featured Products</h1>
        <p className="text-gray-600 mb-8">
          A highly efficient slip-ring scanner for today's diagnostic requirements.
        </p>
      </div>
      
      <div className="flex justify-end mb-4">
        <a href="/pickleslist" className="text-red-800 hover:underline font-bold">Browse all pickles</a>
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