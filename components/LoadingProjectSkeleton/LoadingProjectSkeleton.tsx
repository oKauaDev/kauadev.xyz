import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingProjectSkeleton = () => {
  return (
    <div className="mt-[6.25rem] animation-left">
      <Skeleton className="w-full h-[30vw]" />
      <div className="mt-16 mb-20 flex gap-8 items-center justify-between sm:flex-col sm:items-start sm:justify-normal">
        <div className="w-full max-w-md">
          <Skeleton className="h-8" />
          <div className="grid grid-cols-4 gap-2 mt-4">
            <Skeleton className="h-8" />
            <Skeleton className="h-8" />
            <Skeleton className="h-8" />
            <Skeleton className="h-8" />
          </div>
        </div>
      </div>
      <Skeleton count={16} />
    </div>
  );
};

export default LoadingProjectSkeleton;
