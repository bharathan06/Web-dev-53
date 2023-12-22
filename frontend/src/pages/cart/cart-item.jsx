import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import './cart.css';

const CartItem = ({ data, quantity }) => {
    const { id, name, price, get_image } = data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

    console.log('CartItem props:', { id, name, price, get_image, quantity });

    return (
        <div className="cartItem">
            <img src={get_image} alt={name} />
            <div className="description">
                <p><b>{name}</b></p>
                <p>₹{price}</p>
                <div className="countHandler">
                    <button className="btn" onClick={() => removeFromCart(id)}>-</button>
                    <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                    <button className="btn" onClick={() => addToCart(id)}>+</button>
                </div>
            </div>
        </div>
    );
};

export { CartItem };
