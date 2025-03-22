
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>ViewPlantation</Text> */}
      <View style={styles.frontImg}>
        <Image source={require('@/assets/images/homeImg.png')} style={{ width: '100%', height: '100%' }} />
      </View>
      <View style={styles.backImg}>
        <Text style={styles.topic}>My plantations</Text>
        <View style={styles.plantationHandel}>
          <View style={styles.plantation}>
            <View style={styles.p1I}>
              <Image source={require('@/assets/images/plantation1Img.png')} style={{ width: '100%', height: '100%', borderRadius: 15 }} />
            </View>
            <View style={styles.p1d}>
              <Text style={styles.p1n}>Plantation 01</Text>
              <Text style={styles.p1a}>No 12/25 Moratuva Pitakotuwa</Text>
              <View style={styles.p1b}>
                <Text style={styles.date}>8 Months</Text>
                <TouchableOpacity style={styles.btn}>
                  <Image source={require('@/assets/images/deletebtn.png')} style={{ width: 23, height: 23, borderRadius: 15 }} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.plantation}>
            <View style={styles.p1I}>
              <Image source={require('@/assets/images/plantation3Img.png')} style={{ width: '100%', height: '100%', borderRadius: 15 }} />
            </View>
            <View style={styles.p1d}>
              <Text style={styles.p1n}>Plantation 02</Text>
              <Text style={styles.p1a}>No 12/25 Moratuva Pitakotuwa</Text>
              <View style={styles.p1b}>
                <Text style={styles.date}>6 Months</Text>
                <TouchableOpacity style={styles.btn}>
                  <Image source={require('@/assets/images/deletebtn.png')} style={{ width: 23, height: 23, borderRadius: 15 }} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.plantation}>
            <View style={styles.p1I}>
              <Image source={require('@/assets/images/plantation1Img.png')} style={{ width: '100%', height: '100%', borderRadius: 15 }} />
            </View>
            <View style={styles.p1d}>
              <Text style={styles.p1n}>Plantation 03</Text>
              <View style={styles.p1b}>
                <TouchableOpacity><Text style={styles.date1}>Add a new plantation</Text></TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  frontImg: {
    width: '100%',
    height: '40%',
  },
  backImg: {
    width: '100%',
    height: '60%',
    backgroundColor: 'rgb(200, 200, 201)',
  },
  topic: {
    width: '100%',
    height: 50,
    color: 'black',
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 50,
  },
  plantationHandel: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  plantation: {
    width: '83%',
    height: 135,
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 8,
    flexDirection: 'row',
  },
  p1I: {
    width: 150,
    height: 125,
    borderRadius: 20,
    margin: 5,
  },
  p1d: {
    width: 150,
    height: 133,
    marginLeft: 10,
  },
  p1n: {
    width: '100%',
    height: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 40,
  },
  p1a: {
    width: '100%',
    height: 40,
    fontSize: 13,
    color: 'rgb(172, 172, 172)',
    textAlign: 'center',
    lineHeight: 40,
  },
  p1b: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    width: 90,
    height: 35,
    backgroundColor: 'rgb(255, 217, 0)',
    borderRadius: 30,
    textAlign: 'center',
    lineHeight: 35,
    color: 'white',
  },
  date1: {
    width: 160,
    height: 35,
    backgroundColor: 'rgb(22, 158, 49)',
    borderRadius: 30,
    textAlign: 'center',
    lineHeight: 35,
    color: 'white',
  },
  btn: {
    width: 45,
    height: 35,
    backgroundColor: 'red',
    borderRadius: 50,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
