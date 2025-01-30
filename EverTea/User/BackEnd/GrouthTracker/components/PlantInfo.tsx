import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlantInfo = () => {
  return (
    <View style={styles.plantInfo}>
      <Text style={styles.growthStatus}>Good growth</Text>
      <Text style={styles.plantAge}>8 month old</Text>
      <Text style={styles.plantation}>Plantation 01</Text>
      <Text style={styles.height}>Height: 20 cm</Text>
      <Text style={styles.plantedOn}>Planted on 12th Nov 2024</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  plantInfo: {
    padding: 16,
    backgroundColor: '#e0f7fa',
    borderRadius: 8,
    margin: 16,
  },
  growthStatus: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  plantAge: {
    fontSize: 18,
    color: '#555',
  },
  plantation: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  height: {
    fontSize: 16,
    color: '#555',
  },
  plantedOn: {
    fontSize: 16,
    color: '#555',
  },
});

export default PlantInfo;