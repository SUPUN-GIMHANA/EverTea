import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import PlantCard from './components/PlantCard';
import { NavigationBar } from './components/NavigationBar';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <PlantCard />
      </View>
      <NavigationBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',  // Ensure SafeAreaView has a background color
  },
  content: {
    flex: 1,
    padding: 16,
  },
});
