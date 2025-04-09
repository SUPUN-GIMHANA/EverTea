import * as React from 'react';
import { Text, View, StyleSheet, Image, FlatList, Dimensions, PixelRatio } from 'react-native';

// Get screen dimensions
const { width } = Dimensions.get('window');
const scale = width / 375; // 375 is a base screen width for scaling
const normalize = (size: any) => Math.round(PixelRatio.roundToNearestPixel(size * scale));

const initialMessages = [
  {
    id: '1',
    alert: 'Weather Alert 1',
    para: 'No message alert here..........',
  },
];

const NotificationMessage = ({ newNotification } : any) => {
  const [messages, setMessages] = React.useState(initialMessages);

  React.useEffect(() => {
    if (newNotification) {
      const newMessage = {
        id: Math.random().toString(),
        alert: 'New Weather Alert',
        para: newNotification,
      };
      setMessages((prevMessages) => [newMessage, ...prevMessages]);
    }
  }, [newNotification]);

  const renderItem = ({ item } : any) => (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.alert}>{item.alert}</Text>
        <Text style={styles.para}>{item.para}</Text>

        <View style={styles.button}>
          <Image source={require('../assets/next.png')} style={styles.icon} />
          <Text style={styles.text}>View More</Text>
          <Image source={require('../assets/back.png')} style={styles.icon} />
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={messages}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default NotificationMessage;

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 1, // 90% of screen width
    
  },
  container: {
    borderWidth: 1.1,
    marginHorizontal: normalize(10),
    padding: normalize(20),
    borderRadius: normalize(30),
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginBottom: normalize(0),
    borderColor: '#00378f',
    width: width * 0.97, // 85% of screen width
    bottom:10,
    
  },
  alert: {
    fontWeight: 'bold',
    fontSize: normalize(18),
    backgroundColor: '#1D95FF',
    padding: normalize(6),
    borderRadius: normalize(20),
    paddingHorizontal: normalize(15),
    color: '#fff',
    width: '50%',
  },
  para: {
    padding: normalize(5),
    fontSize: normalize(16),
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: normalize(10),
  },
  icon: {
    width: normalize(30),
    height: normalize(30),
    tintColor: '#FFB040',
  },
  text: {
    backgroundColor: '#FFB040',
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(40),
    borderRadius: normalize(20),
    fontSize: normalize(14),
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
