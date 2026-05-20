"use client";

import ButtonGroup from "./ButtonGroup";

export default function ButtonGroupShowcase() {
  const handleAction = (label: string) => () => {
    console.log(`${label} clicked`);
  };

  const searchButtons = [
    {
      label: "Search",
      onClick: handleAction("Search"),
    },
    {
      label: "Clear",
      onClick: handleAction("Clear"),
      variant: "outlined" as const,
      color: "neutral" as const,
    },
  ];

  const approvalButtons = [
    {
      label: "Approve",
      color: "secondary" as const,
      onClick: handleAction("Approve"),
    },
    {
      label: "Reject",
      color: "danger" as const,
      onClick: handleAction("Reject"),
      variant: "outlined" as const,
    },
    {
      label: "Request Changes",
      color: "neutral" as const,
      onClick: handleAction("Request Changes"),
      variant: "outlined" as const,
    },
  ];

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f5fb] px-6 py-16">
      <section className="flex w-full max-w-5xl flex-col gap-10 rounded-[32px] bg-white px-8 py-10 shadow-[0_20px_60px_rgba(65,64,153,0.08)] sm:px-12">
        <div className="space-y-3 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Reusable Button Group
          </p>
          <h1 className="text-3xl font-semibold text-[#1d1b4a]">
            Config-driven button rendering with Ant Design
          </h1>
          <p className="max-w-3xl text-base leading-7 text-[#6b6a8f]">
            Pass an array of button configurations and let the component render
            the full action row with consistent alignment, spacing, and sizing.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="rounded-3xl border border-[#ebe9f7] bg-[#fbfaff] p-8">
            <p className="mb-5 text-sm font-medium text-[#8c89b6]">
              Left-aligned search actions
            </p>
            <ButtonGroup align="left" buttons={searchButtons} />
          </div>

          <div className="rounded-3xl border border-[#ebe9f7] bg-[#fbfaff] p-8">
            <p className="mb-5 text-sm font-medium text-[#8c89b6]">
              Center-aligned equal-width actions
            </p>
            <ButtonGroup buttons={approvalButtons} matchWidth />
          </div>

          <div className="rounded-3xl border border-[#ebe9f7] bg-[#fbfaff] p-8">
            <p className="mb-5 text-sm font-medium text-[#8c89b6]">
              Right-aligned actions with custom margin
            </p>
            <ButtonGroup align="right" buttons={searchButtons} />
          </div>
        </div>
      </section>
    </main>
  );
}
