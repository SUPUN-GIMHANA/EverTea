import React from 'react'
import './Register.css'

const Navbar = () => {
  return (
    <div>
        <div className='boxHandel'>

          <div className='boxText1'>
              <div className='boxHed1'>Welcome!</div>  <div  className='boxHed2'>EverTea</div> <div  className='boxHed3'>Admin panel</div>
          </div>

          <div className='boxRegister1'>
            <div className='blackBox1'>
              <p className='boxLetter1'>Let's help you meet up your task</p>
              <input className='btn5' type='name' placeholder='Enter Full Name'/>
              <input className='btn5' type='eamil' placeholder='Enter your Email'/>
              <input className='btn5' type="password" placeholder="Enter your password" />
              <input className='btn5' type='nic' placeholder='Enter NIC Number'/>
              <button className='btn4'>Register</button>
              <div><span style={{ color: "white" }}>Have an account ?</span> <span style={{ color: "green", fontWeight: "bold", cursor: "pointer" }}>Log in</span></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar