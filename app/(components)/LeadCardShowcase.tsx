"use client";

import Button from "./Button";
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
          <LeadCard>
            <LeadCard.Container>
              <LeadCard.Avatar>T</LeadCard.Avatar>
              <LeadCard.Content>
                <LeadCard.Header>
                  <LeadCard.HeaderText>
                    <LeadCard.TitleRow>
                      <LeadCard.CompanyName>Tech Solutions Inc</LeadCard.CompanyName>
                      <LeadCard.CategoryTag>Enterprise</LeadCard.CategoryTag>
                    </LeadCard.TitleRow>
                    <LeadCard.Subtitle>PTR-2025-001</LeadCard.Subtitle>
                  </LeadCard.HeaderText>
                  <LeadCard.HeaderActions>
                    <Button style={{ minWidth: 74 }}>Approve</Button>
                    <Button color="danger" style={{ minWidth: 71 }} variant="outlined">
                      Reject
                    </Button>
                  </LeadCard.HeaderActions>
                </LeadCard.Header>

                <LeadCard.Details>
                  <LeadCard.DetailItem withBorder>
                    <LeadCard.DetailLabel>Contact Person</LeadCard.DetailLabel>
                    <LeadCard.DetailValue>Rajesh Kumar</LeadCard.DetailValue>
                  </LeadCard.DetailItem>
                  <LeadCard.DetailItem withBorder>
                    <LeadCard.DetailLabel>Mobile Number</LeadCard.DetailLabel>
                    <LeadCard.DetailValue>+91 9999999999</LeadCard.DetailValue>
                  </LeadCard.DetailItem>
                  <LeadCard.DetailItem>
                    <LeadCard.DetailLabel>Email Address</LeadCard.DetailLabel>
                    <LeadCard.DetailValue>rajesh.kumar@techsol.com</LeadCard.DetailValue>
                  </LeadCard.DetailItem>
                  <LeadCard.EditAction />
                </LeadCard.Details>

                <LeadCard.AppliedOn>Applied on: 2026-03-15</LeadCard.AppliedOn>
              </LeadCard.Content>
            </LeadCard.Container>
          </LeadCard>

          <LeadCard>
            <LeadCard.Container>
              <LeadCard.Avatar>L</LeadCard.Avatar>
              <LeadCard.Content>
                <LeadCard.Header>
                  <LeadCard.HeaderText>
                    <LeadCard.TitleRow>
                      <LeadCard.CompanyName>LeadBridge Commerce</LeadCard.CompanyName>
                      <LeadCard.CategoryTag>SME</LeadCard.CategoryTag>
                    </LeadCard.TitleRow>
                    <LeadCard.Subtitle>leadbridge@company.com</LeadCard.Subtitle>
                  </LeadCard.HeaderText>
                  <LeadCard.StatusTag status="approved">Approved</LeadCard.StatusTag>
                </LeadCard.Header>

                <LeadCard.Details>
                  <LeadCard.DetailItem withBorder>
                    <LeadCard.DetailLabel>Contact Person</LeadCard.DetailLabel>
                    <LeadCard.DetailValue>Anita Menon</LeadCard.DetailValue>
                  </LeadCard.DetailItem>
                  <LeadCard.DetailItem withBorder>
                    <LeadCard.DetailLabel>Mobile Number</LeadCard.DetailLabel>
                    <LeadCard.DetailValue>+91 9876543210</LeadCard.DetailValue>
                  </LeadCard.DetailItem>
                  <LeadCard.DetailItem>
                    <LeadCard.DetailLabel>Email Address</LeadCard.DetailLabel>
                    <LeadCard.DetailValue>anita@leadbridge.com</LeadCard.DetailValue>
                  </LeadCard.DetailItem>
                  <LeadCard.EditAction />
                </LeadCard.Details>

                <LeadCard.AppliedOn>Applied on: 2026-03-14</LeadCard.AppliedOn>
              </LeadCard.Content>
            </LeadCard.Container>
          </LeadCard>

          <LeadCard>
            <LeadCard.Container>
              <LeadCard.Avatar>Q</LeadCard.Avatar>
              <LeadCard.Content>
                <LeadCard.Header>
                  <LeadCard.HeaderText>
                    <LeadCard.TitleRow>
                      <LeadCard.CompanyName>QuickPay Solutions</LeadCard.CompanyName>
                      <LeadCard.CategoryTag>Startup</LeadCard.CategoryTag>
                    </LeadCard.TitleRow>
                    <LeadCard.Subtitle>info@quickpay.com</LeadCard.Subtitle>
                  </LeadCard.HeaderText>
                  <LeadCard.StatusTag status="rejected">Rejected</LeadCard.StatusTag>
                </LeadCard.Header>

                <LeadCard.Details>
                  <LeadCard.DetailItem withBorder>
                    <LeadCard.DetailLabel>Contact Person</LeadCard.DetailLabel>
                    <LeadCard.DetailValue>Rajesh Kumar</LeadCard.DetailValue>
                  </LeadCard.DetailItem>
                  <LeadCard.DetailItem withBorder>
                    <LeadCard.DetailLabel>Mobile Number</LeadCard.DetailLabel>
                    <LeadCard.DetailValue>+91 9999999999</LeadCard.DetailValue>
                  </LeadCard.DetailItem>
                  <LeadCard.DetailItem>
                    <LeadCard.DetailLabel>Email Address</LeadCard.DetailLabel>
                    <LeadCard.DetailValue>rajesh.kumar@techsol.com</LeadCard.DetailValue>
                  </LeadCard.DetailItem>
                  <LeadCard.EditAction />
                </LeadCard.Details>

                <LeadCard.Reason>
                  <LeadCard.ReasonLabel>Rejection Reason:</LeadCard.ReasonLabel>
                  <LeadCard.ReasonValue>
                    Incomplete documentation and insufficient business track record
                  </LeadCard.ReasonValue>
                </LeadCard.Reason>

                <LeadCard.AppliedOn>Applied on: 2026-03-12</LeadCard.AppliedOn>
              </LeadCard.Content>
            </LeadCard.Container>
          </LeadCard>
        </div>
      </section>
    </main>
  );
}
