import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList, Dimensions } from 'react-native';

const eventsData = [
  {
    id: '1',
    title: 'Event 001',
    subTopic: 'Water Early in the Morning.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis velit, minus accusamus voluptates illum consequuntur atque quas nisi placeat nam veritatis, corporis ratione. Aperiam et illo laborum asperiores adipisci'
  },
  {
    id: '2',
    title: 'Event 002',
    subTopic: 'Plant New Trees Every Month.',
    description: 'Taking care of the environment is essential. Planting new trees helps reduce carbon footprint and promotes a green planet.'
  },
  {
    id: '3',
    title: 'Event 003',
    subTopic: 'Reduce Plastic Usage.',
    description: 'Reducing plastic waste contributes to cleaner oceans and healthier ecosystems. Use eco-friendly alternatives whenever possible.'
  }
];

const { width } = Dimensions.get('window');

const Events = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={eventsData}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.card, { width: width - 40 }]}>
            <View>
              <Text style={styles.event}>{item.title}</Text>
            </View>
            <View>
              <Text style={styles.subTopic}>{item.subTopic}</Text>
              <Text style={styles.para}>{item.description}</Text>
            </View>
            <View style={styles.allEvent}>
              <View>
                <Image source={require('../assets/next.png')} style={styles.next} />
              </View>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.allEventText}>View All Event</Text>
              </TouchableOpacity>
              <View>
                <Image source={require('../assets/back.png')} style={styles.back} />
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Events;


const styles = StyleSheet.create({
  container: {
    textAlign:'center',
    justifyContent:'center',
    bottom:250,
    borderWidth:1,
    marginHorizontal:20,
    borderRadius:30,
    borderColor:'green',
    backgroundColor:'#F0F8FF',

  },
  card:{
    padding:20,

  },
  event:{
    backgroundColor:'#FFCF31',
    width:'35%',
    padding:10,
    borderRadius:20,
    textAlign:'center',
    color:'#fff',
    fontWeight:'bold'
    
  },
  subTopic:{
    fontSize:15,
    fontWeight:'bold',
    marginVertical:10
  },
  para:{
    width:'100%',
    opacity:0.5
  },
  next:{
    width:30,
    height:30,
    backgroundColor:'#20C58D',
    padding:20,
    borderRadius:10,
    tintColor:"#fff"
  },
  back:{
    width:30,
    height:30,
    backgroundColor:'#20C58D',
    padding:20,
    borderRadius:10,
    tintColor:'#fff'
  },
  allEvent:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginVertical:10,
    top:10

    
  },
  btn:{
    backgroundColor:'#20C58D',
    paddingHorizontal:50,
    textAlign:'center',
    borderRadius:10,
    justifyContent:'center',
    color:'#fff'
  },
  allEventText:{
    color:'#fff',
    fontWeight:'bold'
  }
});
