import React from "react";

const SkeletonCard: React.FC<
  { skeletonClassName?: string } & React.InputHTMLAttributes<HTMLDivElement>
> = ({ skeletonClassName, ...rest }) => {
  return (
    <div
      {...rest}
      className={`w-full h-80 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700 ${skeletonClassName}`}
    />
  );
};

export default SkeletonCard;
