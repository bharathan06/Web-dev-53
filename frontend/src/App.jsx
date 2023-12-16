import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from "./components/navbar/navbar"
import { Home } from "./pages/home/home"
import { About } from "./pages/about/about"
import { Footer } from "./components/footer/footer";
import { Cart } from './pages/cart/cart';
import {Profile} from "./pages/profile/profile";
import {Logout} from "./pages/logout/logout";
import {PersonalInfo}  from './pages/profile/personal-info';
import {Orders} from './pages/profile/orders';
import {Wishlist} from './pages/profile/wishlist';
import {Addresses} from './pages/profile/addresses';
import {Login} from './pages/login/login';




function App() {

  return (
    
    
    <Router>
      <Navbar />
      <Routes>
        
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/logout" element={<Logout/>}/>
      <Route path="/personal-info" element={<PersonalInfo/>}/>
      <Route path="/orders" element={<Orders/>}/>
      <Route path="/wishlist" element={<Wishlist/>}/>
      <Route path="/addresses" element={<Addresses/>}/>
      <Route path="/login" element={<Login/>}/>
     
     
      

      
      
   
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App
