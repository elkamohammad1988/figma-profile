import Link from "next/link";
import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "outline-light" | "ghost-pill" | "white";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  primary: "bg-brand-blue text-white hover:bg-brand-blue-deep",
  outline: "border border-ink/15 bg-white text-ink hover:border-ink/30",
  "outline-light": "border border-white/30 text-white hover:bg-white/10",
  "ghost-pill": "text-ink hover:bg-ink/5",
  white: "bg-white text-brand-blue hover:bg-white/90",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  href?: undefined;
};

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
  href: string;
};

export function Button(props: ButtonProps | AnchorProps) {
  const variant = props.variant ?? "primary";
  const size = props.size ?? "md";
  const cls = cn(base, variants[variant], sizes[size], props.className);

  if (props.href !== undefined) {
    const { href, variant: _v, size: _s, className: _c, children, ...rest } =
      props as AnchorProps;
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  const { variant: _v, size: _s, className: _c, children, ...rest } = props as ButtonProps;
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
