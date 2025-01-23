import React from "react";

import CommonChart from "./CommonChart";

const PieChart = ({
  series = [300000000, 198000000, 2500000, 1000000, 120000000, 15000000],
  labels = ["ETH", "BSC", "POLY", "ARB", "GNO", "One"]
}) => {
  return (
    <CommonChart
      series={series}
      height={"420px"}
      type="pie"
      otherData={{
        labels,
        dataLabels: {
          enabled: true,
          formatter: function(val, { seriesIndex, dataPointIndex, w }) {
            return w.config.series[seriesIndex];
          }
        }
      }}
    />
  );
};

export default PieChart;
