import React, { useContext, useState } from 'react';
import pickle1 from '../assets/pickle1.png';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { ShoppingBag, User, LogOut, UserRound, Archive } from 'lucide-react';
import cartIcon from "../assets/cart_icon.png"

const Navbar = () => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const { getCartCount, token, setToken,setCartItems,navigate } = useContext(ShopContext);

  const handleRegister = () => {
    navigate("/register");
  }
  const handleLogin = () => {
    navigate("/login");
  }
  const handleLogout = () => {
    navigate("/login");
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
    setIsUserDropdownOpen(false);
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
        <a href="/" className="text-black font-medium">Home</a>
        <a href="#" className="text-gray-500">About Us</a>
        <a href="/pickleslist" className="text-gray-500">Products</a>
        <a href="#" className="text-gray-500">Contact Us</a>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </button>
        <div className="flex items-center space-x-2">
          <Link to={"/cart"}>
            <div className="relative inline-flex">
              <div className="bg-gray-700 p-4 rounded-full">
                <ShoppingBag className="h-5 w-5 text-yellow-100" />
              </div>
              <div className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {getCartCount()}
              </div>
            </div>
          </Link>
          {token ? (
            <div className="relative">
              <button 
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <User className="h-6 w-6 text-gray-600" />
              </button>
              
              {isUserDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="py-1">
                    <button 
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    >
                      <UserRound className="h-4 w-4 mr-2" />
                      Profile
                    </button>
                    <button 
                      onClick={()=>navigate('/orders')}
                      className="flex items-center w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    >
                      <Archive className="h-4 w-4 mr-2" />
                      Orders  
                    </button>
                    <button 
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <button onClick={handleLogin} className="px-4 py-1 text-gray-600 border border-gray-300 rounded-full hover:bg-gray-100">
                Login
              </button>
              <button onClick={handleRegister} className="px-4 py-1 text-white bg-[#7B1816] rounded-full hover:bg-red-950">
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;