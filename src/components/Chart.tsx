import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

interface Props {
  data: number[];
  lastRoll?: string;
  fullScreen?: boolean;
}

const DiceChart = ({ data }: Props) => {
  const chartData = {
    labels: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    datasets: [
      {
        label: "# of Dice Rolls",
        backgroundColor: "rgba(114,166,202,0.4)",
        borderColor: "rgba(114,166,202,.8)",
        data,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 1 },
      },
    },
    plugins: {
      legend: { display: true },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default DiceChart;
