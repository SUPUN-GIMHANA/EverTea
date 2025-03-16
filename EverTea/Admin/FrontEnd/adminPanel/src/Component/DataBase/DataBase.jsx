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
                    <div className='tableDataBox'> <Link to="/Table/Table6">District</Link> </div>
                    <div className='tableDataBox'> <Link to="/Table/Table7">District</Link> </div>
                    <div className='tableDataBox'> <Link to="/Table/Table8">District</Link> </div>
                </div>
                <div className='top'>
                    <div className='tableDataBox'> <Link to="/Table/Table9">District</Link> </div>
                    <div className='tableDataBox'> <Link to="/Table/Table10">Land Slope</Link></div>
                    <div className='tableDataBox'>  <Link to="/Table/Table11">plantation</Link></div>
                    <div className='tableDataBox'>  <Link to="/Table/Table12">Tea Model</Link></div>
                </div>
        </div>
    </div>
  )
}

export default DataBase