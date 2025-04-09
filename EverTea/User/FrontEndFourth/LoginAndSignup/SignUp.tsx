import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { styles } from './Styles/SignUp';
import { useAuthLogic, validateEmail, validatePassword, validateUserName, validateMobileNumber, validateRole } from './Scripts/scripts';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function PlantationStart({ navigation }: HomeScreenProps) {
  const { email, setEmail, password, setPassword, userName, setUserName, mobileNumber, setMobileNumber, role, setRole, errorMessage, handleRegistration } = useAuthLogic();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerContent}>
          <Text style={styles.greetingText}> Create yout account</Text>
          <Text style={styles.greetingTextSub}> </Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/Images/HomePage/LoginAndSignup/logoRound.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <View style={styles.loginOrSignUpContainer}>
        <Text style={styles.textInputBorder}>
            <TextInput
              style={styles.textInput}
              maxLength={30}
              placeholder="Username"
              value={userName}
              onChangeText={(text) => setUserName(validateUserName(text))}
            />
          </Text>
          <Text style={styles.textInputBorder}>
            <TextInput
              style={styles.textInput}
              maxLength={30}
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(validateEmail(text))}
            />
          </Text>
          <Text style={styles.textInputBorder}>
            <TextInput
              style={styles.textInput}
              maxLength={30}
              placeholder="Password"
              value={password}
              secureTextEntry
              onChangeText={(text) => setPassword(validatePassword(text))}
            />
          </Text>
          <Text style={styles.textInputBorder}>
            <TextInput
              style={styles.textInput}
              maxLength={30}
              placeholder="Role User/Admin"
              value={role}
              onChangeText={(text) => setRole(validateRole(text))}
            />
          </Text>
          <Text style={styles.textInputBorder}>
            <TextInput
              style={styles.textInput}
              maxLength={10}
              placeholder="Mobile Number"
              value={mobileNumber}
              onChangeText={(number) => setMobileNumber(validateMobileNumber(number))}
            />
          </Text>
          {errorMessage ? <Text style={{ color: 'red' }}>{errorMessage}</Text> : null}
          <TouchableOpacity onPress={() => handleRegistration(navigation)}>
            <Text style={styles.loginButton}>Register</Text>
          </TouchableOpacity>

          <View>
            <TouchableOpacity>
              <Text style={styles.passwordResetter} onPress={() => navigation.navigate('Home')}>
                Forgot your password?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signUpTextBorder}>
              <Text style={styles.signUpText}>Have an account?</Text>
              <Text style={styles.passwordResetter} onPress={() => navigation.navigate('Login')}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
