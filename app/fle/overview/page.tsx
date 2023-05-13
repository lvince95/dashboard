import {
  GlobeAltIcon,
  GlobeAmericasIcon,
  GlobeAsiaAustraliaIcon,
  GlobeEuropeAfricaIcon,
} from "@heroicons/react/24/outline";

import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import RecentActivity from "@/components/ui/recent-activity";
import { RegionGroup } from "@/components/ui/region-group";
import { AreaChart } from "@/components/area-chart";
import { BarChart } from "@/components/bar-chart";
import { DoughnutChart } from "@/components/doughnut-chart";

const stats = [
  {
    name: "Revenue",
    value: "$40,505",
    change: "+4.75%",
    changeType: "positive",
  },
  {
    name: "Costs",
    value: "$1,200",
    change: "+54.02%",
    changeType: "negative",
  },
  {
    name: "Outstanding",
    value: "$2,450",
    change: "-1.39%",
    changeType: "positive",
  },
  {
    name: "Expenses",
    value: "$10,156",
    change: "+10.18%",
    changeType: "negative",
  },
];

export default function Page() {
  return (
    <>
      <RegionGroup />
      <dl className="mx-auto mt-4 grid grid-cols-1 gap-4 bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 rounded-md bg-gray-700/20 px-4 py-10 sm:px-6 xl:px-8"
          >
            <dt className="text-sm font-medium leading-6 text-gray-400">
              {stat.name}
            </dt>
            <dd
              className={cn(
                stat.changeType === "negative"
                  ? "text-rose-500"
                  : "text-green-500",
                "text-xs font-medium"
              )}
            >
              {stat.change}
            </dd>
            <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-300">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-5">
        <div className="col-span-1 flex rounded-md bg-gray-700/20 p-4 lg:col-span-3">
          <BarChart />
        </div>
        <div className="col-span-1 flex items-center rounded-md bg-gray-700/20 lg:col-span-2">
          <DoughnutChart />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* Energy Line Chart */}
        <div className="col-span-1 flex flex-col gap-4 rounded-md bg-gray-700/20 p-4">
          <h2 className="px-4 py-2 text-xl font-bold text-gray-400">
            Energy Generated
          </h2>
          <AreaChart />
          <div className="mt-4 flex justify-between px-2">
            <p className="text-sm font-medium leading-6 text-gray-300">
              Produced
            </p>
            <p className="text-sm font-medium leading-6 text-green-500">
              + 420 kJ
            </p>
          </div>
          <div className="flex justify-between px-2">
            <p className="text-sm font-medium leading-6 text-gray-300">Used</p>
            <p className="text-sm font-medium leading-6 text-rose-400">
              - 80 kJ
            </p>
          </div>
        </div>

        {/* 2nd col */}
        <div className="col-span-1 flex flex-col gap-4 rounded-md bg-gray-700/20 p-4">
          <h2 className="px-4 pt-2 text-xl font-bold text-gray-400">
            Wind Farm Health
          </h2>
          <p className="-mt-4 px-4 font-semibold text-gray-400/50">
            Average Health: 38%
          </p>
          <div className="mt-auto flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <GlobeEuropeAfricaIcon className="h-8 w-8 flex-none text-gray-400" />

                <div>
                  <p className="text-md px-4 font-semibold text-gray-300">
                    Europe
                  </p>
                  <p className="px-4 text-sm  text-gray-400/50">WF-EU</p>
                </div>
              </div>
              <div className="w-[50%]">
                <Progress className="bg-sky-400" value={65} />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <GlobeAsiaAustraliaIcon className="h-8 w-8 flex-none text-gray-400" />
                <div>
                  <p className="text-md px-4 font-semibold text-gray-300">
                    Asia
                  </p>
                  <p className="px-4 text-sm  text-gray-400/50">WF-AS</p>
                </div>
              </div>
              <div className="w-[50%]">
                <Progress className="bg-green-500" value={49} />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <GlobeAmericasIcon className="h-8 w-8 flex-none text-gray-400" />
                <div>
                  <p className="text-md px-4 font-semibold text-gray-300">
                    America
                  </p>
                  <p className="px-4 text-sm  text-gray-400/50">WF-NA</p>
                </div>
              </div>
              <div className="w-[50%]">
                <Progress className="bg-purple-500" value={38} />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <GlobeAltIcon className="h-8 w-8 flex-none text-gray-400" />
                <div>
                  <p className="text-md px-4 font-semibold text-gray-300">
                    Taiwan
                  </p>
                  <p className="px-4 text-sm  text-gray-400/50">WF-TW</p>
                </div>
              </div>
              <div className="w-[50%]">
                <Progress className="bg-indigo-400" value={18} />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <GlobeAltIcon className="h-8 w-8 flex-none text-gray-400" />
                <div>
                  <p className="text-md px-4 font-semibold text-gray-300">
                    Japan
                  </p>
                  <p className="px-4 text-sm  text-gray-400/50">WF-JP</p>
                </div>
              </div>
              <div className="w-[50%]">
                <Progress className="bg-yellow-500" value={13} />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <GlobeAltIcon className="h-8 w-8 flex-none text-gray-400" />
                <div>
                  <p className="text-md px-4 font-semibold text-gray-300">
                    Malaysia
                  </p>
                  <p className="px-4 text-sm  text-gray-400/50">WF-MY</p>
                </div>
              </div>
              <div className="w-[50%]">
                <Progress className="bg-rose-400" value={10} />
              </div>
            </div>
          </div>
        </div>
        {/* 3rd col */}
        <div className="col-span-1 flex flex-col gap-4 rounded-md bg-gray-700/20 p-4">
          <h2 className="px-4 pt-2 text-xl font-bold text-gray-400">
            Recent Activity
          </h2>
          <RecentActivity />
        </div>
      </div>
    </>
  );
}
