"use client";

import LeadCard from "./LeadCard";

export default function LeadCardShowcase() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f5fb] px-6 py-16">
      <section className="flex w-full max-w-6xl flex-col gap-10 rounded-[32px] bg-white px-8 py-10 shadow-[0_20px_60px_rgba(65,64,153,0.08)] sm:px-12">
        <div className="space-y-3 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Reusable Lead Card
          </p>
          <h1 className="text-3xl font-semibold text-[#1d1b4a]">
            Lead summary card with reusable status and rejection states
          </h1>
          <p className="max-w-3xl text-base leading-7 text-[#6b6a8f]">
            Use the same component for approved, pending, and rejected leads while
            keeping the exact company summary layout and contact details block.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <LeadCard
            appliedOn="2026-03-15"
            avatarText="T"
            category="Enterprise"
            companyName="Tech Solutions Inc"
            contactPerson="Rajesh Kumar"
            emailAddress="rajesh.kumar@techsol.com"
            mobileNumber="+91 9999999999"
            status="approved"
            subtitle="PTR-2025-001"
          />

          <LeadCard
            appliedOn="2026-03-14"
            avatarText="L"
            category="SME"
            companyName="LeadBridge Commerce"
            contactPerson="Anita Menon"
            emailAddress="anita@leadbridge.com"
            mobileNumber="+91 9876543210"
            status="pending"
            subtitle="leadbridge@company.com"
          />

          <LeadCard
            appliedOn="2026-03-12"
            avatarText="Q"
            category="Startup"
            companyName="QuickPay Solutions"
            contactPerson="Rajesh Kumar"
            emailAddress="rajesh.kumar@techsol.com"
            mobileNumber="+91 9999999999"
            rejectionReason="Incomplete documentation and insufficient business track record"
            status="rejected"
            subtitle="info@quickpay.com"
          />
        </div>
      </section>
    </main>
  );
}
