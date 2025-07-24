import React, { type InputHTMLAttributes } from "react";
import { cn } from "@/utils/styles";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  isError?: boolean;
};

const Input: React.FC<InputProps> = ({ isError, className, ...props }) => {
  return (
    <input
      type="text"
      className={cn(
        className,
        "border-[1px] ",
        isError ? "border-rose-500" : "border-transparent"
      )}
      {...props}
    />
  );
};

export default Input;
