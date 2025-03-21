/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useCallback } from "react";

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
import AsyncStorage from "@react-native-async-storage/async-storage";
import LinearGradient from "react-native-linear-gradient";
import { PlantData } from "../types/index";
import GrowthChart from "./GrowthChart";
import PreviousDetails from "./PreviousDetails";
import { fetchPlantDetails, updatePlantHeight } from "../services/api";

export default function PlantCard() {
  const [plantData, setPlantData] = useState<PlantData | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  const plantId = "4";

  const STORAGE_KEY = `plant_${plantId}_data`; // Unique key for local storage

  const saveDataLocally = async (data: PlantData) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error("Error saving data locally:", error);
    }
  };

  const loadLocalData = useCallback(async () => {
    try {
      const storedData = await AsyncStorage.getItem(STORAGE_KEY);
      console.log("Retrieved Data from AsyncStorage:", storedData); // Debugging log
      if (storedData) {
        setPlantData(JSON.parse(storedData));
      }
    } catch (error) {
      console.error("Error loading local data:", error);
    }
  },[STORAGE_KEY]);

  const loadPlantData = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchPlantDetails(plantId);
      setPlantData(data);
      await saveDataLocally(data); // Save data locally after fetching
    } catch (error) {
      console.error("Failed to load plant data:", error);
      Alert.alert("Error", "Failed to load plant data. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [plantId]);

  useEffect(() => {
    loadLocalData(); // Load saved data first
    loadPlantData(); // Fetch fresh data when online
  }, [loadLocalData, loadPlantData]);

  const increaseHeight = async () => {
    if (!plantData) return;
    try {
      setUpdating(true);
      const newHeight = plantData.height + 1;
      const result = await updatePlantHeight(plantId, newHeight);
      setPlantData({ ...plantData, height: newHeight, status: result.status });
    } catch (error) {
      console.error("Failed to update height:", error);
      Alert.alert("Error", "Failed to update plant height. Please try again.");
    } finally {
      setUpdating(false);
    }
  };

  const decreaseHeight = async () => {
    if (!plantData || plantData.height <= 0) return;
    try {
      setUpdating(true);
      const newHeight = plantData.height - 1;
      const result = await updatePlantHeight(plantId, newHeight);
      setPlantData({ ...plantData, height: newHeight, status: result.status });
    } catch (error) {
      console.error("Failed to update height:", error);
      Alert.alert("Error", "Failed to update plant height. Please try again.");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#20C58D" />
        <Text style={styles.loadingText}>Loading plant data...</Text>
      </View>
    );
  }

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
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
      <View>
        <LinearGradient colors={status === "Good" ? ["#D3FFF0", "#DFF78E"] : ["#FFFFD3", "#F7B78E"]} style={styles.topCard}>
          <View style={styles.topCardContainer}>
            <View style={styles.header}>
              <View style={styles.plantVisual}>
                <View style={styles.plantContainer}>
                  <Image source={require("../assets/plant.png")} style={styles.plantImage} resizeMode="contain" />
                </View>
                <Text style={[styles.plantName, { backgroundColor: status === "Good" ? "#78CB68" : "#FF6666" }]}>
                  {name}
                </Text>
              </View>
              <View style={styles.cardRightSide}>
                <Text style={[styles.statusText, { color: status === "Good" ? "#2e7d32" : "#f4511e" }]}>
                  {status}
                </Text>
                <View style={styles.heightInfo}>
                  <Text style={[styles.heightLabel, { color: status === "Good" ? "#2e7d32" : "#8A1414" }]}>Height</Text>
                  <Text style={[styles.heightValue, { color: status === "Good" ? "#436F29" : "#771212" }]}>
                    {height} CM
                  </Text>
                  <View style={styles.controls}>
                    <TouchableOpacity style={styles.controlLeft} onPress={increaseHeight} disabled={updating}>
                      <View style={styles.controlButton}>
                        <Text style={styles.controlText}>+</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.controlRight, { backgroundColor: status === "Good" ? "#E1FFB5" : "#FFD1B5" }]} onPress={decreaseHeight} disabled={updating || height <= 0}>
                      <View style={[styles.controlButton, styles.controlButtonMinus]}>
                        <Text style={styles.controlText}>-</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  {updating && <ActivityIndicator size="small" color={status === "Good" ? "#2e7d32" : "#f4511e"} style={styles.updatingIndicator} />}
                </View>
              </View>
            </View>
          </View>
        </LinearGradient>
        <GrowthChart data={growthHistory} status={status} />
        <PreviousDetails details={previousDetails} status={status} />
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
    backgroundColor: "rgba(0, 0, 0, 0.09)",
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
    fontWeight: "500",
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
    justifyContent: "space-around",
    alignItems: "center",
    overflow: "hidden"
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
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8
  },
  controlRight: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8
  }
});
