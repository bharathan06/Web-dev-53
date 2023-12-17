import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';
import './cart.css'


const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
    return (

        <div className="cartItem">
            <Link to={'/productpage/${props.id}'}><img src={productImage} /></Link>
            <div className="description">
                <p><b>{productName}</b></p>
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