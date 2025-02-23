import Navbar from "../Component/Navbar";
import bgImage from "..\\assets\\slider.png"



const CheckoutPage = () => {
    const cartItems = [
        {
            name: 'Green Apple Juice Pack',
            color: 'Brown',
            quantity: '(2kg)',
            price: 219.00
        },
        {
            name: 'Grap Seedless varieties',
            color: 'Brown',
            quantity: '(2kg)',
            price: 219.00
        },
        {
            name: 'Almonds Nut Butter',
            color: 'Brown',
            quantity: '(2kg)',
            price: 219.00
        },
        {
            name: 'Blood Orange Juice',
            color: 'Brown',
            quantity: '(2kg)',
            price: 219.00
        },
        {
            name: 'papya Fruit Nutrion',
            color: 'Brown',
            quantity: '(2kg)',
            price: 219.00
        }
    ];

    const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <div>
            <Navbar/>
            <div
            className="flex justify-center items-center "
                style={{
                  backgroundImage: `url(${bgImage})`,
                  backgroundSize: 'cover', 
                  height: '300px',
                  width: '100%',
                }}>

            </div>
            <div className="max-w-6xl mx-auto p-8">
                <div className="text-left">
                    <h1 className="text-2xl font-bold mb-1">Xprako Demo</h1>
                    <div className="text-gray-500 text-sm mb-8">Cart/ Information/ Shipping/ Payment</div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Form */}
                    <div className=" bg-[#F4F4FC] lg:col-span-2">
                        <div className=" rounded-lg p-8">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-semibold text-left">Contact Information</h2>
                                <div className="text-sm text-gray-500">
                                    Already have an account? <a href="#" className="text-gray-700">Log in</a>
                                </div>
                            </div>

                            <form>
                                <input
                                    type="text"
                                    placeholder="Email or mobile phone number"
                                    className="w-full p-2 mb-4 border-0 border-b bg-transparent focus:outline-none focus:ring-0 focus:border-[#80B500]"
                                />

                                <div className="flex items-center mb-8">
                                    <input type="checkbox" className="mr-2 accent-[#80B500]" />
                                    <span className="text-sm text-gray-600">Keep me up to date on news and exclusive offers</span>
                                </div>

                                <h2 className="text-xl font-semibold mb-6 text-left">Shipping address</h2>

                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <input
                                        placeholder="First name (optional)"
                                        className="p-2 border-0 border-b bg-transparent focus:outline-none focus:ring-0 focus:border-[#80B500]"
                                    />
                                    <input
                                        placeholder="Last name"
                                        className="p-2 border-0 border-b bg-transparent focus:outline-none focus:ring-0 focus:border-[#80B500]"
                                    />
                                </div>

                                <input
                                    placeholder="Address"
                                    className="w-full p-2 border-0 border-b bg-transparent mb-4 focus:outline-none focus:ring-0 focus:border-[#80B500]"
                                />
                                <input
                                    placeholder="Appartmentment,suit,e.t.c (optinal)"
                                    className="w-full p-2 border-0 border-b bg-transparent mb-4 focus:outline-none focus:ring-0 focus:border-[#80B500]"
                                />
                                <input
                                    placeholder="City"
                                    className="w-full p-2 border-0 border-b bg-transparent mb-4 focus:outline-none focus:ring-0 focus:border-[#80B500]"
                                />

                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <input
                                        placeholder="Bangladesh"
                                        className="p-2 border-0 border-b bg-transparent focus:outline-none focus:ring-0 focus:border-[#80B500]"
                                    />
                                    <input
                                        placeholder="Postal Code"
                                        className="p-2 border-0 border-b bg-transparent focus:outline-none focus:ring-0 focus:border-[#80B500]"
                                    />
                                </div>

                                <button className="bg-[#80B500] text-white px-6 py-3 mt-20 rounded hover:bg-green-700 float-left">
                                    Continue Shipping
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right Column - Cart Summary */}
                    <div className="lg:col-span-1">
                        <div className="space-y-4">
                            {cartItems.map((item, index) => (
                                <div key={index} className="flex items-center py-4 border-b">
                                    <div className="w-16 h-16 bg-gray-200 rounded-lg mr-4"></div>
                                    <div className="flex-grow">
                                        <h3 className="font-medium">{item.name}</h3>
                                        <div className="text-sm text-gray-500">
                                            Color: {item.color}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            Quantity: {item.quantity}
                                        </div>
                                    </div>
                                    <div className="font-medium">£{item.price.toFixed(2)}</div>
                                </div>
                            ))}
                            <div className="bg-[#F4F4FC] mt-10 px-5 py-5">
                                <div className="pt-4">
                                    <div className="flex justify-between mb-2">
                                        <span className="text-gray-600">Subtotals:</span>
                                        <span>£{subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between font-medium border-t pt-4">
                                        <span>Totals:</span>
                                        <span>£{subtotal.toFixed(2)}</span>
                                    </div>

                                    <div className="flex items-center mt-4 text-sm text-gray-500">
                                        <input type="checkbox" className="mr-2 accent-[#80B500]" />
                                        <span>Shipping & taxes calculated at checkout</span>
                                    </div>

                                    <button className="w-full bg-[#80B500] text-white py-3 rounded mt-4 hover:bg-green-700">
                                        Proceed To Checkout
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CheckoutPage;