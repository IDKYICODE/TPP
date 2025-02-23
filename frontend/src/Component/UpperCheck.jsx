import React, { useState } from 'react';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Mango avakaya', price: 32.00, baseQuantity: '500 gms', quantity: 1, total: 32.00 },
    { id: 2, name: 'Packet Fresh Cheese', price: 32.00, baseQuantity: '20g', quantity: 1, total: 32.00 },
    { id: 3, name: 'Rice Flouring', price: 32.00, baseQuantity: '20g', quantity: 1, total: 32.00 },
    { id: 4, name: 'Green Apple Juice Pack', price: 32.00, baseQuantity: '20g', quantity: 1, total: 32.00 },
    { id: 5, name: 'Coffe Seeds Pack', price: 32.00, baseQuantity: '20g', quantity: 1, total: 32.00 },
  ]);

  const [promoCode, setPromoCode] = useState('');

  const updateQuantity = (id, change) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change);
        return {
          ...item,
          quantity: newQuantity,
          total: Number((item.price * newQuantity).toFixed(2))
        };
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.total, 0).toFixed(2);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="max-w-7xl w-full mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <div className="grid grid-cols-5 gap-8 pb-6 font-bold text-gray-800">
              <div className="col-span-2">Product</div>
              <div className="text-center">Price</div>
              <div className="text-center">Quantity</div>
              <div className="text-center">Total</div>
            </div>

            <div className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <div key={item.id} className="grid grid-cols-5 items-center gap-8 py-6">
                  <div className="col-span-2 flex gap-4">
                    <div className="bg-gray-200 w-16 h-16 relative">
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="absolute -top-2 -right-2 text-red-500 bg-white rounded-full w-4 h-4 flex items-center justify-center text-sm hover:bg-red-50 transition-colors duration-200"
                      >
                        ×
                      </button>
                    </div>
                    <div>
                      <h3 className="text-base font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">Quantity: ({item.baseQuantity})</p>
                    </div>
                  </div>
                  
                  <div className="text-center">£{item.price}</div>
                  
                  <div className="flex items-center justify-center gap-2">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-6 h-6 bg-gray-100 flex items-center justify-center hover:bg-gray-200 active:bg-gray-300 transition-colors duration-150"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-6 h-6 bg-gray-100 flex items-center justify-center hover:bg-gray-200 active:bg-gray-300 transition-colors duration-150"
                    >
                      +
                    </button>
                  </div>
                  
                  <div className="text-center">£{item.total}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex gap-4">
              <input 
                type="text" 
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Add promo Code"
                className="border px-4 py-2 flex-grow"
              />
              <button className="bg-green-600 text-white px-8 py-2 hover:bg-green-700 active:bg-green-800 transition-colors duration-150">
                APPLY
              </button>
              <button 
                onClick={clearCart}
                className="border border-gray-300 px-8 py-2 hover:bg-gray-50 active:bg-gray-100 transition-colors duration-150"
              >
                Clear Cart
              </button>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6">Cart Totals</h3>
              <div className="mb-6">
                <div className="flex justify-between py-3 border-b border-gray-300">
                  <span className="text-gray-600">Subtotals:</span>
                  <span>£{calculateSubtotal()}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-300">
                  <span className="text-gray-600">Totals:</span>
                  <span className="font-bold">£{calculateSubtotal()}</span>
                </div>
                <div className="flex gap-2 items-center mt-4 text-sm text-gray-500">
                  <span className="text-[#95C953]">✓</span>
                  <span>Shipping & taxes calculated at checkout</span>
                </div>
              </div>
              
              <button className="w-full bg-[#95C953] text-white py-3 rounded mb-8 hover:bg-[#86b649] transition-colors duration-150">
                Proceed To Checkout
              </button>

              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-4">Calculate Shipping</h3>
                <div className="border-b border-gray-300">
                  <input 
                    type="text" 
                    placeholder="Bangladesh"
                    className="w-full py-2 bg-transparent focus:outline-none"
                  />
                </div>
                <div className="border-b border-gray-300">
                  <input 
                    type="text" 
                    placeholder="Mirpur Dohs Dhaka-1200"
                    className="w-full py-2 bg-transparent focus:outline-none"
                  />
                </div>
                <div className="border-b border-gray-300">
                  <input 
                    type="text" 
                    placeholder="Postal Code"
                    className="w-full py-2 bg-transparent focus:outline-none"
                  />
                </div>
                <button className="w-full bg-[#95C953] text-white py-3 rounded hover:bg-[#86b649] transition-colors duration-150">
                  Calculate Shipping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;