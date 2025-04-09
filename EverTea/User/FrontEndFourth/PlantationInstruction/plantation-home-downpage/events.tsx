import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  PixelRatio,
} from 'react-native';

// Get screen dimensions for responsive design
const { width } = Dimensions.get('window');
const scale = width / 375; // base screen width
const normalize = (size: number) => Math.round(PixelRatio.roundToNearestPixel(size * scale));

// Sample message structure
const initialMessages = [
  {
    id: '1',
    alert: 'Weather Alert 1',
    para: 'No message alert here..........',
  },
];

type NotificationProps = {
  newNotification?: string;
};

const NotificationMessage: React.FC<NotificationProps> = ({ newNotification }) => {
  const [messages, setMessages] = React.useState(initialMessages);

  React.useEffect(() => {
    if (newNotification) {
      const newMessage = {
        id: Math.random().toString(),
        alert: 'New Plantation Instruction',
        para: newNotification,
      };
      setMessages((prevMessages) => [newMessage, ...prevMessages]);
    }
  }, [newNotification]);

  const renderItem = ({ item }: { item: typeof initialMessages[0] }) => (
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
    width,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  container: {
    backgroundColor: '#F0F8FF',
    borderRadius: normalize(20),
    padding: normalize(20),
    margin: normalize(10),
    borderWidth: 1,
    borderColor: 'green',
    width: width - normalize(40),
    
    
  },
  alert: {
    backgroundColor: '#FFCF31',
    color: '#fff',
    fontWeight: 'bold',
    borderRadius: normalize(15),
    paddingVertical: normalize(5),
    paddingHorizontal: normalize(10),
    alignSelf: 'flex-start',
    marginBottom: normalize(10),
  },
  para: {
    fontSize: normalize(14),
    color: '#333',
    opacity: 0.7,
    marginBottom: normalize(20),
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  icon: {
    width: normalize(24),
    height: normalize(24),
    tintColor: 'green',
    // backgroundColor: '#20C58D',
    padding: normalize(8),
    borderRadius: normalize(8),
  },
  text: {
    color: '#fff',
    backgroundColor: '#20C58D',
    paddingVertical: normalize(8),
    paddingHorizontal: normalize(20),
    borderRadius: normalize(10),
    fontWeight: 'bold',
    overflow: 'hidden',
  },
});
