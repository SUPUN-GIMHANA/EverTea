
import React, { useState } from 'react';
import './Contact.css';
import logo from '../../assets/logo.jpg';
import Home from '../../assets/Home.png';
import Bell from '../../assets/Bell.png';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [text, setText] = useState(""); // Define state for textarea

  const handleChange = (event) => {
    setText(event.target.value); // Update state on user input
  };

  return (
    <div className='sos'>
      <div className='sosBlack'>
        <div className='logoAndName'>
          <div className='logo'><img src={logo} className='logoSize' alt="Logo" /></div>
          <div className='name'>Ever Tea</div>
        </div>

        <div className='category'>
          <Link to="/HomePage">
          <div className='homeLine'>
            <div className='home'><img src={Home} className='logoall' alt="Home" /></div>
            <div className='TitleAll'>Home page</div>
          </div>
          </Link>

          <div className='notificationLine'>
            <div className='notification'><img src={Bell} className='logoall' alt="Notification" /></div>
            <div className='TitleAll'>Notification</div>
          </div>
        </div>
      </div>

      <div className='text'>
        <div className='sosNameAndLogo'>
          <div className='logo1'><img src={logo} className='logoSize' alt="Logo" /></div>
          <div className='sosnameAndWelcome'>
            <div className='soswelcome'>Welcome back</div>
            <div className='sosuserName'>SUPUN GIMHANA</div>
          </div>
        </div>

        <div className='sosMessage'>SOS Messages Tracker</div>

        <div className='sosText'>
          <div className='command'>Message</div>
          <div className='boxMessage'> <textarea value={text} onChange={handleChange}
            placeholder="Describe your Message..." rows="5" cols="50" className='boxTextInput' />
          </div>
        </div>

        <div className='sosText'>
          <div className='command'>District</div>
          <div className='boxMessage'> <textarea value={text} onChange={handleChange}
            placeholder="Enter your District..." rows="5" cols="50" className='TextDistrict' />
          </div>
        </div>
        <div className='btn80'><button className='sosBtn'>send</button></div>
      </div>
    </div>
  );
};

export default Contact;
