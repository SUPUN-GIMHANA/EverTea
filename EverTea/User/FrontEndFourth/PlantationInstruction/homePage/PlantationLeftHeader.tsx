import * as React from 'react';
import { Text, View, StyleSheet,SafeAreaView,Image } from 'react-native';


const PlantationLeftHeader = () => {
  return (
    
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.imageP}>
          <Image source={require('../assets/edit.png')} 
          style={styles.edit} />
        </View>

        <View style={styles.text}>
          <Text style={styles.main}>Plantation 02</Text>
          <Text style={styles.min}>Planted on 12th Dec 2024</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PlantationLeftHeader;

const styles = StyleSheet.create({
  container: {
    textAlign:'center',
    justifyContent:'center',
    width:'100%',
    
    
  },
  edit:{
    
    // tintColor:'black',
    // opacity:0.6,
    
    // width:30,
    // height:30,
    // bottom:330,
    // left:20,
    // elevation:13,
    // zIndex:10,
    position: "absolute", // Make sure it overlays
    tintColor: "black",
    opacity: 0.6,
    width: 25,
    height: 25,
    zIndex: 10, // Ensure it's above
    elevation: 13, // 
    
  },
  imageP:{
    // backgroundColor:'#b8b7b6',
    // borderRadius:20,
    // bottom:330,
    // left:20,
    // width:'8%',
    // zIndex:0,

    backgroundColor: "#b8b7b6",
    borderRadius: 20,
    bottom: 330,
    left: 20,
    width: "10%",
    height: 40, // Ensure height is set
    justifyContent: "center",
    alignItems: "center",
    zIndex: 0, // Keep background behi
    
  },
  text:{
    left:20,
    bottom:140,
    
  },
  main:{
    fontWeight:'bold',
    fontSize:21,
    color:'#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    
  },
  min:{
    color:'#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    
  }
});
