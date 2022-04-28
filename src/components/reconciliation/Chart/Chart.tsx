import React, { useEffect, useState } from 'react';
import './Chart.scss'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


const Chart = ({ dataTooltip }:any) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const options:any = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    radius: 0,
    scales: {
      x: {
        grid: {
          display: false,
          borderColor: '#686980',
        },
        ticks: {
          color: '#ffffff',
          display: false,
        }
      },
      y: {
        grid: {
          display: true,
          color: '#686980',
          borderColor: '#686980',
        },
        ticks: {
          color: '#ffffff',
          padding: 13,
        }
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          footer: footer,
        }
      },
      title: {
        display: false,
      },
    },
  };
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const data = {
    labels,
    datasets: [
      {
        label: 'available units',
        data: [25.0, 32.4, 22.2, 39.4, 34.2, 22.0, 23.2, 24.1, 20.0, 18.4, 19.1, 17.4],
        borderColor: '#BC2EFF',
        backgroundColor:'#BC2EFF'
      },
      {
        label: 'total units',
        data: [25.0, 32.4, 22.2, 39.4, 34.2, 22.0, 23.2, 24.1, 20.0, 18.4, 19.1, 17.4].reverse(),
        borderColor: '#FFFFFF',
      },
    ],
  };
  const plugins:any[] = [
    {
      afterDraw: (chart:any) => {
        // eslint-disable-next-line no-underscore-dangle
        if (chart.tooltip._active && chart.tooltip._active.length) {
          // find coordinates of tooltip
          const activePoint = chart.tooltip._active[0];
          const {ctx} = chart;
          const {x} = activePoint.element;
          const topY = chart.scales.y.top;
          const bottomY = chart.scales.y.bottom;

          // draw vertical line
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(x, topY);
          ctx.lineTo(x, bottomY);
          ctx.lineWidth = 1;
          ctx.setLineDash([5, 6]);
          ctx.stroke();
          ctx.restore();
        }
      },
    },
  ];

  const [chartData, setChartData] = useState('')
  function footer (tooltipItems:any) {
    setChartData(tooltipItems)
  }
  useEffect(() => {
    dataTooltip(chartData)
  },[chartData])

  return (
    <div>
      <Line options={options} data={data}  plugins={plugins}/>
    </div>
  );
};

export default Chart;