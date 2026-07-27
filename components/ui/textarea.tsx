import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, hasError, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        aria-invalid={hasError || undefined}
        className={cn(
          "flex min-h-36 w-full resize-y rounded-xl border border-ink/15 bg-transparent px-4 py-3 text-base text-ink placeholder:text-muted transition-colors duration-200 focus-visible:outline-none focus-visible:border-lavender-deep disabled:cursor-not-allowed disabled:opacity-50",
          hasError && "border-red-500/70 focus-visible:border-red-500",
          className,
        )}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
