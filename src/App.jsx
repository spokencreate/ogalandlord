
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"


const App = () => {
  return (
    <Router>
      <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/> {/* <-- CHANGED to '/' */}
          <Route path='rent' element={<Rent/>}/>
          <Route path='sell' element={<Sell/>}/>
        </Routes>
    </Router>
  )
}

export default App