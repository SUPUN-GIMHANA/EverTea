import React, { useState } from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity, ScrollView, Button, TextInput } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAppLogic } from './Scripts/scripts';
import { styles } from './Styles/styles'; // Import the styles


// Define the type for the navigation stack
type RootStackParamList = {
  Home: undefined;
  FinancialTracker: undefined;
  PlantationStartDistrict: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;


export default function FinancialTracker({ navigation }: HomeScreenProps) {

  const { enteredGoalText, courseGoals, inputGoal, addGoal } = useAppLogic();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
        <View style={styles.cancelButton}>
          <TouchableOpacity style={styles.bottomButton} 
            onPress={() => navigation.navigate('Home')} activeOpacity={0.7}>
            <Text style={styles.cancelBorder}>
              <Text style={styles.cancelText}>Cancel</Text>
            </Text>
          </TouchableOpacity> 
        </View>

        <View style={styles.progressIndicator}>
            <Text style={styles.numberBorder}>
              <Text style={styles.number}>1</Text>
            </Text>
            <View style={styles.numberBorderProgress}/>
            <Text style={styles.numberBorder}>
              <Text style={styles.number}>2</Text>
            </Text>
            <View style={styles.numberBorderProgress}/>
            <Text style={styles.numberBorder}>
              <Text style={styles.number}>3</Text>
            </Text>
            <View style={styles.numberBorderProgress}/>
        </View>

        <View style={styles.headerContent}>
          <View style={styles.headerTopic}>
            <Text style={styles.greetingText}>
              <Text style={styles.boldText}>Enter Your District</Text>
            </Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder='District' onChangeText={inputGoal}/>
          <View style={styles.searchContainer}>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Home')} activeOpacity={0.7}>
              <Image source={require('../assets/Images/HomePage/Plantation Journey/Search.png')} style={styles.searchIcon} />
            </TouchableOpacity>  
          </View>
        </View>
        <View style={styles.bodyContent}>
          <View style={styles.headerTopic}>
            <Text style={styles.greetingText}>
              <Text style={styles.topic}>Choose your tea type</Text>
            </Text>
          </View>
        </View>


        
      </ScrollView>

      <Button title='Start Journet' onPress={() => navigation.navigate('PlantationStartDistrict')}></Button>
    </View>

    
  );
}