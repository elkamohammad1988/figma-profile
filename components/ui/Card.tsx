import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type Tone = "default" | "dark" | "cream" | "blue" | "bordered";

const tones: Record<Tone, string> = {
  default: "bg-white shadow-card",
  dark: "bg-surface-navy text-white",
  cream: "bg-surface-cream text-ink",
  blue: "bg-brand-blue text-white",
  bordered: "bg-white border border-line",
};

type CardProps = HTMLAttributes<HTMLDivElement> & {
  tone?: Tone;
};

export function Card({ tone = "default", className, ...props }: CardProps) {
  return (
    <div className={cn("rounded-card p-6 md:p-7", tones[tone], className)} {...props} />
  );
}
