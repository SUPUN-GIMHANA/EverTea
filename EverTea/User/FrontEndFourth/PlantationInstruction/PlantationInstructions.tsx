import * as React from 'react';
import {StyleSheet, Image, AppState, SafeAreaView } from 'react-native';
import PlantationHome from './plantation-home-page/PlantationHome';
import PlantationDownPage from './plantation-home-downpage/PlantationDownPage';
import messaging, { getMessaging, getToken } from '@react-native-firebase/messaging';
import firebase from '@react-native-firebase/app';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


const notificationMessage = getMessaging();

const PlantationInstructions = () => {
  const [fcmToken, setFcmToken] = React.useState<string | null>(null);
  const [notificationBody, setNotificationBody] = React.useState<String | null>(null);
  const appState = React.useRef(AppState.currentState);

  React.useEffect(() => {
    checkFirebaseApp();
    requestUserPermission();
    printFirebaseConfig(); // 🔍 Debug config
  }, []);

  React.useEffect(() => {
    const subscription = AppState.addEventListener('change', handleAppStateChange);
    return () => subscription.remove();
  }, []);

  const checkFirebaseApp = () => {
    try {
      const app = firebase.app(); // 🔥 If this fails, Firebase is not initialized
      console.log('✅ Firebase default app initialized:', app.name);
    } catch (e) {
      console.error('❌ Firebase not initialized. Check google-services.json placement and build.gradle setup.');
    }
  };

  const printFirebaseConfig = () => {
    try {
      const options = firebase.app().options;
      console.log('📦 Firebase Config Loaded from google-services.json:');
      console.log('🔑 apiKey:', options.apiKey);
      console.log('📛 projectId:', options.projectId);
      console.log('📦 appId:', options.appId);
    } catch (e) {
      console.error('❌ Failed to load Firebase config', e);
    }
  };

  const handleAppStateChange = (nextAppState: string) => {
    if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
      getFCMToken();
      getInstructions();
    }
    appState.current = nextAppState;
  };

  const requestUserPermission = async () => {
    try {
      const authStatus = await messaging().requestPermission();
      if (
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL
      ) {
        console.log('✅ Permission granted');
        getFCMToken();
      } else {
        console.warn('⚠️ Permission not granted');
      }
    } catch (error) {
      console.error('❌ Permission error:', error);
    }
  };

  const getFCMToken = async () => {
    try {
      //const token = await messaging().getToken();
      const token = await getToken(notificationMessage);
      if (token) {
        console.log('📲 FCM Token:', token);
        setFcmToken(token);
      }
    } catch (e) {
      console.error('❌ Error getting FCM token:', e);
    }
  };

  const getInstructions = async () => {
    const token = await AsyncStorage.getItem('jwtToken');
    if (!token || !fcmToken) return;

    try {
      const response = await axios.post(
        'http://172.24.128.1:8080/api/weather/token',
        { fcmToken },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('✅ Server Response:', response.data);
    } catch (error) {
      console.error('❌ Error sending token:', error);
    }
  };

  React.useEffect(() => {
    const unsubscribe = notificationMessage.onMessage(async (remoteMessage) => {
      console.log("New FCM notification: ", remoteMessage);

      if(remoteMessage.notification){
        const messageBody = remoteMessage.notification.body;
        console.log("✅ Notification Body:", messageBody);

        setNotificationBody(messageBody);

      }
    });
    return unsubscribe;
  });

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./assets/teaState.jpeg')} style={styles.backgroundImage} />
      <PlantationHome />
      <PlantationDownPage notification= {notificationBody} />
    </SafeAreaView>
  );
};

export default PlantationInstructions;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  backgroundImage: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
    zIndex: -1,
  },
});
