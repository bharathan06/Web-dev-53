import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from "./components/navbar"
function App() {

  return (
    <nav>
      <Navbar />
    </nav>
    
    // <Router>
      
    //   <Routes>
    //     <Route path="/" />
    //     <Route path="/cart" />

    //   </Routes>
    // </Router>
    
  );
}

export default App
