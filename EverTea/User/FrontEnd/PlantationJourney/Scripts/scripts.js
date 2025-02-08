import { useState } from 'react';
import axios from 'axios';

export const useAppLogic = () => {
  const [district, setDistrict] = useState('');
  const [area, setArea] = useState('');
  const [landSlope, setLandSlope] = useState('');
  const [budget, setBudget] = useState('');
  const [teaPlantsUser, setTeaPlantUser] = useState('');




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
  const plantationAreaAndSlope = async () => {
    try {
      const response = await axios.post('http://192.168.1.2:8080/api/user/plantationAreaAndSlope', {
        area: district,  // Send district in the body
        landSlope: district,  // Send district in the body

      });
  
      // Handle response
      console.log('Backend response:', response.data);
    } catch (error) {
      // Handle errors
      console.error('Error sending district:', error);
    }
  };
  const budgetAndTheTeaPlantsOfTheUser = async () => {
    try {
      const response = await axios.post('http://192.168.1.2:8080/api/user/budgetAndTheTeaPlantsOfTheUser', {
        budget: budget,  // Send district in the body
        teaPlantsUser: teaPlantsUser,
      });
  
      // Handle response
      console.log('Backend response:', response.data);
    } catch (error) {
      // Handle errors
      console.error('Error sending district:', error);
    }
  };
  const budgetRecommendation = async () => {
    try {
      const response = await axios.post('http://192.168.1.2:8080/api/user/budgetRecommendation', {
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
    area,
    landSlope,
    budget,
    teaPlantsUser,
    districtInputHandler,
    districtSearchHandler,
    plantationAreaAndSlope,
    budgetAndTheTeaPlantsOfTheUser,
    budgetRecommendation,
  };
};