import React from 'react';
import { PRODUCTS } from '../../products';
import { Product } from './product';
import './shop.css';

const Shop = () => {
    return (
        <div className="products">
            {PRODUCTS.map((product) =>
                <Product data={product} />)}
        </div>
    );
}

export { Shop };