import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export function NavigationBar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tab}>
        <Icon name="home" size={24} color="#4a5568" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Icon name="bell" size={24} color="#4a5568" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Icon name="heart" size={24} color="#4a5568" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Icon name="settings" size={24} color="#4a5568" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
