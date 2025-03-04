import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { PlantData } from "../types";
import GrowthChart from "./GrowthChart";
import PreviousDetails from "./PreviousDetails";
import { fetchPlantDetails, updatePlantHeight } from "../services/api";

/* const SAMPLE_DATA: PlantData = {
  id: "01",
  name: "Plantation 01",
  height: 15, //initial height(I change this when backend implement)
  status: "Good",
  growthHistory: [5, 8, 12, 15, 18, 20, 22, 23, 24, 25],
  //for the testing perpose I add these sample records
  previousDetails: [
    { date: "2024-12-25", status: "Good", growth: "+1 CM" },
    { date: "2024-12-25", status: "Good", growth: "+1.4 CM" },
    { date: "2024-12-25", status: "Warning", growth: "+1 CM" },
    { date: "2024-12-25", status: "Good", growth: "+1 CM" },
    { date: "2024-12-25", status: "Good", growth: "+1 CM" },
    { date: "2024-12-25", status: "Warning", growth: "+1 CM" },
    { date: "2024-12-25", status: "Good", growth: "+1 CM" },
    { date: "2024-12-25", status: "Good", growth: "+1 CM" },
    { date: "2024-12-25", status: "Good", growth: "+1 CM" },
    { date: "2024-12-25", status: "Good", growth: "+1 CM" },
  ]
}; */

