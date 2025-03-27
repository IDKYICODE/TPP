import React, { useState,useContext,useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';

import axios from "axios"
import { toast } from 'react-toastify';

const LoginWindow = () => {
  const {token,setToken,backendUrl,navigate}=useContext(ShopContext);
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const onSubmitHandler = async(e)=>{
    e.preventDefault();
    console.log(formData);
    try {
      const email=formData.email,password=formData.password;
      const response =await axios.post(backendUrl + '/api/user/login',{email,password});
      console.log(response);
      
      if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem('token',response.data.token)
      } else{
        console.log(response.data.message);
        
        toast.error(response.data.message);
      }
      
    } catch (error) { 
      console.log(error);
      toast.error(error); 
    }
  }
  useEffect(()=>{
      if(token){
        navigate('/');
      }
    },[token])

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md mx-auto p-4">
        <div className="bg-white p-8 shadow-sm rounded-lg">
          <h2 className="text-2xl font-medium text-center mb-2">Login</h2>
          <p className="text-gray-600 text-center text-sm mb-6">
            Please login using account detail bellow.
          </p>

          <form onSubmit={onSubmitHandler} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-gray-400"
            />
            
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-gray-400"
            />

            <div className="text-sm">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Forgot your password?
              </a>
            </div>

            <button   
              type="submit" 
              className="w-full p-3 bg-white border border-green-600 text-green-600 hover:bg-green-50 transition-colors duration-200 rounded"
            >
              Sign In
            </button>

            <p className="text-center text-sm text-gray-600">
              Don't Have an Account? <a href="/register " className="text-gray-800">Create account</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginWindow;