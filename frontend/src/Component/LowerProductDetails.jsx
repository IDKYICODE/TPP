import React, { useState } from 'react';

const LowerProductDetails = () => {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'additional', label: 'Additional Info' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'video', label: 'Video' }
  ];

  return (
    <div className="w-full bg-gray-100">
      <div className="container mx-auto max-w-5xl px-4 py-10">
        
        <div className="flex">
          {tabs.map(tab => (
            <div 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-2 px-4 cursor-pointer ${
                activeTab === tab.id ? 'border-b-2 border-[#99cc00]' : ''
              }`}
            >
              <span 
                className={`${
                  activeTab === tab.id 
                    ? 'text-[#99cc00] font-medium' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {tab.label}
              </span>
            </div>
          ))}
        </div>

        
        <div className="bg-white mt-7">
          {activeTab === 'description' && (
            <>
              <div className="mb-6 px-4 pt-8">
                <h3 className="text-lg font-medium mb-3 flex pl-4">Viverra a consectetur</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over Vivamus ipendium magna Lorem ipsum dolor sit amet, consectetur adipiscing elit.Contrary to popular belief, Lorem Ipsum is not simply typical Latin literature from 45 BC, making it
                </p>
              </div>

              <div className="px-4 pb-8">
                <h3 className="text-lg font-medium mb-4 flex pl-5">More Details</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-[#99cc00] mt-1">→</span>
                    Lorem ipsum is simply dummy text of the printing and typesetting industry
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-[#99cc00] mt-1">→</span>
                    Lorem ipsum has been the's standard dummy text. Lorem Ipsumum is simply dummy text.
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-[#99cc00] mt-1">→</span>
                    type here your detail one by one li more add
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-[#99cc00] mt-1">→</span>
                    has been the industry's standard dummy text ever since Lorem Ips
                  </li>
                </ul>
              </div>
            </>
          )}
          {activeTab === 'additional' && (
            <div className="px-4 py-8">
              <h3 className="text-lg font-medium mb-3">Additional Information</h3>
              
            </div>
          )}
          {activeTab === 'reviews' && (
            <div className="px-4 py-8">
              <h3 className="text-lg font-medium mb-3">Reviews</h3>
              
            </div>
          )}
          {activeTab === 'video' && (
            <div className="px-4 py-8">
              <h3 className="text-lg font-medium mb-3">Video</h3>
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LowerProductDetails;
