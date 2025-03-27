import React, { useState } from 'react';
import { Plus, CheckSquare, ShoppingBag } from 'lucide-react';
import { NavLink,useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("Add Items");
  
  const menuItems = [
    { id: 'add', label: 'Add Items', icon: 'plus' },
    { id: 'list', label: 'List Items', icon: 'check-square' },
    { id: 'orders', label: 'Orders', icon: 'shopping-bag' }
  ];
  
  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };
  
  return (
    <div className="w-[18%] min-h-screen border-r-2">
      <nav className="flex flex-col gap-4 pt-6 text-[15px]">
        {menuItems.map((item) => (
          <NavLink
            key={item.id}
            className={`w-full flex items-center p-3 rounded-md text-left ${
              activeItem === item.label ? 'bg-red-100 text-gray-800' : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => handleItemClick(item.label)}
            to={"/"+item.id}
          >
            <span className="mr-3">
              {item.icon === 'plus' ? (
                <Plus size={20} />
              ) : item.icon === 'check-square' ? (
                <CheckSquare size={20} />
              ) : (
                <ShoppingBag size={20} />
              )}
            </span>
            <span className="text-base font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;