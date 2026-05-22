import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

type ProcessStepsProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  steps: ProcessStep[];
};

export function ProcessSteps({ eyebrow, title, description, steps }: ProcessStepsProps) {
  return (
    <Section tone="navy" size="lg" className="relative overflow-hidden">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue-soft">
              {eyebrow}
            </span>
          )}
          <Heading level="h2" className="mt-3 text-white">
            {title}
          </Heading>
          {description && (
            <p className="mt-4 text-white/70 md:text-lg">{description}</p>
          )}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.number}
              className="relative rounded-card-lg bg-surface-navy-2 p-6 ring-1 ring-line-dark"
            >
              <span className="text-3xl font-bold text-brand-blue-soft">{s.number}</span>
              <h3 className="mt-3 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-white/65">{s.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
