"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { secondaryNavigation } from "@/config/constants";

type PageHeaderProps = {
  deploymentId: string;
};

export const PageHeader = ({ deploymentId }: PageHeaderProps) => {
  const pathname = usePathname();

  return (
    <nav className="flex overflow-x-auto border-b border-white/10 py-4">
      <ul
        role="list"
        className="flex min-w-full flex-none gap-x-6 px-4 text-sm font-semibold leading-6 text-gray-400 sm:px-6 lg:px-8"
      >
        {secondaryNavigation.map((item) => (
          <li key={item.name}>
            <Link
              href={`/fle/deployments/${deploymentId}/${item.name.toLowerCase()}`}
              className={
                pathname ===
                `/fle/deployments/${deploymentId}/${item.name.toLowerCase()}`
                  ? "text-indigo-400"
                  : ""
              }
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
