import React from 'react';
import backgroundImage from '../assets/backgroundImage.png';
import mini1 from '../assets/mini1.png';
import mini2 from '../assets/mini2.png';
import mini3 from '../assets/mini3.png';
import mini4 from '../assets/mini4.png';

const Footer = () => {
  return (
    <div className="relative w-full">
      <div 
        className="relative bg-teal-900 text-white py-12"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Us!</h2>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="font-semibold w-20">Phone:</span>
                  <span>+000 1234567</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-20">E-mail:</span>
                  <span>support@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-20">Address:</span>
                  <span>King Street, Avenue,</span>
                </div>
                
                <div className="flex space-x-4 mt-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <img 
                      src={mini1}
                      alt="Social Icon 1"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center">
                    <img 
                      src={mini2}
                      alt="Social Icon 2"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center">
                    <img 
                      src={mini3}
                      alt="Social Icon 3"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center">
                    <img 
                      src={mini4}
                      alt="Social Icon 4"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Customer Support</h2>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-xl">&raquo;</span>
                  <a href="#" className="hover:underline">About Us</a>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-xl">&raquo;</span>
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-xl">&raquo;</span>
                  <a href="#" className="hover:underline">Terms & Conditions</a>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-xl">&raquo;</span>
                  <a href="#" className="hover:underline">Wholesale Policy</a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Quick Links</h2>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-xl">&raquo;</span>
                  <a href="#" className="hover:underline">Pagination</a>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-xl">&raquo;</span>
                  <a href="#" className="hover:underline">Terms & Conditions</a>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-xl">&raquo;</span>
                  <a href="#" className="hover:underline">Accessories</a>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-xl">&raquo;</span>
                  <a href="#" className="hover:underline">Term of use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#7B1816] text-white py-4 text-center">
        <p>Copyright 2020 Telengana Spicy Pickles. All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;