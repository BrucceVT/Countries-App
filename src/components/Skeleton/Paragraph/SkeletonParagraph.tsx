import React from "react";

const SkeletonParagraph: React.FC<
  {
    skeletonClassName?: string;
  } & React.InputHTMLAttributes<HTMLParagraphElement>
> = ({ skeletonClassName, ...rest }) => {
  return (
    <p
      {...rest}
      className={`h-10 rounded-md animate-pulse bg-gray-200 dark:bg-gray-700 ${skeletonClassName}`}
    />
  );
};

export default SkeletonParagraph;
