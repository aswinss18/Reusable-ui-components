"use client";

import { Flex } from "antd";
import BreadCrumb from "./BreadCrumb";
import Button from "./Button";
import Header from "./Header";
import Sidebar, { sidebarExampleIcons } from "./Sidebar";

const sidebarSections = [
  {
    items: [
      {
        href: "/bread-crumb",
        icon: sidebarExampleIcons.overview,
        key: "overview",
        label: "Overview",
      },
      {
        badgeCount: 3,
        href: "/modal",
        icon: sidebarExampleIcons.leads,
        key: "leads",
        label: "Leads",
      },
      {
        href: "/company-info-card",
        icon: sidebarExampleIcons.partners,
        key: "partners",
        label: "My Partners",
      },
    ],
    title: "Main Menu",
  },
  {
    items: [
      {
        href: "/limit-card",
        icon: sidebarExampleIcons.limits,
        key: "limits",
        label: "Limits",
      },
      {
        href: "/price-card",
        icon: sidebarExampleIcons.charges,
        key: "charges",
        label: "Charges",
      },
      {
        href: "/account-opening-item",
        icon: sidebarExampleIcons.activity,
        key: "activity",
        label: "Activity Log",
      },
    ],
    title: "Partner Management",
  },
];

export default function HeaderShowcase() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f5fb] px-6 py-16">
      <section className="flex w-full max-w-7xl flex-col gap-10 rounded-[32px] bg-white px-8 py-10 shadow-[0_20px_60px_rgba(65,64,153,0.08)] sm:px-12">
        <div className="space-y-3 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Reusable Header
          </p>
          <h1 className="text-3xl font-semibold text-[#1d1b4a]">
            Top header with logo, search, notifications, and user details
          </h1>
          <p className="max-w-3xl text-base leading-7 text-[#6b6a8f]">
            This header keeps the exact Fino-style top bar layout while letting
            you configure the search placeholder, user details, notification
            count, and trailing action area.
          </p>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-[#ebe9f7] bg-[#fbfaff]">
          <Header
            notificationCount={1}
            searchPlaceholder="Search..."
            userInitials="AD"
            userName="Admin User"
            userRole="Super Admin"
          />

          <Flex>
            <Sidebar activeKey="partners" sections={sidebarSections} />

            <Flex className="min-h-[760px] flex-1 bg-white p-8" vertical gap={28}>
              <BreadCrumb
                actions={
                  <>
                    <Button color="neutral" variant="outlined">
                      Manage
                    </Button>
                    <Button variant="outlined">Generate Report</Button>
                  </>
                }
                backButton="/sidebar"
                subtitle="Comprehensive partner information and analytics"
                title="Alpha Finance"
              />

              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-[24px] border border-[#ebe9f7] bg-[#fbfaff] p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8d8cab]">
                    Header Layout
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-[#1d1b4a]">
                    Logo, right-aligned search, and admin controls
                  </h2>
                  <p className="mt-3 max-w-xl text-base leading-7 text-[#6b6a8f]">
                    The component keeps the same proportions as your reference,
                    including the Fino logo sizing, search field spacing, bell
                    notification, avatar, and logout action.
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#ebe9f7] bg-[#fbfaff] p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8d8cab]">
                    Dynamic Props
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-[#1d1b4a]">
                    Reusable for different admin surfaces
                  </h2>
                  <p className="mt-3 max-w-xl text-base leading-7 text-[#6b6a8f]">
                    You can swap user details, notification counts, search
                    placeholder text, and the trailing action while keeping the
                    same overall visual structure.
                  </p>
                </div>
              </div>
            </Flex>
          </Flex>
        </div>
      </section>
    </main>
  );
}
