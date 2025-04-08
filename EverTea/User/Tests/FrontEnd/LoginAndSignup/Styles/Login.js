import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
  loginOrSignUpContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 20,
    backgroundColor: '#152D15',
    borderRadius: 10,
    opacity: 0.8,
    alignItems: 'center',
    paddingVertical: 20,
  },
  textInputBorder: {
    textAlign: 'center',
    backgroundColor: '#B1FAAB',
    width: '70%',
    borderRadius: 30,
    padding: 4,
    margin: 10,
  },
  textInput: {
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#B1FAAB',
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
    margin: 10,
    fontSize: 16,
  },
  passwordResetter: {
    fontSize: 16,
    color: '#28A292',
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
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute', 
  },
    
  });