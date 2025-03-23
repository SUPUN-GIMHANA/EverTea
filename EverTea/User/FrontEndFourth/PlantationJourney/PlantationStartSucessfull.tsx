import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { useAppLogic } from './Scripts/scripts';
import { styles } from './Styles/PlantationStartSucessfull'; // Import the styles


// Define the type for the navigation stack
type RootStackParamList = {
  Home: undefined;
 
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;


export default function PlantationStart({ navigation }: HomeScreenProps) {

  const {  district, districtInputHandler, districtSearchHandler } = useAppLogic();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
        <View style={styles.closeButton}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Home')} activeOpacity={0.7}>
            <Text style={styles.closeBorder}>
              <Text style={styles.closeText}>Close</Text>
            </Text>
          </TouchableOpacity> 
        </View>

        <View style={styles.progressIndicator}>
            <Text style={styles.numberBorder1}>
              <Text style={styles.number1}>1</Text>
            </Text>
            <View style={styles.numberBorderProgress1}/>
            <Text style={styles.numberBorder2}>
              <Text style={styles.number2}>2</Text>
            </Text>
            <View style={styles.numberBorderProgress2}/>
            <Text style={styles.numberBorder3}>
              <Text style={styles.number3}>3</Text>
            </Text>
        </View>

        <View style={styles.headerContent}>
          <View style={styles.headerTopic}>
            <Text style={styles.greetingText}>
              <Text style={styles.planeText}>Plantation Created </Text>
              <Text style={styles.boldText}>Sucessfully!</Text>
            </Text>
          </View>
        </View>
        
        <View style={styles.bodyContent}>
          <View style={styles.budgetContainer}>
            <View style={styles.budgetImageContainer}>
              
              <LinearGradient
                colors={['#DAFDBA', '#9AEBA3', '#45C4B0', '#13678A']} // light green to blue gradient
                start={{ x: 0, y: 0 }} // Top-left
                end={{ x: 1, y: 1 }}   // Bottom-right
                style={styles.borderOverlay}>

              </LinearGradient>
              <Image
                source={require('.././assets/Images/HomePage/Plantation Journey/Plantation.png')}
                style={styles.budgetImage}
              />
            </View>
          </View>
        </View>


      </ScrollView>

      <View style={styles.navButtons}>
          <View style={styles.nextButton}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')} activeOpacity={0.7}>
              <Text style={styles.nextButtonBorder}>
                <Text style={styles.navButtonText}>View Plantation</Text>
              </Text>
            </TouchableOpacity> 
          </View>
      </View>
    </View>

    
  );
}