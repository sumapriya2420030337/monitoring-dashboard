import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function Charts({ history }) {
  if (!history.length) return null;

  const labels = history.map((h) => h.time);

  const cpuData = history.map(
    (h) => h.data.reduce((sum, s) => sum + s.cpu, 0) / h.data.length
  );

  const data = {
    labels,
    datasets: [
      {
        label: "CPU Trend",
        data: cpuData,
      },
    ],
  };

  return <Line data={data} />;
}

export default Charts;