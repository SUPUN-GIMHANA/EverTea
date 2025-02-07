import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { PlantData } from '../types';
import GrowthChart from './GrowthChart';
import PreviousDetails from './PreviousDetails';

const SAMPLE_DATA: PlantData = {
  id: '01',
  name: 'Plantation 01',
  height: 25,
  status: 'Good',
  growthHistory: [5, 8, 12, 15, 18, 20, 22, 23, 24, 25],
  previousDetails: [
    { date: '2024-12-25', status: 'Good', growth: '+1 CM' },
    { date: '2024-12-25', status: 'Good', growth: '+1.4 CM' },
    { date: '2024-12-25', status: 'Good', growth: '+1 CM' },
  ],
};

export default function PlantCard() {
  const { status, height, name } = SAMPLE_DATA;

  return (
    <LinearGradient
    colors={status === 'Good' ? ['#D3FFF0', '#DFF78E'] : ['#fff3e0', '#f8d7d7']}
    style={styles.container}
    >
      <View style={styles.header}>
        <View style={styles.plantVisual}>
          <View style={styles.plantContainer}>
            <Image 
              source={require('../assets/plant.png')}
              style={styles.plantImage}
              resizeMode="contain"
            />
            <View style={styles.soilLayers}>
              <View style={styles.grassLayer} />
              <View style={styles.soilLayer} />
              <View style={styles.subsoilLayer} />
            </View>
          </View>
          <Text style={styles.plantName}>{name}</Text>
        </View>
        <View style={styles.heightInfo}>
          <Text style={[styles.statusText, { color: status === 'Good' ? '#2e7d32' : '#f4511e' }]}>
            {status}
          </Text>
          <Text style={styles.heightLabel}>Height</Text>
          <Text style={styles.heightValue}>{height} CM</Text>
          <View style={styles.controls}>
            <View style={styles.controlButton}>
              <Text style={styles.controlText}>+</Text>
            </View>
            <View style={[styles.controlButton, styles.controlButtonMinus]}>
              <Text style={styles.controlText}>-</Text>
            </View>
          </View>
        </View>
      </View>
      <GrowthChart data={SAMPLE_DATA.growthHistory} status={status} />
      <PreviousDetails details={SAMPLE_DATA.previousDetails} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  header: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  plantVisual: {
    flex: 1,
  },
  plantContainer: {
    width: 120,
    height: 100,
    marginBottom: 8,
    position: 'relative',
  },
  plantImage: {
    width: '100%',
    height: '80%',
    position: 'absolute',
    bottom: 15,
    zIndex: 2,
  },
  soilLayers: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 30,
  },
  grassLayer: {
    height: 10,
    backgroundColor: '#90a955',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  soilLayer: {
    height: 10,
    backgroundColor: '#6b4423',
  },
  subsoilLayer: {
    height: 10,
    backgroundColor: '#8b5e34',
  },
  plantName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2d3748',
    backgroundColor: '#fff',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  heightInfo: {
    alignItems: 'flex-end',
  },
  statusText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  heightLabel: {
    fontSize: 14,
    color: '#718096',
  },
  heightValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2d3748',
    marginBottom: 8,
  },
  controls: {
    flexDirection: 'row',
    gap: 8,
  },
  controlButton: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  controlButtonMinus: {
    backgroundColor: '#f8f9fa',
  },
  controlText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#4a5568',
  },
});
