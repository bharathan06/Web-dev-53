import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from "./components/navbar/navbar"
import { Home } from "./pages/home/home"
import { About } from "./pages/about/about"
import { Footer } from "./components/footer/footer";
import { Cart } from './pages/cart/cart';
import { Shop } from './pages/shop/shop';
import { ShopContextProvider } from './context/shop-context';
import { Logout } from './pages/logout/logout';
import { Profile } from './pages/profile/profile';
import { PersonalInfo } from './pages/profile/personal-info';
import { Wishlist } from './pages/profile/wishlist';
import { Addresses } from './pages/profile/addresses';
import { Orders } from './pages/profile/orders';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';


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
            <Route path="/logout" element={<Logout />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/personal-info" element={<PersonalInfo />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/addresses" element={<Addresses />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            



          </Routes>
          </ShopContextProvider>
          <Footer />
        </Router>
      
    </div>
  );
}

export default App
