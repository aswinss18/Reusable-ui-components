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

        <CompanyInfoCard>
          <CompanyInfoCard.Container>
            <CompanyInfoCard.Header>
              <CompanyInfoCard.HeaderTitle>Company Information</CompanyInfoCard.HeaderTitle>
              <CompanyInfoCard.EditButton />
            </CompanyInfoCard.Header>

            <CompanyInfoCard.Content>
              <CompanyInfoCard.LeftColumn>
                <CompanyInfoCard.LeftGroup>
                  <CompanyInfoCard.InfoItem>
                    <CompanyInfoCard.Label>Company Name</CompanyInfoCard.Label>
                    <CompanyInfoCard.Value>Alpha Finance</CompanyInfoCard.Value>
                  </CompanyInfoCard.InfoItem>
                  <CompanyInfoCard.InfoItem>
                    <CompanyInfoCard.Label>Tax ID</CompanyInfoCard.Label>
                    <CompanyInfoCard.Value>ABCDE1234F</CompanyInfoCard.Value>
                  </CompanyInfoCard.InfoItem>
                  <CompanyInfoCard.InfoItem>
                    <CompanyInfoCard.Label>GST Number</CompanyInfoCard.Label>
                    <CompanyInfoCard.Value>1200ABCDE1234F2568</CompanyInfoCard.Value>
                  </CompanyInfoCard.InfoItem>
                </CompanyInfoCard.LeftGroup>

                <CompanyInfoCard.LeftGroup>
                  <CompanyInfoCard.InfoItem>
                    <CompanyInfoCard.Label>Category</CompanyInfoCard.Label>
                    <CompanyInfoCard.CategoryTag>Enterprise</CompanyInfoCard.CategoryTag>
                  </CompanyInfoCard.InfoItem>
                  <CompanyInfoCard.InfoItem>
                    <CompanyInfoCard.Label>Registered On</CompanyInfoCard.Label>
                    <CompanyInfoCard.Value>15/01/2025</CompanyInfoCard.Value>
                  </CompanyInfoCard.InfoItem>
                </CompanyInfoCard.LeftGroup>
              </CompanyInfoCard.LeftColumn>

              <CompanyInfoCard.Divider />

              <CompanyInfoCard.RightColumn>
                <CompanyInfoCard.ContactItem icon={CompanyInfoCard.Icons.Team}>
                  <CompanyInfoCard.Label>Primary Contact</CompanyInfoCard.Label>
                  <CompanyInfoCard.Value>Rajesh Kumar</CompanyInfoCard.Value>
                </CompanyInfoCard.ContactItem>
                <CompanyInfoCard.ContactItem icon={CompanyInfoCard.Icons.Mail}>
                  <CompanyInfoCard.Label>Email</CompanyInfoCard.Label>
                  <CompanyInfoCard.Value>contact@alphafinance.com</CompanyInfoCard.Value>
                </CompanyInfoCard.ContactItem>
                <CompanyInfoCard.ContactItem icon={CompanyInfoCard.Icons.Phone}>
                  <CompanyInfoCard.Label>Phone</CompanyInfoCard.Label>
                  <CompanyInfoCard.Value>+91 98765 43210</CompanyInfoCard.Value>
                </CompanyInfoCard.ContactItem>
                <CompanyInfoCard.ContactItem icon={CompanyInfoCard.Icons.Environment}>
                  <CompanyInfoCard.Label>Address</CompanyInfoCard.Label>
                  <CompanyInfoCard.Value>
                    123 Business Park, Mumbai, Maharashtra 400001
                  </CompanyInfoCard.Value>
                </CompanyInfoCard.ContactItem>
              </CompanyInfoCard.RightColumn>
            </CompanyInfoCard.Content>
          </CompanyInfoCard.Container>
        </CompanyInfoCard>
      </section>
    </main>
  );
}
