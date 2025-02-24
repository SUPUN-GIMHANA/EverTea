import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Register from './Component/Register/Register'
import HomePage from './Component/HomePage/HomePage'
import Contact from './Component/Contact/Contact'

// import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
      </Router>

  )
}

export default App