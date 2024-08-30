import React from "react";

const Select: React.FC<
  {
    selectClassName?: string;
    containerClassName?: string;
  } & React.SelectHTMLAttributes<HTMLSelectElement>
> = ({ selectClassName, containerClassName, ...rest }) => {
  return (
    // <div
    //   className={`p-4 shadow-sm rounded-lg bg-white dark:bg-[#2B3743] ${containerClassName}`}
    // >
    <select
      {...rest}
      className={`p-4 border-r-[16px] border-transparent shadow-sm rounded-lg bg-white focus:border-transparent focus:ring-0 ${selectClassName} dark:bg-[#2B3743]`}
    />
    // </div>
  );
};

export { Select };
