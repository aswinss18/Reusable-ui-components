"use client";

import PriceCard from "./PriceCard";

export default function PriceCardShowcase() {
  return (
    <section className="flex w-full flex-col gap-10 rounded-[32px] bg-white px-8 py-10 shadow-[0_20px_60px_rgba(65,64,153,0.08)] sm:px-12">
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
          <PriceCard data={{ title: "Monthly Fee", value: "â‚¹2,500" }} />
          <PriceCard data={{ title: "Per Account", value: "â‚¹0.15" }} />
          <PriceCard data={{ title: "Annual Plan", value: "â‚¹25,000" }} />
          <PriceCard data={{ title: "Setup Fee", value: "â‚¹5,000" }} />
          <PriceCard data={{ title: "Per Transaction", value: "â‚¹2.50" }} />
          <PriceCard data={{ title: "Premium Support", value: "â‚¹10,000" }} />
        </div>
      </section>
  );
}
