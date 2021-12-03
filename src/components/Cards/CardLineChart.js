import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
  datasets: [
    {
      label: 'Visitas',
      data: [12, 19, 3, 5, 2, 3, 25],
      fill: false,
      backgroundColor: 'rgb(91, 85, 192)',
      borderColor: 'rgba(91, 85, 192, 0.5)',
      color: 'rgb(255, 255, 255)'
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const LineChart = () => (
  <div className='lg:w-6/12 w-full'>
    <h1 className='w-full text-center'>Actividad en la aplicación</h1>
    <Line data={data} options={options} />
  </div>
);

export default LineChart;