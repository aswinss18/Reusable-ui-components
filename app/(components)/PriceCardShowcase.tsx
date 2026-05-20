"use client";

import PriceCard from "./PriceCard";

const priceItems = [
  ["Monthly Fee", "Rs.2,500"],
  ["Per Account", "Rs.0.15"],
  ["Annual Plan", "Rs.25,000"],
  ["Setup Fee", "Rs.5,000"],
  ["Per Transaction", "Rs.2.50"],
  ["Premium Support", "Rs.10,000"],
] as const;

export default function PriceCardShowcase() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f5fb] px-6 py-16">
      <section className="flex w-full max-w-6xl flex-col gap-10 rounded-[32px] bg-white px-8 py-10 shadow-[0_20px_60px_rgba(65,64,153,0.08)] sm:px-12">
        <div className="space-y-3 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Reusable Price Card
          </p>
          <h1 className="text-3xl font-semibold text-[#1d1b4a]">
            One card component for pricing display
          </h1>
          <p className="max-w-2xl text-base leading-7 text-[#6b6a8f]">
            This price card uses Ant Design only and provides a clean, simple way
            to display pricing information with a title and value.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {priceItems.map(([title, value]) => (
            <PriceCard key={title}>
              <PriceCard.Title>{title}</PriceCard.Title>
              <PriceCard.Value>{value}</PriceCard.Value>
            </PriceCard>
          ))}
        </div>
      </section>
    </main>
  );
}
