import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';
import { useParams } from 'react-router-dom';
import { Product_sec as ProductDisp } from '../../containers'
import { PRODUCTS as Products } from '../../products'
import './productpage.css'

const Productpage = (product) => {
    {
        return (
            <div>
                <ProductDisp product={product} />
            </div>
        )

    }
}

export default Productpage
