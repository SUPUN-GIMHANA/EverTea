import React, { useState } from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity, ScrollView, Button, TextInput } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { useAppLogic } from './Scripts/scripts';
import { styles } from './Styles/PlantationStartLand'; // Import the styles


// Define the type for the navigation stack
type RootStackParamList = {
  Home: undefined;
  FinancialTracker: undefined;
  PlantationStartDistrict: undefined;
  PlantationStartBudget: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;


export default function FinancialTracker({ navigation }: HomeScreenProps) {

  const {  district, districtInputHandler, districtSearchHandler } = useAppLogic();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
        <View style={styles.cancelButton}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Home')} activeOpacity={0.7}>
            <Text style={styles.cancelBorder}>
              <Text style={styles.cancelText}>Cancel</Text>
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
              <Text style={styles.boldText}>Enter Land Area</Text>
            </Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder='Area' onChangeText={districtInputHandler}/>
          <View style={styles.searchContainer}>
            <TouchableOpacity 
              onPress={districtSearchHandler} activeOpacity={0.7}>
              <Image source={require('../assets/Images/HomePage/Plantation Journey/Search.png')} style={styles.searchIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bodyContent}>
          <View style={styles.headerTopic}>
            <Text style={styles.greetingText}>
              <Text style={styles.topic}>Select Avg slope of Land</Text>
            </Text>
          </View>

          <LinearGradient
            colors={['#FF7E5F', '#FEB47B', 'red']} // Orange to light orange gradient
            start={{ x: 0, y: 0 }} // Top-left
            end={{ x: 1, y: 1 }}   // Bottom-right
            style={styles.bodyContentSub}>
          
          
            <View style={styles.slopeContainer}>
                <View >
                  <Image source={require('.././assets/Images/HomePage/Plantation Journey/Tea P.png')} style={styles.slopeImage} />
                </View>
                <View >
                  <Image source={require('.././assets/Images/HomePage/Plantation Journey/Tea P.png')} style={styles.slopeImage} />
                </View>
                <View >
                  <Image source={require('.././assets/Images/HomePage/Plantation Journey/Tea P.png')} style={styles.slopeImage} />
                </View>
            </View>
            <View style={styles.imageContainer}>
              <Image source={require('.././assets/Images/HomePage/Plantation Journey/Land.png')} style={styles.landImage} />
            </View>
          </LinearGradient>
         
          
        </View>


      </ScrollView>

      <View style={styles.navButtons}>
          <View style={styles.backButton}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PlantationStartDistrict')} activeOpacity={0.7}>
              <Text style={styles.backButtonBorder}>
                <Text style={styles.navButtonText}>Back</Text>
              </Text>
            </TouchableOpacity> 
          </View>
          <View style={styles.nextButton}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PlantationStartBudget')} activeOpacity={0.7}>
              <Text style={styles.nextButtonBorder}>
                <Text style={styles.navButtonText}>Next</Text>
              </Text>
            </TouchableOpacity> 
          </View>
      </View>
    </View>

    
  );
}