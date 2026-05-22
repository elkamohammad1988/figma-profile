import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { FeatureBullets } from "@/components/sections/FeatureBullets";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { Testimonial } from "@/components/sections/Testimonial";
import { RegulatedBand } from "@/components/sections/RegulatedBand";
import { FAQ } from "@/components/sections/FAQ";
import { CTACard } from "@/components/sections/CTACard";
import { IconChart, IconGlobe, IconExchange } from "@/components/icons";

export const metadata: Metadata = {
  title: "EU Business Account For E-Commerce Sellers",
};

export default function Page() {
  return (
    <>
      <Hero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Solutions" },
          { label: "E-Commerce Sellers" },
        ]}
        title="EU Business Account For E-Commerce Sellers"
        description="Optimised Receiving From Amazon, Shopify, Stripe, And All Major Marketplaces. Settle Inside SEPA."
        primaryCta={{ label: "Open A Business Account", href: "#" }}
        secondaryCta={{ label: "Talk To Sales", href: "#" }}
        imageSrc="/images/phone-apps.png"
        imageAlt="NOWE for e-commerce"
        tone="navy"
      />

      <FeatureBullets
        items={[
          {
            icon: <IconChart />,
            title: "Marketplace-Ready IBAN",
            description:
              "Accepted by Amazon, Shopify, Stripe, PayPal, Etsy, Wayfair and 100+ marketplaces.",
          },
          {
            icon: <IconGlobe />,
            title: "Local Receiving Worldwide",
            description:
              "Receive in EUR, USD, GBP locally — no SWIFT routing, no lifting fees.",
          },
          {
            icon: <IconExchange />,
            title: "Convert At Interbank Rate",
            description:
              "Bring your global earnings to your home currency at real interbank rates.",
          },
        ]}
      />

      <ProcessSteps
        eyebrow="How It Works"
        title="Plug NOWE Into Your Marketplace Stack"
        steps={[
          {
            number: "01",
            title: "Open NOWE Business",
            description: "Apply online — our compliance team approves within 48h.",
          },
          {
            number: "02",
            title: "Connect Marketplaces",
            description: "Add your NOWE EU IBAN as the payout destination across Amazon, Shopify, Stripe.",
          },
          {
            number: "03",
            title: "Settle In Your Currency",
            description: "Convert payouts to your home currency at interbank rates — instantly.",
          },
        ]}
      />

      <ComparisonTable
        eyebrow="NOWE Vs Generic EMIs"
        title="Why Sellers Choose NOWE"
        rows={[
          { label: "Amazon Acceptance", nowe: "Yes — EU IBAN", traditional: "Limited" },
          { label: "Stripe Acceptance", nowe: "Yes", traditional: "Often rejected" },
          { label: "FX Markup", nowe: "0% up to €10k", traditional: "1-3%" },
          { label: "USD Receiving", nowe: "Local ACH", traditional: "SWIFT only" },
          { label: "Payout Speed", nowe: "Same day", traditional: "2-5 days" },
          { label: "Support", nowe: "Dedicated", traditional: "Generic" },
        ]}
      />

      <Testimonial
        quote="Got A Netherlands IBAN In One Day — All Three Of My Unblocked Amazon DE Payouts Without Opening A Local Subsidiary."
        authorName="Diana V."
        authorTitle="Amazon FBA Seller, Madrid"
      />

      <RegulatedBand />

      <FAQ
        items={[
          {
            question: "Will Amazon accept NOWE's IBAN?",
            answer:
              "Yes. NOWE's EU IBANs are accepted by Amazon EU and Amazon US (for European sellers).",
          },
          {
            question: "Can I use NOWE for Stripe payouts?",
            answer:
              "Yes. NOWE EU IBANs are accepted by Stripe Atlas, Stripe EU, and most Stripe entities.",
          },
          {
            question: "What about Shopify Payments?",
            answer:
              "Shopify Payments is supported in EU markets where NOWE operates.",
          },
          {
            question: "Are there per-transaction limits?",
            answer:
              "Standard limits apply to all plans, with higher caps on Growth and Enterprise tiers.",
          },
        ]}
      />

      <CTACard
        eyebrow="For E-Commerce"
        title="Open Your EU E-Commerce Business Account"
        primaryCta={{ label: "Open A Business Account", href: "#" }}
        secondaryCta={{ label: "Talk To Sales", href: "#" }}
        imageSrc="/images/coin-gold.png"
        imageAlt="NOWE business coin"
      />
    </>
  );
}
