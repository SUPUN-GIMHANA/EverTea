import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';



const GrowthTracker = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={require('../assets/Vector.png')}  style={styles.icon}/>
      <Text style={styles.text}>Growth Tracker</Text>
    </TouchableOpacity>
  );
};

export default GrowthTracker;

const styles = StyleSheet.create({
  container: {
    bottom:240,
    flexDirection:'row',
    textAlign:'center',
    justifyContent:'center',
    backgroundColor:'#20C58D',
    padding:17,
    marginHorizontal:20,
    borderRadius:20,
    
  },icon:{
    justifyContent:'space-between',
    right:10
  },
  text:{
    color:'#fff',
    fontWeight:'bold',
  }
});
