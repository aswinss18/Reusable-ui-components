"use client";

import { Flex } from "antd";
import BreadCrumb from "./BreadCrumb";
import Button from "./Button";

export default function BreadCrumbShowcase() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f5fb] px-6 py-16">
      <section className="flex w-full max-w-6xl flex-col gap-10 rounded-[32px] bg-white px-8 py-10 shadow-[0_20px_60px_rgba(65,64,153,0.08)] sm:px-12">
        <div className="space-y-3 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Reusable Bread Crumb
          </p>
          <h1 className="text-3xl font-semibold text-[#1d1b4a]">
            Dynamic header with optional back route and actions
          </h1>
          <p className="max-w-3xl text-base leading-7 text-[#6b6a8f]">
            This component lets you control the title, subtitle, back route,
            and right-side action area independently for pages with different
            header needs.
          </p>
        </div>

        <div className="space-y-8 rounded-[28px] border border-[#ebe9f7] bg-[#fbfaff] p-8">
          <BreadCrumb
            actions={
              <>
                <Button variant="outlined">Manage</Button>
                <Button variant="outlined">Generate Report</Button>
              </>
            }
            backButton="/partners"
            subtitle="Comprehensive partner information and analytics"
            title="Alpha Finance"
          />

          <div className="h-px bg-[#e7e4f6]" />

          <BreadCrumb
            actions={
              <Button>Approve Partner</Button>
            }
            subtitle="Pending documents and validation checks"
            title="Partner Review Queue"
          />

          <div className="h-px bg-[#e7e4f6]" />

          <BreadCrumb
            backButton="/account-opening-item"
            subtitle="Track onboarding activity across the latest submitted applications"
            title="Operations Dashboard"
          />

          <div className="h-px bg-[#e7e4f6]" />

          <BreadCrumb
            actions={
              <Flex gap={12}>
                <Button color="neutral" variant="outlined">
                  Export CSV
                </Button>
                <Button>Share Snapshot</Button>
              </Flex>
            }
            backButton="/company-info-card"
            title="Analytics Summary"
          />
        </div>
      </section>
    </main>
  );
}
