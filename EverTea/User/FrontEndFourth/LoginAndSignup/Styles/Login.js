import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

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
    marginTop: '30%',
    alignItems: 'center',
  },
  greetingText: {
    fontSize: 28,
    fontWeight: 600,
    color: '#2E2E2E',
  },
  greetingTextSub: {
    fontSize: 16,
    color: '#2E2E2E',
  },
  loginOrSignUpContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop:-30,
    borderRadius: 10,
    opacity: 0.8,
    alignItems: 'center',
    paddingVertical: 20,
  },
  textInputBorder: {
    textAlign: 'left',
    width: screenWidth * 0.8, // 80% of screen width
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'gray',
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
    fontSize: 16,
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
    marginTop: 20, // Optional, adjust spacing as needed
  },
  image: {
    width: screenWidth * 0.9, // 80% of screen width
    height: screenWidth * 0.9,
    zIndex : 0
  },
    
  });