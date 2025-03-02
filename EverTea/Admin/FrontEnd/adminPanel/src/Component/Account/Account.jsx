import React from 'react'
import './Account.css'

import logo from '../../assets/logo.jpg'
import Home from '../../assets/Home.png'
import Bell from '../../assets/Bell.png'
import { Link } from 'react-router-dom'

const Account = () => {
  return (
    <div className='account'>
      
        <div className='accountBlack'>

           <div className='logoAndName'>
              <div className='logo'><img src={logo} className='logoSize'/></div>
              <div className='name'>Ever Tea</div>
          </div>

           <div className='category'>
              <Link to="/HomePage">
              <div className='homeLine'>
                  <div className='home'><img src={Home} className='logoall'/></div>
                  <div className='TitleAll'>Home page</div>
              </div>
              </Link>

              <div className='notificationLine'>
                  <div className='notification'><img src={Bell} className='logoall'/></div>
                  <div className='TitleAll'>Notification</div>
              </div>
          </div>
        </div>


        <div className='accountText'>
          <div className='sosNameAndLogo'>
            <div className='logo1'><img src={logo} className='logoSize' alt="Logo" /></div>
            <div className='sosnameAndWelcome'>
              <div className='soswelcome'>Welcome back</div>
              <div className='sosuserName'>SUPUN GIMHANA</div>
            </div>
          </div>

          <div className='sosMessage'>Account maintenance</div>

          <div className='plantation'>

          </div>

        </div>
    </div>
  )
}

export default Account