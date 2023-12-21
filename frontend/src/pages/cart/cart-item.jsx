import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';
import { Link } from 'react-router-dom';
import './cart.css'


const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
    return (

        <div className="cartItem">
            <Link to="/productpage/${:id}">
                <img src={productImage} />
            </Link>
            <div className="description">
                <Link to="/productpage/${:id}">
                    <p><b>{productName}</b></p>
                </Link>
                <p>₹{price}</p>
                <div className="countHandler">
                    <button className="btn" onClick={() => removeFromCart(id)}>-</button>
                    <input value={cartItems[id]} />
                    <button className="btn" onClick={() => addToCart(id)}>+</button>
                </div>

            </div>
        </div>

    )
}

export { CartItem };