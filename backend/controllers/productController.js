import productModel from "../models/productModel.js";
import {v2 as cloudinary} from "cloudinary";

const addProduct = async (req, res) => {
    try {
        const {name, description, price, category, subCategory, sizes, bestseller} = req.body;
        
        // Safely extract images, handling the case where only one image is uploaded
        let imagesToUpload = [];
        
        // Check if req.files exists first
        if (req.files) {
            // Safely check for each possible image field
            if (req.files.image1) {
                imagesToUpload.push(req.files.image1[0]);
            }
            if (req.files.image2) {
                imagesToUpload.push(req.files.image2[0]);
            }
            if (req.files.image3) {
                imagesToUpload.push(req.files.image3[0]);
            }
            if (req.files.image4) {
                imagesToUpload.push(req.files.image4[0]);
            }
        }
        
        // Upload images to cloudinary if any exist
        let imagesUrl = [];
        if (imagesToUpload.length > 0) {
            imagesUrl = await Promise.all(
                imagesToUpload.map(async (item) => {
                    if (item && item.path) {
                        let result = await cloudinary.uploader.upload(item.path, {resource_type: 'image'});
                        return result.secure_url;
                    }
                    return null;
                })
            );
            // Filter out any null values
            imagesUrl = imagesUrl.filter(url => url !== null);
        }
        
        const productData = {
            name,
            description,
            category,
            price: Number(price),
            subCategory,
            bestseller: bestseller === "true" ? true : false,
            sizes: JSON.parse(sizes),
            image: imagesUrl,
            date: Date.now()
        };
        
        console.log(productData);
        const product = new productModel(productData);
        await product.save();
        res.json({success: true, message: "product added"});
    } catch (error) {
        console.error("Error adding product:", error);
        res.json({success: false, message: error.message});
    }
};

const listProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({success: true, products});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
};

const removeProduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id);
        res.json({success: true, message: "Product removed"});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
};

const singleProduct = async (req, res) => {
    try {
        const {productId} = req.body;
        const product = await productModel.findById(productId);
        res.json({success: true, product});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
};

export {listProducts, addProduct, removeProduct, singleProduct};