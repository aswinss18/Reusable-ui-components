"use client";

import { useState } from "react";
import { BarChartOutlined, DollarOutlined, FileTextOutlined, UnorderedListOutlined } from "@ant-design/icons";
import DocSelectCard from "./DocSelectCard";

export default function DocSelectCardShowcase() {
  const [selectedCard, setSelectedCard] = useState<string | null>("comprehensive");

  const cards = [
    {
      id: "comprehensive",
      icon: <BarChartOutlined />,
      title: "Comprehensive Report",
      description: "Complete overview including transactions, limits, products, and activity logs",
    },
    {
      id: "transaction",
      icon: <DollarOutlined />,
      title: "Transaction Report",
      description: "Detailed transaction history with amounts, types, and statuses",
    },
    {
      id: "financial",
      icon: <BarChartOutlined />,
      title: "Financial Summary",
      description: "Revenue, charges, pricing plans, and financial analytics",
    },
    {
      id: "activity",
      icon: <FileTextOutlined />,
      title: "Activity Log",
      description: "Complete activity history with timestamps and user actions",
    },
  ];

  const handleCardClick = (id: string) => {
    setSelectedCard(id);
    console.log("Selected card:", id);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f5fb] px-6 py-16">
      <section className="flex w-full max-w-6xl flex-col gap-10 rounded-[32px] bg-white px-8 py-10 shadow-[0_20px_60px_rgba(65,64,153,0.08)] sm:px-12">
        <div className="space-y-3 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Reusable Doc Select Card
          </p>
          <h1 className="text-3xl font-semibold text-[#1d1b4a]">
            One component for selectable document cards
          </h1>
          <p className="max-w-2xl text-base leading-7 text-[#6b6a8f]">
            This doc select card uses Ant Design only and displays document options
            with icons, titles, and descriptions. Click to select a card.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {cards.map((card) => (
            <DocSelectCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              description={card.description}
              selected={selectedCard === card.id}
              onClick={() => handleCardClick(card.id)}
            />
          ))}
        </div>

        <div className="mt-4 rounded-lg bg-[#f6f5fb] p-4">
          <p className="text-sm text-[#6b6a8f]">
            <strong>Selected:</strong> {selectedCard ? cards.find(c => c.id === selectedCard)?.title : "None"}
          </p>
        </div>
      </section>
    </main>
  );
}
