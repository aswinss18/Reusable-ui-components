"use client";

import CompanyInfoCard from "./CompanyInfoCard";

export default function CompanyInfoCardShowcase() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f5fb] px-6 py-16">
      <section className="flex w-full max-w-7xl flex-col gap-10 rounded-[32px] bg-white px-8 py-10 shadow-[0_20px_60px_rgba(65,64,153,0.08)] sm:px-12">
        <div className="space-y-3 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Reusable Company Info Card
          </p>
          <h1 className="text-3xl font-semibold text-[#1d1b4a]">
            One card component for company information
          </h1>
          <p className="max-w-2xl text-base leading-7 text-[#6b6a8f]">
            This card uses Ant Design components and icons only, with fixed
            typography and layout for company and contact details.
          </p>
        </div>

        <CompanyInfoCard
          address="123 Business Park, Mumbai, Maharashtra 400001"
          category="Enterprise"
          companyName="Alpha Finance"
          email="contact@alphafinance.com"
          gstNumber="1200ABCDE1234F2568"
          phone="+91 98765 43210"
          primaryContact="Rajesh Kumar"
          registeredOn="15/01/2025"
          taxId="ABCDE1234F"
        />
      </section>
    </main>
  );
}
