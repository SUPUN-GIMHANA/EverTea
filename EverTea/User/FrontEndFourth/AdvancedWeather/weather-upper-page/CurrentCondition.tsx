import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image } from 'react-native';



const CurrentCondition = ({currentTemp, weathercode}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.temp}>
        <View>
          <Text style={styles.mainTemp}>{currentTemp ? currentTemp : '0'}</Text>
        </View>

        <View>
          <Image source={require('../assets/celcius.png')}
          style={styles.tempIcon}/>
        </View>
      </View>
      <Text style={styles.weatherCode}>{weathercode ? weathercode : 'Feels like....'}</Text>
    </SafeAreaView>
  );
};

export default CurrentCondition;

const styles = StyleSheet.create({
  container: {
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    
  },
  temp:{
    bottom:10,
    flexDirection:'row',
    left:20,
  },
  mainTemp:{
    fontSize:100,
    color:'#fff',
    fontWeight:'400',
    fontStyle:'italic',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  tempIcon:{
    width:35,
    height:35,
  },
  weatherCode:{
    fontSize:22,
    color:'#822124',
    fontWeight:'bold',
    bottom:25,
    opacity:0.5,
    // textShadowColor: 'rgba(0, 0, 0, 0.5)',
    // textShadowOffset: { width: 2, height: 2 },
    // textShadowRadius: 4,
  },
});
