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


// //Saving and retrieving user ID 
// export const storeUserId = async (userId) => {
//   try {
//     if (!userId) {
//       console.warn('⚠️ Attempted to store undefined or null userId.');
//       return;
//     }
//     await AsyncStorage.setItem('userId', userId.toString());  // Ensure it's a string for ASYNC
//     console.log('User ID stored:', userId);
//   } catch (error) {
//     console.error('Error storing user ID:', error);
//   }
// };


// export const getUserId = async () => {
//   try {
//     const userId = await AsyncStorage.getItem('userId');
//     if (userId !== null) {
//       console.log('User ID retrieved:', userId);
//       return userId;
//     } else {
//       console.warn('No user ID found.');
//       return null;
//     }
//   } catch (error) {
//     console.error('Error retrieving user ID:', error);
//   }
// };
