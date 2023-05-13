import Image from "next/image";

import { activityItems } from "@/config/constants";

export default function RecentActivity() {
  return (
    <ul role="list" className="divide-y divide-white/5">
      {activityItems.slice(0, 4).map((item) => (
        <li key={item.commit} className="py-4">
          <div className="flex items-center gap-x-3">
            <Image
              src={item.user.imageUrl}
              alt=""
              className="flex-none rounded-full bg-gray-800"
              height={24}
              width={24}
            />
            <h3 className="flex-auto truncate text-sm font-semibold leading-6 text-gray-300">
              {item.user.name}
            </h3>
            <time
              dateTime={item.dateTime}
              className="flex-none text-xs text-gray-500"
            >
              {item.date}
            </time>
          </div>
          <p className="mt-3 truncate text-sm text-gray-500">
            Pushed to <span className="text-gray-400">{item.projectName}</span>{" "}
            (<span className="font-mono text-gray-400">{item.commit}</span> on{" "}
            <span className="text-gray-400">{item.branch}</span>)
          </p>
        </li>
      ))}
    </ul>
  );
}
