
import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

const scale = width / 375; // Base screen width for scaling
const normalize = (size : any) => Math.round(PixelRatio.roundToNearestPixel(size * scale));

const NotificationName = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
    </View>
  );
};

export default NotificationName;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom:40,
  },
  header: {
    fontSize: normalize(24),
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: height * 0.07, // 10% from the top
    
  },
});
