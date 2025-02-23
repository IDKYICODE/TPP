import React from 'react';
import pickle1 from '../assets/pickle1.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate=useNavigate();
  const handleRegister=()=>{
    navigate("/register");
  }
  const handleLogin=()=>{
    navigate("/login");
  }
  return (
    <nav className="flex items-center justify-between px-3 py-3 bg-white">
      
      <div className="flex items-center">
        <img 
          src={pickle1}
          alt="Telangana Spicy Pickles Logo" 
        />
    
      </div>

      
      <div className="flex-1 flex items-center justify-start space-x-6 ml-15">
        <a href="/picklesproj/" className="text-black font-medium">Home</a>
        <a href="#" className="text-gray-500">About Us</a>
        <a href="#/pickleslist" className="text-gray-500">Products</a>
        <a href="#" className="text-gray-500">Contact Us</a>
      </div>

      
      <div className="flex items-center space-x-4">
        <button className="p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </button>
        <div className="flex items-center space-x-2">
          <button onClick={handleLogin} className="px-4 py-1 text-gray-600 border border-gray-300 rounded-full hover:bg-gray-100">
            Login
          </button>
          <button onClick={handleRegister} className="px-4 py-1 text-white bg-[#7B1816] rounded-full hover:bg-red-950">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;