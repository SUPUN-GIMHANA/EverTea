import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { GrowthRecord } from '../types/index';

interface PreviousDetailsProps {
  details: GrowthRecord[];
  status: string;
}

export default function PreviousDetails({ details, status }: PreviousDetailsProps) {
  return (
    <View style={[styles.container,
      { backgroundColor: status === "Good" ? "#D4FEE7" : '#FEEFD4' }
    ]}>
      <Text style={styles.title}>Previous details</Text>
      <View style={styles.indicators}>
        {[1, 2, 3].map(i => (
          <View
            key={i}
            style={[
              styles.indicator,
              { backgroundColor: i === 1 ? '#4caf50' : i === 2 ? '#ff9800' : '#f44336' }
            ]}
          />
        ))}
      </View>
      {details.map((record, index) => (
        <View key={index} style={styles.record}>
          <Text style={styles.date}>{record.date}</Text>
          <Text style={[
            styles.status,
            { color: record.status === 'Good' ? '#2e7d32' : '#f4511e' }
          ]}>
            {record.status}
          </Text>
          <Text style={styles.growth}>{record.growth}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff9f0',
    borderRadius: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2d3748',
    marginBottom: 8,
  },
  indicators: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 4,
  },
  record: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  date: {
    fontSize: 14,
    color: '#718096',
  },
  status: {
    fontSize: 14,
    fontWeight: '500',
  },
  growth: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2d3748',
  },
});
