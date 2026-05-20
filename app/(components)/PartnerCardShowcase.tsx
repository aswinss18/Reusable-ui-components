"use client";

import PartnerCard from "./PartnerCard";

export default function PartnerCardShowcase() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f5fb] px-6 py-16">
      <section className="flex w-full max-w-6xl flex-col gap-10 rounded-[32px] bg-white px-8 py-10 shadow-[0_20px_60px_rgba(65,64,153,0.08)] sm:px-12">
        <div className="space-y-3 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Reusable Partner Card
          </p>
          <h1 className="text-3xl font-semibold text-[#1d1b4a]">
            Partner performance card with active and disabled states
          </h1>
          <p className="max-w-3xl text-base leading-7 text-[#6b6a8f]">
            This compact partner card keeps the horizontal dashboard layout for
            commercial metrics, status display, and a right-aligned manage action.
          </p>
        </div>

        <div className="flex flex-col gap-7">
          <PartnerCard>
            <PartnerCard.Row>
              <PartnerCard.Identity>
                <PartnerCard.Avatar>G</PartnerCard.Avatar>
                <PartnerCard.IdentityText>
                  <PartnerCard.Name>Gamma Solutions</PartnerCard.Name>
                  <PartnerCard.Code>PTR-2025-003</PartnerCard.Code>
                </PartnerCard.IdentityText>
              </PartnerCard.Identity>

              <PartnerCard.Metrics>
                <PartnerCard.Metric kind="revenue">
                  <PartnerCard.MetricLabel>Revenue</PartnerCard.MetricLabel>
                  <PartnerCard.MetricValue>Rs.28,500</PartnerCard.MetricValue>
                </PartnerCard.Metric>
                <PartnerCard.Metric kind="accounts">
                  <PartnerCard.MetricLabel>Accounts Open</PartnerCard.MetricLabel>
                  <PartnerCard.MetricValue>6,800</PartnerCard.MetricValue>
                </PartnerCard.Metric>
                <PartnerCard.Metric kind="growth">
                  <PartnerCard.MetricLabel>Growth</PartnerCard.MetricLabel>
                  <PartnerCard.GrowthTag tone="positive">+8%</PartnerCard.GrowthTag>
                </PartnerCard.Metric>
                <PartnerCard.Metric kind="status">
                  <PartnerCard.MetricLabel>Status</PartnerCard.MetricLabel>
                  <PartnerCard.MetricValue>Production</PartnerCard.MetricValue>
                </PartnerCard.Metric>
              </PartnerCard.Metrics>

              <PartnerCard.Actions>
                <PartnerCard.ManageButton>Manage</PartnerCard.ManageButton>
              </PartnerCard.Actions>
            </PartnerCard.Row>
          </PartnerCard>

          <PartnerCard state="disabled">
            <PartnerCard.DisabledBadge>Disabled</PartnerCard.DisabledBadge>
            <PartnerCard.Row>
              <PartnerCard.Identity>
                <PartnerCard.Avatar>D</PartnerCard.Avatar>
                <PartnerCard.IdentityText>
                  <PartnerCard.Name>Delta Corp</PartnerCard.Name>
                  <PartnerCard.Code>PTR-2025-004</PartnerCard.Code>
                </PartnerCard.IdentityText>
              </PartnerCard.Identity>

              <PartnerCard.Metrics>
                <PartnerCard.Metric kind="revenue">
                  <PartnerCard.MetricLabel>Revenue</PartnerCard.MetricLabel>
                  <PartnerCard.MetricValue>Rs.12,000</PartnerCard.MetricValue>
                </PartnerCard.Metric>
                <PartnerCard.Metric kind="accounts">
                  <PartnerCard.MetricLabel>Accounts Open</PartnerCard.MetricLabel>
                  <PartnerCard.MetricValue>2,100</PartnerCard.MetricValue>
                </PartnerCard.Metric>
                <PartnerCard.Metric kind="growth">
                  <PartnerCard.MetricLabel>Growth</PartnerCard.MetricLabel>
                  <PartnerCard.GrowthTag tone="neutral">-5%</PartnerCard.GrowthTag>
                </PartnerCard.Metric>
              </PartnerCard.Metrics>

              <PartnerCard.Actions>
                <PartnerCard.ManageButton>Manage</PartnerCard.ManageButton>
              </PartnerCard.Actions>
            </PartnerCard.Row>
          </PartnerCard>
        </div>
      </section>
    </main>
  );
}
