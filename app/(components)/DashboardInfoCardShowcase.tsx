"use client";

import { SettingOutlined, UserAddOutlined } from "@ant-design/icons";
import DashboardInfoCard, {
  type DashboardInfoActionItem,
  type DashboardInfoActivityItem,
} from "./DashboardInfoCard";

const activityData: DashboardInfoActivityItem[] = [
  {
    id: 1,
    avatarText: "A",
    name: "Alpha Finance",
    subtitle: "PTR-2025-003",
    value: "+15%",
    valueTone: "positive",
  },
  {
    id: 2,
    avatarText: "B",
    name: "Beta Payments",
    subtitle: "PTR-2025-002",
    value: "+22%",
    valueTone: "positive",
  },
  {
    id: 3,
    avatarText: "G",
    name: "Gamma Solutions",
    subtitle: "PTR-2025-001",
    value: "+8%",
    valueTone: "positive",
  },
];

const actionData: DashboardInfoActionItem[] = [
  {
    id: 1,
    icon: <UserAddOutlined />,
    name: "3 leads awaiting approval",
    subtitle: "Review and approve new partners",
    tone: "danger",
  },
  {
    id: 2,
    icon: <SettingOutlined />,
    name: "Update limit configurations",
    subtitle: "2 partners need limit review",
    tone: "primary",
  },
];

export default function DashboardInfoCardShowcase() {
  const handleItemAction = (item: DashboardInfoActivityItem | DashboardInfoActionItem) => {
    console.log("DashboardInfoCard selected:", item.name, item);
  };

  return (
    <section className="flex w-full flex-col gap-10 rounded-[32px] bg-white px-8 py-10 shadow-[0_20px_60px_rgba(65,64,153,0.08)] sm:px-12">
      <div className="space-y-3 text-center sm:text-left">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
          Reusable Dashboard Info Card
        </p>
        <h1 className="text-3xl font-semibold text-[#1d1b4a]">
          One dashboard card component with activity and action variants
        </h1>
        <p className="max-w-3xl text-base leading-7 text-[#6b6a8f]">
          `DashboardInfoCard` is a solid name here because both designs are
          lightweight dashboard information panels. The `cardType` prop swaps
          the internal layout while the title, subtitle, data, and click action
          stay consistent.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <DashboardInfoCard
          action={handleItemAction}
          cardType="activity"
          data={activityData}
          subtitle="Latest partner activity"
          title="Recent Partners"
        />
        <DashboardInfoCard
          action={handleItemAction}
          cardType="action"
          data={actionData}
          subtitle="Items requiring your attention"
          title="Pending Actions"
        />
      </div>
    </section>
  );
}
