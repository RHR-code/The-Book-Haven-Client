import React from "react";

const BookCardSkeleton = ({ ClassName }) => {
  return (
    <div className="rounded-2xl flex flex-col justify-between p-3 bg-secondary shadow-sm animate-pulse">
      {/* Image Skeleton */}
      <div className="bg-gray-300 rounded-2xl">
        <div
          className={`${ClassName} mb-1 w-full rounded-2xl py-2 bg-gray-400`}
          style={{ height: "200px" }}
        ></div>
      </div>

      {/* Content Skeleton */}
      <div className="px-5 flex flex-col gap-2 pb-5">
        {/* Title Skeleton */}
        <div className="h-7 bg-gray-300 rounded-lg w-3/4 mt-5"></div>

        {/* Genre Badges Skeleton */}
        <div className="flex gap-2 mt-2">
          <div className="h-6 bg-gray-300 rounded-full w-20"></div>
          <div className="h-6 bg-gray-300 rounded-full w-24"></div>
        </div>

        {/* Rating and Author Skeleton */}
        <div className="flex justify-between mt-2">
          <div className="h-5 bg-gray-300 rounded w-16"></div>
          <div className="h-5 bg-gray-300 rounded w-24"></div>
        </div>

        {/* Button Skeleton */}
        <div className="h-12 bg-gray-300 rounded-lg w-full mt-2"></div>
      </div>
    </div>
  );
};

export default BookCardSkeleton;
