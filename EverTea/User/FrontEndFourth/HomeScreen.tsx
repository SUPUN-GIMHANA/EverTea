import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Define the type for the navigation stack
type RootStackParamList = {
  Home: undefined;
  FinancialTracker: undefined;
  PlantationStart: undefined;
  ViewPlantation: undefined;
  AdvancedWeather: undefined;
  PlantationInstructions: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;




export default function HomeScreen({ navigation }: HomeScreenProps) {
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
            <View style={styles.notificationBtn}>
              <View style={styles.iconWrapper}>
                  <Image
                    source={require('./assets/Images/HomePage/Vector.png')} // Adjust path to your icon
                    style={styles.notificationIcon}
                  />
                </View>
              </View>
            <Image source={require('./assets/Images/HomePage/mainPhoto.png')} style={styles.profileImage} />
          </View>

          <Text style={styles.greetingText}>
              Hello, 
          </Text>
          <Text style={styles.boldText}>EverTea!</Text>


          <TouchableOpacity style={styles.plantationButton} onPress={() => navigation.navigate('PlantationInstructions')} activeOpacity={0.7}>
            <View><Text style={styles.plantationButtonText}>View All Plantations</Text></View>
            <View style={styles.vectorBg}>
              <Image source={require('./assets/Images/HomePage/Vector2.png')} style={styles.vectorImage}/>
            </View>
          </TouchableOpacity>
        </ImageBackground>

        {/* Explore Features Section  ++++Navigation++++ */}
        <View style={styles.exploreSection}>
          <Text style={styles.sectionTitle}>Explore Features  {'>'} </Text>
          <View style={styles.featureCards}>
            
            <TouchableOpacity style={styles.card1} 
              onPress={() => navigation.navigate('PlantationStart')}
              activeOpacity={0.7}>

                  <View style={styles.startBtn}>
                    <View style={styles.iconWrapper}>
                      <Image
                       source={require('./assets/Images/HomePage/plus.png')} // Adjust path to your icon
                       style={styles.notificationIcon}
                       />
                    </View>
                  </View>
              <Text style={styles.cardTitle}>Start</Text>
              <Text style={styles.cardSubtitle}>new Plantation</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card2} 
              onPress={() => navigation.navigate('AdvancedWeather')}
              activeOpacity={0.7}>
                  <View style={styles.startBtn2}>
                    <View style={styles.iconWrapper}>
                      <Image
                       source={require('./assets/Images/HomePage/weatherIcon.png')} // Adjust path to your icon
                       style={styles.notificationIcon}
                       />
                    </View>
                  </View>
              <Text style={styles.cardTitle}>Weather</Text>
              <Text style={styles.cardSubtitle}>forecasting</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card3}
              onPress={() => navigation.navigate('FinancialTracker')}
              activeOpacity={0.7}
            >
                  <View style={styles.startBtn3}>
                    <View style={styles.iconWrapper}>
                      <Image
                       source={require('./assets/Images/HomePage/dollar.png')} // Adjust path to your icon
                       style={styles.notificationIcon}
                       />
                    </View>
                  </View>
              <Text style={styles.cardTitle}>Financial</Text>
              <Text style={styles.cardSubtitle}>tracker</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Services Section */}
        <View style={styles.servicesSection}>
          <Text style={[styles.sectionTitle, styles.serviceTitle]}>Services  {'>'}</Text>
          <View style={styles.rowContainer}>
            <TouchableOpacity style={[styles.serviceButton, styles.greenButton]} activeOpacity={0.7}>
                  <View style={styles.service1}>
                    <View style={styles.iconWrapper}>
                      <Image
                       source={require('./assets/Images/HomePage/desease.png')} // Adjust path to your icon
                       style={styles.notificationIcon}
                       />
                    </View>
                  </View>
              <Text style={styles.serviceText}>Disease Identifier</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.serviceButton, styles.iconButton]} activeOpacity={0.7}>
              <Image source={require('./assets/Images/HomePage/Camera.png')} style={styles.serviceIcon} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={[styles.serviceButton, styles.yellowButton]} activeOpacity={0.7}>
                  <View style={styles.service2}>
                    <View style={styles.iconWrapper}>
                      <Image
                       source={require('./assets/Images/HomePage/superviser.png')} // Adjust path to your icon
                       style={styles.notificationIcon}
                       />
                    </View>
                  </View>
            <Text style={styles.serviceText}>Contact a Supervisor</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.serviceButton, styles.skyblueButton]} activeOpacity={0.7}>
                  <View style={styles.service3}>
                    <View style={styles.iconWrapper}>
                      <Image
                       source={require('./assets/Images/HomePage/Articles.png')} // Adjust path to your icon
                       style={styles.notificationIcon}
                       />
                    </View>
                  </View>
            <Text style={styles.serviceText}>Find Articles</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.serviceButton, styles.tealButton]} activeOpacity={0.7}>
                  <View style={styles.service4}>
                    <View style={styles.iconWrapper}>
                      <Image
                       source={require('./assets/Images/HomePage/desease.png')} // Adjust path to your icon
                       style={styles.notificationIcon}
                       />
                    </View>
                  </View>
            <Text style={styles.serviceText}>Find Video Guides</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Fixed Bottom Navigation Section */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.bottomButton} activeOpacity={0.7}>
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
    marginTop: screenHeight * 0.05,
    margin: screenWidth * 0.03,
    height: screenHeight*0.36,
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingHorizontal: 20,
    borderRadius: 30,        
    overflow: 'hidden',       
  },
  notificationBtn:{
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',  // Center vertically
    alignItems: 'center',      // Center horizontally
  },
  startBtn:{
    width: 50,
    height: 50,
    backgroundColor: '#6ddb9c',
    borderRadius: 50,
    justifyContent: 'center',  // Center vertically
    alignItems: 'center',      // Center horizontally
  },
  startBtn2:{
    width: 50,
    height: 50,
    backgroundColor: '#71b7e6',
    borderRadius: 50,
    justifyContent: 'center',  // Center vertically
    alignItems: 'center',      // Center horizontally
  },
  startBtn3:{
    width: 50,
    height: 50,
    backgroundColor: '#f5d657',
    borderRadius: 50,
    justifyContent: 'center',  // Center vertically
    alignItems: 'center',      // Center horizontally
  },
  iconWrapper: {
    display:'flex',
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greetingText: {
    fontSize: 28,
    color: '#FFF',
    fontWeight:400,
    marginTop:-screenWidth*0.1,
  },
  boldText: {
    fontSize: 36,
    color: '#FFF',
    fontWeight:600,
    marginTop:-screenWidth*0.15,
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
    backgroundColor: 'rgba(228, 255, 245, 0.9)',
    borderRadius: 30,
    height:screenHeight*0.06,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: screenHeight * 0.03,
    elevation: 2, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    paddingRight:screenWidth*0.01,
  },
  plantationButtonText: {
    color: '#004D40',
    fontSize: 16,
    fontWeight: '400',
    paddingLeft:screenWidth*0.05,
  },
  vectorBg: {
    backgroundColor: '#25DB9B',
    width: 80,
    height:screenHeight*0.05,
    borderRadius: 25, // Make it circular
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  vectorImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  exploreSection: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 10,
  },
  serviceTitle:{
    marginTop:15
  },
  featureCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card1: {
    justifyContent: 'center',
    backgroundColor: '#2ecc71',
    borderRadius: 15,
    alignItems: 'flex-start',
    padding: 15,
    width: '30%',
    height:screenHeight*0.16,
    
  },
  card2: {
    justifyContent: 'center',
    backgroundColor: '#3498db',
    borderRadius: 15,
    alignItems: 'flex-start',
    padding: 15,
    width: '30%',
    height:screenHeight*0.16
  },
  card3: {
    justifyContent: 'center',
    backgroundColor: '#f1c40f',
    borderRadius: 15,
    alignItems: 'flex-start',
    padding: 15,
    width: '30%',
    height:screenHeight*0.16
  },
  cardImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize:18,
    fontWeight: 'bold',
    color:'#fff',
    marginTop : 10
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#fff',
    
  },
  servicesSection: {
    marginTop: 30,
    paddingHorizontal: 20,
    borderTopLeftRadius : 25,
    borderTopRightRadius : 25,
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
    borderRadius: 15,
    textAlign:'center',
    padding: 15,
    justifyContent: 'space-between',
    marginVertical: 5,
    height:screenHeight*0.08
  },
  greenButton: {
    backgroundColor: '#116b4d',
    width: screenWidth*0.7,
    textAlign: 'center',
  },
  yellowButton: {
    backgroundColor: '#363636',
  },
  skyblueButton: {
    backgroundColor: '#363636',
  },
  tealButton: {
    backgroundColor: '#363636',
  },
  iconButton: {
    backgroundColor: '#116b4d',
    borderRadius: 10,
    marginLeft: screenWidth*0.02,
    width:screenWidth*0.18,
  },
  serviceText: {
    fontWeight: 'bold',
    color: '#FFF',
  },
  serviceIcon: {
    width: 40,
    height: 40,
  },
  service1:{
    width: 40,
    height: 40,
    backgroundColor: '#259670',
    borderRadius: 50,
    justifyContent: 'center',  // Center vertically
    alignItems: 'center',      // Center horizontally
  },
  service2:{
    width: 40,
    height: 40,
    backgroundColor: '#676767',
    borderRadius: 50,
    justifyContent: 'center',  // Center vertically
    alignItems: 'center',      // Center horizontally
  },
  service3:{
    width: 40,
    height: 40,
    backgroundColor: '#676767',
    borderRadius: 50,
    justifyContent: 'center',  // Center vertically
    alignItems: 'center',      // Center horizontally
  },
  service4:{
    width: 40,
    height: 40,
    backgroundColor: '#676767',
    borderRadius: 50,
    justifyContent: 'center',  // Center vertically
    alignItems: 'center',      // Center horizontally
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
    height: 25,
  },
});
