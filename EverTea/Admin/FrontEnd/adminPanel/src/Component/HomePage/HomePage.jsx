import React from 'react'
import './HomePage.css'

import logo from '../../assets/logo.jpg'
import Home from '../../assets/Home.png'
import Bell from '../../assets/Bell.png'
import DataBaseCard from'../../assets/DataBaseCard.png'
import AccountCard from '../../assets/AccountCard.png'
import SosCard from '../../assets/SosCard.png'
import { Link } from 'react-router-dom'


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

        <div className='cardAndTitle'>

            <div  className='TitleAl'>
                <div className='logo1'><img src={logo} className='logoSize'/></div>
                    <div className='nameAndWelcome'>
                        <div className='welcome'>Welcome back</div>
                        <div className='userName'>SUPUN GIMHANA</div>
                    </div>
            </div>

                <div className='card'>
                    <div className='cardContainer'><img src={DataBaseCard} className='cardHandel'/>
                        <div className='textOverlay'>
                            <div className='headMessage'>DataBase</div>
                            <div className='message'>Handling</div>
                        </div>
                    </div>

                    <Link to="/Account"><button className='credBtn'>
                    <div className='cardContainer'><img src={AccountCard} className='cardHandel'/>
                        <div className='textOverlay'>
                            <div  className='headMessage'>Account Maintenance</div>
                            <div className='message'>Forecasting</div>
                        </div>
                    </div>
                    </button></Link>

                    {/* <Link to="/Register"><button className='btn2'>Login</button></Link> */}

                    <Link to="/Contact"><button className='credBtn'>
                    <div className='cardContainer'><img src={SosCard} className='cardHandel'/>
                        <div className='textOverlay'>
                            <div  className='headMessage'>SOS Message</div>
                            <div className='message'>Tracker</div>
                        </div>
                        
                    </div>
                    </button></Link>
                    
                </div>

                <div className='manage'>

                    <div className='districts'>Districts</div>


                    <div className='progress'></div>
                </div>

        </div>

    </div>
    )
}

export default HomePage