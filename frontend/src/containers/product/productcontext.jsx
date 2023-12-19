import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';
import { useParams } from 'react-router-dom';
import { default as ProductDisp } from './Product'
import { PRODUCTS as Products } from '../../products'

const productcontext = (props) => {
    const { PRODUCTS } = useContext(ShopContext);
    const { id } = useParams();
    {
        Products.map((product) => {
            if (PRODUCTS[product.id] == id) {
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
