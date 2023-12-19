import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';
import { useParams } from 'react-router-dom';
import { default as ProductDisp } from './Product'
import { PRODUCTS } from '../../products'

const productcontext = (props) => {
    const { product } = useContext(ShopContext);
    {
        PRODUCTS.map((product) => {
            if (PRODUCTS[product.id] == product.id) {
                return (
                    <div>
                        <ProductDisp product={product} />
                    </div>
                )
            }
        }
        )
    }
}

export default productcontext
