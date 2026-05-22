import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { BreadcrumbEyebrow } from "./BreadcrumbEyebrow";
import { cn } from "@/lib/utils";

export type HeroChip = { label: string; value?: string };

type HeroProps = {
  breadcrumb?: { label: string; href?: string }[];
  title: string;
  description?: string;
  chips?: HeroChip[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageSrc?: string;
  imageAlt?: string;
  tone?: "white" | "cream" | "navy";
  className?: string;
};

export function Hero({
  breadcrumb,
  title,
  description,
  chips,
  primaryCta,
  secondaryCta,
  imageSrc,
  imageAlt,
  tone = "cream",
  className,
}: HeroProps) {
  const toneClasses =
    tone === "navy"
      ? "bg-surface-navy text-white"
      : tone === "cream"
        ? "bg-surface-cream text-ink"
        : "bg-white text-ink";

  return (
    <section
      className={cn(toneClasses, "relative pb-12 pt-10 md:pb-16 md:pt-14", className)}
    >
      <Container>
        {breadcrumb && (
          <BreadcrumbEyebrow
            items={breadcrumb}
            tone={tone === "navy" ? "white" : "ink"}
            className="mb-6"
          />
        )}

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <div>
            <Heading
              level="display"
              className={tone === "navy" ? "text-white" : "text-ink"}
            >
              {title}
            </Heading>
            {description && (
              <p
                className={cn(
                  "mt-5 max-w-xl text-base md:text-lg",
                  tone === "navy" ? "text-white/75" : "text-ink-muted",
                )}
              >
                {description}
              </p>
            )}

            {chips && chips.length > 0 && (
              <ul className="mt-6 flex flex-wrap items-center gap-2">
                {chips.map((c) => (
                  <li
                    key={c.label}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium",
                      tone === "navy"
                        ? "bg-white/10 text-white"
                        : "bg-white text-ink ring-1 ring-line",
                    )}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                    {c.label}
                    {c.value && (
                      <span className="text-ink-muted">{c.value}</span>
                    )}
                  </li>
                ))}
              </ul>
            )}

            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {primaryCta && (
                  <Button href={primaryCta.href} size="lg">
                    {primaryCta.label}
                  </Button>
                )}
                {secondaryCta && (
                  <Button
                    href={secondaryCta.href}
                    variant={tone === "navy" ? "outline-light" : "outline"}
                    size="lg"
                  >
                    {secondaryCta.label}
                  </Button>
                )}
              </div>
            )}
          </div>

          {imageSrc && (
            <div className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card-lg bg-surface-blue-tint">
                <Image
                  src={imageSrc}
                  alt={imageAlt ?? ""}
                  fill
                  priority
                  sizes="(min-width:1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
