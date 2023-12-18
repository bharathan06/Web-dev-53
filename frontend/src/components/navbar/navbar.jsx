import React from 'react';
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

export const Navbar = () => {
  return (
<div>


    <div className="navbar bg-base-100">
      <div className="navbar-start">
       
{/* Drawer Code  */}
    <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
        <div className='tabIndex={0} role="button" className="'>
          <label  htmlFor="my-drawer" className="btn btn-ghost btn-circle" >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
        </div>
        </div> 
        <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop now!</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/profile">My Profile</Link></li>
            <li><Link to="/logout">LOGOUT</Link></li>
          </ul>
        </div>
      </div>




      </div>
      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost text-xl">OrvaOils</Link>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">



          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
            stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>


        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <span className="badge badge-xs badge-primary indicator-item"></span>
            <Link to="/cart">
              <ShoppingCart size={25} />
            </Link>
          </div>
        </button>
        <Link to= "/login" className="btn btn-ghost btn-circle">Login</Link>
      </div>
    </div>
</div>
  
  );
}
