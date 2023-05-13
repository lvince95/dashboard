import { deployments, stats } from "@/config/constants";
import { cn } from "@/lib/utils";
import { PageHeader } from "@/components/ui/page-header";

type DashboardLayoutProps = {
  params: { deploymentId: string };
  children: React.ReactNode;
};

export const metadata = {
  title: "FLE - Deployment",
  description: "Deployment Details",
};

export default function DashboardLayout({
  params,
  children,
}: DashboardLayoutProps) {
  const deployment = deployments.filter(
    (item) => item.id === params.deploymentId
  )[0];

  return (
    <>
      <header>
        <PageHeader deploymentId={params.deploymentId} />
        {/* Heading */}
        <div className="flex flex-col items-start justify-between gap-x-8 gap-y-4 bg-gray-700/10 p-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <div className="flex items-center gap-x-3">
              <div className="flex-none rounded-full bg-green-400/10 p-1 text-green-400">
                <div className="h-2 w-2 rounded-full bg-current" />
              </div>
              <h1 className="flex gap-x-3 text-base leading-7">
                <span className="font-semibold text-white">
                  {deployment.teamName}
                </span>
                <span className="text-gray-600">/</span>
                <span className="font-semibold text-white">
                  {deployment.id.toUpperCase()}
                </span>
              </h1>
            </div>
            <p className="mt-2 text-xs leading-6 text-gray-400">
              {`Deploys from ${deployment.teamName} via ${deployment.projectName}`}
            </p>
          </div>

          {deployment.environment === "Stopped" && (
            <div className="order-first ml-8 flex-none rounded-full bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400  ring-1 ring-inset ring-gray-400/20 sm:order-none">
              {deployment.environment}
            </div>
          )}

          {deployment.environment !== "Stopped" && (
            <div className="order-first ml-8 flex-none rounded-full bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400/30 sm:order-none">
              {deployment.environment}
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 bg-gray-700/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, statIdx) => {
            let value = "";

            if (stat.name === "Number of turbines") {
              value = deployment.turbineCount;
            }

            if (stat.name === "Average turbine lifespan") {
              value = deployment.turbineLifespan;
            }

            if (stat.name === "Number of windfarms") {
              value = deployment.windFarmCount;
            }

            if (stat.name === "Success rate") {
              value = deployment.successRate;
            }

            return (
              <div
                key={stat.name}
                className={cn(
                  statIdx % 2 === 1
                    ? "sm:border-l"
                    : statIdx === 2
                    ? "lg:border-l"
                    : "",
                  "border-t border-white/5 px-4 py-6 sm:px-6 lg:px-8"
                )}
              >
                <p className="text-sm font-medium leading-6 text-gray-400">
                  {stat.name}
                </p>
                <p className="mt-2 flex items-baseline gap-x-2">
                  <span className="text-4xl font-semibold tracking-tight text-white">
                    {value}
                  </span>
                  {stat.unit ? (
                    <span className="text-sm text-gray-400">{stat.unit}</span>
                  ) : null}
                </p>
              </div>
            );
          })}
        </div>
      </header>
      {children}
      <footer className="float-right px-4 py-11 text-sm leading-7 text-gray-400 sm:px-6 lg:px-8">
        Last updated: unknown seconds ago
      </footer>
    </>
  );
}
