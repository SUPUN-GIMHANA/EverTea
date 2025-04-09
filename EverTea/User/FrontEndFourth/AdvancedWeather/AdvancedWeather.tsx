import * as React from 'react';
import {AppState, PermissionsAndroid, ToastAndroid, Platform, SafeAreaView, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import WeatherUpperHome from './weather-upper-page/WeatherUpperHome';
import axios from 'axios';
import messaging,{ getMessaging, getToken } from "@react-native-firebase/messaging";
import Toast from 'react-native-toast-message';
import Geolocation from "react-native-geolocation-service";
// import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { getApps, initializeApp } from '@react-native-firebase/app';
import DownPageHome from './weather-down-page/DownPageHome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavigationBar from './NavigationBar';

// Initialize Firebase here, before using anything from Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAcE2GSC2frttEKEqtvb3urgET5GpUyP3Y",
  authDomain: "advancedweatherforecastapp.firebaseapp.com",
  projectId: "advancedweatherforecastapp",
  storageBucket: "advancedweatherforecastapp.firebasestorage.app",
  messagingSenderId: "597952832163",
  appId: "1:597952832163:android:8cf7ce9af5fcb8b3ff5516",
};

const saveTokenManually = async () => {
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJncHNAZ21haWwuY29tIiwiaWF0IjoxNzQ0MjI1Mjc4LCJleHAiOjE3NDQyMjg4Nzh9.Qu6H-M6i6PujzRaVdu1-J7H8FH_t6FXQNu1uI13pbr8";
  await AsyncStorage.setItem("jwtToken", token);
  console.log("✅ Token saved successfully!")
};

// Initialize Firebase only if not already initialized
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const notificationMessage = getMessaging();


