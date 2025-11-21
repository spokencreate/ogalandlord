import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Rent from './pages/Rent'
import Sell from './pages/Sell'
import Nav from "./components/Nav"


const App = () => {
  return (
    <Router>
      <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='rent' element={<Rent/>}/>
          <Route path='sell' element={<Sell/>}/>
        </Routes>
        
    </Router>
  )
}

export default App
