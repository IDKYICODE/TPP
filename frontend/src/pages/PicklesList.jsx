import React, { useContext } from 'react'
import Navbar from '../Component/Navbar'
import bgImage from "../assets/slider_pl.png"
import ProductCard from '../Component/ProductCard'
import Stats from '../Component/Stats'
import Testimonials from '../Component/Testimonials'
import Footer from '../Component/Footer'
import { Search } from 'lucide-react'
import { ShopContext } from '../context/ShopContext'



const tags = ['Breads', 'healthy', 'organic', 'tomato', 'juices', 'natural'];

function PicklesList() {

    const {products}=useContext(ShopContext);

    return (
        <div>
            <Navbar />
            <div
                className="flex justify-center items-center"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    height: '300px',
                    width: '100%',
                }}
            >
            </div>
            <div className="max-w-6xl mx-auto p-8">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Organic Fresh Pickles</h1>
                        <p className="text-gray-500 text-sm">Showing 9,620 pickles (0.62 seconds)</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <span className="text-gray-600">Sort By:</span>
                            <select className="border rounded px-2 py-1">
                                <option>Best Match</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                placeholder="Search"
                                className="border rounded px-3 py-1"
                            />
                            <button className="bg-[#80B500] text-white px-4 py-1 rounded">
                                <span className="sr-only">Search</span>
                                <Search size={20}/>   
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex gap-8">
                    {/* Sidebar */}
                    <div className="flex-1 shadow-md w-70 h-70">
                        <div className="mb-2 w-70 px-10">
                            <h2 className="font-bold mb-4 text-left">Product Categories</h2>
                            <div className="space-y-2">
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2 accent-[#80B500]" />
                                    <span>Veg pickles (5)</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2 accent-[#80B500]" />
                                    <span>Non - veg pickles (5)</span>
                                </label>
                            </div>
                        </div>

                        <div className="w-70 px-10">
                            <h2 className="font-bold mb-4 text-left">Most searched pickles</h2>
                            <div className="grid grid-cols-3 items-center gap-2">
                                {tags.map((tag) => (
                                    <button
                                        key={tag}
                                        className="rounded-full text-sm text-[#80B500] outline-1 text-center hover:bg-[#80B500] hover:text-white"
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        {products.map((product, index) => (
                            <ProductCard
                                key={index}
                                image={product.image}
                                title={product.title}
                                rating={product.rating}
                                reviews={product.reviews}
                                discount={product.discount}
                                currentPrice={product.currentPrice}
                                originalPrice={product.originalPrice}
                                unit={product.unit}
                                _id={product._id}
                            />
                        ))}
                    </div>             
                </div>
            </div>
            <Stats/>
            <Testimonials/>
            <Footer/>
        </div>
    )
}

export default PicklesList