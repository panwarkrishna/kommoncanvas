import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, hasError, ...props }, ref) => {
    return (
      <input
        ref={ref}
        aria-invalid={hasError || undefined}
        className={cn(
          "flex h-13 w-full rounded-xl border border-ink/15 bg-transparent px-4 py-3 text-base text-ink placeholder:text-muted transition-colors duration-200 focus-visible:outline-none focus-visible:border-lavender-deep disabled:cursor-not-allowed disabled:opacity-50",
          hasError && "border-red-500/70 focus-visible:border-red-500",
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
