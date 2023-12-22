import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);

    const getDefaultCart = (apiProducts) => {
        let cart = {};
        apiProducts.forEach((product) => {
            cart[product.id] = 0;
        });
        return cart;
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/v1/latest-products/');
                const apiProducts = response.data;


                const initialCart = getDefaultCart(apiProducts);

                setProducts(apiProducts);
                setCartItems(initialCart);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {

        setCartItems((prevCartItems) => {
            const updatedCartItems = { ...prevCartItems };
            products.forEach((product) => {
                if (updatedCartItems[product.id] === undefined) {
                    // If a product is not in the cart, initialize its count to 0
                    updatedCartItems[product.id] = 0;
                }
            });
            return updatedCartItems;
        });
    }, [products]);

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = products.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    };

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemCount,
        getTotalCartAmount,
    };

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};

export { ShopContext };
