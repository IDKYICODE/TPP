import React from 'react';
import Navbar from '../Component/Navbar';

const Orders = () => {
    const orders = [
        {
            id: 1,
            productName: "Men Round Neck Pure Cotton T-shirt",
            price: 200,
            quantity: 1,
            size: "M",
            date: "25, Jul, 2024",
            status: "Ready to ship",
            image: "/api/placeholder/100/130"
        },
        {
            id: 2,
            productName: "Girls Round Neck Cotton Top",
            price: 220,
            quantity: 1,
            size: "M",
            date: "25, Jul, 2024",
            status: "Ready to ship",
            image: "/api/placeholder/100/130"
        },
        {
            id: 3,
            productName: "Men Round Neck Pure Cotton T-shirt",
            price: 110,
            quantity: 1,
            size: "M",
            date: "25, Jul, 2024",
            status: "Ready to ship",
            image: "/api/placeholder/100/130"
        }
    ];

    return (
        <div className="max-w-6xl mx-auto p-6">
            <Navbar />
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-medium">MY ORDERS</h1>
            </div>

            <div className="space-y-4">
                {orders.map(order => (
                    <div key={order.id} className="border-t border-gray-200 py-4">
                        <div className="flex items-center">
                            <div className="w-24 h-24 bg-gray-200 mr-6">
                                <img
                                    src={order.image}
                                    alt={order.productName}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="flex-1">
                                <h2 className="text-lg font-medium mb-2">{order.productName}</h2>
                                <div className="flex items-center mb-1">
                                    <p className="text-lg font-medium">${order.price}</p>
                                    <p className="text-gray-600 ml-4">Quantity: {order.quantity}</p>
                                    <p className="text-gray-600 ml-4">Size: {order.size}</p>
                                </div>
                                <p className="text-gray-600">Date: {order.date}</p>
                            </div>

                            <div className="flex items-center">
                                <div className="flex items-center mr-8">
                                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                                    <p className="text-gray-600">{order.status}</p>
                                </div>
                                <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
                                    Track Order
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Orders;