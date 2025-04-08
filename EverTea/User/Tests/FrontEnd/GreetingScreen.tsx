import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Define the type for the navigation stack
type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: HomeScreenProps) {
  // Get screen dimensions
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
        <ImageBackground
          source={require('./assets/Images/HomePage/LoginAndSignup/LoginScreenIMG.png')}
          style={styles.backgroundImage} />
          <View style={styles.headerContent}>
            <Text style={styles.greetingText}> Welcome to EverTea </Text>
            <Text style={styles.greetingTextSub}> Where you meet your Ultimate Tea Guider ! </Text>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.LoginOrSignupButton}>
              <Text style={styles.LoginOrSignupText}
              onPress={() => navigation.navigate('Login')}
              >Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.LoginOrSignupButton}>
              <Text style={styles.LoginOrSignupText}
              onPress={() => navigation.navigate('SignUp')}
              >SignUp</Text>
            </TouchableOpacity>
          </View>
      </ScrollView>
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
  },
  scrollContent: {
    flexGrow: 1, // Ensures the ScrollView expands to fill the screen
  },
  headerContent: {
    marginTop: '50%',
    alignItems: 'center',
    marginBottom: '40%',
  },
  greetingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E2E2E',
  },
  greetingTextSub: {
    fontSize: 16,
    color: '#2E2E2E',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  LoginOrSignupButton: {
    backgroundColor: '#038C25',
    padding: 15,
    marginHorizontal: '30%',
    marginVertical: 20,
    borderRadius: 50,
    alignItems: 'center',
  },
  LoginOrSignupText: {
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute', 
  },
});