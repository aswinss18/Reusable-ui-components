"use client";

import { Flex } from "antd";
import BreadCrumb from "./BreadCrumb";
import Button from "./Button";
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

export default function SidebarShowcase() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f5fb] px-6 py-16">
      <section className="flex w-full max-w-7xl flex-col gap-10 rounded-[32px] bg-white px-8 py-10 shadow-[0_20px_60px_rgba(65,64,153,0.08)] sm:px-12">
        <div className="space-y-3 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Reusable Sidebar
          </p>
          <h1 className="text-3xl font-semibold text-[#1d1b4a]">
            Ant Design sidebar with dynamic sections and active states
          </h1>
          <p className="max-w-3xl text-base leading-7 text-[#6b6a8f]">
            This sidebar is driven by section and item props, while keeping the
            exact visual language of grouped labels, active pills, badges, and
            icon-led navigation.
          </p>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-[#ebe9f7] bg-[#fbfaff]">
          <Flex>
            <Sidebar activeKey="leads" sections={sidebarSections} />

            <Flex className="min-h-[760px] flex-1 bg-white p-8" vertical gap={28}>
              <BreadCrumb
                actions={
                  <>
                    <Button color="neutral" variant="outlined">
                      Filter Queue
                    </Button>
                    <Button>Export Summary</Button>
                  </>
                }
                backButton="/"
                subtitle="Track active partner conversations, pending follow-ups, and route transitions."
                title="Leads Workspace"
              />

              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-[24px] border border-[#ebe9f7] bg-[#fbfaff] p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8d8cab]">
                    Sidebar State
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-[#1d1b4a]">
                    Active item with badge and chevron
                  </h2>
                  <p className="mt-3 max-w-xl text-base leading-7 text-[#6b6a8f]">
                    The component highlights the selected route, shows an optional
                    badge count, and lets each item navigate or trigger a click
                    callback through the same data structure.
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#ebe9f7] bg-[#fbfaff] p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8d8cab]">
                    Dynamic Sections
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-[#1d1b4a]">
                    Reusable across dashboard areas
                  </h2>
                  <p className="mt-3 max-w-xl text-base leading-7 text-[#6b6a8f]">
                    You can swap section titles, item labels, icons, links, and
                    counts without changing the structure or styling of the
                    component itself.
                  </p>
                </div>
              </div>

              <div className="rounded-[24px] border border-[#ebe9f7] bg-[#fbfaff] p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8d8cab]">
                  Alternate Active State
                </p>
                <div className="mt-6">
                  <Sidebar activeKey="limits" sections={sidebarSections} width={308} />
                </div>
              </div>
            </Flex>
          </Flex>
        </div>
      </section>
    </main>
  );
}
