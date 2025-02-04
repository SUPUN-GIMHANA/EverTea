import React, { useState } from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity, ScrollView, Button, TextInput } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAppLogic } from './Scripts/scripts';
import { styles } from './Styles/PlantationStartLand'; // Import the styles


// Define the type for the navigation stack
type RootStackParamList = {
  Home: undefined;
  FinancialTracker: undefined;
  PlantationStartDistrict: undefined;
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
        </View>


      </ScrollView>

      <View style={styles.navButtons}>
          <View style={styles.backButton}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')} activeOpacity={0.7}>
              <Text style={styles.backButtonBorder}>
                <Text style={styles.navButtonText}>Back</Text>
              </Text>
            </TouchableOpacity> 
          </View>
          <View style={styles.nextButton}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')} activeOpacity={0.7}>
              <Text style={styles.nextButtonBorder}>
                <Text style={styles.navButtonText}>Next</Text>
              </Text>
            </TouchableOpacity> 
          </View>
      </View>
    </View>

    
  );
}