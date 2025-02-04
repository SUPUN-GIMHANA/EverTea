import { useState } from 'react';
import axios from 'axios';

export const useAppLogic = () => {
  const [district, setDistrict] = useState('');

  const districtInputHandler = (input) => {
    setDistrict(input);
    console.log(input); // Log the district input for debugging
  };


  const districtSearchHandler = async () => {
    try {
      const response = await axios.post('http://192.168.1.2:8080/api/user/plantationDistrict', {
        district: district,  // Send district in the body
      });
  
      // Handle response
      console.log('Backend response:', response.data);
    } catch (error) {
      // Handle errors
      console.error('Error sending district:', error);
    }
  };


  return {
    district,
    districtInputHandler,
    districtSearchHandler,
  };
};