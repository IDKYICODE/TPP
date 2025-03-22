import React, { useState, useContext } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

// Import images
import pick1 from '../assets/pick1.png';
import pick2 from '../assets/pick2.png';
import pick3 from '../assets/pick3.png';
import { ShopContext } from '../context/ShopContext';

const UpperProductDetails = ({product}) => {
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const {addToCart } = useContext(ShopContext);
  
  // Array of images using imported images
  const images = [
    { main: pick1, thumb: pick1 },
    { main: pick3, thumb: pick2 }
  ];

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
     if(quantity<4) setQuantity(quantity + 1);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Navigation button component for reusability
  const NavigationButton = ({ direction, onClick, children }) => (
    <button 
      onClick={onClick}
      className={`absolute ${direction === 'left' ? 'left-2' : 'right-2'} top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md z-10 hover:bg-[#99cc00] transition-colors group`}
    >
      {children}
    </button>
  );

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-200px)] mb-10">
      <div className="max-w-5xl p-6 bg-white rounded-lg w-full mx-4">
        <div className="flex gap-8">
          {/* Image Section */}
          <div className="relative w-1/2">
            <NavigationButton direction="left" onClick={previousImage}>
              <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
            </NavigationButton>
            
            <img 
              src={images[currentImageIndex].main}
              alt="Mango Avakaya"
              className="w-full rounded-lg transition-opacity duration-300"
            />
            
            <NavigationButton direction="right" onClick={nextImage}>
              <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
            </NavigationButton>

            {/* Thumbnail previews */}
            <div className="absolute -top-4 left-4 flex gap-2">
              {images.map((image, index) => (
                <img 
                  key={`thumb-${index}`}
                  src={image.thumb}
                  alt={`thumbnail ${index + 1}`}
                  onClick={() => selectImage(index)}
                  className={`w-12 h-12 rounded border-2 cursor-pointer transition-all duration-200 ${
                    currentImageIndex === index 
                      ? 'border-[#99cc00] shadow-lg scale-110' 
                      : 'border-white shadow-md hover:border-[#99cc00] hover:scale-105'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="w-1/2 space-y-4">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-semibold">{product.title}</h2>
              <span className="text-xl font-medium text-[#99cc00]">₹ {product.currentPrice}</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(product.rating)].map((_, i) => (
                  <Star key={`star-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-500">(22)</span>
            </div>

            <p className="text-gray-600 text-sm">
              {product.description}
            </p>

            <div>
              <div className="text-sm font-medium mb-2 flex">Grams:</div>
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center">
                  <button
                    onClick={decreaseQuantity}
                    className="w-8 h-8 bg-[#99cc00] text-white flex items-center justify-center hover:bg-[#88b300] transition-colors text-xl font-bold rounded-l"
                  >
                    -
                  </button>
                  <div className="h-8 px-2 flex items-center justify-center text-gray-700 border-t border-b border-[#99cc00]">
                    {quantity*250}g
                  </div>
                  <button
                    onClick={increaseQuantity}
                    className="w-8 h-8 bg-[#99cc00] text-white flex items-center justify-center hover:bg-[#88b300] transition-colors text-xl font-bold rounded-r"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div className="text-sm font-medium mb-1 flex flex-wrap">Categories:</div>
              <div className="flex gap-2 text-sm text-gray-600 mb-22">
                <span>All,</span>
                <span>Featured,</span>
                <span>Organic,</span>
                <span>Vegetable</span>
              </div>
            </div>

            <button onClick={()=>addToCart(product._id,quantity*250)} className="w-full py-3 bg-[#99cc00] text-white rounded-md font-medium hover:bg-[#88b300] transition-colors">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperProductDetails;