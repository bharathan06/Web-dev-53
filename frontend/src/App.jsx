import React from 'react'
import { Header, Product_sec, Footer } from './containers';
import { Navbar, Navigate, Product } from './components';
import './App.css'

const App = () => {
    return (
        <>
            <div className='App'>
                <div>
                    <Header />
                    <Navbar />
                    <Navigate />
                </div>
                <div>

                    <Product_sec >
                        <Product />
                    </Product_sec>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default App
