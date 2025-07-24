import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";
import type { InputProps } from "@/components/ui/input";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import { cn } from "@/utils/styles";

type Props<IForm extends FieldValues> = {
  control: Control<IForm>;
  name: FieldPath<IForm>;
  wrapperClassName?: string;
  label?: string;
};

export default function FormInput<IForm extends FieldValues>({
  control,
  name,
  required = false,
  wrapperClassName,
  className,
  label,
  placeholder,
  ...props
}: Props<IForm> & InputProps) {
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: {
          value: required,
          message: `${label} is required`,
        },
      }}
      render={({ field, fieldState: { error } }) => (
        <fieldset
          className={cn("flex flex-col items-start w-full", wrapperClassName)}
        >
          <Label
            aria-label={label}
            htmlFor={name}
            className={cn(error ? "text-rose-500" : "")}
          >
            {label}
          </Label>

          <Input
            {...field}
            {...props}
            id={name}
            aria-label={label}
            value={field.value ?? ""}
            isError={!!error}
            className={cn("w-full", className)}
            placeholder={placeholder ?? label}
          />

          <span className="text-rose-500 text-xs">{error?.message}</span>
        </fieldset>
      )}
    />
  );
}
