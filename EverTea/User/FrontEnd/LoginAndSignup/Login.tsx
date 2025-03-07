import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, TextInput, ImageBackground } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { useAppLogic } from './Scripts/scripts';
import { styles } from './Styles/Login'; // Import the styles


// Define the type for the navigation stack
type RootStackParamList = {
  Home: undefined;

};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;


export default function PlantationStart({ navigation }: HomeScreenProps) {

  const {budgetInputHandler, plantsInputHandler, handleButtonPressBudget, budgetRecommendation } = useAppLogic();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
          <ImageBackground
            source={require('../assets/Images/HomePage/LoginAndSignup/LoginScreenIMG.png')}
            style={styles.backgroundImage} />
          <View style={styles.headerContent}>
            <Text style={styles.greetingText}> Welcome to EverTea </Text>
            <Text style={styles.greetingTextSub}> Where you meet your Ultimate Tea Guider ! </Text>
          </View>

          <View style={styles.loginOrSignUpContainer}>
            <Text style={styles.textInputBorder}>
              <TextInput style={styles.textInput} placeholder='Username' />
            </Text>
            <Text style={styles.textInputBorder}>
              <TextInput style={styles.textInput} placeholder='Email' />
            </Text>
            <Text style={styles.textInputBorder}>
              <TextInput style={styles.textInput} placeholder='Password' />
            </Text>
            <TouchableOpacity >
              <Text style={styles.loginButton}
              onPress={() => navigation.navigate('Home')}
              >Login</Text>
            </TouchableOpacity>

            <View >
            <TouchableOpacity >
              <Text style={styles.passwordResetter}
              onPress={() => navigation.navigate('Home')}
              >Forgot your password ?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signUpTextBorder} >
              <Text style={styles.signUpText}>Don't have an account ? </Text>
              <Text style={styles.passwordResetter}
              onPress={() => navigation.navigate('Home')}
              >sign up</Text>
            </TouchableOpacity>
          </View>
          </View>
          



      </ScrollView>

     
    </View>

    
  );
}