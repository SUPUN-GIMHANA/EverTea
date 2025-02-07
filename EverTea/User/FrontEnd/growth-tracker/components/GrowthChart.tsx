import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

interface GrowthChartProps {
  data: number[];
  status: 'Good' | 'Warning';
}

export default function GrowthChart({ data, status }: GrowthChartProps) {
  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: () => status === 'Good' ? '#4caf50' : '#ff7043',
    strokeWidth: 2,
    decimalPlaces: 0,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Growth history</Text>
      <LineChart
        data={{
          labels: ['JAN', 'DEC'],
          datasets: [{ data }]
        }}
        width={Dimensions.get('window').width - 64}
        height={180}
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
      />
      <View style={[
        styles.actionContainer,
        { backgroundColor: status === 'Good' ? '#e8f5e9' : '#ffcdd2' }
      ]}>
        <Text style={styles.actionText}>
          {status === 'Good' ? 'No action needed' : 'Action needed'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2d3748',
    marginBottom: 16,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  actionContainer: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '500',
  },
});