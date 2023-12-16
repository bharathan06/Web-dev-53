import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from "./components/navbar/navbar"
import { Home } from "./pages/home/home"
import { About } from "./pages/about/about"
import { Footer } from "./components/footer/footer";
import { Cart } from './pages/cart/cart';
import { Shop } from './pages/shop/shop';
import { Productpage } from './pages/product/productpage'
import { ShopContextProvider } from './context/shop-context';

function App() {

  return (

    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product" element={<Productpage />} />


          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App
