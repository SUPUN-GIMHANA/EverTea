import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import PlantationName from './PlantationName';
import CurrentCondition from './CurrentCondition';
import HourlyData from './HourlyData';
import Toast from 'react-native-toast-message';

const WEBSOCKET_URL = "ws://172.20.10.4:8080/ws";

const WeatherUpperHome = () => {
  const [weatherData, setWeatherData] = React.useState<any[]>([]);
  const [location, setLocation] = React.useState<String>("");
  const [hourlyData, setHourlyData] = React.useState<{ time: string; temp: number }[]>([]);
  const [currentTemp, setCurrentTemp] = React.useState<number>(0);
  const [weatherCode, setWeatherCode] = React.useState<String>("");
  const [humidity, setHumidity] = React.useState<number>(0);
  const [soilTemp, setSoilTemp] = React.useState<number>(0);
  const [precipitation, setPrecipitation] = React.useState<number>(0);
  const [windSpeed, setWindSpeed] = React.useState<number>(0);
  const [windDirection, setWindDirection] = React.useState<String>("");
  const [socket, setSocket] = React.useState<WebSocket | null>(null);

  const connectWebSocket = React.useCallback(() => {
    console.log("🔄 Attempting to connect WebSocket...");
    const newSocket = new WebSocket(WEBSOCKET_URL);

    newSocket.onopen = () => {
      console.log("✅ WebSocket Connected");
      Toast.show({
        type: 'success',
        text1: 'Connection Established',
        position: 'top',
      });
    };

    newSocket.onmessage = (event) => {
      try {
        const receivedData = JSON.parse(event.data);

        if (receivedData.type === "weather_update" && Array.isArray(receivedData.data)) {
          setWeatherData(receivedData);

          const now = new Date();
          const hours = now.getHours() % 12 || 12; // Convert 0 to 12 for AM format
          const minutes = "00"; // Set minutes to 00
          const period = now.getHours() >= 12 ? "PM" : "AM";
          const formattedTime = `${String(hours).padStart(2, "0")}:${minutes} ${period}`;

          const currentData = receivedData.data.find((entry: any[]) => entry[2].startsWith(formattedTime));
          console.log("Current data from backend : ",currentData);

          if (currentData) {
            setLocation(currentData[1]);
            setCurrentTemp(currentData[3]);
            setWeatherCode(currentData[7]);
            setHumidity(currentData[4]);
            setSoilTemp(currentData[10]);
            setPrecipitation(currentData[5]);
            setWindSpeed(currentData[8]);
            setWindDirection(currentData[9]);

            setHourlyData(receivedData.data.map((entry: any) => ({
              time: entry[2].replace(":00", ""),
              temp: entry[3],
            })));
          }
        }
      } catch (error) {
        console.log("❌ Error parsing WebSocket message:", error);
      }
    };

    newSocket.onerror = (error) => {
      console.log("❌ WebSocket Error:", error);
    };

    newSocket.onclose = () => {
      console.log("❌ WebSocket Disconnected. Retrying in 5 seconds...");
      Toast.show({
        type: 'error',
        text1: 'Connection Lost',
        text2: 'Reconnecting in 5 seconds...',
        position: 'top',
      });

      setTimeout(() => {
        connectWebSocket(); // Reconnect automatically
      }, 5000);
    };

    setSocket(newSocket);
  }, []);

  React.useEffect(() => {
    connectWebSocket();

    return () => {
      if (socket) {
        console.log("🔴 Closing WebSocket...");
        socket.close();
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <PlantationName location={location} />
      <CurrentCondition currentTemp={currentTemp} weathercode={weatherCode} />
      <HourlyData hourlyData={hourlyData} />
    </View>
  );
};

export default WeatherUpperHome;

const styles = StyleSheet.create({
  container: {
    // height:200
  },
});
