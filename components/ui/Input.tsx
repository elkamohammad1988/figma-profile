import { cn } from "@/lib/utils";
import type { InputHTMLAttributes } from "react";
import { forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  function Input({ className, ...props }, ref) {
    return (
      <input
        ref={ref}
        className={cn(
          "h-11 w-full rounded-full border border-line bg-white px-5 text-sm text-ink placeholder:text-ink-subtle",
          "focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/30",
          className,
        )}
        {...props}
      />
    );
  },
);
