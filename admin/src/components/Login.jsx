import axios from 'axios'
import React from 'react'
import {backendUrl} from '../App'
import { useState } from 'react'
import { toast } from 'react-toastify';

const Login=({setToken})=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const onSubmitHandler = async (e) =>{
        try {
            e.preventDefault();
            const response= await axios.post(backendUrl + '/api/user/admin',{email,password});
            if(response.data.success){
              setToken(response.data.token);
            }
            else{
              toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error);
        }
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Admin Panel</h1>
        
        <form onSubmit={onSubmitHandler}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
              placeholder="your@email.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
              required
              
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
              required
              
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login