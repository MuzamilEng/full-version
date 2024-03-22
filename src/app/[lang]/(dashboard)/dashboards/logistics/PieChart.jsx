import React from 'react';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
// import { Bar, Line } from 'react-chartjs-2';
import {shipmentData} from './data'
import { data } from './data'; // Import the provided data
import Chart from 'react-apexcharts';
import  { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
export const PieChart = () => {
  // Extracting labels and chart data from the provided data
  const categories = Object.keys(data[0]); // Extracting category names
  const chartData = data.map(item => Object.values(item)); // Extracting values for each category

  const backgroundColors = ['rgb(40, 199, 111)', 'rgba(40, 199, 111, 0.16)', 'rgba(40, 199, 111, 0.5)', 'rgba(40, 199, 111, 0.7)']; // Define colors for the chart

  const chartDataObject = {
    labels: categories,
    datasets: [
      {
        data: chartData[0], // Assuming the data for the first entry in data array
        backgroundColor: backgroundColors,
        hoverBackgroundColor: backgroundColors,
        borderWidth: 2 // Set the width of the edges
      }
    ]
  };

  const chartOptions = {
    maintainAspectRatio: false, // Set to false to allow custom width and height
    responsive: true, // Allow chart to be responsive
   
    title: {
      display: true,
      text: 'Issues Distribution' // Add a title to the chart
    },
    elements: {
      line: {
        tension: 0, // Set tension to 0 to remove lines
        borderWidth: 0 // Set borderWidth to 0 to remove lines
      },
      point: {
        radius: 2, // Set radius to control the size of dots
        hoverRadius: 4 // Set hoverRadius to control the size of dots on hover
      }
    },
    plugins: {
      doughnutValue: {
        formatter: (value) => {
          return value.toFixed(2); // Format data number to fixed 2 decimal places
        }
      }
    }
  };

  // Register plugin to draw value in the center of the donut chart
  const plugins = [{
    beforeDraw: function(chart) {
      const ctx = chart.ctx;
      const canvas = chart.canvas;
      const width = chart.width;
      const height = chart.height;

      ctx.restore();
      const fontSize = (height / 114).toFixed(2);
      ctx.font = fontSize + "em sans-serif";
      ctx.textBaseline = "middle";

      const text = chart.data.datasets[0].data[0].toFixed(2); // Use the first data value
      const textX = Math.round((width - ctx.measureText(text).width) / 2);
      const textY = height / 2;

      ctx.fillText(text, textX, textY);
      ctx.save();
    }
  }];

  return (
    <div className="chart-container" style={{ width: '400px', height: '400px' }}>
      <Doughnut data={chartDataObject} options={chartOptions} plugins={plugins} />
    </div>
  );
};





// Assuming shipmentData is imported

export const BarChart = () => {
  const [options] = useState({
    chart: {
      height: 350,
      type: 'line',
      stacked: false
    },
    stroke: {
      width: [0, 4]
    },
    title: {
      text: 'Monthly Shipments and Deliveries'
    },
    dataLabels: {
      enabled: false,
      enabledOnSeries: [1]
    },
    labels: shipmentData.map(item => item.month),
    xaxis: {
      type: 'category'
    },
    yaxis: [
      {
        title: {
          text: 'Shipments'
        }
      },
      {
        opposite: true,
        title: {
          text: 'Deliveries'
        }
      }
    ],
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (val, { seriesIndex }) {
          return seriesIndex === 0 ? val + ' shipments' : val + ' deliveries';
        }
      }
    },
    colors: ['#ff9f43', '#007bff'], // Set colors for shipments and deliveries series
    plotOptions: {
      bar: {
        columnWidth: '50%',
        clip: true // Clip the edges of the bars
      }
    }
  });

  const [series] = useState([
    {
      name: 'Shipments',
      type: 'column',
      data: shipmentData.map(item => item.shipments)
    },
    {
      name: 'Deliveries',
      type: 'line',
      data: shipmentData.map(item => item.deliveries)
    }
  ]);

  return (
    <Chart options={options} series={series} type="line" height={350} />
  );
};
