import React, { useContext, useState,useEffect} from 'react';
import Navbar from '../Component/Navbar';
import Slider from '../Component/Slider';
import UpperProductDetails from '../Component/UpperProductDetails';
import LowerProductDetails from '../Component/LowerProductDetails';
import TrendingProducts from '../Component/TrendingProducts';
import Stats from '../Component/Stats';
import Testimonials from '../Component/Testimonials';
import Footer from '../Component/Footer';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
const ProductDetails = () => {
  const productId= useParams();
  const {products}= useContext(ShopContext);
  const [productData,setProductData]=useState(false);
  const [image,setImage]= useState('')

  const fetchProductData = async() =>{
    products.map((item)=>{
      if(item._id === Number(productId.productId)){
        setProductData(item);
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect(()=>{
    fetchProductData();
  },[productId,products])
  
  return (
  <div>
    <Navbar />
    <Slider />
    <UpperProductDetails product={productData} />
    <LowerProductDetails />
    <TrendingProducts />
    <Stats />
    <Testimonials />
    <Footer />
  </div>
  )
};

export default ProductDetails;
