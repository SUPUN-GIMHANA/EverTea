import React from 'react'
import './Table12.css'

import logo from '../../../assets/logo.jpg'
import Menu from '../../../assets/Menu.png'
import arrow1 from '../../../assets/arrow1.jpg'
import { Link } from 'react-router-dom'

const Table12 = () => {
  return (
    <div className='table1Black'>
        <div className='dataLogoAndName'>
            <div className='dataLogo'><img src={logo} className='logoSize'/></div>
            <div className='dataName'>Ever Tea</div>
        </div>
        <Link to="/HomePage">
            <div className='menu'><img src={Menu} className='MenuLogo'/></div>
        </Link>
        <Link to="/DataBase">
        <div className='arrow1'><img src={arrow1} className='arrow1'/></div>
        </Link>

        <div className='districtTopic'>District Data</div>
        <div className='dataBox1'>
            <div className='insideBox'>
                <div>
                    <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
                        <thead>
                            <tr>
                                <th>Name12</th>
                                <th>Age</th>
                                <th>Country</th>
                                <th>District</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>John Doe</td>
                                <td>25</td>
                                <td>USA</td>
                                <td>Galle</td>
                            </tr>
                            <tr>
                                <td>Jane Smith</td>
                                <td>30</td>
                                <td>UK</td>
                                <td>Srilaka</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Table12