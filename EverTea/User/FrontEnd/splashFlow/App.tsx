import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';

//this is the entry point for splash flow

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}



export default App;
