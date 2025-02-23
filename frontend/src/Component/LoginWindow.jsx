import React, { useState } from 'react';

const LoginWindow = () => {
  const [formData, setFormData] = useState({
    loginEmail: '',
    loginPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md mx-auto p-4">
        <div className="bg-white p-8 shadow-sm rounded-lg">
          <h2 className="text-2xl font-medium text-center mb-2">Login</h2>
          <p className="text-gray-600 text-center text-sm mb-6">
            Please login using account detail bellow.
          </p>

          <form className="space-y-4">
            <input
              type="email"
              name="loginEmail"
              placeholder="Email Address"
              value={formData.loginEmail}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:border-gray-400"
            />
            
            <input
              type="password"
              name="loginPassword"
              placeholder="Password"
              value={formData.loginPassword}
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
              Don't Have an Account? <a href="#" className="text-gray-800">Create account</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginWindow;