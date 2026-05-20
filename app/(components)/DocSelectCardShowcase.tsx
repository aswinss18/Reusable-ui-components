"use client";

import {
  CheckCircleFilled,
  FileTextOutlined,
  ProfileOutlined,
  ReconciliationOutlined,
  TransactionOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import DocSelectCard from "./DocSelectCard";

const cardOptions = [
  {
    id: "comprehensive",
    icon: <ReconciliationOutlined className="text-[28px] leading-none" />,
    title: "Comprehensive Report",
    description:
      "Complete overview including transactions, limits, products, and activity logs",
  },
  {
    id: "transaction",
    icon: <TransactionOutlined className="text-[28px] leading-none" />,
    title: "Transaction Report",
    description:
      "Detailed transaction history with amounts, types, and statuses",
  },
  {
    id: "summary",
    icon: <ProfileOutlined className="text-[28px] leading-none" />,
    title: "Financial Summary",
    description:
      "Revenue, charges, pricing plans, and financial analytics",
  },
  {
    id: "activity",
    icon: <FileTextOutlined className="text-[28px] leading-none" />,
    title: "Activity Log",
    description:
      "Complete activity history with timestamps and user actions",
  },
] as const;

export default function DocSelectCardShowcase() {
  const [selectedType, setSelectedType] = useState<(typeof cardOptions)[number]["id"]>(
    "comprehensive",
  );

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f5fb] px-4 py-16 sm:px-6">
      <section className="flex w-full max-w-[1120px] flex-col gap-10 rounded-[32px] bg-white px-5 py-8 shadow-[0_20px_60px_rgba(65,64,153,0.08)] sm:px-8 sm:py-10">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Reusable DocSelectCard
          </p>
          <h1 className="text-3xl font-semibold text-[#1d1b4a]">
            Select a document output style
          </h1>
          <p className="max-w-3xl text-base leading-7 text-[#6b6a8f]">
            The first card starts selected by default. Click any card to switch
            the selected state and preview the different report types.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {cardOptions.map((option) => (
            <DocSelectCard
              key={option.id}
              icon={option.icon}
              selected={selectedType === option.id}
              selectedIndicator={<CheckCircleFilled />}
              onSelect={() => setSelectedType(option.id)}
            >
              <DocSelectCard.Title>{option.title}</DocSelectCard.Title>
              <DocSelectCard.Description>{option.description}</DocSelectCard.Description>
            </DocSelectCard>
          ))}
        </div>
      </section>
    </main>
  );
}
