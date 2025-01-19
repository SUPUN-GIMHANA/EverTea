import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Define the type for the navigation stack
type RootStackParamList = {
  Home: undefined;
  FinancialTracker: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Profile({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
        {/* Top Section with Background Image */}
        <ImageBackground
          source={require('./assets/Images/HomePage/mainPhoto.png')} // Background image
          style={styles.headerBackground}
          imageStyle={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
        >
          <View style={styles.headerContent}>
            <Text style={styles.greetingText}>
              Hello, <Text style={styles.boldText}>FinancialTracker</Text>
            </Text>
            <Image source={require('./assets/Images/HomePage/mainPhoto.png')} style={styles.profileImage} />
          </View>

          <TouchableOpacity style={styles.plantationButton}>
            <Text style={styles.plantationButtonText}>View All Plantations</Text>
            <Image source={require('./assets/Images/HomePage/mainPhoto.png')} style={styles.buttonIcon} />
          </TouchableOpacity>
        </ImageBackground>

        {/* Explore Features Section */}
        <View style={styles.exploreSection}>
          <Text style={styles.sectionTitle}>Explore Features</Text>
          <View style={styles.featureCards}>
            <TouchableOpacity style={styles.card} activeOpacity={0.7}>
              <Image source={require('./assets/Images/HomePage/Start.png')} style={styles.cardImage} />
              <Text style={styles.cardTitle}>Start</Text>
              <Text style={styles.cardSubtitle}>new Plantation</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} activeOpacity={0.7}>
              <Image source={require('./assets/Images/HomePage/weather.png')} style={styles.cardImage} />
              <Text style={styles.cardTitle}>Weather</Text>
              <Text style={styles.cardSubtitle}>forecasting</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}
              onPress={() => navigation.navigate('FinancialTracker')}
              activeOpacity={0.7}
            >
              <Image source={require('./assets/Images/HomePage/Financial.png')} style={styles.cardImage} />
              <Text style={styles.cardTitle}>Financial</Text>
              <Text style={styles.cardSubtitle}>tracker</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Services Section */}
        <View style={styles.servicesSection}>
          <Text style={styles.sectionTitle}>Services</Text>
          <View style={styles.rowContainer}>
            <TouchableOpacity style={[styles.serviceButton, styles.greenButton]} activeOpacity={0.7}>
              <Image source={require('./assets/Images/HomePage/DiseaseIdentifier.png')} style={styles.serviceIcon} />
              <Text style={styles.serviceText}>Disease Identifier</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.serviceButton, styles.iconButton]} activeOpacity={0.7}>
              <Image source={require('./assets/Images/HomePage/Camera.png')} style={styles.serviceIcon} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={[styles.serviceButton, styles.yellowButton]} activeOpacity={0.7}>
            <Image source={require('./assets/Images/HomePage/Supervisor.png')} style={styles.serviceIcon} />
            <Text style={styles.serviceText}>Contact a Supervisor</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.serviceButton, styles.skyblueButton]} activeOpacity={0.7}>
            <Image source={require('./assets/Images/HomePage/Articles.png')} style={styles.serviceIcon} />
            <Text style={styles.serviceText}>Find Articles</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.serviceButton, styles.tealButton]} activeOpacity={0.7}>
            <Image source={require('./assets/Images/HomePage/Video.png')} style={styles.serviceIcon} />
            <Text style={styles.serviceText}>Find Video Guides</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Fixed Bottom Navigation Section */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.bottomButton} 
          onPress={() => navigation.navigate('Home')}
          activeOpacity={0.7}
          >
          <Image source={require('./assets/Home.png')} style={styles.navigationIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton} activeOpacity={0.7}>
          <Image source={require('./assets/Notification.png')} style={styles.navigationIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton} activeOpacity={0.7}>
          <Image source={require('./assets/Fav.png')} style={styles.navigationIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton} activeOpacity={0.7}>
          <Image source={require('./assets/FT.png')} style={styles.navigationIcon} />
        </TouchableOpacity>
      </View>
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greetingText: {
    fontSize: 28,
    color: '#FFF',
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