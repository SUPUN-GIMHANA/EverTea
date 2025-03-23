import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import Svg, { Rect, Line, Circle, Text as SvgText } from "react-native-svg";
import LinearGradient from "react-native-linear-gradient";
import ActionModal from "./ActionModal";

interface GrowthChartProps {
  data: number[];
  status: string;
}

export default function GrowthChart({ data, status }: GrowthChartProps) {
  const CHART_WIDTH = Dimensions.get("window").width - 96;
  const CHART_HEIGHT = 150;
  const PADDING = 20;

  const [modalVisible, setModalVisible] = useState(false);
  
  const getBarProps = () => {
    const maxValue = Math.max(...data);
    const availableWidth = CHART_WIDTH - (PADDING * 3);
    const totalBars = data.length;
    const barWidth = availableWidth / totalBars;
    const actualBarWidth = barWidth * 0.6;
    
    return [...data].reverse().map((value, index) => {
      const height = (value / maxValue) * (CHART_HEIGHT - PADDING * 2);
      const x = PADDING + (index * barWidth) + (barWidth - actualBarWidth) / 1;
      const y = CHART_HEIGHT - PADDING - height;
      return { x, y, width: actualBarWidth, height };
    });
  };

  const bars = getBarProps();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={
          status === "Good" ? ["rgba(211, 255, 240, 0.35)", "rgba(223, 247, 142, 0.35)"]
          : ["rgba(255, 255, 211, 0.35)", "rgba(247, 183, 142, 0.35)"]
        }
        style={styles.gradientContainer}
      >
        <Text style={styles.title}>Growth history</Text>
        <View style={styles.chartContainer}>
          <Svg width={CHART_WIDTH} height={CHART_HEIGHT} style={styles.chart}>
            <Line x1={PADDING} y1={CHART_HEIGHT - PADDING} x2={CHART_WIDTH - PADDING} y2={CHART_HEIGHT - PADDING} stroke={status === "Good" ? "#20C58D" : "#FF6666"} strokeWidth="4" />
            {bars.map((bar, index) => (
              <Rect key={index} x={bar.x} y={bar.y} width={bar.width} height={bar.height} fill={status === "Good" ? "#20C58D" : "#FF6666"} rx={0} />
            ))}
            <Circle cx={PADDING} cy={CHART_HEIGHT - PADDING} r="4" fill="#fff" stroke={status === "Good" ? "#4caf50" : "#ff7043"} strokeWidth="1.5" />
            <Circle cx={CHART_WIDTH - PADDING} cy={CHART_HEIGHT - PADDING} r="4" fill="#fff" stroke={status === "Good" ? "#4caf50" : "#ff7043"} strokeWidth="1.5" />
            <SvgText x={PADDING} y={CHART_HEIGHT - 5} fontSize="12" fill="#666" textAnchor="middle">JAN</SvgText>
            <SvgText x={CHART_WIDTH - PADDING} y={CHART_HEIGHT - 5} fontSize="12" fill="#666" textAnchor="middle">DEC</SvgText>
          </Svg>
        </View>
        <TouchableOpacity
          style={[styles.actionContainer, { backgroundColor: status === "Good" ? "#DEF895" : "#FF6666" }]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={[styles.actionText, { color: status === "Good" ? "#697E2C" : "#fff" }]}>
            {status === "Good" ? "No action needed" : "Action needed"}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
      <ActionModal visible={modalVisible} status={status === "Good" ? "noAction" : "action"} onClose={() => setModalVisible(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    position: "relative",
    marginBottom: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: "400",
    color: "#2E2A2A",
    marginBottom: -20,
    marginTop: 30,
    paddingHorizontal: 26,
  },
  chart: {
    backgroundColor: "transparent",
  },
  chartContainer: {
    backgroundColor: "transparent",
    alignItems: "center",
  },
  actionContainer: {
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  actionText: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },
  gradientContainer: {
    borderRadius: 16,
    overflow: "hidden",
  },
});
