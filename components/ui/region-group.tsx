"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

const projects = [
  {
    name: "All",
    initials: "ALL",
    href: "#",
    members: 46,
    bgColor: "bg-pink-600",
  },
  {
    name: "Asia",
    initials: "AS",
    href: "#",
    members: 12,
    bgColor: "bg-purple-600",
  },
  {
    name: "Europe",
    initials: "EU",
    href: "#",
    members: 16,
    bgColor: "bg-yellow-500",
  },
  {
    name: "North America",
    initials: "NA",
    href: "#",
    members: 8,
    bgColor: "bg-green-500",
  },
  {
    name: "Taiwan",
    initials: "TW",
    href: "#",
    members: 4,
    bgColor: "bg-blue-500",
  },
  {
    name: "Japan",
    initials: "JP",
    href: "#",
    members: 6,
    bgColor: "bg-rose-600",
  },
];

export const RegionGroup = () => {
  const [region, setRegion] = useState(0);

  const handleSetRegion = (index: number) => {
    setRegion(index);
  };

  return (
    <div className="border-t border-white/10 pt-4">
      <ul
        role="list"
        className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6"
      >
        {projects.map((project, index) => (
          <li
            key={project.name}
            className="col-span-1 flex cursor-pointer rounded-md shadow-sm"
            onClick={() => handleSetRegion(index)}
          >
            <div
              className={cn(
                project.bgColor,
                "flex w-16 shrink-0 items-center justify-center rounded-l-md border-y border-l border-white/5 text-sm font-medium text-white",
                index === region ? "border-gray-400" : "opacity-50"
              )}
            >
              {project.initials}
            </div>
            <div
              className={cn(
                "flex flex-1 items-center justify-between truncate rounded-r-md border-y border-r border-white/5 bg-gray-700/30",
                index === region ? "border-gray-400" : "opacity-50"
              )}
            >
              <div className="flex-1 truncate px-4 py-2 text-sm">
                <a
                  href={project.href}
                  className="truncate font-medium text-white"
                >
                  {project.name}
                </a>
                <p className="truncate text-gray-400">
                  {project.members} Deployments
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
