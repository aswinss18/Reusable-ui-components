import Link from "next/link";

const components = [
  {
    href: "/button",
    name: "Button",
    description: "Primary, secondary, danger, and neutral button variants.",
  },
  {
    href: "/stat-card",
    name: "StatCard",
    description: "Dashboard summary cards with change pills and highlighted state.",
  },
  {
    href: "/limit-card",
    name: "LimitCard",
    description: "Usage limit cards with circular utilization charts and color variants.",
  },
  {
    href: "/modal",
    name: "Modal",
    description: "Reusable modal with title prop, close button, and child-driven body content.",
  },
  {
    href: "/contact-card",
    name: "ContactCard",
    description: "Partner and email contact card with success, danger, and warning variants.",
  },
  {
    href: "/price-card",
    name: "PriceCard",
    description: "Simple pricing display card with title and value.",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f5fb] px-6 py-16">
      <section className="flex w-full max-w-4xl flex-col gap-10 rounded-[32px] bg-white px-8 py-10 shadow-[0_20px_60px_rgba(65,64,153,0.08)] sm:px-12">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            UI Components
          </p>
          <h1 className="text-3xl font-semibold text-[#1d1b4a]">
            Component library preview
          </h1>
          <p className="max-w-2xl text-base leading-7 text-[#6b6a8f]">
            Select a component from the list below to open its dedicated route.
            Each component page can show all available states and variations.
          </p>
        </div>

        <div className="grid gap-5">
          {components.map((component) => (
            <Link
              key={component.href}
              href={component.href}
              className="group rounded-[24px] border border-[#ebe9f7] bg-[#fbfaff] p-6 transition hover:-translate-y-0.5 hover:border-[#d9d5f3] hover:shadow-[0_16px_40px_rgba(65,64,153,0.10)]"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold text-[#1d1b4a]">
                    {component.name}
                  </h2>
                  <p className="text-base leading-7 text-[#6b6a8f]">
                    {component.description}
                  </p>
                </div>
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-primary transition group-hover:translate-x-1">
                  Open
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
