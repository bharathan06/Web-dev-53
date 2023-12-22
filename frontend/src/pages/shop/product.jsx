
import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context'
const Product = (props) => {
    console.log(props.data)
    const { id, name, price, get_image, description } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemAmount = cartItems[id]
    return (

        <div className="product">
            <div className="card w-72 bg-base-100 shadow-xl">
                <figure><img src={get_image} alt={name} /></figure>
                <div className="card-body">
                    <div className="description">
                        <p><b>{name}</b></p>
                        <p>₹{price}</p></div>
                    <div className="card-actions justify-center">
                        <button className="btn btn-neutral" onClick={() => addToCart(id)}>Buy Now
                            {cartItemAmount > 0 && <>({cartItemAmount}) </>}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Product };