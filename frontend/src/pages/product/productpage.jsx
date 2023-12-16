import React from 'react'
import { Product_sec } from '../../containers';
import './productpage.css'

const Productpage = () => {
    return (
        <>
            <div className='Product'>
                <div>

                    <Product_sec >
                        <Product />
                    </Product_sec>
                </div>
            </div>
        </>
    )
}

export { Productpage };
