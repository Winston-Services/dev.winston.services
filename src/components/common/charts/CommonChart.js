import React from 'react';

import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';

const CommonChart = ({ series, otherData, height, type }) => {
  const options = {
    legend: {
      show: true,
      position: 'bottom',
    },
    ...otherData,
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type={type}
      height={height}
    />
  );
};

CommonChart.propTypes = {
  height: PropTypes.any,
  otherData: PropTypes.any,
  series: PropTypes.any,
  type: PropTypes.any,
};

export default CommonChart;
