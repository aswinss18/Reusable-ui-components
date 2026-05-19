"use client";

import Tabs from "./Tabs";

const filterTabs = [
  {
    badgeColor: "#ED1B2F",
    badgeCount: 3,
    key: "pending",
    label: "Pending for Actions",
  },
  {
    badgeColor: "#0CC496",
    badgeCount: 1,
    key: "approved",
    label: "Approved",
  },
  {
    badgeColor: "#000000",
    badgeCount: 1,
    key: "rejected",
    label: "Rejected",
  },
];

const navigationTabs = [
  { key: "company-info", label: "Company Info" },
  { key: "limits", label: "Limits" },
  { key: "pricing-plan", label: "Pricing Plan" },
];

export default function TabsShowcase() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f5fb] px-6 py-16">
      <section className="flex w-full max-w-6xl flex-col gap-10 rounded-[32px] bg-white px-8 py-10 shadow-[0_20px_60px_rgba(65,64,153,0.08)] sm:px-12">
        <div className="space-y-3 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Reusable Tabs
          </p>
          <h1 className="text-3xl font-semibold text-[#1d1b4a]">
            One tabs component for filter and navigation variants
          </h1>
          <p className="max-w-3xl text-base leading-7 text-[#6b6a8f]">
            Use `type=&quot;filter&quot;` for the current pill filter design, or use
            the default navigation variant for the underlined page tabs style.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <div className="rounded-[24px] border border-[#ebe9f7] bg-[#fbfaff] p-8">
            <h3 className="mb-4 text-lg font-semibold text-[#1d1b4a]">
              Filter Type
            </h3>
            <Tabs defaultActiveKey="pending" items={filterTabs} type="filter" />
          </div>

          <div className="rounded-[24px] border border-[#ebe9f7] bg-white p-0">
            <h3 className="px-8 pb-4 pt-8 text-lg font-semibold text-[#1d1b4a]">
              Navigation Type
            </h3>
            <Tabs defaultActiveKey="pricing-plan" items={navigationTabs} />
          </div>
        </div>
      </section>
    </main>
  );
}
