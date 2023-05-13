"use client";

import React from "react";
import { faker } from "@faker-js/faker";
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      // text: "Energy Generated",
      // color: "#94a3b8",
      // font: {
      //   size: 16,
      // },
      // position: "top" as const,
      // align: "start" as const,
    },
  },
  scales: {
    y: {
      display: false,
    },
    x: {
      display: false,
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Energy",
      data: labels.map(() => faker.number.int({ min: 0, max: 50 })),
      borderColor: "rgb(60, 179, 113)",
      backgroundColor: "rgba(60, 179, 113, 0.3)",
    },
  ],
};

export function AreaChart() {
  return (
    <div className="h-64 w-full">
      <Line options={options} data={data} />
    </div>
  );
}
