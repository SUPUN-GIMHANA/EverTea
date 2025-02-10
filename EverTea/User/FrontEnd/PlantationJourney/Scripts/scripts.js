import { useState } from 'react';
import axios from 'axios';

export const useAppLogic = () => {
  const [district, setDistrict] = useState('');
  const [area, setArea] = useState('');
  const [landSlope, setLandSlope] = useState('');
  const [budget, setBudget] = useState('');
  const [teaPlantsUser, setTeaPlantUser] = useState('');
  const [teaData, setTeaData] = useState (null); // State for fetched tea data
  const [selectedTea, setSelectedTea] = useState(null); // State for selected tea


  const districtInputHandler = (input) => {
    setDistrict(input);
    console.log(input);
  };


  const districtSearchHandler = async () => {
    try {
      const response = await axios.post('http://192.168.1.3:8080/api/user/plantationDistrict', {
        district: district, // Send district in the body
      });

      // Handle response
      console.log('Backend response:', response.data);
      setTeaData(response.data); // Update teaData state with fetched data
    } catch (error) {
      // Handle errors
      console.error('Error fetching tea data:', error);
      setTeaData(null); // Reset teaData if there's an error
    }
  };

  const handleTeaSelection = (teaId, teaName) => {
    setSelectedTea({ teaId, teaName }); // Store selected tea
  };

  const sendSelectedTea = async () => {
    if (!selectedTea) {
      console.error('No tea selected');
      return;
    }

    try {
      const response = await axios.post('http://192.168.1.3:8080/api/user/selectTea', {
        teaId: selectedTea.teaId,
        teaName: selectedTea.teaName,
      });

      // Handle response
      console.log('Backend response:', response.data);
    } catch (error) {
      // Handle errors
      console.error('Error sending selected tea:', error);
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
    teaData,
    selectedTea,
    districtInputHandler,
    districtSearchHandler,
    plantationAreaAndSlope,
    budgetAndTheTeaPlantsOfTheUser,
    budgetRecommendation,
    handleTeaSelection,
    sendSelectedTea,
  };
};