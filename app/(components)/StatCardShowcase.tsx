"use client";

import { LineChartOutlined, TransactionOutlined } from "@ant-design/icons";
import StatCard from "./StatCard";

export default function StatCardShowcase() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f5fb] px-6 py-16">
      <section className="flex w-full max-w-6xl flex-col gap-10 rounded-[32px] bg-white px-8 py-10 shadow-[0_20px_60px_rgba(65,64,153,0.08)] sm:px-12">
        <div className="space-y-3 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Reusable Stat Card
          </p>
          <h1 className="text-3xl font-semibold text-[#1d1b4a]">
            One card component for dashboard statistics
          </h1>
          <p className="max-w-2xl text-base leading-7 text-[#6b6a8f]">
            This stat card uses Ant Design under the hood and supports the same
            visual style for default and highlighted states.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <StatCard>
            <StatCard.TextBlock>
              <StatCard.Title>Total Revenue</StatCard.Title>
              <StatCard.Value>Rs.45,000</StatCard.Value>
              <StatCard.Change>+15%</StatCard.Change>
            </StatCard.TextBlock>
            <StatCard.IconBox>
              <TransactionOutlined />
            </StatCard.IconBox>
          </StatCard>

          <StatCard>
            <StatCard.TextBlock>
              <StatCard.Title>Total Accounts Opened</StatCard.Title>
              <StatCard.Value>300</StatCard.Value>
              <StatCard.Change>+15%</StatCard.Change>
            </StatCard.TextBlock>
            <StatCard.IconBox>
              <LineChartOutlined />
            </StatCard.IconBox>
          </StatCard>

          <StatCard highlighted>
            <StatCard.TextBlock>
              <StatCard.Title>Monthly Pricing Plan</StatCard.Title>
              <StatCard.Value>Rs.2,500</StatCard.Value>
              <StatCard.Subtitle>Per Account</StatCard.Subtitle>
            </StatCard.TextBlock>
          </StatCard>
        </div>
      </section>
    </main>
  );
}
