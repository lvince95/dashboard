import {
  ArrowRightOnRectangleIcon,
  ChartBarSquareIcon,
  Cog6ToothIcon,
  FolderIcon,
  ServerIcon,
  SignalIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export const navigation = [
  { name: "Overview", href: "/fle/overview", icon: FolderIcon },
  { name: "Deployments", href: "/fle/deployments/", icon: ServerIcon },
  { name: "Activity", href: "/fle/activity", icon: SignalIcon },
  { name: "Users", href: "/fle/users", icon: UsersIcon },
  { name: "Settings", href: "/fle/settings", icon: Cog6ToothIcon },
];
export const teams = [
  { id: 1, name: "FLE", href: "/overview", initial: "F", current: false },
];

export const stats = [
  { name: "Number of turbines", value: "405" },
  { name: "Average turbine lifespan", value: "3.65", unit: "years" },
  { name: "Number of windfarms", value: "3" },
  { name: "Success rate", value: "98.5%" },
];

export const secondaryNavigation = [
  { name: "Overview", href: "/fle/deployments/wf-1/overview" },
  { name: "Activity", href: "/fle/deployments/wf-1/activity" },
];

export const activityItems = [
  {
    user: {
      name: "Vincent Lim",
      imageUrl: "/cat.webp",
    },
    projectName: "wf-1-maint",
    deploymentId: "wf-1",
    commit: "WF-1",
    branch: "Asia",
    status: "Completed",
    damage: "1.7",
    date: "45 minutes ago",
    dateTime: "2023-01-23T11:00",
  },

  {
    user: {
      name: "Vincent Lim",
      imageUrl: "/cat.webp",
    },
    projectName: "wf-1-maint",
    deploymentId: "wf-1",
    commit: "WF-1",
    branch: "Asia",
    status: "Completed",
    damage: "0.5",
    date: "3 days ago",
    dateTime: "2023-01-23T11:00",
  },

  {
    user: {
      name: "Vincent Lim",
      imageUrl: "/cat.webp",
    },
    projectName: "wf-2-maint",
    deploymentId: "wf-2",
    commit: "WF-2",
    branch: "Europe",
    status: "Completed",
    damage: "5.6",
    date: "5 days ago",
    dateTime: "2023-01-23T11:00",
  },
  {
    user: {
      name: "Vincent Lim",
      imageUrl: "/cat.webp",
    },
    projectName: "wf-1-maint",
    deploymentId: "wf-1",
    commit: "WF-1",
    branch: "Asia",
    status: "Completed",
    damage: "0.9",
    date: "7 days ago",
    dateTime: "2023-01-23T11:00",
  },
  {
    user: {
      name: "Vincent Lim",
      imageUrl: "/cat.webp",
    },
    projectName: "wf-3-maint",
    deploymentId: "wf-3",
    commit: "WF-3",
    branch: "North America",
    status: "Completed",
    damage: "1.2",
    date: "15 days ago",
    dateTime: "2023-01-23T11:00",
  },
  {
    user: {
      name: "Vincent Lim",
      imageUrl: "/cat.webp",
    },
    projectName: "wf-1-maint",
    deploymentId: "wf-1",
    commit: "WF-1",
    branch: "Asia",
    status: "Completed",
    damage: "2.5",
    date: "20 days ago",
    dateTime: "2023-01-23T11:00",
  },
];

export const statuses = {
  Completed: "text-green-400 bg-green-400/10",
  Error: "text-rose-400 bg-rose-400/10",
};

export const environments = {
  Preview: "text-gray-400 bg-gray-400/10 ring-gray-400/20",
  Production: "text-indigo-400 bg-indigo-400/10 ring-indigo-400/30",
};

export const deployments = [
  {
    id: "wf-1",
    href: "/fle/deployments/wf-1/overview",
    projectName: "WF-AS",
    teamName: "Asia",
    status: "online",
    statusText: "Updated 45m ago",
    description: "Deploys from Asia",
    environment: "Running",
    turbineCount: "169",
    turbineLifespan: "31",
    windFarmCount: "23",
    successRate: "56%",
  },
  {
    id: "wf-2",
    href: "/fle/deployments/wf-2/overview",
    projectName: "WF-EU",
    teamName: "Europe",
    status: "online",
    statusText: "Updated 5d ago",
    description: "Deploys from Europe",
    environment: "Running",
    turbineCount: "606",
    turbineLifespan: "44",
    windFarmCount: "51",
    successRate: "79%",
  },
  {
    id: "wf-3",
    href: "/fle/deployments/wf-3/overview",
    projectName: "WF-NA",
    teamName: "North America",
    status: "online",
    statusText: "Updated 15d ago",
    description: "Deploys from North America",
    environment: "Running",
    turbineCount: "420",
    turbineLifespan: "39",
    windFarmCount: "32",
    successRate: "90%",
  },
  {
    id: "wf-4",
    href: "/fle/deployments/wf-4/overview",
    projectName: "WF-TW",
    teamName: "Taiwan",
    status: "Offline",
    statusText: "Updated 20d ago",
    description: "Deploys from Taiwan",
    environment: "Stopped",
    turbineCount: "20",
    turbineLifespan: "16",
    windFarmCount: "1",
    successRate: "23%",
  },
  // More deployments...
];
