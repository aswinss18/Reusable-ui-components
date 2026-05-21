"use client";

import PartnerCard from "./PartnerCard";

export default function PartnerCardShowcase() {
  return (
    <section className="flex w-full flex-col gap-10 rounded-[32px] bg-white px-8 py-10 shadow-[0_20px_60px_rgba(65,64,153,0.08)] sm:px-12">
        <div className="space-y-3 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Reusable Partner Card
          </p>
          <h1 className="text-3xl font-semibold text-[#1d1b4a]">
            Partner performance card with active and disabled states
          </h1>
          <p className="max-w-3xl text-base leading-7 text-[#6b6a8f]">
            This compact partner card keeps the horizontal dashboard layout for
            commercial metrics, status display, and a right-aligned manage action.
          </p>
        </div>

        <div className="flex flex-col gap-7">
          <PartnerCard
            data={{
              accountsOpen: "6,800",
              avatarText: "G",
              growth: "+8%",
              partnerCode: "PTR-2025-003",
              partnerName: "Gamma Solutions",
              partnerStatus: "Production",
              revenue: "â‚¹28,500",
            }}
            growthTone="positive"
          />

          <PartnerCard
            data={{
              accountsOpen: "2,100",
              avatarText: "D",
              growth: "-5%",
              partnerCode: "PTR-2025-004",
              partnerName: "Delta Corp",
              revenue: "â‚¹12,000",
            }}
            growthTone="neutral"
            state="disabled"
          />
        </div>
      </section>
  );
}
