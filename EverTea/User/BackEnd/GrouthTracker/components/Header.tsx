import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.time}>9:41</Text>
      <Text style={styles.battery}>96%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#f5f5f5',
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  battery: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Header;