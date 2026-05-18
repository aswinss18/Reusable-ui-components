"use client";

import Button from "./Button";

export default function ButtonShowcase() {
  const handleClick = (label: string) => () => {
    console.log(`${label} clicked`);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f5fb] px-6 py-16">
      <section className="flex w-full max-w-4xl flex-col gap-10 rounded-[32px] bg-white px-8 py-10 shadow-[0_20px_60px_rgba(65,64,153,0.08)] sm:px-12">
        <div className="space-y-3 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Reusable Button
          </p>
          <h1 className="text-3xl font-semibold text-[#1d1b4a]">
            One component for every button style
          </h1>
          <p className="max-w-2xl text-base leading-7 text-[#6b6a8f]">
            This button uses props for style and color, while the actual look
            stays in a separate CSS file for a standard reusable setup.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-[#ebe9f7] bg-[#fbfaff] p-8">
            <p className="mb-5 text-sm font-medium text-[#8c89b6]">
              Filled variant
            </p>
            <Button onClick={handleClick("Generate Report")}>Generate Report</Button>
          </div>

          <div className="rounded-3xl border border-[#ebe9f7] bg-[#fbfaff] p-8">
            <p className="mb-5 text-sm font-medium text-[#8c89b6]">
              Outlined variant
            </p>
            <Button onClick={handleClick("Manage")} variant="outlined">
              Manage
            </Button>
          </div>

          <div className="rounded-3xl border border-[#ebe9f7] bg-[#fbfaff] p-8">
            <p className="mb-5 text-sm font-medium text-[#8c89b6]">
              Secondary color example
            </p>
            <Button color="secondary" onClick={handleClick("Approve")}>
              Approve
            </Button>
          </div>

          <div className="rounded-3xl border border-[#ebe9f7] bg-[#fbfaff] p-8">
            <p className="mb-5 text-sm font-medium text-[#8c89b6]">
              Neutral outlined
            </p>
            <Button
              color="neutral"
              onClick={handleClick("Cancel")}
              variant="outlined"
            >
              Cancel
            </Button>
          </div>

          <div className="rounded-3xl border border-[#ebe9f7] bg-[#fbfaff] p-8">
            <p className="mb-5 text-sm font-medium text-[#8c89b6]">
              Danger filled
            </p>
            <Button color="danger" onClick={handleClick("Disable partner")}>
              Disable partner
            </Button>
          </div>

          <div className="rounded-3xl border border-[#ebe9f7] bg-[#fbfaff] p-8 md:col-span-2">
            <p className="mb-5 text-sm font-medium text-[#8c89b6]">
              Danger outlined
            </p>
            <Button
              color="danger"
              onClick={handleClick("Reject")}
              variant="outlined"
            >
              Reject
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
