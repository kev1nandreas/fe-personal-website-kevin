import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const ButtonVariant = cva("p-2 px-7 rounded-lg cursor-pointer transition-all duration-200 font-semibold select-none", {
  variants: {
    button: {
      primary_fill: "bg-yellow-500 text-white hover:bg-yellow-700",
      secondary_fill: "bg-gray-500 text-white hover:bg-gray-600",
      tertiary_fill: "bg-white text-black border-2 border-black hover:bg-gray-200",
      primary_outline: "text-yellow-500 border-2 border-yellow-500 hover:bg-yellow-700 hover:border-yellow-700 hover:text-white",
      secondary_outline: "text-gray-500 border-2 border-gray-500 hover:bg-gray-500 hover:text-white",
      tertiary_outline: "text-black border-2 border-black hover:bg-gray-200",
    },
    rounded: {
      full: "rounded-full",
      normal: "rounded-lg",
    }
  },
  defaultVariants: {
    button: "primary_outline",
    rounded: "normal",
  },
});

interface ButtonProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof ButtonVariant> {}

export const Button = ({
  className,
  button = "primary_outline",
  rounded = "normal",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button className={cn(ButtonVariant({ button, rounded }), className)} {...props}>
      {children}
    </button>
  );
};
