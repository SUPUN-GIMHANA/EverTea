import { useState, useEffect } from 'react';

import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../Styles/PlantationStartDistrict'; // Import the styles
import axios from 'axios';

import { getToken } from '../../AuthRequests/authTokenStorage';

export const useAppLogic = () => {
  // const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJncHNAZ21haWwuY29tIiwiaWF0IjoxNzQzMDAzODg3LCJleHAiOjE3NDMwMDc0ODd9.mKrBElytW2PmAiqUvIW4iSUuBcjir1aTcTBKBgvTL-g"; // Manually set token

  const navigation = useNavigation();
  const [district, setDistrict] = useState('');
  const [area, setArea] = useState('');
  const [budget, setBudget] = useState('');
  const [teaPlantationName, setTeaPlantationName] = useState('');
  const [teaPlantsUser, setTeaPlantUser] = useState('');
  const [teaData, setTeaData] = useState(null); // State for fetched tea data
  const [selectedTea, setSelectedTea] = useState(null); // State for selected tea
  const [plantationSlope, setPlantationSlope] = useState(null);
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [budgetPlan, setBudgetPlan] = useState(1);

  //budget

  const [recommendedPlants, setRecommendedPlants] = useState(0);
  const [extraPlants, setExtraPlants] = useState(0);
  const [recommendedBudget, setRecommendedBudget] = useState(0);
  const [userPlants, setUserPlants] = useState(0);
  const [userBudget, setUserBudget] = useState(0);


  const districtInputHandler = (input) => {
    setDistrict(input);
    console.log(input);
  };
  const areaInputHandler = (input) => {
    setArea(input);
    console.log(input);
  };
  const plantationNameHandler = (input) => {
    setTeaPlantationName(input);
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
      const token = await getToken();
      console.log('Token:', token);
      const response = await axios.post('http://evertea-env.eba-7df8sfdm.eu-north-1.elasticbeanstalk.com/api/userPlantationCreating/plantationDistrict', {
        district: district, // Send district in the body
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, // Attach token
          'Content-Type': 'application/json',
        },
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
      const token = await getToken();
      const response = await axios.get('http://evertea-env.eba-7df8sfdm.eu-north-1.elasticbeanstalk.com/api/userPlantationCreating/teaModels',
      {
        headers: {
          Authorization: `Bearer ${token}`, // Attach token
          'Content-Type': 'application/json',
        },
      }
      );
      console.log('Fetched tea models:', response.data);
      return response.data; // Return the fetched data
    } catch (error) {
      console.error('Error fetching tea models:', error);
      return null; // Return null in case of an error
    }
  };

  // TeaModel Array Creating


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
      selectedTeaType === item.value && styles.selectedTeaButtonText, // Conditional text color
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
      const token = await getToken();
      const response = await axios.post('http://evertea-env.eba-7df8sfdm.eu-north-1.elasticbeanstalk.com/api/userPlantationCreating/plantationTeaModel', {
        teaModelName: item.value,

      },
      {
        headers: {
          Authorization: `Bearer ${token}`, // Attach token
          'Content-Type': 'application/json',
        },
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
        console.log('Selected Slope:', slope); // Debugging
    };

  const plantationAreaAndSlope = async () => {
    try {
      const token = await getToken();
      const response = await axios.post('http://evertea-env.eba-7df8sfdm.eu-north-1.elasticbeanstalk.com/api/userPlantationCreating/plantationAreaAndSlope', {
        area: area,  // Send area in the body
        landSlope: plantationSlope,  // Send slope in the body
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, // Attach token
          'Content-Type': 'application/json',
        },
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
      const token = await getToken();
      const response = await axios.post('http://evertea-env.eba-7df8sfdm.eu-north-1.elasticbeanstalk.com/api/userPlantationCreating/budgetAndTheTeaPlantsOfTheUser', {
        budget: budget,  // Send district in the body
        teaPlantsUser: teaPlantsUser,
        plantationName:teaPlantationName,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, // Attach token
          'Content-Type': 'application/json',
        },
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
      const token = await getToken();
      const response = await axios.post('http://evertea-env.eba-7df8sfdm.eu-north-1.elasticbeanstalk.com/api/userPlantationCreating/budgetRecommendation', {
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, // Attach token
          'Content-Type': 'application/json',
        },
      });
      console.log('Recommended Plants:', recommendedPlants);
      console.log('Extra Plants:', extraPlants);
      console.log('Recommended Budget:', recommendedBudget);
      console.log('User Plants:', userPlants);
      console.log('User Budget:', userBudget);
      // Handle response
      console.log('Backend response:', response.data);
    } catch (error) {
      // Handle errors
      console.error('Error sending district:', error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await getToken();
        const response = await axios.post('http://evertea-env.eba-7df8sfdm.eu-north-1.elasticbeanstalk.com/api/userPlantationCreating/budgetRecommendation', {}, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        setRecommendedPlants(response.data[0]);
        setExtraPlants(response.data[1]);
        setRecommendedBudget(response.data[2]);
        setUserPlants(response.data[3]);
        setUserBudget(response.data[4]);
      } catch (error) {
        console.error('Error fetching budget recommendation data:', error);
      }
    };
    fetchData();
  }, []);

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
      selectedBudget  === item .value && styles.selectedBudgetButtonText,// Conditional text color
    ]}>
      {item .value}
    </Text>
    </TouchableOpacity>
  );


  const plantationCreationSystem = async () => {
    try {
      const token = await getToken();
      const response = await axios.post('http://evertea-env.eba-7df8sfdm.eu-north-1.elasticbeanstalk.com/api/userPlantationCreating/plantationCreation', {
        userChoice: 1,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, // Attach token
          'Content-Type': 'application/json',
        },
      });

      // Handle response
      console.log('Backend response:', response.data);
    } catch (error) {
      // Handle errors
      console.error('Error sending district:', error);
    }
  };
  const plantationCreationUser = async () => {
    try {
      const token = await getToken();
      const response = await axios.post('http://evertea-env.eba-7df8sfdm.eu-north-1.elasticbeanstalk.com/api/userPlantationCreating/plantationCreation', {
        userChoice: 2,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, // Attach token
          'Content-Type': 'application/json',
        },
      });

      // Handle response
      console.log('Backend response:', response.data);
    } catch (error) {
      // Handle errors
      console.error('Error sending district:', error);
    }
  };


  //combined operations
  const handleButtonPress = () => {
    plantationAreaAndSlope(); // Call the plantationAreaAndSlope function
    navigation.navigate('PlantationStartBudget'); // Navigate to the next screen
  };
  const handleButtonPressBudget = async () => {
    try{
    await budgetAndTheTeaPlantsOfTheUser(); // Call the plantationAreaAndSlope function
    await budgetRecommendation();
    navigation.navigate('PlantationStartRecommendation'); // Navigate to the next screen
    } catch (err) {
      console.error('error : ', err);
    }
  };
  const handlePlantationCreationSystem = async () => {
    try{
    await plantationCreationSystem(); // Call the plantationCreation function
    navigation.navigate('PlantationStartSucessfull'); // Navigate to the next screen
    } catch (err) {
      console.error('error : ', err);
    }
  };
  const handlePlantationCreationUser = async () => {
    try{
    await plantationCreationUser(); // Call the plantationCreation function
    navigation.navigate('PlantationStartSucessfull'); // Navigate to the next screen
    } catch (err){
      console.error('error : ', err);
    }
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
    budgetPlan,
    recommendedPlants,
    extraPlants,
    recommendedBudget,
    teaPlantationName,
    userPlants,
    userBudget,
    // budgetPlanUser,
    // budgetPlanRec,
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
    plantationNameHandler,
    budgetInputHandler,
    plantsInputHandler,
    handleButtonPressBudget,
    renderTeaBudget,
    handlePlantationCreationSystem,
    handlePlantationCreationUser,
    plantationCreationSystem,
    plantationCreationUser,
  };
};
