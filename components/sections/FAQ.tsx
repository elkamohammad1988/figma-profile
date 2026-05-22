import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Accordion, type AccordionEntry } from "@/components/ui/Accordion";

type FAQProps = {
  title?: string;
  description?: string;
  items: AccordionEntry[];
  tone?: "white" | "blue-tint" | "navy";
};

export function FAQ({
  title = "Frequently Asked Questions",
  description,
  items,
  tone = "blue-tint",
}: FAQProps) {
  return (
    <Section tone={tone} size="lg">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <Heading level="h2" className={tone === "navy" ? "text-white" : undefined}>
              {title}
            </Heading>
            {description && (
              <p
                className={`mt-4 text-base ${
                  tone === "navy" ? "text-white/70" : "text-ink-muted"
                }`}
              >
                {description}
              </p>
            )}
          </div>
          <Accordion items={items} tone={tone === "navy" ? "dark" : "light"} />
        </div>
      </Container>
    </Section>
  );
}
