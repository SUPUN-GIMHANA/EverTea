import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { Text, StyleSheet, View, Image, Dimensions, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../navigation/AppNavigator";

const { width, height } = Dimensions.get("window"); // Get device width and height

const Flow1 = () => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Flow1'>>();  // Type the navigation

  return (
    <View style={styles.container} >
      <Image
        style={styles.backgroundImage}
        resizeMode="cover"
        source={require("../assets/sc2.jpg")}
      />
      <Text style={styles.welcomeText}>Welcome to{"\n"}EverTea!</Text>
      <Text style={styles.description}>
        Grow your tea plantation smarter{"\n"}with expert guidance and tracking.
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate('Flow2')}>
      <View style={styles.button} >
        <Text style={styles.getStarted}>Get started</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity>
      <Text style={styles.memberText}>
        <Text style={styles.alreadyMemberText}>Already a member?</Text>
        <Text style={styles.signInText} >Sign in</Text>
      </Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  backgroundImage: {
    width: width, // Full width
    height: height * 0.55, // 40% of screen height
    position: "absolute",
    top: 0,
  },
  welcomeText: {
    fontSize: width * 0.08, // Responsive font size
    fontWeight: "700",
    fontFamily: "Poppins-Bold",
    textAlign: "center",
    color: "#000",
    marginTop: height * 0.4 + 20, // Below the image
  },
  description: {
    fontSize: width * 0.04,
    color: "#818181",
    textAlign: "center",
    marginTop: 10,
    width: "90%",
  },
  memberText: {
    marginTop: 20,
    fontSize: width * 0.04,
    textAlign: "center",
  },
  alreadyMemberText: {
    color: "#757575",
    fontFamily: "Poppins-Regular",
  },
  signInText: {
    fontWeight: "700",
    fontFamily: "Poppins-SemiBold",
    color: "#000",
  },
  button: {
    backgroundColor: "#20c58d",
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: width*0.2,
    marginTop: 30,
  },
  getStarted: {
    fontSize: width * 0.045,
    fontWeight: "500",
    fontFamily: "Poppins-Medium",
    color: "#fff",
    textAlign: "center",
  },
});

export default Flow1;