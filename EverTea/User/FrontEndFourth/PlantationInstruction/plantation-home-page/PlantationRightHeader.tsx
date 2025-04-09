import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';



const PlantationRightHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.growth}>
        <Text style={styles.percentage}>96 %</Text>
        <Text style={styles.growthName}>Good Growth</Text>
      </View>

      <View style={styles.boxTwo}>
        <View>
          <Text style={styles.month}>8 month old</Text>
        </View>

        <View >
          <Text style={styles.height}>Height: 20 cm</Text>
        </View>
      </View>
    </View>
  );
};

export default PlantationRightHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    bottom:25

  },
  growth:{
    bottom:360,
    borderWidth:1,
    padding:25,
    // paddingVertical:40,
    borderRadius:20,
    backgroundColor: 'rgba(0, 128, 0, 0.5)', // Green with 50% opacity
    left:100,
    borderColor:'#fff',

  },
  percentage:{
    fontSize:30,
    fontWeight:'bold',
    color:'#fff',

  },
  growthName:{
    fontSize:15,
    color:'#fff',

  },
  boxTwo:{
    justifyContent:'space-around',
    bottom:250,
    right:20,
  },
  
  month:{
    borderWidth:1,
    padding:10,
    borderRadius:20,
    paddingHorizontal:20,
    color:'#fff',
    backgroundColor:'rgb(0, 0, 0)',
    fontWeight:'bold',
    borderColor:'#fff',
    opacity:0.5
  },
  height:{
    borderWidth:1,
    padding:10,
    borderRadius:20,
    paddingHorizontal:20,
    backgroundColor:'rgb(0, 0, 0)',
    color:'#fff',
    fontWeight:'bold',
    borderColor:'#fff',
    opacity:0.5
  }

});
