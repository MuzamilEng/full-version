import React from 'react';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import { Bar, Line } from 'react-chartjs-2';
import {shipmentData} from './data'
import { data } from './data'; // Import the provided data
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Rectangle } from 'recharts';
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


export  const BarChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" shape={<Rectangle fill="pink" stroke="blue" />} />
        <Bar dataKey="uv" fill="#82ca9d" shape={<Rectangle fill="gold" stroke="purple" />} />
      </BarChart>
    </ResponsiveContainer>
  );
};
