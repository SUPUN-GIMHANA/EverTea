import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Register from './Component/Register/Register'
import HomePage from './Component/HomePage/HomePage'
import Contact from './Component/Contact/Contact'
import Account from './Component/Account/Account'
import DataBase from './Component/DataBase/DataBase'


// import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Table1 from './Component/Table/Table1/Table1'

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Account" element={<Account/>}/>
          <Route path="/DataBase" element={<DataBase/>}/>
          <Route path="/Table/Table1" element={<Table1/>}/>
        </Routes>
      </Router>

  )
}

export default App
