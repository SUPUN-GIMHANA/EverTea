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
import Table2 from './Component/Table/Table2/Table2'
import Table3 from './Component/Table/Table3/Table3'
import Table4 from './Component/Table/Table4/Table4'
import Table5 from './Component/Table/Table5/Table5'
import Table6 from './Component/Table/Table6/Table6'
import Table7 from './Component/Table/Table7/Table'
import Table8 from './Component/Table/Table8/Table8'
import Table9 from './Component/Table/Table9/Table9'
import Table10 from './Component/Table/Table10/Table10'
import Table11 from './Component/Table/Table11/Table11'
import Table12 from './Component/Table/Table12/Table12'

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
          <Route path="/Table/Table2" element={<Table2/>}/>
          <Route path="/Table/Table3" element={<Table3/>}/>
          <Route path="/Table/Table4" element={<Table4/>}/>
          <Route path="/Table/Table5" element={<Table5/>}/>
          <Route path="/Table/Table6" element={<Table6/>}/>
          <Route path="/Table/Table7" element={<Table7/>}/>
          <Route path="/Table/Table8" element={<Table8/>}/>
          <Route path="/Table/Table9" element={<Table9/>}/>
          <Route path="/Table/Table10" element={<Table10/>}/>
          <Route path="/Table/Table11" element={<Table11/>}/>
          <Route path="/Table/Table12" element={<Table12/>}/>
        </Routes>
      </Router>

  )
}

export default App
