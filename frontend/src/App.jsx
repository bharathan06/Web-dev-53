import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from "./components/navbar/navbar"
import { Home } from "./pages/home/home"
import { About } from "./pages/about/about"
import { Footer } from "./components/footer/footer";
import { Cart } from './pages/cart/cart';
import {Profile} from "./pages/profile/profile";



function App() {

  return (
    
    
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/profile" element={<Profile/>}/>
    
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App
