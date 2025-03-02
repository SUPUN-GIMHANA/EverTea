import React from 'react'
import './Contact.css'
import logo from '../../assets/logo.jpg'
import Home from '../../assets/Home.png'
import Bell from '../../assets/Bell.png'

const Contact = () => {
  return (
      <div className='sos'>
      
        <div className='sosBlack'>
           <div className='logoAndName'>
                          <div className='logo'><img src={logo} className='logoSize'/></div>
                          <div className='name'>Ever Tea</div>
                      </div>
          
                      <div className='category'>
                          <div className='homeLine'>
                              <div className='home'><img src={Home} className='logoall'/></div>
                              <div className='TitleAll'>Home page</div>
                          </div>
          
                          <div className='notificationLine'>
                              <div className='notification'><img src={Bell} className='logoall'/></div>
                              <div className='TitleAll'>Notification</div>
                          </div>
                      </div>
        </div>

        <div className='text'>

          <div className='sosNameAndLogo'>
            <div className='logo1'><img src={logo} className='logoSize'/></div>
          </div>
          <div className='sosMessage'></div>
          <div className='sosText'></div>
          <div className='district'></div>
          <div className='btn80'></div>
          

        </div>
      

      </div>
  )
}

export default Contact