const AdvancedWeather = (() => {


  const [fcmToken, setFcmToken] = React.useState<String | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [notificationBody, setNotificationBody] = React.useState<string | null>(null);
  const appState = React.useRef(AppState.currentState);

  const [isLocationFetching, setIsLocationFetching] = React.useState(false);

  // saveToken
  // Manually();

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
      Toast.show({
        type: "error",
        text1: "Firebase Error",
      });
    }
  };

  React.useEffect(() => {
    const handleAppStateChange = async (nextAppState: string) => {
      console.log("App state changed:", nextAppState);  // *Log the app state change* for debugging

      // *Prevent loop by adding a flag to only fetch once*
      if (appState.current.match(/inactive|background/) && nextAppState === "active") {
        console.log("🔄 App refreshed, fetching location...");

        // const alreadySent = await AsyncStorage.getItem("locationSent");
        // if(alreadySent){
        //   console.log("📡 Sending location data...");
        //   Toast.show({
        //     type: 'success',
        //     text1: '🔄 App refreshed, sending location...',
        //     position: 'top',
        //   });
        //   getLocationAndSend();
        // }else{
        //   console.log("✅ Location data already sent, skipping request.");
        // }

        if (!isLocationFetching) {  // Check if location is already being fetched
          Toast.show({
            type: 'success',
            text1: '🔄 App refreshed, fetching location...',
            position: 'top',
          });
          setIsLocationFetching(true);  // Set flag to true to prevent repeated calls
          getLocationAndSend();
          console.log('📍 Location fetch method called.');
        }
      }
      appState.current = nextAppState;
    };

    const subscription = AppState.addEventListener("change", handleAppStateChange);
    return () => subscription.remove();  // Cleanup the event listener on unmount
  }, [isLocationFetching]);  // Re-run only when isLocationFetching changes

  // Retrieve FCM token
  const getFCMToken = async () => {
    try {
      //const token = await getToken(notificationMessage);
      const token = await messaging().getToken();
      if (token) {
        console.log("✅ FCM Token:", token);
        setFcmToken(token);
        Toast.show({
          type: 'success',
          text1: '✅ FCM Token',
          position: 'top',
        });
      } else {
        console.log("❌ No FCM Token retrieved.");
        Toast.show({
          type: 'error',
          text1: '❌ No FCM Token retrieved.',
          position: 'top',
        });
      }
    } catch (error) {
      console.log("❌ Error getting FCM token:", error);
    }
  };

  React.useEffect(() => {
    if(fcmToken){
      console.log('🆕 fcmToken state updated: ', fcmToken);
    }
  },[fcmToken]);

  // Request location permission and get location
  const getLocationAndSend = async () => {
    setLoading(true);

    

    // Request location permission
    const granted = await requestLocationPermission();


    // const alreadySent = await AsyncStorage.getItem("locationSent");

    // if(alreadySent){
    //   console.log("✅ Location data already sent, skipping request.");
    //   setLoading(false);
    //   setIsLocationFetching(false);
    //   return;
    // }

    if (!granted) {
      console.log("❌ Location permission denied.");
      Toast.show({
        type: 'error',
        text1: '❌ Location permission denied.',
        position: 'top',
      });
      setIsLocationFetching(false);
      return;
    }


    const token = await AsyncStorage.getItem("jwtToken");
  
    if(!token){
      console.log("❌ No JWT Token Found!");
      setLoading(false);
      return;
    }


    if (!fcmToken) {
      console.log("❌ FCM Token is not available yet.");
      Toast.show({
        type: 'error',
        text1: '❌ FCM Token is not available yet.',
        position: 'top',
      });
      return;
    }

    // Get current location
    Geolocation.getCurrentPosition(
      async (position) => {
        console.log('fcm token in geo location: ',fcmToken);
        const { latitude, longitude } = position.coords;
        console.log("lat ", latitude, "long: ", longitude);

        try {
          const response = await axios.post("http://172.20.10.4:8080/location", {
            fcmToken,
            latitude,
            longitude,
          }
          ,{
            headers:{
              Authorization: `Bearer ${token}`,
              "connect-type" : "application/json"
            },
          }
        );

        console.log("✅ Location & FCM token sent successfully!");

        await AsyncStorage.setItem("locationSent",'true');

          console.log("✅ Weather Data", JSON.stringify(response.data));
        } catch (error) {
          console.error("❌ Error sending location data:", error);
          Toast.show({
            type: 'error',
            text1: '❌ Error sending location data:',
            position: 'top',
          });
        } finally {
          setLoading(false);
          setIsLocationFetching(false);
        }
      },
      (error) => {
        console.log("❌ Geolocation Error: ", error);
        Toast.show({
          type: 'error',
          text1: '❌ Geolocation Error:',
        });
        setLoading(false);
        setIsLocationFetching(false);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  // const openAppSettings = () => {
  //   Linking.openSettings().catch(() => {
  //     console.warn("Can't open settings");
  //   });
  // };

  const requestLocationPermission = async () => {
    try {
      // Request for ACCESS_FINE_LOCATION permission (foreground)
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Location Permission",
          message: "This app needs access to your location to show weather updates.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
  
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("✅Location permission granted");
  
        // If on Android 10 (API 29+) or above, request background location permission
        if (Platform.OS === 'android' && Platform.Version >= 29) {
          const backgroundGranted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION
          );
          if (backgroundGranted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("Background location permission granted");
            return true;
          } else {
            console.log("Background location permission denied");
            ToastAndroid.show('Background location permission is required for this app to function properly.', ToastAndroid.LONG);
            return false;
          }
        } else {
          return true;  // No need for background location on Android below API 29
        }
      } else {
        console.log("Location permission denied");
        ToastAndroid.show('Location permission is required to use this app.', ToastAndroid.LONG);
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  };


  React.useEffect(() => {
    const unsubscribe = notificationMessage.onMessage(async (remoteMessage) => {
      console.log("new FCM notification:", remoteMessage);

      if(remoteMessage.notification){
        const messageBody = remoteMessage.notification.body;
        console.log("✅ Notification Body:", messageBody);

        setNotificationBody(messageBody);


        Toast.show({
          type: 'success',
          text1: '📩 New Notification',
          text2: messageBody,
          position: 'top',
        });
      }
    });

    return unsubscribe;
  });




  return (
    <LinearGradient
      colors={["#E2F2FF", "#1D95FF"]} // Converted colors
      start={{ x: 1, y: 1 }} // Adjusting to mimic the 165deg angle
      end={{ x: 0.5, y: 0 }}
      style={styles.content}
    >
      <Toast />
      <SafeAreaView style={styles.screen}>
        <View >
          <WeatherUpperHome />
          <DownPageHome notification={notificationBody}/>
        </View>
      </SafeAreaView>
      <NavigationBar/>
    </LinearGradient>

  );
});

const styles = StyleSheet.create({
  screen:{
    bottom:0,
    marginVertical:60,
  },
  content:{
    // width:"100%",
    height:"100%",
  },
});

export default AdvancedWeather;
