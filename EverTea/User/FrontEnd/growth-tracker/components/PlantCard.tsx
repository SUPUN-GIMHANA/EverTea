import React, {useState} from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { PlantData } from "../types";
import GrowthChart from "./GrowthChart";
import PreviousDetails from "./PreviousDetails";

const SAMPLE_DATA: PlantData = {
  id: "01",
  name: "Plantation 01",
  height: 15, //initial height(I change this when backend implement)
  status: "Good",
  growthHistory: [5, 8, 12, 15, 18, 20, 22, 23, 24, 25],
  //for the testing perpose I add these sample records
  previousDetails: [
    { date: "2024-12-25", status: "Good", growth: "+1 CM" },
    { date: "2024-12-25", status: "Good", growth: "+1.4 CM" },
    { date: "2024-12-25", status: "Good", growth: "+1 CM" }
  ]
};


export default function PlantCard() {
  const { name } = SAMPLE_DATA;

  //state for changing height values
  const [heightValue, setHeightValue] = useState(SAMPLE_DATA.height);

  //determine the status based on height,this is only for testing perpose,this height should comes from backend.
  const status = heightValue < 10 ? "Warning" : "Good";

  //function to increase height
  const increaseHeight = ()=>{
    setHeightValue((prev) => prev+1);
  };

  //function to decrease hieght
  const decreaseHeight = ()=>{
    setHeightValue((prev) => (prev > 0 ? prev - 1 : 0));
  }

  return (
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
              <Text style={[styles.plantName,
                { backgroundColor: status === "Good" ? "#78CB68" : "#FF6666" }
              ]}>{name}</Text>
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
                <Text style={[styles.heightLabel,
                  { color: status === "Good" ? "#2e7d32" : "#8A1414" }
                ]}>Height</Text>
                <Text style={[styles.heightValue,
                  { color: status === "Good" ? "#436F29" : "#771212" }
                ]}>{heightValue} CM</Text>

                <View style={styles.controls}>
                  <TouchableOpacity style={styles.controlLeft} onPress={increaseHeight}>
                    <View style={styles.controlButton}>
                      <Text style={styles.controlText}>+</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.controlRight,
                    { backgroundColor: status === "Good" ? "#E1FFB5" : "#FFD1B5" }
                  ]} onPress={decreaseHeight}>
                    <View
                      style={[styles.controlButton, styles.controlButtonMinus]}
                    >
                      <Text style={styles.controlText}>-</Text>
                    </View>
                  </TouchableOpacity>
                </View>

              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
      
      <GrowthChart data={SAMPLE_DATA.growthHistory} status={status} />
      <PreviousDetails details={SAMPLE_DATA.previousDetails} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4
  },
  topCardContainer: {
    marginBottom: 0,
    position: "relative"
  },
  topCard: {
    marginTop: 30,
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
    alignItems: "center",
  },
  controlButtonMinus: {
  },
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
    paddingVertical: 8,
  },
  controlRight: {
    flex: 1, // Takes half width
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
});
