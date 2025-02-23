

import React from 'react'
import './HomePage.css'

import logo from '../../assets/logo.jpg'
import Home from '../../assets/Home.png'
import Bell from '../../assets/Bell.png'

const HomePage = () => {
  return (

    <div className='coloms'>

        <div className='blackBar'>

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

        <div  className='TitleAl'>
            <div className='logo1'><img src={logo} className='logoSize'/></div>
            <div className='nameAndWelcome'>
                <div className='welcome'>Welcome back</div>
                <div className='userName'>SUPUN GIMHANA</div>
            </div>
        </div>

        <div>
            <div></div>
            <div></div>
            <div></div>
        </div>

    </div>
  )
}

export default HomePage