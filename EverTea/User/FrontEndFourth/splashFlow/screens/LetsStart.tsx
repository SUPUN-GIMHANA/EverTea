import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';


type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
  LetsStart: undefined;
};

const {width, height} = Dimensions.get('window'); // Get device width and height

const LetsStart = () => {

   const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'LetsStart'>>();  // Type the navigation


  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Let’s Get Started!</Text>
      <Text style={styles.description}>
        Create an account or log in to track your{'\n'} tea plantation journey.
      </Text>
      <Image
        style={styles.backgroundImage}
        resizeMode="cover"
        source={require('../assets/letsStart.png')}
      />

      <View style={styles.bottomContent}>
        <TouchableOpacity style={styles.signUpBtn} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signUpTxt}>Sign up</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>- or -</Text>

        <TouchableOpacity>
          <Text style={styles.memberText}>
            <Text style={styles.alreadyMemberText}>Already a member?</Text>
            <Text style={styles.signInText}onPress={() => navigation.navigate('Login')}>Sign in</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    width: width,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  backgroundImage: {
    width: width * 0.8, // Full width
    height: height * 0.4, // 40% of screen height
    position: 'absolute',
    top: height * 0.25,
    zIndex: 0,
  },
  welcomeText: {
    fontSize: width * 0.08, // Responsive font size
    fontWeight: '700',
    fontFamily: 'Poppins',
    textAlign: 'center',
    color: '#000',
    position: 'absolute',
    top: height * 0.1,
    zIndex: 10,
  },
  description: {
    fontSize: width * 0.04,
    color: '#818181',
    textAlign: 'center',
    marginTop: 10,
    width: '90%',
    position: 'absolute',
    top: height * 0.15,
    zIndex: 10,
  },
  bottomContent: {
    position: 'absolute',
    bottom: height * 0.05,
  },
  signUpBtn: {
    width: width * 0.85,
    height: 60,
    backgroundColor: '#058966',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  signUpTxt: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },
  orText:{
    textAlign:'center',
    fontSize:16,
    marginTop:20
  },
  memberText: {
    marginTop: 20,
    fontSize: width * 0.04,
    textAlign: "center",
  },
  alreadyMemberText: {
    color: "#757575",
    fontFamily: "Poppins-Regular",
  },
  signInText: {
    fontWeight: "700",
    fontFamily: "Poppins-SemiBold",
    color: "#000",
  },
});
export default LetsStart;
