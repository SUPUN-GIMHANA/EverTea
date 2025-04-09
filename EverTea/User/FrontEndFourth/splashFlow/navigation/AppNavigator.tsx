import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Flow1 from "../screens/Flow1";
import Flow2 from "../screens/Flow2";
import Flow3 from "../screens/Flow3";
import Flow4 from "../screens/Flow4";
import Flow5 from "../screens/Flow5";
import LetsStart from "../screens/LetsStart";
import Login from "../../LoginAndSignup/Login";

export type RootStackParamList = {
  Flow1: undefined;
  Flow2: undefined;
  Flow3: undefined;
  Flow4: undefined;
  Flow5: undefined;
  LetsStart: undefined;
  Login: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Flow1" component={Flow1} />
      <Stack.Screen name="Flow2" component={Flow2} />
      <Stack.Screen name="Flow3" component={Flow3} />
      <Stack.Screen name="Flow4" component={Flow4} />
      <Stack.Screen name="Flow5" component={Flow5} />
      <Stack.Screen name="LetsStart" component={LetsStart} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
