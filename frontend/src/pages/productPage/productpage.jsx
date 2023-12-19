import React from 'react'
import { default as Productcontext } from '../../containers/product/productcontext';
import { default as ProductDisp } from '../../containers/product/Product'
import './productpage.css'

const Productpage = () => {
    return (
        <>
            <div>
                <Productcontext />
            </div>
        </>
    )
}

export { Productpage };
