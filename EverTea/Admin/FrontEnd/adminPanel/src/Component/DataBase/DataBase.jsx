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
                    <div className='tableDataBox'>Land Slope</div>
                    <div className='tableDataBox'>plantation</div>
                    <div className='tableDataBox'>Tea Models</div>
                </div>
                <div className='top'>
                    <div className='tableDataBox'>District</div>
                    <div className='tableDataBox'>Land Slope</div>
                    <div className='tableDataBox'>plantation</div>
                    <div className='tableDataBox'>Tea Models</div>
                </div>
                <div className='top'>
                    <div className='tableDataBox'>District</div>
                    <div className='tableDataBox'>Land Slope</div>
                    <div className='tableDataBox'>plantation</div>
                    <div className='tableDataBox'>Tea Models</div>
                </div>
        </div>
    </div>
  )
}

export default DataBase