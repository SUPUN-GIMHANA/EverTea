import React, { useState } from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity, ScrollView, Button, TextInput, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAppLogic } from './Scripts/scripts';
import { styles } from './Styles/PlantationStartDistrict'; // Import the styles


// Define the type for the navigation stack
type RootStackParamList = {
  Home: undefined;
  FinancialTracker: undefined;
  PlantationStartDistrict: undefined;
  PlantationStartLand: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;


export default function PlantationStart({ navigation }: HomeScreenProps) {

  const {teaModelNameArraySub, selectedTeaType, renderTeaItem, districtInputHandler, districtSearchHandler, handleTeaSelection, sendSelectedTea ,fetchTeaModels} = useAppLogic();



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
              <Text style={styles.boldText}>Enter Your District</Text>
            </Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder='District' onChangeText={districtInputHandler}/>
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
            <Text style={styles.topic}>Choose your tea type</Text>
          </Text>


          <View style={styles.teaTypesContainer}> {/* Container for the FlatList */}
            <FlatList
              data={teaModelNameArraySub}
              renderItem={renderTeaItem}
              keyExtractor={(item) => item.id}
              numColumns={2}
              // contentContainerStyle={{ padding: 10 }}  Add padding if needed
            />
          </View>

          {/* Display the selected tea type */}
          {selectedTeaType && (
            <View style={styles.selectedTeaContainer}>
              <Text>
              <Text style={styles.selectedTeaText}>Selected Tea: {selectedTeaType}</Text>
              </Text>
            </View>
            
          )}
          
         


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
              onPress={() => navigation.navigate('PlantationStartLand')} activeOpacity={0.7}>
              <Text style={styles.nextButtonBorder}>
                <Text style={styles.navButtonText}>Next</Text>
              </Text>
            </TouchableOpacity> 
          </View>

      </View>
    </View>

    
  );
}