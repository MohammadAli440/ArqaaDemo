import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#f5f2ee]">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/login" element={<div>Login Page</div>} /> */}
          {/* <Route path="/cart" element={<div>Cart Page</div>} /> */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App