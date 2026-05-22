export type NavLink = { label: string; href: string };

export type NavGroup = {
  label: string;
  href?: string;
  children?: NavLink[];
};

export const mainNav: NavGroup[] = [
  {
    label: "Product",
    children: [
      { label: "EU Business Account", href: "/business/eu-business-account" },
      { label: "Multi-Currency IBAN (Business)", href: "/business/multi-currency-iban" },
      { label: "Multi-Currency IBAN (Personal)", href: "/personal/multi-currency-iban" },
      { label: "SEPA Transfers", href: "/personal/sepa-transfers" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    label: "Solutions",
    children: [
      { label: "E-Commerce Sellers", href: "/business/e-commerce-sellers" },
      { label: "Import & Export", href: "#" },
      { label: "Agencies & Freelancers", href: "#" },
      { label: "Company Formation", href: "#" },
    ],
  },
  {
    label: "Tools",
    children: [
      { label: "Currency Converter", href: "/tools/currency-converter" },
      { label: "IBAN Guide", href: "#" },
      { label: "SEPA Vs SWIFT", href: "#" },
      { label: "FX Rate Calculator", href: "#" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "How It Works (Personal)", href: "/personal/how-it-works" },
      { label: "How It Works (Business)", href: "/business/how-it-works" },
      { label: "FAQ", href: "#" },
    ],
  },
  { label: "FAQ", href: "#" },
];

export const footerColumns: Array<{ title: string; links: NavLink[] }> = [
  {
    title: "Product",
    links: [
      { label: "EU Business Account", href: "/business/eu-business-account" },
      { label: "Multi-Currency IBAN", href: "/business/multi-currency-iban" },
      { label: "SEPA Payments", href: "/personal/sepa-transfers" },
      { label: "International FX", href: "#" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "E-Commerce Sellers", href: "/business/e-commerce-sellers" },
      { label: "Import & Export", href: "#" },
      { label: "Agencies & Freelancers", href: "#" },
      { label: "Company Formation", href: "#" },
    ],
  },
  {
    title: "Tools",
    links: [
      { label: "Currency Converter", href: "/tools/currency-converter" },
      { label: "IBAN Guide", href: "#" },
      { label: "SEPA Vs SWIFT", href: "#" },
      { label: "FX Rate Calculator", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "How It Works", href: "/personal/how-it-works" },
      { label: "Help Center", href: "#" },
      { label: "Partnerships", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Compliance", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms Of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Compliance", href: "#" },
    ],
  },
];

export const footerBadges = [
  "FCA Regulated",
  "EMI Licensed",
  "Netherlands",
  "IBAN Opening",
  "180+ Countries",
  "Safeguarded Funds",
];
