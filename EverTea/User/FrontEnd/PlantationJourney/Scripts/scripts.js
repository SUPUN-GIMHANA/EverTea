import { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../Styles/PlantationStartDistrict'; // Import the styles
import axios from 'axios';

export const useAppLogic = () => {
  const navigation = useNavigation();
  const [district, setDistrict] = useState('');
  const [area, setArea] = useState('');
  const [budget, setBudget] = useState('');
  const [teaPlantsUser, setTeaPlantUser] = useState('');
  const [teaData, setTeaData] = useState(null); // State for fetched tea data
  const [selectedTea, setSelectedTea] = useState(null); // State for selected tea
  const [plantationSlope, setPlantationSlope] = useState(null);
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [budgetPlans, setBudgetPlans] = useState([]);


  const districtInputHandler = (input) => {
    setDistrict(input);
    console.log(input);
  };
  const areaInputHandler = (input) => {
    setArea(input);
    console.log(input);
  };
  const budgetInputHandler = (input) => {
    setBudget(input);
    console.log(input);
  };
  const plantsInputHandler = (input) => {
    setTeaPlantUser(input);
    console.log(input);
  };

  const districtSearchHandler = async () => {
    try {
      const response = await axios.post('http://192.168.1.2:8080/api/user/plantationDistrict', {
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
      const response = await axios.get('http://192.168.1.2:8080/api/user/teaModels');
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
    setSelectedTea({ teaId: item.id, teaName: item.value });
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
    if (!item.value) {
      console.error('No tea selected');
      return;
    }
    try {
      const response = await axios.post('http://192.168.1.2:8080/api/user/plantationTeaModel', {
        teaModelName: item.value,
        
      }); 

      console.log('Backend response:', response.data);
    } catch (error) {
      console.error('Error sending selected tea:', error);
    }
  };



  const plantationSlopeSelection = () => {
  };
    const enterPlantationSlope = (slope) => {
        setPlantationSlope(slope);
        console.log("Selected Slope:", slope); // Debugging
    };
 

  const plantationAreaAndSlope = async () => {
    try {
      const response = await axios.post('http://192.168.1.2:8080/api/user/plantationAreaAndSlope', {
        area: area,  // Send area in the body
        landSlope: plantationSlope,  // Send slope in the body
      });

      // Handle response
      console.log('Backend response:', response.data);
    } catch (error) {
      // Handle errors
      console.error('Error sending Data:', error);
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

  const handleBudgetPress = (item) => {
    console.log('Selected Budget:', item.value);
    setSelectedBudget(item.value); // Update the selected budget state
  };

  const renderTeaBudget = ({ item  }) => ( // No type annotation
    <TouchableOpacity
      style={[styles.budgetButton, selectedBudget  === item .value && styles.selectedBudgetButton]}
      onPress={() => handleBudgetPress(item )}
    >
       <Text style={[
      styles.budgetButtonText,
      selectedBudget  === item .value && styles.selectedBudgetButtonText  // Conditional text color
    ]}>
      {item .value}
    </Text>
    </TouchableOpacity>
  );





  //combined operations
  const handleButtonPress = () => {
    plantationAreaAndSlope(); // Call the plantationAreaAndSlope function
    navigation.navigate('PlantationStartBudget'); // Navigate to the next screen
  };
  const handleButtonPressBudget = () => {
    budgetAndTheTeaPlantsOfTheUser(); // Call the plantationAreaAndSlope function
    budgetRecommendation();
    navigation.navigate('PlantationStartRecommendation'); // Navigate to the next screen
  };

  return {
    district,
    area,
    budget,
    teaPlantsUser,
    teaData,
    selectedTea,
    teaModelNameArraySub,
    selectedTeaType,
    navigation,
    budgetPlans,
    areaInputHandler,
    enterPlantationSlope,
    plantationSlopeSelection,
    renderTeaItem,
    districtInputHandler,
    districtSearchHandler,
    plantationAreaAndSlope,
    budgetAndTheTeaPlantsOfTheUser,
    budgetRecommendation,
    handleTeaSelection,
    sendSelectedTea,
    fetchTeaModels,
    handleButtonPress,
    budgetInputHandler,
    plantsInputHandler,
    handleButtonPressBudget,
    renderTeaBudget,
  };
};