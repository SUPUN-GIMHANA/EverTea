import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Events from './events';
import GrowthTracker from './GrowthTracker';
import NavigationBar from './NavigationBar';
const PlantationDownPage = ({notification}:{notification: string | null}) => {
  console.log("Notification down page1: ",notification);
  return (
    <View style={styles.container}>
      <Events newNotification={notification}/>
      <GrowthTracker/>
      <NavigationBar/>
    </View>
  );
};

export default PlantationDownPage;

const styles = StyleSheet.create({
  container: {
    // top:115,
    // flex:1,
    flexDirection:'column-reverse',
    bottom:200,
  }
});
