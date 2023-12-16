import React from 'react';
import Hero from '../../components/hero/hero';
import { Shop } from "../shop/shop";
import './home.css'

export const Home = () => {
  return (
    <div>

      <Hero />
      <div className="shop">
        <div className="title"><h1>Our Top Products : </h1></div>
        <Shop />
      </div>
    </div>
  )
}



