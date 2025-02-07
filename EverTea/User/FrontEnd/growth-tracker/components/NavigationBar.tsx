import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export function NavigationBar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tab}>
        <Feather name="home" size={24} color="#4a5568" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Feather name="bell" size={24} color="#4a5568" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Feather name="heart" size={24} color="#4a5568" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Feather name="settings" size={24} color="#4a5568" />
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