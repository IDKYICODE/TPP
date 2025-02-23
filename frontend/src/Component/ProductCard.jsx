import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// If you have a default local image, import it like this:
// import defaultImage from '../assets/default-product.jpg';

const ProductCard = ({
  // If using a local default image:
  // image = defaultImage,
  image = "/api/placeholder/320/400",
  title = "Mango Avakaya",
  rating = 2,
  reviews = 24,
  discount = 29,
  currentPrice = 180.00,
  originalPrice = 220.00,
  unit = "250gms"
}) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/product");
  };

  // Star rating components for better readability
  const FilledStar = () => (
    <svg
      className="w-4 h-4 text-yellow-400"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  const EmptyStar = () => (
    <svg
      className="w-4 h-4 text-gray-300"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm p-5 w-70">
        <Link to="/product">
          <img
            src={image}
            alt={title}
            className="w-full h-56 object-cover rounded-lg mb-3"
          />
       
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <div className="flex">
                {[...Array(rating)].map((_, i) => (
                  <FilledStar key={`filled-${i}`} />
                ))}
                {[...Array(5 - rating)].map((_, i) => (
                  <EmptyStar key={`empty-${i}`} />
                ))}
              </div>
              <span className="text-gray-500 text-sm ml-1">({reviews})</span>
            </div>
            <span className="bg-[#80B500] text-white px-2 py-1 rounded text-sm">
              -{discount}%
            </span>
          </div>
          <h3 className="text-lg font-medium mb-2">{title}</h3>
          <div className="flex items-center mb-4">
            <span className="text-lg font-bold">₹{currentPrice.toFixed(2)}</span>
            <span className="text-sm text-gray-500 ml-1">per {unit}</span>
            <span className="text-gray-400 line-through ml-2">₹{originalPrice.toFixed(2)}</span>
          </div>
        </Link>
        <div className="flex gap-2">
          <button 
            onClick={handleClick} 
            className="bg-[#80B500] text-white px-4 py-2 rounded-md hover:bg-green-700 flex-1"
          >
            Buy Now
          </button>
          <button 
            className="border border-[#80B500] text-[#80B500] px-4 py-2 rounded-md hover:bg-green-50 flex-1"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;