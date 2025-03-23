import * as React from 'react';
import { Text, View, StyleSheet, Image, AppState } from 'react-native';
import PlantationHome from './homePage/PlantationHome'
import PlantationDownPage from './homeDownPage/PlantationDownPage';
import { getApps, initializeApp } from '@react-native-firebase/app';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getMessaging, getToken } from '@react-native-firebase/messaging';
import axios from "axios";



const firebaseConfig = {
  apiKey: "AIzaSyBFFqb7YClV2GcZ58bwFw8g4TA3CZGJkso",
  authDomain: "plantation-journey-instruction.firebaseapp.com",
  projectId: "plantation-journey-instruction",
  storageBucket: "plantation-journey-instruction.firebasestorage.app",
  messagingSenderId: "118437091928",
  appId: "1:118437091928:android:5b9c870427da521ec5082d"
};

const saveTokenManually = async () => {
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdW5ldGhAZ21haWwuY29tIiwiaWF0IjoxNzQyNzM1NTM4LCJleHAiOjE3NDI3MzkxMzh9.8hCdM-s7dxhI1IGCCwnFx8buKB2KBOPx-o_CGUeQa00";
  await AsyncStorage.setItem("jwtToken", token);
  console.log("✅ Token saved successfully!")
};

// Initialize Firebase only if not already initialized
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const notificationMessage = getMessaging(); // Now that Firebase is initialized, you can safely call this

const PlantationInstructions = () => {

  const [fcmToken, setFcmToken] = React.useState<String | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [notificationBody, setNotificationBody] = React.useState<string | null>(null);
  const appState = React.useRef(AppState.currentState);

  saveTokenManually();

  const appSate = React.useRef(AppState.currentState);


  // Request notification permission
  React.useEffect(() => {
    requestUserPermission();
  }, []);

  // ✅ Request Notification Permission (Updated)
  const requestUserPermission = async () => {
    try {
      const messagingInstance = getMessaging(); // Now Firebase is initialized
      const authStatus = await messagingInstance.requestPermission();
      console.log("✅ Notification Permission Status:", authStatus);
      getFCMToken();


    } catch (error) {
      console.error("❌ Firebase Messaging Error:", error);
    }
  };


  React.useEffect(() => {
    const handleAppStateChange = (nextAppState: string) => {
      console.log("App state changed:", nextAppState);
  
      // Only trigger when app comes to foreground
      if (appState.current.match(/inactive|background/) && nextAppState === "active") {
        console.log("🔄 App refreshed, fetching instructions...");
  
        getInstructions(); // Call your method
      }
  
      appState.current = nextAppState; // Update app state
    };
  
    const subscription = AppState.addEventListener("change", handleAppStateChange);
    
    return () => subscription.remove(); // Clean up on unmount
  }, []);
  
  

  // Retrieve FCM token
  const getFCMToken = async () => {
    try {
      const token = await getToken(notificationMessage);
      if (token) {
        console.log("✅ FCM Token:", token);
      
        setFcmToken(token);
        // console.log("Saved..........................................");
        console.log(fcmToken);

      } else {
        console.log("❌ No FCM Token retrieved.");
      
      }
    } catch (error) {
      console.log("❌ Error getting FCM token:", error);
    }
  };





  const getInstructions = async () => {
    setLoading(true);
  
    const token = await AsyncStorage.getItem("jwtToken");
  
    if (!token) {
      console.log("❌ No JWT Token Found!");
      setLoading(false);
      return;
    }
  
    if (!fcmToken) {
      console.log("❌ FCM Token is not available yet.");
      setLoading(false);
      return;
    }
  
    try {
      const response = await axios.post(
        "http://192.168.8.169:8080/api/weather/token",
        {
          fcmToken,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
  
      console.log("✅ Server Response:", JSON.stringify(response.data));
    } catch (error) {
      console.error("❌ Error sending FCM token:", error);
      
    } finally {
      setLoading(false);
    
    }
  };
  








  return (
    <View style={styles.container}>
      <Text>
        <Image source={require('./assets/teaState.jpeg')} style={styles.backgroundImage} />
        <PlantationHome />
        <PlantationDownPage />
      </Text>
    </View>
  );
};

export default PlantationInstructions;

const styles = StyleSheet.create({
  container: {},
  backgroundImage: {
    width: '100%',
    height: '48%',
    zIndex: -1,
  }
});
