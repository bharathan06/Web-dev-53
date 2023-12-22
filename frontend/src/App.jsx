import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from "./components/navbar/navbar"
import { Home } from "./pages/home/home"
import { About } from "./pages/about/about"
import { Footer } from "./components/footer/footer";
import { Cart } from './pages/cart/cart';
import { Shop } from './pages/shop/shop';
import { ShopContextProvider } from './context/shop-context';

function App() {

  return (

    <div className="App">

      <Router>
        <Navbar />
        <ShopContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />


          </Routes>
        </ShopContextProvider>
        <Footer />
      </Router>

    </div>
  );
}

export default App
