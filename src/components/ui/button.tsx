import React, { type HTMLAttributes } from "react";
import { cn } from "@/utils/styles";

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  loading = false,
  disabled = false,
  className,
  ...props
}) => {
  return (
    <button
      className={cn("flex items-center justify-center gap-2", className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg
          width="20"
          height="20"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          className="animate-spin"
        >
          <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
            <path
              d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"
              opacity=".2"
            />

            <path d="M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z" />
          </g>
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
