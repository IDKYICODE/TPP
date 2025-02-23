import React from 'react';
import Navbar from '../Component/Navbar';
import Slider from '../Component/Slider';
import UpperProductDetails from '../Component/UpperProductDetails';
import LowerProductDetails from '../Component/LowerProductDetails';
import TrendingProducts from '../Component/TrendingProducts';
import Stats from '../Component/Stats';
import Testimonials from '../Component/Testimonials';
import Footer from '../Component/Footer';
const ProductDetails = () => {
  return <div>
    <Navbar/>
    <Slider/>
    <UpperProductDetails/>
    <LowerProductDetails/>
    <TrendingProducts/>
    <Stats/>    
    <Testimonials/>    
    <Footer/>
  </div>;
};

export default ProductDetails;
