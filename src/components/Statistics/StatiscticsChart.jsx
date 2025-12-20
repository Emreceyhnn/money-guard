import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function StatisticChart({ data = [], categoryColors = {} }) {
  if (!data.length) return null;

  const chartData = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        data: data.map((item) => Math.abs(item.total)), // ✅
        backgroundColor: data.map(
          (item) => categoryColors[item.name]?.main || "#999"
        ),
        borderWidth: 0,
        hoverOffset: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "70%",
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) =>
            new Intl.NumberFormat("tr-TR").format(context.raw),
        },
      },
    },
  };

  return <Doughnut data={chartData} options={options} />;
}
