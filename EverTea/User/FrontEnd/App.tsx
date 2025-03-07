import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GreetingScreen from './GreetingScreen';
import HomeScreen from './HomeScreen';
import FinancialTracker from './FinancialTracker';
import PlantationStart from './PlantationStart'
import PlantationStartDistrict from './PlantationJourney/PlantationStartDistrict'
import PlantationStartLand from './PlantationJourney/PlantationStartLand'
import PlantationStartBudget from './PlantationJourney/PlantationStartBudget'
import PlantationStartRecommendation from './PlantationJourney/PlantationStartRecommendation'
import PlantationStartSucessfull from './PlantationJourney/PlantationStartSucessfull'
import Login from './LoginAndSignup/Login'
import SignUp from './LoginAndSignup/SignUp'
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
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


        {/* <Stack.Screen name="Profile" component={Profile} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}