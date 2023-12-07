import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from "./components/navbar/navbar"
import { Home } from "./pages/home/home"
import { About } from "./pages/about/about"


function App() {

  return (
    
    
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      {/* <Route path="/cart" element={<Cart/>}/> */}


      </Routes>
    </Router>
    
  );
}

export default App
