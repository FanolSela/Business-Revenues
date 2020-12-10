import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const Charts = (props) => {

  const [chartData, setChartData] = useState({})

  const chart1 = () => {
    setChartData({
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', "Dec"],
      datasets: [
        {
          label: 'Sales of 2020(M)',
          data: props.data
        }
      ]
    })
  }

  useEffect(() => {
    chart1()
  }, [])

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default Charts;