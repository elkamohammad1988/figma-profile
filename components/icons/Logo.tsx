import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  tone?: "blue" | "white" | "ink";
};

const toneColor: Record<NonNullable<LogoProps["tone"]>, string> = {
  blue: "text-brand-blue",
  white: "text-white",
  ink: "text-ink",
};

export function Logo({ className, tone = "blue" }: LogoProps) {
  return (
    <span
      role="img"
      aria-label="NOWE"
      className={cn(
        "inline-block select-none font-sans text-[26px] font-extrabold leading-none tracking-tight",
        toneColor[tone],
        className,
      )}
    >
      nowe
    </span>
  );
}
