import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='boxHandel'>

          <div className='boxText'>
              <div className='boxHed1'>Welcome!</div>  <div  className='boxHed2'>EverTea</div> <div  className='boxHed3'>Admin panel</div>
              <div className='boxLetter'><br /><br/>Where you meet your Ultimate <br/> <div className='mid'>Tea Guidter !</div> </div>
          </div>

          <div className='boxRegister'>
            <div className='blackBox'>
              <input className='btn' type='eamil' placeholder='Enter your Email'/>
              <input className='btn1' type="password" placeholder="Enter your password" />
              <Link to="/Register"><button className='btn2'>Login</button></Link>
              <div className='p'>Forgot your password ?</div>
              <div><span style={{ color: "white" }}>Don't have an account ?</span> <span style={{ color: "green", fontWeight: "bold", cursor: "pointer" }}>sign up</span></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar