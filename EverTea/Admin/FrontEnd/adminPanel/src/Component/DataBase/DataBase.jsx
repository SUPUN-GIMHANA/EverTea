import React from 'react'
import './DataBase.css'

import logo from '../../assets/logo.jpg'
import Menu from '../../assets/Menu.png'
import { Link } from 'react-router-dom'

const DataBase = () => {
  return (
    <div className='dataBlack'>
        <div className='dataLogoAndName'>
            <div className='dataLogo'><img src={logo} className='logoSize'/></div>
            <div className='dataName'>Ever Tea</div>
        </div>
        <Link to="/HomePage">
        <div className='menu'><img src={Menu} className='MenuLogo'/></div>
        </Link>

        <div className='dataTopic'>Data Base Handling</div>

        <div className='dataBox'>
                <div className='top'>
                    <div className='tableDataBox'> <Link to="/Table/Table1">District</Link> </div>
                    <div className='tableDataBox'> <Link to="/Table/Table2">Instruction</Link></div>
                    <div className='tableDataBox'>  <Link to="/Table/Table3">TeaModels</Link></div>
                    <div className='tableDataBox'>  <Link to="/Table/Table4">TeaType</Link></div>
                </div>
                <div className='top'>
                    <div className='tableDataBox'> <Link to="/Table/Table5">Weather</Link> </div>
                    <div className='tableDataBox'> <Link to="/Table/Table6">teble6</Link> </div>
                    <div className='tableDataBox'> <Link to="/Table/Table7">teble7</Link> </div>
                    <div className='tableDataBox'> <Link to="/Table/Table8">teble8</Link> </div>
                </div>
                <div className='top'>
                    <div className='tableDataBox'> <Link to="/Table/Table9">teble9</Link> </div>
                    <div className='tableDataBox'> <Link to="/Table/Table10">teble10</Link></div>
                    <div className='tableDataBox'>  <Link to="/Table/Table11">teble11</Link></div>
                    <div className='tableDataBox'>  <Link to="/Table/Table12">teble12</Link></div>
                </div>
        </div>
    </div>
  )
}

export default DataBase