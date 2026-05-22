"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const currencies = [
  { code: "EUR", label: "Euro", flag: "🇪🇺" },
  { code: "USD", label: "US Dollar", flag: "🇺🇸" },
  { code: "GBP", label: "British Pound", flag: "🇬🇧" },
  { code: "JPY", label: "Japanese Yen", flag: "🇯🇵" },
  { code: "CHF", label: "Swiss Franc", flag: "🇨🇭" },
  { code: "AUD", label: "Australian Dollar", flag: "🇦🇺" },
];

const ranges = [
  { id: "1D", label: "1D" },
  { id: "1W", label: "1W" },
  { id: "1M", label: "1M" },
  { id: "6M", label: "6M" },
  { id: "1Y", label: "1Y" },
  { id: "5Y", label: "5Y" },
];

const seriesByRange: Record<string, { x: string; y: number }[]> = {
  "1D": Array.from({ length: 24 }, (_, i) => ({
    x: `${i}:00`,
    y: 1.084 + Math.sin(i / 3) * 0.005 + (i % 4) * 0.001,
  })),
  "1W": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d, i) => ({
    x: d,
    y: 1.082 + Math.cos(i) * 0.008,
  })),
  "1M": Array.from({ length: 12 }, (_, i) => ({
    x: `D${i * 2 + 1}`,
    y: 1.075 + Math.sin(i / 1.8) * 0.012 + i * 0.0005,
  })),
  "6M": ["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m, i) => ({
    x: m,
    y: 1.068 + Math.sin(i) * 0.018 + i * 0.002,
  })),
  "1Y": ["Q1", "Q2", "Q3", "Q4", "Q1+1", "Q2+1"].map((q, i) => ({
    x: q,
    y: 1.05 + Math.sin(i) * 0.025 + i * 0.005,
  })),
  "5Y": ["2021", "2022", "2023", "2024", "2025", "2026"].map((y, i) => ({
    x: y,
    y: 1.02 + Math.cos(i / 1.5) * 0.03 + i * 0.008,
  })),
};

export function CurrencyConverter() {
  const [amount, setAmount] = useState(1000);
  const [from, setFrom] = useState("EUR");
  const [to, setTo] = useState("USD");
  const [range, setRange] = useState("1M");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fromCcy = currencies.find((c) => c.code === from)!;
  const toCcy = currencies.find((c) => c.code === to)!;

  const data = seriesByRange[range];
  const rate = useMemo(() => data[data.length - 1].y, [data]);
  const converted = (amount * rate).toFixed(2);

  return (
    <section className="bg-surface-cream pb-12 pt-10 md:pb-16 md:pt-14">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14">
          <div>
            <h1 className="text-display font-bold tracking-tight text-ink">
              Instant Currency Converter Live Exchange Rates
            </h1>
            <p className="mt-5 max-w-xl text-base text-ink-muted md:text-lg">
              Check Real-Time Mid-Market Rates Across 30+ Currencies. Free, No Account
              Required.
            </p>
            <ul className="mt-6 flex flex-wrap items-center gap-2">
              {["Real-time data", "30+ currencies", "No account needed"].map((l) => (
                <li
                  key={l}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-medium ring-1 ring-line"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                  {l}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-card-lg bg-white p-5 shadow-card md:p-7">
            <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-[1fr_auto_1fr]">
              <div className="rounded-card bg-surface-blue-tint-2 p-4">
                <label className="text-xs font-medium text-ink-muted">You Send</label>
                <div className="mt-2 flex items-center gap-3">
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value) || 0)}
                    className="w-full bg-transparent text-2xl font-semibold text-ink outline-none"
                  />
                  <select
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    className="rounded-full bg-white px-3 py-1.5 text-sm font-medium ring-1 ring-line"
                  >
                    {currencies.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.flag} {c.code}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setFrom(to);
                  setTo(from);
                }}
                aria-label="Swap currencies"
                className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-white"
              >
                ⇄
              </button>
              <div className="rounded-card bg-surface-blue-tint-2 p-4">
                <label className="text-xs font-medium text-ink-muted">They Get</label>
                <div className="mt-2 flex items-center gap-3">
                  <div className="w-full text-2xl font-semibold text-ink">{converted}</div>
                  <select
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    className="rounded-full bg-white px-3 py-1.5 text-sm font-medium ring-1 ring-line"
                  >
                    {currencies.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.flag} {c.code}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between text-sm">
              <div className="text-ink-muted">
                1 {fromCcy.code} = <span className="font-semibold text-ink">{rate.toFixed(4)}</span>{" "}
                {toCcy.code}
              </div>
              <div className="text-xs text-ink-subtle">Live Exchange Rate</div>
            </div>

            <div className="mt-5 h-56">
              {mounted && (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="rateGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2540DA" stopOpacity={0.35} />
                      <stop offset="100%" stopColor="#2540DA" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="#EAF0FF" vertical={false} />
                  <XAxis
                    dataKey="x"
                    stroke="#8A93A8"
                    tick={{ fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    stroke="#8A93A8"
                    tick={{ fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                    domain={["auto", "auto"]}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: 12,
                      border: "1px solid #E5E9F2",
                      fontSize: 12,
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="y"
                    stroke="#2540DA"
                    strokeWidth={2}
                    fill="url(#rateGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
              )}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-1">
              {ranges.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setRange(r.id)}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                    range === r.id
                      ? "bg-brand-blue text-white"
                      : "text-ink-muted hover:bg-ink/5",
                  )}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
