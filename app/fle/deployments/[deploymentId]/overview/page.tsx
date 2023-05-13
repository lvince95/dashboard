"use client";

import { faker } from "@faker-js/faker";
import { CalendarIcon } from "@heroicons/react/24/outline";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { DatePickerWithRange } from "@/components/ui/date-range-picker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Expected",
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Actual",
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const totalDuration = 10000;
const delayBetweenPoints = totalDuration / data.datasets[0].data.length;
const previousY = (ctx: any) =>
  ctx.index === 0
    ? ctx.chart.scales.y.getPixelForValue(100)
    : ctx.chart
        .getDatasetMeta(ctx.datasetIndex)
        .data[ctx.index - 1].getProps(["y"], true).y;
const animations = {
  x: {
    type: "number",
    easing: "linear",
    duration: delayBetweenPoints,
    from: NaN, // the point is initially skipped
    delay(ctx: any) {
      if (ctx.type !== "data" || ctx.xStarted) {
        return 0;
      }
      ctx.xStarted = true;
      return ctx.index * delayBetweenPoints;
    },
  },
  y: {
    type: "number",
    easing: "linear",
    duration: delayBetweenPoints,
    from: previousY,
    delay(ctx: any) {
      if (ctx.type !== "data" || ctx.yStarted) {
        return 0;
      }
      ctx.yStarted = true;
      return ctx.index * delayBetweenPoints;
    },
  },
};

export const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        color: "#94a3b8",
      },
    },
    title: {
      display: true,
      text: "Damage over Time",
      color: "#94a3b8",
    },
  },
  scales: {
    y: {
      grid: {
        color: "#374151",
      },
      ticks: { color: "#94a3b8", beginAtZero: true },
    },
    x: {
      grid: {
        color: "#374151",
      },
      ticks: { color: "#94a3b8", beginAtZero: true },
    },
  },
};

type Props = {
  params: { deploymentId: string };
};

export default function DashboardOverviewPage({ params }: Props) {
  return (
    <>
      <div className="border-t border-white/10 pt-11">
        <div className="flex items-center justify-between">
          <h2 className="px-4 text-base font-semibold leading-7 text-white sm:px-6 lg:px-8">
            Damage over Time
          </h2>
          <DatePickerWithRange className="mr-6" />
        </div>
        <div className="relative mt-8 h-[60vh] border-y border-white/10 bg-gray-700/10 p-8">
          <Line options={options} data={data} />
        </div>
      </div>
    </>
  );
}
