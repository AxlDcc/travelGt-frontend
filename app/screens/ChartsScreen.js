import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";

import colors from "../config/colors";
import Screen from "../components/Screen";

function chartsScreen(props) {
  const screenWidth = Dimensions.get("window").width;
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: colors.primary,
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: colors.secondary,
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => colors.primary,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <Screen>
      <Text>Bezier Line Chart</Text>
      <BarChart
        data={data}
        width={screenWidth}
        height={220}
        yAxisLabel="$"
        chartConfig={chartConfig}
        verticalLabelRotation={30}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default chartsScreen;
