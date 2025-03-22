import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = "$";
    const delivery_fee = 10;
    const [cartItems, setCartItems] = useState({});

    // Add to cart function - already implemented in your code
    const addToCart = async(itemId, size) => {
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]) {
            if(cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
        console.log(cartData);
    };

    // Add a function to remove from cart (decrease quantity)
    const removeFromCart = (itemId, size) => {
        let cartData = structuredClone(cartItems);
        if(cartData[itemId] && cartData[itemId][size]) {
            if(cartData[itemId][size] > 1) {
                // Decrease quantity by 1
                cartData[itemId][size] -= 1;
            } else {
                // Remove the size completely if quantity reaches 0
                delete cartData[itemId][size];
                
                // If no sizes left for this product, remove the product
                if(Object.keys(cartData[itemId]).length === 0) {
                    delete cartData[itemId];
                }
            }
            setCartItems(cartData);
            console.log("Item removed:", cartData);
        }
    };

    // Add a function to completely remove an item from cart
    const removeItemCompletely = (itemId, size) => {
        let cartData = structuredClone(cartItems);
        if(cartData[itemId] && cartData[itemId][size]) {
            // Remove the size completely
            delete cartData[itemId][size];
            
            // If no sizes left for this product, remove the product
            if(Object.keys(cartData[itemId]).length === 0) {
                delete cartData[itemId];
            }
            
            setCartItems(cartData);
            console.log("Item removed completely:", cartData);
        }
    };

    // Add a function to clear the entire cart
    const clearCart = () => {
        setCartItems({});
        console.log("Cart cleared");
    };

    // Your existing getCartCount function
    const getCartCount = () => {
        let totalCount = 0;
        for(const items in cartItems) {
            for(const item in cartItems[items]) {
                try {
                    if(cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch(error) {
                    console.error("Error counting cart items:", error);
                }
            }
        }
        console.log("Total cart count:", totalCount);
        return totalCount;
    };

    // Add a function to calculate the total price
    const getCartTotal = () => {
        let total = 0;
        for(const itemId in cartItems) {
            const product = products.find(p => p._id.toString() === itemId.toString());
            if(product) {
                for(const size in cartItems[itemId]) {
                    total += product.currentPrice * cartItems[itemId][size];
                }
            }
        }
        return total.toFixed(2);
    };

    const value = {
        products,
        currency,
        delivery_fee,
        cartItems,
        addToCart,
        removeFromCart,
        removeItemCompletely,
        clearCart,
        getCartCount,
        getCartTotal
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;