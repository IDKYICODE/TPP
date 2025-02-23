import React from 'react';
import back from '../assets/back.png';
import video from '../assets/video.png';
import { useNavigate } from 'react-router-dom';
const Vidsection = () => {
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate("/pickleslist");
  }
  return (
    <div className="relative w-full h-[700px]">
      
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${back})`
        }}
      />
      
      
      <div className="relative z-10 h-full">
        <div className="max-w-5xl mx-auto px-6 py-8 h-full">
          <div className="flex items-center justify-between h-full">
            
            <div className="w-1/2 text-white">
              <span className="text-lime-400 uppercase text-sm tracking-wider mb-3 block">
                Visit our shop
              </span>
              <h1 className="text-4xl font-bold mb-4 leading-tight">
                Looking For Fresh<br />Organic Pickles?
              </h1>
              <p className="text-gray-200 mb-6 text-base max-w-lg">
                Discover our handcrafted organic pickles made with locally sourced 
                ingredients and traditional recipes.
              </p>
              <button onClick={handleClick} className="bg-lime-500 hover:bg-lime-600 text-white px-8 py-3 rounded-md font-semibold transition-colors">
                SHOP NOW
              </button>
            </div>

            
            <div className="w-1/2 pl-14">
              <div className="relative aspect-video rounded-lg overflow-hidden w-150 ml-10">
                
                <img 
                  src={video} 
                  alt="Pickle making process" 
                  
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
                  </div>
                </div>
                
                   
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vidsection;