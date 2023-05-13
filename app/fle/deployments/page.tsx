import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

import { deployments } from "@/config/constants";
import { cn } from "@/lib/utils";
import { Dropdown } from "@/components/ui/dropdown";
import { ActivityFeed } from "@/components/activity-feed";

export default function HomePage() {
  return (
    <>
      <main className="lg:pr-96">
        <header className="flex items-center justify-between border-b border-white/5 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
          <h1 className="text-base font-semibold leading-7 text-white">
            Deployments
          </h1>
          <Dropdown />
        </header>
        <ul role="list" className="divide-y divide-white/5">
          {deployments.map((deployment) => (
            <li
              key={deployment.id}
              className="relative flex items-center space-x-4 px-4 py-4 sm:px-6 lg:px-8"
            >
              <div className="min-w-0 flex-auto">
                <div className="flex items-center gap-x-3">
                  <div
                    className={cn(
                      deployment.environment === "Stopped"
                        ? "bg-rose-400/10 text-rose-400"
                        : "bg-green-400/10 text-green-400",
                      "flex-none rounded-full p-1"
                    )}
                  >
                    <div className="h-2 w-2 rounded-full bg-current" />
                  </div>
                  <h2 className="min-w-0 text-sm font-semibold leading-6 text-white">
                    <Link href={deployment.href} className="flex gap-x-2">
                      <span className="truncate">{deployment.teamName}</span>
                      <span className="text-gray-400">/</span>
                      <span className="whitespace-nowrap">
                        {deployment.projectName}
                      </span>
                      <span className="absolute inset-0" />
                    </Link>
                  </h2>
                </div>
                <div className="mt-3 flex items-center gap-x-2.5 text-xs leading-5 text-gray-400">
                  <p className="truncate">{deployment.description}</p>
                  <svg
                    viewBox="0 0 2 2"
                    className="h-0.5 w-0.5 flex-none fill-gray-300"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <p className="whitespace-nowrap">{deployment.statusText}</p>
                </div>
              </div>

              {deployment.environment === "Stopped" && (
                <div
                  className={cn(
                    "bg-gray-400/10 text-gray-400 ring-gray-400/20",
                    "flex-none rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset"
                  )}
                >
                  {deployment.environment}
                </div>
              )}
              {deployment.environment !== "Stopped" && (
                <div
                  className={cn(
                    "bg-indigo-400/10 text-indigo-400 ring-indigo-400/30",
                    "flex-none rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset"
                  )}
                >
                  {deployment.environment}
                </div>
              )}

              <ChevronRightIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </li>
          ))}
        </ul>
      </main>
      <ActivityFeed />
    </>
  );
}
