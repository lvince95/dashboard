import { cn } from "@/lib/utils";

function SkeletonBase({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-gray-700/30", className)}
      {...props}
    />
  );
}

const Skeleton = () => {
  return (
    <div className="px-4 pt-11">
      <div className="flex items-center space-x-4">
        <SkeletonBase className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <SkeletonBase className="h-4 w-[250px]" />
          <SkeletonBase className="h-4 w-[200px]" />
        </div>
      </div>
    </div>
  );
};

export { Skeleton };
