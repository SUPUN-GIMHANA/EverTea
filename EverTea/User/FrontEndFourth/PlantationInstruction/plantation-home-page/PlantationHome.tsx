import * as React from 'react';
import { StyleSheet ,SafeAreaView} from 'react-native';
import PlantationLeftHeader from './PlantationLeftHeader';
import PlantationRightHeader from './PlantationRightHeader';
const PlantationHome = () => {
  return (
    
    <SafeAreaView style={styles.container}>
      <PlantationLeftHeader/>
      <PlantationRightHeader/>
    </SafeAreaView>
  );
};

export default PlantationHome;

const styles = StyleSheet.create({
  container: {
  }
});
