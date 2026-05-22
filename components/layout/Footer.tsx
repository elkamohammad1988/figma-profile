import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerColumns, footerBadges } from "@/lib/nav";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { IconLinkedIn, IconYouTube, IconX } from "@/components/icons";

export function Footer() {
  return (
    <footer className="bg-surface-blue-tint-2 pt-12 md:pt-16">
      <Container>
        <div className="flex justify-center pb-6 md:pb-8">
          <div
            className="select-none text-[clamp(72px,14vw,180px)] font-extrabold leading-none tracking-tighter text-brand-blue"
            aria-hidden
          >
            nowe
          </div>
          <span className="sr-only">NOWE</span>
        </div>

        <div className="grid grid-cols-2 gap-8 border-t border-line pt-8 sm:grid-cols-3 lg:grid-cols-6">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-ink">{col.title}</h4>
              <ul className="mt-4 flex flex-col gap-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-ink-muted transition-colors hover:text-brand-blue"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-stretch gap-4 rounded-card-lg bg-brand-blue px-6 py-5 text-white md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center md:max-w-2xl">
            <span className="whitespace-nowrap text-sm font-medium">
              Subscribe to our Newsletter
            </span>
            <Input
              type="email"
              placeholder="Email Address"
              aria-label="Email address"
              className="flex-1 border-transparent bg-white text-ink"
            />
            <Button type="button" variant="white" size="md">
              Subscribe
            </Button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-white/80">Stay connected</span>
            <div className="flex items-center gap-2">
              {[IconX, IconYouTube, IconLinkedIn].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-blue transition-colors hover:bg-white/90"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 border-t border-line pt-6 text-center">
          <h5 className="text-sm font-semibold text-ink">Fast links</h5>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-sm text-ink-muted">
            {["Tariffs", "Help", "Support", "FAQ"].map((l) => (
              <li key={l}>
                <Link href="#" className="hover:text-brand-blue">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 max-w-5xl text-xs leading-relaxed text-ink-muted">
          NOWE Money Ltd. is an Electronic Money Institution authorised by the Financial Conduct
          Authority under the Electronic Money Regulations 2011 (FRN 902914) for the issuance of
          electronic money. NOWE operates across the UK and EU, providing multi-currency accounts,
          SEPA & SWIFT transfers, and FX services to individuals and businesses. Customer funds are
          safeguarded in accordance with applicable safeguarding regulations.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3 border-t border-line pt-6 text-center text-xs text-ink-subtle md:grid-cols-6">
          {footerBadges.map((b) => (
            <span key={b}>{b}</span>
          ))}
        </div>

        <div className="py-6 text-center text-xs text-ink-subtle">
          © {new Date().getFullYear()} NOWE Money Ltd. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
