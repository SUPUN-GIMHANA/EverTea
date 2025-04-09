// import SecureStorage from 'react-native-secure-storage';

// Function to store the token securely
// export const storeToken = async (token) => {
//   try {
//     await SecureStorage.setItem('userToken', token);
//   } catch (error) {
//     console.error('Error storing token:', error);
//   }
// };

// // Function to retrieve the token securely
// export const getToken = async () => {
//   try {
//     const token = await SecureStorage.getItem('userToken');
//     return token;
//   } catch (error) {
//     console.error('Error retrieving token:', error);
//   }
// };



// authStorage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

// Store token securely
export const storeToken = async (token) => {
  try {
    if (!token) {
      console.warn('⚠️ Attempted to store undefined or null token.');
      return;
    }
    await AsyncStorage.setItem('userToken', token);
    console.log(token);
  } catch (error) {
    console.error('Error storing token:', error);
  }
};

// Retrieve token securely
export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    return token;
  } catch (error) {
    console.error('Error retrieving token:', error);
  }
};