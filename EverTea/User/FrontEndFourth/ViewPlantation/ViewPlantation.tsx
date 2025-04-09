import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import axios from 'axios';
import { Dimensions } from 'react-native';
import { getToken } from '../AuthRequests/authTokenStorage';


const screenWidth = Dimensions.get('window').width;
/* const screenHeight = Dimensions.get('window').height; */

type Plantation = {
  plantaionId: number;
  date: string;
  area: string;
};




const ViewPlantation = () => {
  const [plantations, setPlantations] = useState<Plantation[]>([]);

  useEffect(() => {
    fetchPlantations();
  }, []);

  const fetchPlantations = async () => {
    try {
      const token = await getToken();
      const response = await axios.get(
        'http://evertea-env.eba-7df8sfdm.eu-north-1.elasticbeanstalk.com/api/v1/viewPlantation/get-plantation/1',
        {
          headers: {
            Authorization: `Bearer ${token}`, // Attach token
            'Content-Type': 'application/json',
          },
        }
      );
      setPlantations(response.data);
    } catch (error) {
      console.error('Error fetching plantations:', error);
      Alert.alert('Error', 'Failed to fetch plantations');
    }
  };

  // const addPlantation = async () => {
  //   const newPlantation = {
  //     plantaionId: plantations.length + 1,
  //     date: new Date().toISOString().split('T')[0],
  //     area: 'No 12/25 Moratuva Pitakotuwa',
  //   };

  //   try {
  //     const token = await getToken();
  //     const response = await axios.post(
  //       'http://evertea-env.eba-7df8sfdm.eu-north-1.elasticbeanstalk.com/api/v1/viewPlantation/save-plantation/',
  //       newPlantation,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`, // Attach token
  //           'Content-Type': 'application/json',
  //         },
  //       }
  //     );
  //     if (response.data === 'view plantation table save') {
  //       fetchPlantations();
  //     }
  //   } catch (error) {
  //     console.error('Error adding plantation:', error);
  //     Alert.alert('Error', 'Failed to add plantation');
  //   }
  // };

  const deletePlantation = (id: any) => {
    Alert.alert(
      'Delete Plantation',
      'Are you sure you want to delete this plantation?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              const token = await getToken();
              const response = await axios.delete(
                `http://evertea-env.eba-7df8sfdm.eu-north-1.elasticbeanstalk.com/api/v1/viewPlantation/delete-plantation/1/${id}`,
                {
                  headers: {
                    Authorization: `Bearer ${token}`, // Attach token
                    'Content-Type': 'application/json',
                  },
                }
              );
              if (response.data === `${id} has been deleted`) {
                fetchPlantations();
              } else {
                Alert.alert('Error', 'Failed to delete plantation');
              }
            } catch (error) {
              console.error('Error deleting plantation:', error);
              Alert.alert('Error', 'Failed to delete plantation');
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.frontImg}>
        <Image
          source={require('./assets/images/homeImg.png')}
          style={{ width: '100%', height: '100%' }}
        />
      </View>
      <View style={styles.backImg}>
        <Text style={styles.topic}>My Plantations</Text>
        <ScrollView>
          <View style={styles.plantationHandel}>
            {plantations.map((plantation) => {
              const yearMonth = plantation.date.split('-').slice(0, 2).join('-');

              return (
                <View key={plantation.plantaionId} style={styles.plantation}>
                  <View style={styles.p1I}>
                    <Image
                      source={require('./assets/images/plantation1Img.png')}
                      style={{ width: '100%', height: '100%', borderRadius: 15 }}
                    />
                  </View>
                  <View style={styles.p1d}>
                    <Text style={styles.p1n}>Plantation {plantation.plantaionId}</Text>
                    <Text style={styles.p1a}>{plantation.area}</Text>
                    <View style={styles.p1b}>
                      <Text style={styles.date}>{yearMonth}</Text>
                      <TouchableOpacity
                        style={styles.btn}
                        onPress={() => deletePlantation(plantation.plantaionId)}>
                        <Image
                          source={require('./assets/images/deletebtn.png')}
                          style={{ width: 23, height: 23, borderRadius: 15 }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            })}

            {/* Add plantation button */}
            <TouchableOpacity >
              <View style={styles.plantation}>
                <View style={styles.p1I}>
                  <Image
                    source={require('./assets/images/plantation1Img.png')}
                    style={{ width: '100%', height: '100%', borderRadius: 15 }}
                  />
                </View>
                <View style={styles.p1d}>
                  <Text style={styles.p1n}>Plantation {plantations.length + 1}</Text>
                  <View style={styles.p1b}>
                    <Text style={styles.date1}>Add a new plantation</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ViewPlantation;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  frontImg: {
    width: '100%',
    height: '40%',
  },
  backImg: {
    width: '100%',
    height: '60%',
    backgroundColor: 'rgb(200, 200, 201)',
  },
  topic: {
    width: '100%',
    height: 50,
    color: 'black',
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 50,
  },
  plantationHandel: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  plantation: {
    width: screenWidth*0.9,
    height: 135,
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 8,
    flexDirection: 'row',
  },
  p1I: {
    width: 150,
    height: 125,
    borderRadius: 20,
    margin: 5,
  },
  p1d: {
    width: 150,
    height: 133,
    marginLeft: 10,
  },
  p1n: {
    width: '100%',
    height: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 40,
  },
  p1a: {
    width: '100%',
    height: 40,
    fontSize: 13,
    color: 'rgb(172, 172, 172)',
    textAlign: 'center',
    lineHeight: 40,
  },
  p1b: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    width: 90,
    height: 35,
    backgroundColor: 'rgb(255, 217, 0)',
    borderRadius: 30,
    textAlign: 'center',
    lineHeight: 35,
    color: 'white',
  },
  date1: {
    width: 160,
    height: 35,
    backgroundColor: 'rgb(22, 158, 49)',
    borderRadius: 30,
    textAlign: 'center',
    lineHeight: 35,
    color: 'white',
  },
  btn: {
    width: 45,
    height: 35,
    backgroundColor: 'red',
    borderRadius: 50,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
