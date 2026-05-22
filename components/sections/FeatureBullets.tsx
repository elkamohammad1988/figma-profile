import { FeatureIcon } from "@/components/ui/FeatureIcon";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export type FeatureBullet = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type FeatureBulletsProps = {
  items: FeatureBullet[];
  tone?: "white" | "cream" | "blue-tint";
};

export function FeatureBullets({ items, tone = "white" }: FeatureBulletsProps) {
  return (
    <Section tone={tone} size="md">
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-card border border-line bg-white p-6">
              <FeatureIcon tone="blue">{it.icon}</FeatureIcon>
              <h3 className="mt-4 text-lg font-semibold text-ink">{it.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{it.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
