import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, TextInput, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAppLogic } from './Scripts/scripts';
import { styles } from './Styles/PlantationStartRecommendation'; // Import the styles


// Define the type for the navigation stack
type RootStackParamList = {
  Home: undefined;
  FinancialTracker: undefined;
  PlantationStartLand: undefined;
  PlantationStartBudget: undefined;
  PlantationStartSucessfull: undefined;
 
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;


export default function PlantationStart({ navigation }: HomeScreenProps) {

  const { recommendedPlants, extraPlants, recommendedBudget, userPlants, userBudget, handlePlantationCreation } = useAppLogic();

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
              <Text style={styles.boldText}>Select your choice</Text>
            </Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <TouchableOpacity
            onPress={() => handlePlantationCreation} activeOpacity={0.7}>
            <View style={styles.recommendedBoarder}>
              <Text style={styles.topic1}>Recommended Plantation</Text>
              <View style={styles.content}>
              <Text style={styles.content1}>No. of tea plants : {recommendedPlants} +/- {extraPlants}</Text>
              <Text style={styles.content1}>Estimate cost     : {recommendedBudget}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePlantationCreation} activeOpacity={0.7}>
            <View style={styles.userBoarder}>
              <Text style={styles.topic2}>Plantation for your budget</Text>
              <View style={styles.content}>
                <Text style={styles.content2}>No. of tea plants : {userPlants}</Text>
                <Text style={styles.content2}>Cost              : {userBudget}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

      </ScrollView>

      <View style={styles.navButtons}>
          <View style={styles.backButton}>
            <TouchableOpacity
              onPress={() => handlePlantationCreation} activeOpacity={0.7}>
              <Text style={styles.backButtonBorder}>
                <Text style={styles.navButtonText}>Back</Text>
              </Text>
            </TouchableOpacity> 
          </View>
      </View>
    </View>

    
  );
}