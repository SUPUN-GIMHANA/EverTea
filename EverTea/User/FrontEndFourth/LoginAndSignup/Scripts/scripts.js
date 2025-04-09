import { useState } from 'react';
import axios from 'axios';
import { storeToken } from '../../AuthRequests/authTokenStorage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Navigation/RootStackParams';

export const validateEmail = (text) => {
  // Allow only email format characters (letters, numbers, @, ., _)
  return text.replace(/[^a-zA-Z0-9@._-]/g, '');
};

export const validatePassword = (text) => {
  // Restrict special characters except @, #, $, !, %, &, * and limit length to 30
  return text.replace(/[^a-zA-Z0-9@#$!%&*]/g, '').substring(0, 30);
};

export const validateUserName = (text) => {
  // Restrict special characters except @, #, $, !, %, &, * and limit length to 30
  return text.replace(/[^a-zA-Z0-9@#$!%&*]/g, '').substring(0, 30);
};

export const validateRole = (text) => {
  // Restrict special characters except @, #, $, !, %, &, * and limit length to 30
  return text.replace(/[^A-Z]/g, '').substring(0, 30);
};

export const validateMobileNumber = (number) => {
  // Restrict special characters except @, #, $, !, %, &, * and limit length to 30
  return number.replace(/[^0-9]/g, '').substring(0, 10);
};
export const useAuthLogic = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [userName, setUserName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleLogin = async (navigation) => {
    if (!email || !password) {
      setErrorMessage('Email and Password are required!');
      return;
    }
    try {
      const response = await axios.post('http://evertea-env.eba-7df8sfdm.eu-north-1.elasticbeanstalk.com/user/login', {
        email,
        password,
      });
      if (response.status === 200) {
        const token = response.data.accessToken;
        await storeToken(token);
         

        navigation.navigate('Home');
      } else {
        setErrorMessage('Invalid credentials');
      }
    } catch (error) {
      setErrorMessage('Login failed. Please try again.');
      console.log(error);
    }
  };
  const handleRegistration = async (navigation) => {
    if (!email || !password || !userName || !role || !mobileNumber) {
      setErrorMessage('Email, UserName, Role, Mobile Numberand Password are required!');
      return;
    }
    try {
      const response = await axios.post('http://evertea-env.eba-7df8sfdm.eu-north-1.elasticbeanstalk.com/user/register', {
        email,
        password,
        userName,
        role,
        mobileNumber,
      });
      if (response.status === 200) {
        navigation.navigate('Login');
      } else {
        setErrorMessage('Invalid credentials');
      }
    } catch (error) {
      setErrorMessage('Registering failed. Please try again.');
      console.log(error);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    role,
    setRole,
    userName,
    setUserName,
    mobileNumber,
    setMobileNumber,
    errorMessage,
    handleLogin,
    handleRegistration
  };
};
