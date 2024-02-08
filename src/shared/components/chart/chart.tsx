import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from 'chart.js';
import { ComponentPropsWithoutRef } from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

type LineProps = ComponentPropsWithoutRef<typeof Line>;

export interface ChartProps extends Omit<LineProps, 'data'> {
  displayData: number[][];
  data?: LineProps['data'];
  labelText?: string;
}

const Chart = (props: ChartProps) => {
  const { options, displayData = [[], []], labelText = '月' } = props;

  const labels = [
    `6${labelText}`,
    `7${labelText}`,
    `8${labelText}`,
    `9${labelText}`,
    `0${labelText}`,
    `1${labelText}`,
    `2${labelText}`,
    `1${labelText}`,
    `2${labelText}`,
    `3${labelText}`,
    `4${labelText}`,
    `5${labelText}`,
  ];

  const chartData: ChartProps['data'] = {
    labels,
    datasets: [
      {
        data: displayData[0]?.slice(0, labels.length),
        borderColor: '#8FE9D0',
        backgroundColor: '#8FE9D0',
      },
      {
        data: displayData[1]?.slice(0, labels.length),
        borderColor: '#FFCC21',
        backgroundColor: '#FFCC21',
      },
    ],
  };

  const chartOptions: ChartProps['options'] = {
    responsive: true,
    ...options,
  };

  return <Line options={chartOptions} data={chartData} />;
};

export { Chart };
