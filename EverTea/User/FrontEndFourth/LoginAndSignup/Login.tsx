import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { styles } from './Styles/Login'; 
import { useAuthLogic, validateEmail, validatePassword } from './Scripts/scripts';

type RootStackParamList = {
  Home: undefined;
  SignUp: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function PlantationStart({ navigation }: HomeScreenProps) {
  const { email, setEmail, password, setPassword, errorMessage, handleLogin } = useAuthLogic();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.headerContent}>
          <Text style={styles.greetingText}> Welcome back!</Text>
          <Text style={styles.greetingTextSub}> Where you meet your Ultimate Tea Guider! </Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={require('./assets/Images/HomePage/LoginAndSignup/loginImage.jpg')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <View style={styles.loginOrSignUpContainer}>
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
          {errorMessage ? <Text style={{ color: 'red' }}>{errorMessage}</Text> : null}
          <TouchableOpacity onPress={() => handleLogin(navigation)}>
            <Text style={styles.loginButton}>Login</Text>
          </TouchableOpacity>

          <View>
            <TouchableOpacity>
              <Text style={styles.passwordResetter} onPress={() => navigation.navigate('Home')}>
                Forgot your password?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signUpTextBorder}>
              <Text style={styles.signUpText}>Don't have an account?</Text>
              <Text style={styles.passwordResetter} onPress={() => navigation.navigate('SignUp')}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
