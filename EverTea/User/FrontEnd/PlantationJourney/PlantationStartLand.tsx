import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, Button, TextInput } from 'react-native';
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


export default function PlantationStart({ navigation }: HomeScreenProps) {

  const {plantationAreaAndSlope, plantationSlopeSelection, enterPlantationSlope, handleButtonPress, areaInputHandler} = useAppLogic();

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
          <TextInput style={styles.textInput} placeholder='Area' onChangeText={areaInputHandler}/>
          <View style={styles.searchContainer}>
            <TouchableOpacity 
              onPress={plantationAreaAndSlope} activeOpacity={0.7}>
              <View style={styles.searchIcon}>
                <Text style={styles.arcesInput}>Arces</Text>
              </View>
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
              <TouchableOpacity 
                onPress={() => enterPlantationSlope(30)} activeOpacity={0.7}>
                  <View >
                    <Image source={require('.././assets/Images/HomePage/Plantation Journey/Tea P.png')} style={styles.slopeImage} />
                  </View>
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={() => enterPlantationSlope(50)} activeOpacity={0.7}>
                  <View >
                    <Image source={require('.././assets/Images/HomePage/Plantation Journey/Tea P.png')} style={styles.slopeImage} />
                  </View>
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={() => enterPlantationSlope(70)} activeOpacity={0.7}>
                  <View >
                    <Image source={require('.././assets/Images/HomePage/Plantation Journey/Tea P.png')} style={styles.slopeImage} />
                  </View>
              </TouchableOpacity>
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
              onPress={handleButtonPress} activeOpacity={0.7}>
              <Text style={styles.nextButtonBorder}>
                <Text style={styles.navButtonText}>Next</Text>
              </Text>
            </TouchableOpacity> 
          </View>
      </View>
    </View>

    
  );
}