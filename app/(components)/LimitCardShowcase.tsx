"use client";

import LimitCard from "./LimitCard";

export default function LimitCardShowcase() {
  return (
    <section className="flex w-full flex-col gap-10 rounded-[32px] bg-white px-8 py-10 shadow-[0_20px_60px_rgba(65,64,153,0.08)] sm:px-12">
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
          <LimitCard
            data={{
              currentValue: "46",
              title: "Daily Limit Used",
              totalValue: "50",
              utilizedPercent: 96,
            }}
            variant="danger"
          />
          <LimitCard
            data={{
              currentValue: "46",
              title: "Monthly Limit used",
              totalValue: "500",
              utilizedPercent: 24,
            }}
            variant="success"
          />
          <LimitCard
            data={{
              currentValue: "12",
              title: "Quarterly Limit used",
              totalValue: "40",
              utilizedPercent: 58,
            }}
            variant="warning"
          />
        </div>
      </section>
  );
}
