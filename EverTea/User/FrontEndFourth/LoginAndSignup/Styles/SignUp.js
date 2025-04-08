import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1, // Ensures the ScrollView expands to fill the screen
  },
  headerContent: {
    marginTop: screenHeight * 0.15,
    alignItems: 'center',
    marginBottom: '40%',
  },
  greetingText: {
    fontSize: 28,
    fontWeight: 500,
    color: '#2E2E2E',
  },
  greetingTextSub: {
    fontSize: 16,
    color: '#2E2E2E',
  },
  loginOrSignUpContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputBorder: {
    textAlign: 'left',
    width: screenWidth * 0.8, // 80% of screen width
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    padding: 4,
    margin: 10,
  },
  textInput: {
    fontSize: 16,
  },
  loginButton: {
    textAlign: 'center',
    backgroundColor: '#058966',
    color:'#fff',
    paddingVertical:18,
    width: screenWidth * 0.8, // 80% of screen width
    borderRadius: 15,
    margin: 10,
    fontSize: 16,
    fontWeight:600,
    marginBottom:20
  },
  passwordResetter: {
    ffontSize: 16,
    color: '#6C6C6C',
    fontWeight:500,
    textAlign: 'center',
  },
  signUpText: {
    fontSize: 16,
    color: '#D7B8B8',
    textAlign: 'center',
  },
  signUpTextBorder: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  image: {
    width: screenWidth * 0.2, // 80% of screen width
    height: screenWidth * 0.2,
    zIndex : 0,
    marginTop:-screenHeight*0.2
  },
    
  });