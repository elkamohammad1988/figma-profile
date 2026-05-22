import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import Image from "next/image";

type CTACardProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageSrc: string;
  imageAlt: string;
  footnote?: string;
};

export function CTACard({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  imageSrc,
  imageAlt,
  footnote,
}: CTACardProps) {
  return (
    <Section tone="white" size="sm">
      <Container>
        <div
          className="
            overflow-hidden
            bg-surface-cream
            rounded-card-lg
          "
        >
          <div
            className="
              grid grid-cols-1 md:grid-cols-[1.2fr_1fr] items-center
              px-6 md:px-10 lg:px-14 py-8 md:py-10
              gap-6 md:gap-10
            "
          >
            <div>
              {eyebrow && <Badge tone="ink">{eyebrow}</Badge>}
              <Heading
                level="h2"
                className="
                  mt-4
                "
              >
                {title}
              </Heading>
              {description && (
                <p
                  className="
                    max-w-xl
                    mt-4
                    text-base text-ink-muted
                  "
                >{description}</p>
              )}
              <div
                className="
                  flex flex-col sm:flex-row
                  mt-6
                  gap-3
                "
              >
                <Button href={primaryCta.href} variant="primary" size="lg">
                  {primaryCta.label}
                </Button>
                {secondaryCta && (
                  <Button href={secondaryCta.href} variant="outline" size="lg">
                    {secondaryCta.label}
                  </Button>
                )}
              </div>
            </div>
            <div
              className="
                relative
                w-full
                aspect-[5/4]
              "
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(min-width:768px) 40vw, 100vw"
                className="
                  object-contain object-center
                "
                /
              >
            </div>
          </div>
          {footnote && (
            <div
              className="
                px-6 md:px-10 py-3
                text-center text-xs text-ink-muted
                border-t border-ink/10
              "
            >
              {footnote}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
