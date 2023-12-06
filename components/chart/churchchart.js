// components/ChurchChart.js
"use client";   
import { useEffect } from 'react';
import Chart from 'chart.js/auto';
import churchData from './churchData';

const ChurchChart = () => {
  useEffect(() => {
    const ctx = document.getElementById('churchChart').getContext('2d');

    const churchGrowthData = churchData.churchGrowth;
    const churchAppData = churchData.ourIncome;

    const years = churchGrowthData.map((data) => data.year);
    const growthCounts = churchGrowthData.map((data) => data.count);
    const appCounts = churchAppData.map((data) => data.count);

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: years,
        datasets: [
          {
            label: 'Church Growth',
            data: growthCounts,
            borderColor: 'blue',
            backgroundColor: 'rgba(0, 0, 255, 0.1)',
            borderWidth: 2,
            fill: true,
          },
          {
            label: 'Churches on App',
            data: appCounts,
            borderColor: 'green',
            backgroundColor: 'rgba(0, 255, 0, 0.1)',
            borderWidth: 2,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);

  return <canvas id="churchChart" width={400} height={300} />;
};

export default ChurchChart;
