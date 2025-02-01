import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const UpcomingEvents = () => {
  return (
    <View style={styles.eventsContainer}>
      <Text style={styles.eventsTitle}>Upcoming events</Text>
      <View style={styles.event}>
        <Text style={styles.eventTitle}>Event001</Text>
        <Text style={styles.eventDescription}>
          Water Early in the Morning: Water the plants during the early morning hours to allow the soil to absorb moisture efficiently and reduce evaporation loss.
        </Text>
      </View>
      <TouchableOpacity style={styles.viewAllButton}>
        <Text style={styles.viewAllText}>View All Events</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  eventsContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 16,
  },
  eventsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  event: {
    marginBottom: 16,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  eventDescription: {
    fontSize: 14,
    color: '#555',
    marginTop: 8,
  },
  viewAllButton: {
    marginTop: 8,
    alignItems: 'center',
  },
  viewAllText: {
    color: '#007bff',
    fontSize: 16,
  },
});

export default UpcomingEvents;