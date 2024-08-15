import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ChartOptions,
  TooltipItem,
} from 'chart.js';
import { format, parseISO } from 'date-fns';
import { InfoSubTitle, StyledChartContainer } from '../style';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

interface WeightChartProps {
  weightData: { date: string; weight: number }[];
}

export const WeightChart: React.FC<WeightChartProps> = ({ weightData }) => {
  const sortedData = [...weightData].reverse();
  const labels = sortedData.map(
    (data) => format(parseISO(data.date), 'MMM/yy') // Formata para 'Mês/Ano'
  );
  const weights = sortedData.map((data) => data.weight / 1000);

  const data = {
    labels,
    datasets: [
      {
        label: 'Peso (kg)',
        data: weights,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.1,
        pointRadius: 5,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: TooltipItem<'line'>) => {
            const value = tooltipItem.raw as number;
            return `Peso: ${value.toFixed(2)} kg`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: false,
        },
        ticks: {
          maxRotation: 45,
          minRotation: 0,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Peso (kg)',
        },
        ticks: {
          callback: (value: number | string) =>
            typeof value === 'number' ? value.toFixed(2) : value,
        },
        min: 0,
      },
    },
  };

  return (
    <StyledChartContainer>
      <InfoSubTitle>Evolução do Peso</InfoSubTitle>
      <Line data={data} options={options} />
    </StyledChartContainer>
  );
};

export default WeightChart;
