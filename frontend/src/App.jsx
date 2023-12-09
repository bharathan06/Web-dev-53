import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from "./components/navbar/navbar"
import { Home } from "./pages/home/home"
import { About } from "./pages/about/about"
import { Profile } from "./pages/Account/profile" // <-- change the casing of the import statement


function App() {

  return (
    <div className="App">
      <profile />
    </div>
  )
};   
    
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/profile" element={<Profile/>}/>
      {/* <Route path="/cart" element={<Cart/>}/> */}


      </Routes>
    </Router>
    
  

export default App
