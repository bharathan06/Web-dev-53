import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
import { CartItem } from './cart-item';
import { PRODUCTS } from '../../products'
import "./cart.css"
import { useNavigate } from 'react-router-dom'


const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount()
  const navigate = useNavigate()
  return (
    <div className="cart">
      <h1>Your Cart Currently Has :</h1>
      <div>

      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />
          }
        })}
      </div>
      {totalAmount > 0 ?
        <div className="checkout">

          <p>Subtotal : ₹ {totalAmount} </p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
        : <p>Your cart is empty</p>}
    </div>
  )
}

export { Cart };