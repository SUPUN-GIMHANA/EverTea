import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GrowthTracker = () => {
  return (
    <View style={styles.trackerContainer}>
      <Text style={styles.trackerTitle}>Growth Tracker</Text>
      {/* Add your growth tracker UI here */}
    </View>
  );
};

const styles = StyleSheet.create({
  trackerContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 16,
  },
  trackerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default GrowthTracker;