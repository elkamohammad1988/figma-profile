import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { FeatureIcon } from "@/components/ui/FeatureIcon";
import { IconShield, IconBank, IconLock } from "@/components/icons";

export function RegulatedBand() {
  const items = [
    {
      icon: <IconShield />,
      title: "FCA Registered",
      description:
        "Authorised by the Financial Conduct Authority as an Electronic Money Institution.",
    },
    {
      icon: <IconBank />,
      title: "EMI Authorised",
      description:
        "Holding a European EMI licence, allowing us to safeguard customer funds across the EEA.",
    },
    {
      icon: <IconLock />,
      title: "Safeguarded Funds",
      description:
        "Customer funds are held in segregated accounts at top-tier partner banks.",
    },
  ];
  return (
    <Section tone="white" size="md">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading level="h2">Regulated And Safeguarded</Heading>
          <p className="mt-3 text-ink-muted">
            NOWE operates under strict EU and UK financial regulation so your money is safe.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-card-lg border border-line bg-white p-6 text-center"
            >
              <div className="flex justify-center">
                <FeatureIcon tone="blue" size="lg">
                  {it.icon}
                </FeatureIcon>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{it.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
