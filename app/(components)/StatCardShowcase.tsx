"use client";

import { LineChartOutlined, TransactionOutlined } from "@ant-design/icons";
import StatCard from "./StatCard";

export default function StatCardShowcase() {
  return (
    <section className="flex w-full flex-col gap-10 rounded-[32px] bg-white px-8 py-10 shadow-[0_20px_60px_rgba(65,64,153,0.08)] sm:px-12">
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
          <StatCard
            data={{ change: "+15%", title: "Total Revenue", value: "â‚¹45,000" }}
            icon={<TransactionOutlined />}
          />
          <StatCard
            data={{ change: "+15%", title: "Total Accounts Opened", value: "300" }}
            icon={<LineChartOutlined />}
          />
          <StatCard
            data={{
              subtitle: "Per Account",
              title: "Monthly Pricing Plan",
              value: "â‚¹2,500",
            }}
            highlighted
          />
        </div>
      </section>
  );
}
