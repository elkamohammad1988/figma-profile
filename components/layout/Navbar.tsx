"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav } from "@/lib/nav";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/icons/Logo";
import { IconMenu, IconClose, IconChevronDown, IconUserCircle } from "@/components/icons";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-container px-5 py-3 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between gap-4 rounded-full border border-line bg-white px-4 py-2 shadow-nav sm:px-5 lg:px-6">
          <Link
            href="/pricing"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2"
            aria-label="NOWE home"
          >
            <Logo />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {mainNav.map((group) => {
              const hasChildren = !!group.children?.length;
              if (!hasChildren) {
                return (
                  <li key={group.label}>
                    <Link
                      href={group.href ?? "#"}
                      className="rounded-full px-3 py-2 text-sm font-medium text-ink hover:bg-ink/5"
                    >
                      {group.label}
                    </Link>
                  </li>
                );
              }
              return (
                <li
                  key={group.label}
                  className="relative"
                  onMouseEnter={() => setOpenGroup(group.label)}
                  onMouseLeave={() => setOpenGroup(null)}
                >
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-ink hover:bg-ink/5"
                  >
                    {group.label}
                    <IconChevronDown className="h-3.5 w-3.5" />
                  </button>
                  {openGroup === group.label && (
                    <div className="absolute left-0 top-full pt-2">
                      <div className="min-w-[240px] rounded-2xl border border-line bg-white p-2 shadow-card">
                        {group.children!.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block rounded-xl px-3 py-2 text-sm text-ink hover:bg-surface-blue-tint"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink hover:bg-ink/5"
            >
              <IconUserCircle className="h-4 w-4" />
              Be Connected
            </Link>
            <Button href="#" size="md" variant="primary">
              Open An Account
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink lg:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      <div
        className={cn(
          "lg:hidden",
          mobileOpen ? "block" : "hidden",
        )}
      >
        <div className="mx-auto max-w-container px-5 pb-4 sm:px-6 lg:px-8">
          <div className="max-h-[calc(100vh-7rem)] overflow-y-auto rounded-2xl border border-line bg-white p-4 shadow-card">
            <ul className="flex flex-col gap-1">
              {mainNav.map((group) => (
                <li key={group.label}>
                  {group.children?.length ? (
                    <details className="group">
                      <summary className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-ink hover:bg-ink/5">
                        {group.label}
                        <IconChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="pl-3 pt-1">
                        {group.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block rounded-lg px-3 py-2 text-sm text-ink-muted hover:bg-surface-blue-tint hover:text-ink"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link
                      href={group.href ?? "#"}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-ink hover:bg-ink/5"
                      onClick={() => setMobileOpen(false)}
                    >
                      {group.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-3 flex flex-col gap-2">
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink"
              >
                <IconUserCircle className="h-4 w-4" /> Be Connected
              </Link>
              <Button href="#" variant="primary" size="md" className="w-full">
                Open An Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
