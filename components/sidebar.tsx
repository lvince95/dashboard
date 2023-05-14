"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation, teams } from "@/config/constants";
import { cn } from "@/lib/utils";

import { OrstedIcon } from "./icons/OrstedIcon";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-72 xl:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-black/10 px-6 ring-1 ring-white/5">
        <Link href="/fle/overview" className="flex h-16 shrink-0 items-center">
          <OrstedIcon className="h-8 w-auto" />
        </Link>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => {
                  let isActiveLink = pathname === item.href;

                  if (
                    !isActiveLink &&
                    pathname.includes("deployments") &&
                    item.name === "Deployments"
                  ) {
                    isActiveLink = true;
                  }

                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={cn(
                          isActiveLink
                            ? "bg-gray-800 text-white"
                            : "text-gray-400 hover:bg-gray-800 hover:text-white",
                          "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                        )}
                      >
                        <item.icon
                          className="h-6 w-6 shrink-0"
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li>
              <div className="text-xs font-semibold leading-6 text-gray-400">
                Your teams
              </div>
              <ul role="list" className="-mx-2 mt-2 space-y-1">
                {teams.map((team) => (
                  <li key={team.name}>
                    <a
                      href={team.href}
                      className={cn(
                        team.current
                          ? "bg-gray-800 text-white"
                          : "text-gray-400 hover:bg-gray-800 hover:text-white",
                        "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                      )}
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                        {team.initial}
                      </span>
                      <span className="truncate">{team.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="-mx-6 mt-auto">
              <a
                href="#"
                className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
              >
                <Image
                  className="h-8 w-8 rounded-full bg-gray-800"
                  src="/cat.webp"
                  alt=""
                  width={32}
                  height={32}
                />
                <span className="sr-only">Your profile</span>
                <span aria-hidden="true">Vincent Lim</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
