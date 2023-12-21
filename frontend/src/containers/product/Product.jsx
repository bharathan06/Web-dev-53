import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';
import './product.css'
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../../products'

const Product = (product) => {
    const { id } = useParams();
    const { cartItemAmount, addToCart } = useContext(ShopContext);
    return (
        <><div class="container1 shadow-xl">
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="lg:w-7/8 mx-auto flex flex-wrap">
                        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded mar" src={product.image} />
                        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <div class="f1">
                                <h2 class="text-sm title-font text-gray-500 tracking-widest">Orva Oils</h2>
                            </div>
                            <div class='f1'>
                                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>
                                <button className="f1 btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                    Wishlist
                                </button>
                            </div>

                            <h6>Price:</h6>
                            <br />
                            <div class="f1">
                                <span class="title-font font-medium text-2xl text-gray-900">₹ {product.price}</span>
                                <br />
                            </div>
                            <br />
                            <div class="f2 flex-col">
                                <button class="flex ml-0 text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded justify-center" onClick={() => addToCart(id)}>Add to cart</button>
                                <br />
                                <button class="flex ml-0 text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded justify-center" onClick={() => addToCart(id)}>Buy now {cartItemAmount > 0 && <>({cartItemAmount}) </>}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}
export default Product
