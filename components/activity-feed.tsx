import Image from "next/image";
import Link from "next/link";

import { activityItems } from "@/config/constants";

export const ActivityFeed = () => {
  return (
    <aside className="bg-black/10 lg:fixed lg:bottom-0 lg:right-0 lg:top-16 lg:w-96 lg:overflow-y-auto lg:border-l lg:border-white/5">
      <header className="flex items-center justify-between border-b border-white/5 p-4 sm:p-6 lg:px-8">
        <h2 className="text-base font-semibold leading-7 text-white">
          Activity feed
        </h2>
        <Link
          href="/fle/activity"
          className="text-sm font-semibold leading-6 text-indigo-400"
        >
          View all
        </Link>
      </header>
      <ul role="list" className="divide-y divide-white/5">
        {activityItems.map((item) => (
          <li key={item.commit} className="p-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-x-3">
              <Image
                src={item.user.imageUrl}
                alt=""
                className="flex-none rounded-full bg-gray-800"
                width={24}
                height={24}
              />
              <h3 className="flex-auto truncate text-sm font-semibold leading-6 text-white">
                {item.user.name}
              </h3>
              <time
                dateTime={item.dateTime}
                className="flex-none text-xs text-gray-600"
              >
                {item.date}
              </time>
            </div>
            <p className="mt-3 truncate text-sm text-gray-500">
              Carried out{" "}
              <span className="text-gray-400">{item.projectName}</span> (
              <span className="font-mono text-gray-400">{item.commit}</span> in{" "}
              <span className="text-gray-400">{item.branch}</span>)
            </p>
          </li>
        ))}
      </ul>
    </aside>
  );
};
