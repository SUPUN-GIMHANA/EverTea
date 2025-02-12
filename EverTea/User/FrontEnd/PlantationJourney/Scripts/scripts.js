import { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../Styles/PlantationStartDistrict'; // Import the styles
import axios from 'axios';

export const useAppLogic = () => {
  const [district, setDistrict] = useState('');
  const [area, setArea] = useState('');
  const [landSlope, setLandSlope] = useState('');
  const [budget, setBudget] = useState('');
  const [teaPlantsUser, setTeaPlantUser] = useState('');
  const [teaData, setTeaData] = useState(null); // State for fetched tea data
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

      if (response.data && Array.isArray(response.data)) {
        //converting 
          const formattedTeaData = response.data.map((tea, index) => ({
            id: (index + 1).toString(),
            value: tea,
          }));
          setTeaModelNameArraySub(formattedTeaData);
      }




    } catch (error) {
      // Handle errors
      console.error('Error fetching tea data:', error);
      setTeaData(null); // Reset teaData if there's an error
    }
  };

  const fetchTeaModels = async () => {
    try {
      const response = await axios.get('http://192.168.1.3:8080/api/user/teaModels');
      console.log('Fetched tea models:', response.data);
      return response.data; // Return the fetched data
    } catch (error) {
      console.error('Error fetching tea models:', error);
      return null; // Return null in case of an error
    }
  };

  // TeaModel Array Creating
  let teaModelNameMain;

  const [teaModelNameArraySub, setTeaModelNameArraySub] = useState([
    
  ]);

  const [selectedTeaType, setSelectedTeaType] = useState(null); // No type annotation

  const handleTeaPress = (item) => {  // No type annotation
    console.log('Pressed:', item.value);
    setSelectedTeaType(item.value);
    handleTeaSelection(item.value);
    sendSelectedTea(item);
  };

  const renderTeaItem = ({ item }) => ( // No type annotation
    <TouchableOpacity
      style={[styles.teaButton, selectedTeaType === item.value && styles.selectedTeaButton]}
      onPress={() => handleTeaPress(item)}
    >
       <Text style={[
      styles.teaButtonText,
      selectedTeaType === item.value && styles.selectedTeaButtonText // Conditional text color
    ]}>
      {item.value}
    </Text>
    </TouchableOpacity>
  );

  const handleTeaSelection = (teaId, teaName) => {
    setSelectedTea({ teaId, teaName }); // Store selected tea
  };

  const sendSelectedTea = async (item) => {
    if (!selectedTea) {
      console.error('No tea selected');
      return;
    }
    try {
      const response = await axios.post('http://192.168.1.3:8080/api/user/plantationTeaModel', {
        teaId: selectedTea.teaId,
        teaName: item.value,
      });

      console.log('Backend response:', response.data);
    } catch (error) {
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
    teaModelNameArraySub,
    selectedTeaType,
    renderTeaItem,
    districtInputHandler,
    districtSearchHandler,
    plantationAreaAndSlope,
    budgetAndTheTeaPlantsOfTheUser,
    budgetRecommendation,
    handleTeaSelection,
    sendSelectedTea,
    fetchTeaModels,
  };
};