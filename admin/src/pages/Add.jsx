import React, { useState, useRef } from 'react';
import { Upload } from 'lucide-react';
import axios from 'axios';
import {backendUrl} from '../App';
import { toast } from 'react-toastify';


const Add = ({token}) => {
  // Initial state definitions - will be used for resetting the form
  const initialProductData = {
    name: '',
    description: '',
    category: 'Veg',
    subCategory: 'Spicy',
    price: '25',
    sizes: [],
    bestseller: false
  };
  
  const initialProductImages = [null, null, null, null];
  
  const fileInputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [productImages, setProductImages] = useState(initialProductImages);
  const [productData, setProductData] = useState(initialProductData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value
    });
  };

  const handleSizeToggle = (size) => {
    const newSizes = [...productData.sizes];
    if (newSizes.includes(size)) {
      setProductData({
        ...productData,
        sizes: newSizes.filter(s => s !== size)
      });
    } else {
      setProductData({
        ...productData,
        sizes: [...newSizes, size]
      });
    }
  };

  const handleImageClick = (index) => {
    fileInputRefs[index].current.click();
  };

  const handleImageChange = (e, index) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const newProductImages = [...productImages];
      newProductImages[index] = {
        file,
        preview: URL.createObjectURL(file)
      };
      setProductImages(newProductImages);
    }
  };
  
  // Function to reset the form to initial state
  const resetForm = () => {
    // Reset product data
    setProductData({...initialProductData});
    
    // Reset images
    setProductImages([...initialProductImages]);
    
    // Revoke any object URLs to prevent memory leaks
    productImages.forEach(image => {
      if (image && image.preview) {
        URL.revokeObjectURL(image.preview);
      }
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      // Check if we have valid product data
      if (!productData.name || !productData.description) {
        console.error('Product name and description are required');
        return;
      }

      // Two approaches to solve the issue:
      
      // APPROACH 1: Send separate fields instead of JSON string
      const formData = new FormData();
      
      // Add each field individually instead of as JSON
      Object.entries(productData).forEach(([key, value]) => {
        // Handle arrays like sizes specially
        if (Array.isArray(value)) {
          formData.append(key, JSON.stringify(value));
        } else {
          formData.append(key, value);
        }
      });
      
      // Append images
      productImages.forEach((image, index) => {
        if (image && image.file) {
          formData.append(`image${index+1}`, image.file);
        }
      });

      console.log('Product data submitted:', productData);
      console.log('Images submitted:', productImages.filter(img => img !== null).length);

      const response = await axios.post(backendUrl+'/api/product/add', formData, {
        headers: {
          token: token,
          'Content-Type': 'multipart/form-data'  // Important for file uploads
        }
      });
      
      if(response.data.success) {
        toast.success(response.data.message);
        // Reset the form after successful submission
        resetForm();
      }
      
    } catch (error) {
      console.error('Error submitting product:', error);
      // Display more detailed error information
      if (error.response) {
        console.error('Response error data:', error.response.data);
        console.error('Response error status:', error.response.status);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <h2 className="text-xl text-gray-700 mb-2">Upload Image</h2>
          <div className="flex space-x-2">
            {[0, 1, 2, 3].map((index) => (
              <div key={index}>
                <input
                  type="file"
                  ref={fileInputRefs[index]}
                  onChange={(e) => handleImageChange(e, index)}
                  accept="image/*"
                  className="hidden"
                />
                <div
                  className="w-32 h-32 border border-dashed border-gray-300 rounded flex flex-col items-center justify-center bg-white cursor-pointer hover:bg-gray-100 transition-colors"
                  onClick={() => handleImageClick(index)}
                >
                  {productImages[index] ? (
                    <img
                      src={productImages[index].preview}
                      alt={`Product image ${index + 1}`}
                      className="w-full h-full object-cover rounded"
                    />
                  ) : (
                    <>
                      <Upload size={24} className="text-gray-400 mb-1" />
                      <span className="text-gray-400 text-sm">Upload</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl text-gray-700 mb-2">Product name</h2>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleInputChange}
            placeholder="Type here"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-6">
          <h2 className="text-xl text-gray-700 mb-2">Product description</h2>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleInputChange}
            placeholder="Write content here"
            className="w-full p-2 border border-gray-300 rounded h-32"
          />
        </div>

        <div className="flex flex-wrap gap-8 mb-6">
          <div>
            <h2 className="text-xl text-gray-700 mb-2">Product category</h2>
            <select
              name="category"
              value={productData.category}
              onChange={handleInputChange}
              className="w-48 p-2 border border-gray-300 rounded"
            >
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
            </select>
          </div>

          <div>
            <h2 className="text-xl text-gray-700 mb-2">Sub category</h2>
            <select
              name="subCategory"
              value={productData.subCategory}
              onChange={handleInputChange}
              className="w-48 p-2 border border-gray-300 rounded"
            >
              <option value="Spicy">Spicy</option>
              <option value="Organic">Organic</option>
            </select>
          </div>

          <div>
            <h2 className="text-xl text-gray-700 mb-2">Product Price</h2>
            <input
              type="text"
              name="price"
              value={productData.price}
              onChange={handleInputChange}
              className="w-48 p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        {/* <div className="mb-6">
          <h2 className="text-xl text-gray-700 mb-2">Product Sizes</h2>
          <div className="flex space-x-2">
            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => handleSizeToggle(size)}
                className={`w-12 h-12 flex items-center justify-center rounded ${productData.sizes.includes(size)
                    ? 'bg-red-300 text-gray-800'
                    : 'bg-gray-100 text-gray-700'
                  }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div> */}

        <div className="mb-8">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={productData.bestseller}
              onChange={() => setProductData({ ...productData, bestseller: !productData.bestseller })}
              className="w-4 h-4 mr-2"
            />
            <span className="text-gray-700">Add to bestseller</span>
          </label>
        </div>

        <button
          type="submit"
          className="bg-black text-white px-12 py-3 font-medium"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;