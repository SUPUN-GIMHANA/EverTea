import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GreetingScreen from './GreetingScreen';
import HomeScreen from './HomeScreen';
import FinancialTracker from './FinancialTracker';
import PlantationStart from './PlantationStart';
import PlantationStartDistrict from './PlantationJourney/PlantationStartDistrict';
import PlantationStartLand from './PlantationJourney/PlantationStartLand';
import PlantationStartBudget from './PlantationJourney/PlantationStartBudget';
import PlantationStartRecommendation from './PlantationJourney/PlantationStartRecommendation';
import PlantationStartSucessfull from './PlantationJourney/PlantationStartSucessfull';
import Login from './LoginAndSignup/Login';
import SignUp from './LoginAndSignup/SignUp';
import ViewPlantation from './ViewPlantation/ViewPlantation';

// App Navigator
import Flow1 from "./splashFlow/screens/Flow1";
import Flow2 from "./splashFlow/screens/Flow2";
import Flow3 from "./splashFlow/screens/Flow3";
import Flow4 from "./splashFlow/screens/Flow4";
import Flow5 from "./splashFlow/screens/Flow5";
import LetsStart from "./splashFlow/screens/LetsStart";

//View Plantations
// import ViewPlantations from './ViewPlantation/ViewPlant';

//Plantation Instructions
// import PlantationInstructions from './PlantationInstruction/PlantationInstructions';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Flow1" component={Flow1} />
        <Stack.Screen name="Flow2" component={Flow2} />
        <Stack.Screen name="Flow3" component={Flow3} />
        <Stack.Screen name="Flow4" component={Flow4} />
        <Stack.Screen name="Flow5" component={Flow5} />
        <Stack.Screen name="LetsStart" component={LetsStart} />

        <Stack.Screen name="GreetingScreen" component={GreetingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FinancialTracker" component={FinancialTracker} />
        <Stack.Screen name="PlantationStart" component={PlantationStart} />
        <Stack.Screen name="PlantationStartDistrict" component={PlantationStartDistrict} />
        <Stack.Screen name="PlantationStartLand" component={PlantationStartLand} />
        <Stack.Screen name="PlantationStartBudget" component={PlantationStartBudget} />
        <Stack.Screen name="PlantationStartRecommendation" component={PlantationStartRecommendation} />
        <Stack.Screen name="PlantationStartSucessfull" component={PlantationStartSucessfull} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ViewPlantation" component={ViewPlantation} />
        {/* <Stack.Screen name="ViewPlantations" component={ViewPlantations} /> */}
        {/* <Stack.Screen name="PlantationInstructions" component={PlantationInstructions} /> */}


        {/* <Stack.Screen name="Profile" component={Profile} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}