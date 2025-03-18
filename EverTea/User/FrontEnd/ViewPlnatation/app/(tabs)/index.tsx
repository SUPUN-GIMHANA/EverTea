import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'

const app = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>ViewPlantation</Text> */}
      <View style={styles.frontImg}>
        <Image source={require('@/assets/images/homeImg.png')} style={{width:'100%',height:'100%'}}/>
      </View>
      <View style={styles.backImg}>
          <View  style={styles.topic}>My plantations</View>
          <View style={styles.plantationHandel}>
            <View  style={styles.plantation1}>
                <View style={styles.p1I}>
                  <Image source={require('@/assets/images/plantation1Img.png')} style={{borderRadius:15}}/>
                </View>
                <View style={styles.p1d}>
                    <View style={styles.p1n}>Plantation 01</View>
                    <View style={styles.p1a}>No 12/25 Moratuva Pitakotuwa</View>
                    <View style={styles.p1b}>
                      <View style={styles.date}>8 Months</View>
                      <View style={styles.btn}>
                      <Image source={require('@/assets/images/deletebtn.png')} style={{borderRadius:15 ,width:23, height:23}}/>
                      </View>
                    </View>
                </View> 
            </View>
            <View  style={styles.plantation2}>
                <View style={styles.p1I}>
                <Image source={require('@/assets/images/plantation3Img.png')} style={{borderRadius:15}}/>
                </View>
                <View style={styles.p1d}>
                    <View style={styles.p1n}>Plantation 02</View>
                    <View style={styles.p1a}>No 12/25 Moratuva Pitakotuwa</View>
                    <View style={styles.p1b}>
                      <View style={styles.date}>6 Months</View>
                      <View style={styles.btn}>
                      <Image source={require('@/assets/images/deletebtn.png')} style={{borderRadius:15 ,width:23, height:23}}/>
                      </View>
                    </View>
                </View>
            </View>
            <View  style={styles.plantation3}>
                <View  style={styles.p1I}>
                <Image source={require('@/assets/images/plantation1Img.png')} style={{borderRadius:15}}/>
                </View>
                <View style={styles.p1d}>
                    <View style={styles.p1n}>Plantation 03</View>
                    <View style={styles.p1a}>No 12/25 Moratuva Pitakotuwa</View>
                    <View style={styles.p1b}>
                      <View style={styles.date}>3 Months</View>
                      <View style={styles.btn}>
                      <Image source={require('@/assets/images/deletebtn.png')} style={{borderRadius:15 ,width:23, height:23}}/>
                      </View>
                    </View>
                </View>
            </View>
          </View>
      </View>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
  },
  text:{
    color:'white',
    fontSize:42,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  frontImg:{
    width:'100%',
    height:'40%',
    color:"white",
    // backgroundColor:"green"
  },
  backImg:{
    width:'100%',
    height:'60%',
    color:"white",
    backgroundColor:'rgb(200, 200, 201)',
    
  },
  topic:{
    width:'100%',
    height:50,
    color:"black",
    // backgroundColor:"green",
    display:'flex',
    alignItems:'center',
    justifyContent: 'center',
    fontSize:23,
    fontWeight:'bold'
  },
  plantationHandel:{
    flexDirection:'column',
    display: 'flex',
    alignItems:'center',
    justifyContent:'space-around'
  },

  plantation1:{
    width:'83%',
    height:135,
    color:"white",
    backgroundColor:"white",
    borderRadius:20,
    margin:8,
    flexDirection:'row'
  },
  plantation2:{
    width:'83%',
    height:135,
    color:"white",
    backgroundColor:"white",
    borderRadius:20,
    margin:8,
    flexDirection:'row'
  },
  plantation3:{
    width:'83%',
    height:135,
    color:"white",
    backgroundColor:"white",
    borderRadius:20,
    margin:8,
    flexDirection:'row'
  },
  p1I:{
    width:150,
    height:125,
    // backgroundColor:'red',
    borderRadius:20,
    margin:5
  },
  p1d:{
    width:150,
    height:133,
    // backgroundColor:'green',
    color:'black',
    marginLeft:10
  },
  p1n:{
    width:'100%',
    height:40,
    // backgroundColor:'red',
    fontWeight:'bold',
    display:'flex',
    alignItems:'center',
    justifyContent: 'center'
  },
  p1a:{
    width:'100%',
    height:40,
    // backgroundColor:'yellow',
    fontSize:13,
    color:'rgb(172, 172, 172)',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  p1b:{
    width:'100%',
    height:50,
    // backgroundColor:'pink',
    display:'flex',
    flexDirection: 'row',
    alignItems:'center'
  },
  date:{
    width:90,
    height:35,
    backgroundColor:'rgb(255, 217, 0)',
    borderRadius:30,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    fontSize:15,
    color:'white'
  },
  btn:{
    width:45,
    height:35,
    backgroundColor:'red',
    borderRadius:50,
    marginLeft:10,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  
})