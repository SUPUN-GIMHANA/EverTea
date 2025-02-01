import React from 'react';
import { ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import Header from '@/components/Header';
import PlantInfo from '@/components/PlantInfo';
import UpcomingEvents from '@/components/UpcomingEvents';
import GrowthTracker from '@/components/GrowthTracker';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <PlantInfo />
        <UpcomingEvents />
        <GrowthTracker />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default App;