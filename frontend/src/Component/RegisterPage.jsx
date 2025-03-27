import axios from 'axios';
import React, { useState,useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
  const {token,setToken,backendUrl,navigate}=useContext(ShopContext);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userName: '',
    phoneNumber: '',
    agreeToTerms: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    console.log(formData);
    
  };
  const onSubmitHandler = async(e)=>{
    e.preventDefault();
    console.log("Clicked");
    
    try {
      // console.log(formData.lastName);
      const name=formData.userName,email=formData.email,password=formData.password;
      const response =await axios.post(backendUrl + '/api/user/register',{name,email,password});
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
          <h2 className="text-2xl font-medium text-center mb-2">Register</h2>
          <p className="text-gray-600 text-center text-sm mb-6">
            Don't have an account?Register
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
            
            <div className="space-y-1">
              <input
                type="password"
                name="password"
                placeholder="Create password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-gray-400"
              />
              <p className="text-sm text-gray-500">Password must contain(@, letter ,number)</p>
            </div>

            <input
              type="text"
              name="userName"
              placeholder="User Name"
              value={formData.userName}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-gray-400"
            />

            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-gray-400"
            />

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="w-4 h-4 accent-green-600"
              />
              <label className="text-sm text-gray-600">
                I agree Terms & Conditions All Policy
              </label>
            </div>

            <button 
              type="submit" 
              className="w-full p-3 bg-lime-500 text-white hover:bg-lime-600 transition-colors duration-200 rounded"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;