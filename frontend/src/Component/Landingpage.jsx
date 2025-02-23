import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import im2 from "../assets/im2.png";


const Landingpage = () => {
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate("/pickleslist");
  }
  return (
    <div>
      <Navbar />
      <div className="relative max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8 mt-5">
          <h1 className="text-5xl font-bold mb-8">
            Elevate Your Taste Buds With Our
            <br />
            Homemade Pickles.
          </h1>
          <button onClick={handleClick} className="bg-[#7B1816] hover:bg-red-950 text-white px-6 py-3 rounded-full mt-4">
            Browse all pickles
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">        
        <div className="rounded-3xl overflow-hidden mb-20 ">
          <img
            src={im2}
            alt="Collection of homemade pickles in jars with fruits and decorative elements"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
//pickle\src\assets\im2.png