"use client";

import LogFilterCard, {
  type LogFilterCategory,
  type LogFilterItem,
  type LogFilterStat,
} from "./LogFilterCard";

const logItems: LogFilterItem[] = [
  {
    id: 1,
    name: "Create API partner",
    action: "API call",
    description: "Created a new partner integration endpoint",
    user: "Admin User",
    category: "api",
  },
  {
    id: 2,
    name: "Refresh webhook token",
    action: "API call",
    description: "Rotated webhook authentication token",
    user: "System Bot",
    category: "api",
  },
  {
    id: 3,
    name: "Approve partner profile",
    action: "Partner action",
    description: "Approved updated partner profile details",
    user: "Nisha Rao",
    category: "partners",
  },
  {
    id: 4,
    name: "Suspend duplicate partner",
    action: "Partner action",
    description: "Flagged and suspended duplicate partner record",
    user: "Admin User",
    category: "partners",
  },
  {
    id: 5,
    name: "Night sync completed",
    action: "System event",
    description: "Completed nightly ledger sync",
    user: "System Bot",
    category: "system",
  },
  {
    id: 6,
    name: "Config cache refreshed",
    action: "System event",
    description: "Reloaded config cache from source",
    user: "System Bot",
    category: "system",
  },
  {
    id: 7,
    name: "Audit export generated",
    action: "System event",
    description: "Prepared weekly audit export",
    user: "System Bot",
    category: "system",
  },
  {
    id: 8,
    name: "User role updated",
    action: "User event",
    description: "Changed user role from viewer to editor",
    user: "Amit Singh",
    category: "user",
  },
];

const categories: LogFilterCategory[] = [
  {
    key: "all",
    name: "All",
  },
  {
    key: "api",
    name: "API",
    searchFunction: (item) => item.category === "api",
  },
  {
    key: "partners",
    name: "Partners",
    searchFunction: (item) => item.category === "partners",
  },
  {
    key: "system",
    name: "System",
    searchFunction: (item) => item.category === "system",
  },
  {
    key: "user",
    name: "User",
    searchFunction: (item) => item.category === "user",
  },
];

const stats: LogFilterStat[] = [
  { key: "api-calls", label: "API Calls", value: 7 },
  { key: "partner-actions", label: "Partner Actions", value: 4 },
  { key: "system-events", label: "System Events", value: 3 },
  { key: "user-events", label: "User Events", value: 1 },
];

export default function LogFilterCardShowcase() {
  return (
    <section className="flex w-full flex-col gap-10 rounded-[32px] bg-white px-8 py-10 shadow-[0_20px_60px_rgba(65,64,153,0.08)] sm:px-12">
      <div className="space-y-3 text-center sm:text-left">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
          Reusable Log Filter Card
        </p>
        <h1 className="text-3xl font-semibold text-[#1d1b4a]">
          Search logs and switch categories with one reusable card
        </h1>
        <p className="max-w-3xl text-base leading-7 text-[#6b6a8f]">
          The card supports configurable filter tabs, searchable items, and stat
          counters. For now, the search behavior logs the filtered item names to
          the console so the filtering flow is ready for integration.
        </p>
      </div>

      <LogFilterCard
        categories={categories}
        defaultCategoryKey="api"
        items={logItems}
        stats={stats}
      />
    </section>
  );
}
