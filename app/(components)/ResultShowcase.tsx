"use client";

import { Card, Flex, Typography } from "antd";
import Result from "./Result";

const showcaseItems = [
  {
    key: "empty",
    eyebrow: "Empty",
    title: "General empty state",
    description: "Use this for standard empty sections, cards, and blank dashboard surfaces.",
    type: "empty" as const,
    message: "Nothing is available here yet.",
  },
  {
    key: "datagrid",
    eyebrow: "Datagrid",
    title: "Table and list fallback",
    description: "A table-friendly empty state for rows, logs, reports, and list-based modules.",
    type: "datagrid" as const,
    message: "No rows available for this data source.",
  },
  {
    key: "info",
    eyebrow: "Info",
    title: "Informational result",
    description: "Use this when you need to communicate neutral context or the next recommended step.",
    type: "info" as const,
  },
  {
    key: "warning",
    eyebrow: "Warning",
    title: "Warning result",
    description: "A cautionary state for incomplete, risky, or review-required flows before submission.",
    type: "warning" as const,
  },
  {
    key: "error",
    eyebrow: "Error",
    title: "Generic error result",
    description: "A broad failure state for action errors that are not tied to a specific HTTP-style route.",
    type: "error" as const,
  },
  {
    key: "not-found",
    eyebrow: "404",
    title: "Missing page result",
    description: "Uses Ant Design's route-style result visual for unmatched or missing screens.",
    type: "not-found" as const,
  },
  {
    key: "bad-request",
    eyebrow: "403",
    title: "Bad request result",
    description: "Use this when the route or submitted request is invalid for the current flow.",
    type: "bad-request" as const,
    message: "The current request cannot be completed with the provided route or input.",
  },
  {
    key: "confirmed",
    eyebrow: "Success",
    title: "Confirmed state",
    description: "A positive confirmation result for completed actions and successful submissions.",
    type: "confirmed" as const,
  },
  {
    key: "server-error",
    eyebrow: "500",
    title: "Server error result",
    description: "A stronger failure state for backend or infrastructure issues that block the user.",
    type: "server-error" as const,
  },
];

export default function ResultShowcase() {
  return (
    <section className="flex w-full flex-col gap-10 rounded-[32px] bg-white px-8 py-10 shadow-[0_20px_60px_rgba(65,64,153,0.08)] sm:px-12">
      <div className="space-y-3 text-center sm:text-left">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
          Reusable Result Component
        </p>
        <h1 className="text-3xl font-semibold text-[#1d1b4a]">
          One result component for empty, route, success, and error states
        </h1>
        <p className="max-w-3xl text-base leading-7 text-[#6b6a8f]">
          This shared component combines Ant Design&apos;s `Empty` and `Result` patterns into one
          reusable API. Empty states keep the app&apos;s purple illustration treatment, while
          route and status scenarios render distinct Ant Design result visuals across the full
          common result set.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        {showcaseItems.map((item) => (
          <Card
            key={item.key}
            variant="borderless"
            className="rounded-[28px] border border-[#ebe9f7] bg-[#fbfaff]"
            styles={{
              body: {
                padding: 28,
              },
            }}
          >
            <Flex vertical gap={24}>
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8c89b6]">
                  {item.eyebrow}
                </p>
                <Typography.Title level={4} style={{ margin: 0, color: "#1d1b4a" }}>
                  {item.title}
                </Typography.Title>
                <Typography.Paragraph
                  style={{
                    margin: 0,
                    color: "#6b6a8f",
                    fontSize: 15,
                    lineHeight: 1.75,
                  }}
                >
                  {item.description}
                </Typography.Paragraph>
              </div>

              <div className="rounded-[24px] border border-[#ebe9f7] bg-white px-6 py-8">
                <Result message={item.message} type={item.type} />
              </div>
            </Flex>
          </Card>
        ))}
      </div>
    </section>
  );
}
