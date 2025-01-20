import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, ScrollView, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Define the type for the navigation stack
type RootStackParamList = {
  Home: undefined;
  FinancialTracker: undefined;
  PlantationStartDistrict: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function FinancialTracker({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerContent}>
          <View style={styles.headerTopic}>
            <Text style={styles.greetingText}>
              <Text style={styles.boldText}>Plantation Journey</Text>
            </Text>
            <TouchableOpacity style={styles.bottomButton} 
              onPress={() => navigation.navigate('Home')} activeOpacity={0.7}>
              <Image source={require('./assets/Home.png')} style={styles.navigationIcon} />
            </TouchableOpacity>        
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentMain}>Recommended</Text>
          <View style={styles.cDiscription}>
            <Text style={styles.cDiscriptionText}>We recommend you to calculate average cost using this button to get good idea about the cost before start your plantation</Text>
            <TouchableOpacity onPress={() => navigation.navigate('FinancialTracker')}>
              <Text style={styles.buttonCost}>Cost</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.imageContainer}>
          <Image source={require('./assets/Images/HomePage/Plantation Journey/Tea P.png')} style={styles.plantationStatingBackground} />
        </View>

        <View style={styles.content2}>
          <Text style={styles.contentMain2}>Are you ready?</Text>
          <View style={styles.cDiscription}>
            <Text style={styles.cDiscriptionText}>Click "START JOURNEY" to start your plantation journey...</Text>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity onPress={() => navigation.navigate('PlantationStartDistrict')} activeOpacity={0.7}>
        <Text style={styles.buttonJourney}>START JOURNEY</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FCFF',
  },
  scrollContainer: {
    flex: 1,
    paddingBottom: 80, // Adds padding at the bottom to prevent content from overlapping with bottom navigation
  },
  scrollContent: {
    paddingBottom: 80, // Ensures the content is spaced above the bottom navigation
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '20%',
  },
  headerTopic: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
  },
  greetingText: {
    fontSize: 28,
    color: 'black',
  },
  boldText: {
    fontWeight: 'bold',
  },
  content: {
    padding: '10%',
  },
  contentMain: {
    fontSize: 20,
    color: '#353535',
    fontWeight: 'bold',
  },
  cDiscription: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingTop: '5%',
  },
  cDiscriptionText: {
    fontSize: 16,
    width: '80%',
  },
  buttonCost: {
    color: 'white',
    fontSize: 20,
    backgroundColor: '#094630',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  imageContainer: {
    alignItems: 'center',    
  },
  plantationStatingBackground: {
    borderRadius: 30,
    width: '80%',
    height: '90%'
  },
  content2: {
    paddingHorizontal: '10%',
  },
  contentMain2: {
    fontSize: 20,
    color: '#353535',
    fontWeight: 'bold',
  },
  buttonJourney: { 
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#353535',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: '20%',
    marginBottom: '5%',
  },
  // Bottom Navigation Styles
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#F8FCFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderRadius: 10,
    borderTopColor: '#25B785',
  },
  bottomButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigationIcon: {
    width: 25,
    height: 25,
  },
});