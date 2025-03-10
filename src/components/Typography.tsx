import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const TypographyVariant = cva("", {
  variants: {
    text: {
      body1: "text-base font-normal",
      body2: "text-sm font-normal",
      body3: "text-xs font-normal",
      h1: "md:text-4xl font-semibold text-3xl",
      h2: "md:text-3xl font-semibold text-2xl",
      h3: "md:text-2xl font-semibold text-xl",
      h4: "md:text-xl font-semibold text-lg",
      h5: "md:text-lg font-semibold text-base",
      h6: "md:text-base font-semibold text-sm",
    },
  },
  defaultVariants: {
    text: "body2",
  },
});

interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof TypographyVariant> {}

export const Typography = ({
  className,
  text = "body2",
  children,
  ...props
}: TypographyProps) => {
  return (
    <div className={cn(TypographyVariant({ text }), className)} {...props}>
      {children}
    </div>
  );
};
