"use client";

import LimitCard from "./LimitCard";

export default function LimitCardShowcase() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f5fb] px-6 py-16">
      <section className="flex w-full max-w-6xl flex-col gap-10 rounded-[32px] bg-white px-8 py-10 shadow-[0_20px_60px_rgba(65,64,153,0.08)] sm:px-12">
        <div className="space-y-3 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Reusable Limit Card
          </p>
          <h1 className="text-3xl font-semibold text-[#1d1b4a]">
            One card component for limit utilization
          </h1>
          <p className="max-w-2xl text-base leading-7 text-[#6b6a8f]">
            This card uses Ant Design and supports multiple utilization color
            variants including red, green, and yellow.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <LimitCard utilizedPercent={96} variant="danger">
            <LimitCard.Title>Daily Limit Used</LimitCard.Title>
            <LimitCard.Value>
              <LimitCard.CurrentValue>46</LimitCard.CurrentValue>
              <LimitCard.TotalValue>/50</LimitCard.TotalValue>
            </LimitCard.Value>
          </LimitCard>

          <LimitCard utilizedPercent={24} variant="success">
            <LimitCard.Title>Monthly Limit used</LimitCard.Title>
            <LimitCard.Value>
              <LimitCard.CurrentValue>46</LimitCard.CurrentValue>
              <LimitCard.TotalValue>/500</LimitCard.TotalValue>
            </LimitCard.Value>
          </LimitCard>

          <LimitCard utilizedPercent={58} variant="warning">
            <LimitCard.Title>Quarterly Limit used</LimitCard.Title>
            <LimitCard.Value>
              <LimitCard.CurrentValue>12</LimitCard.CurrentValue>
              <LimitCard.TotalValue>/40</LimitCard.TotalValue>
            </LimitCard.Value>
          </LimitCard>
        </div>
      </section>
    </main>
  );
}
