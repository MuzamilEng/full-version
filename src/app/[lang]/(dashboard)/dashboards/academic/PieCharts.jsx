import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export const ApexChart = () => {
  const series = [4, 6, 3, 8, 5]; // Assuming each value represents hours

  const options = {
    chart: {
      type: 'donut'
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }],
    colors: ['#a9e9c5', '#22a95e', '#24b364', '#28c76f', '#7edd9e'], // Specify custom colors
    dataLabels: {
      enabled: false // Disable data labels
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: false // Hide the default labels
          }
        }
      }
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: (value) => {
          return value + ' hours'; // Display the value with 'hours' suffix on hover
        }
      }
    }
  };

  return (
    <div>
      <div id="chart" style={{ width: '250px' }}>
        <ReactApexChart options={options} series={series} type="donut" />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};



export const ApexBarChart = () => {
  const data = [
    {
      uiDesign: '20%',
    },
    {
      uxDesign: '30%',
    },
    {
      Music: '50%',
    },
    {
      Animation: '100%'
    },
    {
      React: "30%"
    },
    {
      seo: "50%"
    }
  ];

  const [chartData] = useState({
    series: [{
      data: data.map(item => parseFloat(Object.values(item)))
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: true
      },
      xaxis: {
        categories: Object.keys(data), // Extracting keys from the first item in data
        labels: {
          style: {
            colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A'],
          }
        }
      },
      theme: {
        palette: 'palette2' // Customize the palette as per your choice
      }
    }
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};
