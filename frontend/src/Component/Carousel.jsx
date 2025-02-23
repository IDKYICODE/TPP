import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import healthyfood from '../assets/healthy-food.png';
import lemonade from '../assets/lemonade.png';
import sandwich from '../assets/sandwich.png';
import FillOutline from '../assets/FillOutline.png';

const categories = [
  {
    name: 'Fruits & Vegies',
    items: 235,
    iconUrl: healthyfood,
    bgColor: 'bg-lime-100'
  },
  {
    name: 'Herbal Tea',
    items: 235,
    iconUrl: healthyfood,
    bgColor: 'bg-emerald-100'
  },
  {
    name: 'Juices',
    items: 235,
    iconUrl: lemonade,
    bgColor: 'bg-amber-100'
  },
  {
    name: 'Fast Foods',
    items: 235,
    iconUrl: sandwich,
    bgColor: 'bg-rose-100'
  },
  {
    name: 'Package Food',
    items: 235,
    iconUrl: FillOutline,
    bgColor: 'bg-sky-100'
  }
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : categories.length - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prev) => (prev < categories.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="w-full relative">
      <div className="w-full h-[65%] bg-gray-600 absolute top-0 left-0 right-0" />
      
      <div className="relative flex flex-col items-center justify-center py-12">
        <div className="text-center mb-10 w-full px-4">
          <h1 className="text-5xl font-bold mb-3 text-white">Top Categories</h1>
          <p className="text-gray-300 text-lg">A highly efficient slip-ring scanner for today's diagnostic requirements.</p>
        </div>
        
        <div className="relative flex items-center max-w-4xl w-[900px] mx-auto">
          <button 
            onClick={handlePrevClick}
            className="absolute -left-16 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-200"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="w-full bg-white p-10 min-h-[300px] flex items-center shadow-xl">
            <div className="flex justify-between items-start w-full px-12">
              {categories.map((category, index) => (
                <div key={index} className="flex flex-col items-center relative">
                  <div className={`w-16 h-16 ${category.bgColor} rounded-full flex items-center justify-center mb-4`}>
                    <img 
                      src={category.iconUrl}
                      alt={category.name}
                      className="w-8 h-8"
                    />
                  </div>
                  <p className="text-base font-medium mb-2">{category.name}</p>
                  <p className="text-sm text-gray-500 mb-4">({category.items} item)</p>
                  {activeIndex === index && (
                    <div 
                      className="absolute bottom-0 w-full h-0.5 bg-green-500 transition-all duration-300"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={handleNextClick}
            className="absolute -right-16 z-10 p-2 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-200 bg-[#7B1816] "
          >
            <ChevronRight className="h-6 w-6 " color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;