export default function PlantCard() {
/*   const { name } = SAMPLE_DATA;

  //state for changing height values
  const [heightValue, setHeightValue] = useState(SAMPLE_DATA.height);

  //determine the status based on height,this is only for testing perpose,this height should comes from backend.
  const status = heightValue < 10 ? "Warning" : "Good";

  //function to increase height
  const increaseHeight = () => {
    setHeightValue((prev) => prev + 1);
  };

  //function to decrease hieght
  const decreaseHeight = () => {
    setHeightValue((prev) => (prev > 0 ? prev - 1 : 0));
  }; */


  // State to hold the plant data
  const [plantData, setPlantData] = useState<PlantData | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  // Plant ID - this would typically come from navigation params or context
  const plantId = "1"; // Assuming this is the ID plant

  //function to load plant data
  const loadPlantData = async ()=>{
    try {
      setLoading(true);
      const data = await fetchPlantDetails(plantId);
      setPlantData(data);
    }catch(error){
      console.error("Failed to load plant data:", error);
      Alert.alert("Error", "Failed to load plant data. Please try again");
    }finally{
      setLoading(false);
    }
  };

  //load data when component mounts
  useEffect(()=>{
    loadPlantData();
  }, []);

  //function to increase height
  const increaseHeight = async ()=>{
    if (!plantData) return;

    try{
      setUpdating(true);
      const newHeight = plantData.height + 1;
      const result = await updatePlantHeight(plantId, newHeight);

      //update local state with the new height and the status
      setPlantData({
        ...plantData,
        height: newHeight,
        status: result.status
      });
    } catch (error) {
      console.error("Failed to update height:", error);
      Alert.alert("Error", "Failed to update plant height. Please try again.");
    } finally {
      setUpdating(false);
    }
  }

   // Function to decrease height
   const decreaseHeight = async () => {
    if (!plantData || plantData.height <= 0) return;
    
    try {
      setUpdating(true);
      const newHeight = plantData.height - 1;
      const result = await updatePlantHeight(plantId, newHeight);
      
      // Update local state with new height and status
      setPlantData({
        ...plantData,
        height: newHeight,
        status: result.status
      });
    } catch (error) {
      console.error("Failed to update height:", error);
      Alert.alert("Error", "Failed to update plant height. Please try again.");
    } finally {
      setUpdating(false);
    }
  };


  // Show loading spinner while data is being fetched
  if(loading){
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#20C58D">
          <Text style={styles.loadingText}>Loading plant data</Text>
        </ActivityIndicator>
      </View>
    )
  }

  // If no data is available, show error
  if (!plantData) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Could not load plant data</Text>
        <TouchableOpacity style={styles.retryButton} onPress={loadPlantData}>
          <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const { name, status, height, growthHistory, previousDetails } = plantData;

  return (
    <ScrollView 
      style={styles.container} 
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <View>
        <LinearGradient
          colors={
            status === "Good" ? ["#D3FFF0", "#DFF78E"] : ["#FFFFD3", "#F7B78E"]
          }
          style={styles.topCard}
        >
          <View style={styles.topCardContainer}>
            <View style={styles.header}>
              <View style={styles.plantVisual}>
                <View style={styles.plantContainer}>
                  <Image
                    source={require("../assets/plant.png")}
                    style={styles.plantImage}
                    resizeMode="contain"
                  />
                </View>
                <Text
                  style={[
                    styles.plantName,
                    {
                      backgroundColor: status === "Good" ? "#78CB68" : "#FF6666"
                    }
                  ]}
                >
                  {name}
                </Text>
              </View>
              <View style={styles.cardRightSide}>
                <Text
                  style={[
                    styles.statusText,
                    { color: status === "Good" ? "#2e7d32" : "#f4511e" }
                  ]}
                >
                  {status}
                </Text>

                <View style={styles.heightInfo}>
                  <Text
                    style={[
                      styles.heightLabel,
                      { color: status === "Good" ? "#2e7d32" : "#8A1414" }
                    ]}
                  >
                    Height
                  </Text>
                  <Text
                    style={[
                      styles.heightValue,
                      { color: status === "Good" ? "#436F29" : "#771212" }
                    ]}
                  >
                    {height} CM
                  </Text>

                  <View style={styles.controls}>
                    <TouchableOpacity
                      style={styles.controlLeft}
                      onPress={increaseHeight}
                      disabled={updating}
                    >
                      <View style={styles.controlButton}>
                        <Text style={styles.controlText}>+</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        styles.controlRight,
                        {
                          backgroundColor:
                            status === "Good" ? "#E1FFB5" : "#FFD1B5"
                        }
                      ]}
                      onPress={decreaseHeight}
                      disabled={updating || height <= 0}
                    >
                      <View
                        style={[
                          styles.controlButton,
                          styles.controlButtonMinus
                        ]}
                      >
                        <Text style={styles.controlText}>-</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  
                  {updating && (
                    <ActivityIndicator 
                      size="small" 
                      color={status === "Good" ? "#2e7d32" : "#f4511e"}
                      style={styles.updatingIndicator}
                    />
                  )}
                </View>
              </View>
            </View>
          </View>
        </LinearGradient>

        <GrowthChart data={growthHistory} status={status} />
        <PreviousDetails
          details={previousDetails}
          status={status}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666'
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  errorText: {
    fontSize: 16,
    color: '#f44336',
    marginBottom: 20
  },
  retryButton: {
    backgroundColor: '#20C58D',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8
  },
  retryButtonText: {
    color: 'white',
    fontWeight: '500'
  },
  updatingIndicator: {
    marginTop: 8
  },

  topCardContainer: {
    marginBottom: 0,
    position: "relative"
  },
  topCard: {
    marginTop: 60,
    marginBottom: 30,
    borderRadius: 25
  },
  header: {
    flexDirection: "row",
    padding: 16,
    justifyContent: "space-between",
    alignItems: "center"
  },
  plantVisual: {
    flex: 1
  },
  plantContainer: {
    width: 220,
    height: 220,
    marginBottom: -30,
    marginLeft: -40,
    position: "absolute",
    left: -2,
    top: -85
  },
  plantImage: {
    width: "100%",
    height: "100%",
    zIndex: 1
  },
  plantName: {
    position: "absolute",
    top: 40,
    left: -15,
    zIndex: 2,
    fontSize: 16,
    fontWeight: "400",
    color: "#fff",
    backgroundColor: "#78CB68",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
    width: 120,
    alignSelf: "flex-start",
    borderTopRightRadius: 40, // Only right top border radius
    borderBottomRightRadius: 40, // Only right bottom border radius
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  },
  cardRightSide: {
    width: 140,
    flex: 1
  },
  heightInfo: {
    alignItems: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.09)", // Black with 9% opacity
    padding: 20,
    borderRadius: 15
  },
  statusText: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 4
  },
  heightLabel: {
    fontSize: 14,
    fontWeight: 500,
    color: "#3D552F"
  },
  heightValue: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#436F29",
    marginBottom: 8
  },
  controls: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 50,
    width: "100%",
    justifyContent: "space-around", // Equal spacing around buttons
    alignItems: "center", // Ensure buttons align properly
    overflow: "hidden" // Prevents color from bleeding outside border radius
  },
  controlButton: {
    justifyContent: "center",
    alignItems: "center"
  },
  controlButtonMinus: {},
  controlText: {
    fontSize: 20,
    fontWeight: "900",
    color: "#4a5568"
  },
  controlLeft: {
    flex: 1, // Takes half width
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8
  },
  controlRight: {
    flex: 1, // Takes half width
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8
  }
});
