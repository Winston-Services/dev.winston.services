import React from "react";

import CommonChart from "./CommonChart";

const PieChart = ({
  series = [44, 55, 13, 43, 22, 33],
  labels = ["Team A", "Team B", "Team C", "Team D", "Team E", "Team F"]
}) => {
  return (
    <CommonChart
      series={series}
      height={"450px"}
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
