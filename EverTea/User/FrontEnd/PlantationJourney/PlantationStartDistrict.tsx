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
              <Image source={require('../assets/Home.png')} style={styles.navigationIcon} />
            </TouchableOpacity>        
          </View>
        </View>
      </ScrollView>

      <Button title='Start Journet' onPress={() => navigation.navigate('PlantationStartDistrict')}></Button>
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
  headerBackground: {
    height: 300,
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '25%',
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
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#FFF',
  },
  plantationButton: {
    flexDirection: 'row',
    backgroundColor: '#C8F1D1',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  plantationButtonText: {
    color: '#004D40',
    fontWeight: 'bold',
  },
  buttonIcon: {
    width: 24,
    height: 24,
  },
  exploreSection: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  featureCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    width: '30%',
    elevation: 3,
  },
  cardImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 12,
    color: 'gray',
  },
  servicesSection: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  serviceButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 15,
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  greenButton: {
    backgroundColor: '#5BD5A6',
    width: '70%',
  },
  yellowButton: {
    backgroundColor: '#FDD835',
  },
  skyblueButton: {
    backgroundColor: '#9FE9C8',
  },
  tealButton: {
    backgroundColor: '#20C58D',
  },
  iconButton: {
    backgroundColor: '#5BD5A6',
    padding: 15,
    borderRadius: 10,
    marginLeft: 10,
  },
  serviceText: {
    fontWeight: 'bold',
    color: '#FFF',
  },
  serviceIcon: {
    width: 30,
    height: 30,
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