import React from "react";

const Input: React.FC<
  { inputClassName?: string } & React.InputHTMLAttributes<HTMLInputElement>
> = ({ inputClassName, ...rest }) => {
  
  return (
    <input
      {...rest}
      className={`w-full p-4 shadow-sm rounded-lg ${inputClassName} dark:bg-[#2B3743]`}
    />
  );
};

const InputWithIcon: React.FC<
  {
    icon: React.ReactNode;
    containerClassName?: string;
  } & React.InputHTMLAttributes<HTMLInputElement>
> = ({ icon, containerClassName, ...inputProps }) => {
  return (
    <div
      className={`relative flex items-center md:w-1/2 xl:w-1/3 ${containerClassName}`}
    >
      <i className="absolute px-5">{icon}</i>
      <Input {...inputProps} inputClassName="pl-14" />
    </div>
  );
};

export { Input, InputWithIcon };
