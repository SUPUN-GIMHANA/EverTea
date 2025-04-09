import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

const NavigationBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navItem}>
        <Image 
          source={require('./assets/home.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Image
          source={require('./assets/notification1.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Image
          source={require('./assets/heart.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Image
          source={require('./assets/wallet.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10, // Adds shadow on Android
    shadowColor: '#000', // Adds shadow on iOS
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    width: 28,
    height: 28,
    tintColor: '#8A8A8A',
  },
});

export default NavigationBar;
