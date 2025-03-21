import { useState, useEffect } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../Styles/SignUp'; // Import the styles
import axios from 'axios';


export const validateEmail = (text) => {
  // Allow only email format characters (letters, numbers, @, ., _)
  return text.replace(/[^a-zA-Z0-9@._-]/g, '');
};

export const validatePassword = (text) => {
  // Restrict special characters except @, #, $, !, %, &, * and limit length to 30
  return text.replace(/[^a-zA-Z0-9@#$!%&*]/g, '').substring(0, 30);
};

export const useAuthLogic = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (navigation) => {
    if (!email || !password) {
      setErrorMessage('Email and Password are required!');
      return;
    }
    try {
      const response = await axios.post('http://10.31.5.85:8080/user/login', {
        email,
        password,
      });
      if (response.status === 200) {
        navigation.navigate('Home');
      } else {
        setErrorMessage('Invalid credentials');
      }
    } catch (error) {
      setErrorMessage('Login failed. Please try again.');
      console.log(error);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    errorMessage,
    handleLogin,
  };
};
