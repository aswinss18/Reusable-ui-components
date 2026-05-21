"use client";

import ContactCard from "./ContactCard";

export default function ContactCardShowcase() {
  return (
    <section className="flex w-full flex-col gap-10 rounded-[32px] bg-white px-8 py-10 shadow-[0_20px_60px_rgba(65,64,153,0.08)] sm:px-12">
        <div className="space-y-3 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Reusable Contact Card
          </p>
          <h1 className="text-3xl font-semibold text-[#1d1b4a]">
            One card component for partner contact details
          </h1>
          <p className="max-w-2xl text-base leading-7 text-[#6b6a8f]">
            This contact card uses Ant Design only and supports success, danger,
            and warning variants with the same reusable structure.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <ContactCard
            data={{ email: "contact@techcorp.com", partner: "TechCorp Solutions" }}
            variant="success"
          />
          <ContactCard
            data={{ email: "contact@techcorp.com", partner: "TechCorp Solutions" }}
            variant="danger"
          />
          <ContactCard
            data={{ email: "contact@techcorp.com", partner: "TechCorp Solutions" }}
            variant="warning"
          />
        </div>
      </section>
  );
}
