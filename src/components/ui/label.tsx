import type { LabelHTMLAttributes } from "react";
import { cn } from "@/utils/styles";

type Props = {
  isError?: boolean;
};

export default function Label({
  isError,
  children,
  className,
  ...props
}: Props & LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className={cn(isError ? "text-rose-500" : "", className)} {...props}>
      Label
    </label>
  );
}
