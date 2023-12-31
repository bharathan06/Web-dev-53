import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
import { CartItem } from './cart-item';
import { PRODUCTS } from '../../products'

const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  return (
    <div className="cart">
      <div>
        <h1>Your Cart</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />
          }
        })}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="btn btn-outline btn-warning">Buy Now</button>
</div>

      </div>
    </div>
  )
}

export { Cart };
