"use client";

import StatusFilterTabs from "./StatusFilterTabs";

export default function StatusFilterTabsShowcase() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f5fb] px-6 py-16">
      <section className="flex w-full max-w-6xl flex-col gap-10 rounded-[32px] bg-white px-8 py-10 shadow-[0_20px_60px_rgba(65,64,153,0.08)] sm:px-12">
        <div className="space-y-3 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Reusable Status Filter Tabs
          </p>
          <h1 className="text-3xl font-semibold text-[#1d1b4a]">
            One component for status filtering with counts
          </h1>
          <p className="max-w-2xl text-base leading-7 text-[#6b6a8f]">
            This status filter tabs component uses Ant Design only and displays
            status counts with color-coded badges. Check the console for tab changes.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#1d1b4a]">Default State</h3>
            <StatusFilterTabs />
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#1d1b4a]">Custom Counts</h3>
            <StatusFilterTabs
              pendingCount={15}
              approvedCount={42}
              rejectedCount={8}
            />
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#1d1b4a]">Starting with Approved Tab</h3>
            <StatusFilterTabs
              defaultActiveTab="approved"
              pendingCount={5}
              approvedCount={20}
              rejectedCount={3}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
