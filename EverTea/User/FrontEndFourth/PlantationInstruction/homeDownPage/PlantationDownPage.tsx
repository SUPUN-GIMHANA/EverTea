import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Events from './events';
import GrowthTracker from './GrowthTracker';
import NavigationBar from './NavigationBar';
const PlantationDownPage = () => {
  return (
    <View style={styles.container}>
      <Events/>
      <GrowthTracker/>
      <NavigationBar/>
    </View>
  );
};

export default PlantationDownPage;

const styles = StyleSheet.create({
  container: {
    
  }
});
