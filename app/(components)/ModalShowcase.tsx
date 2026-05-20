"use client";

import {
  Avatar,
  Checkbox,
  Flex,
  Input,
  Select,
  Space,
  Tag,
  Typography,
} from "antd";
import { useState, useSyncExternalStore } from "react";
import AccountOpeningItem from "./AccountOpeningItem";
import Button from "./Button";
import CompanyInfoCard from "./CompanyInfoCard";
import ContactCard from "./ContactCard";
import Modal from "./Modal";
import PriceCard from "./PriceCard";
import Tabs from "./Tabs";

type ModalExample =
  | "compact"
  | "approval"
  | "company"
  | "pricing"
  | "review";

const modalCards = [
  {
    key: "compact" as const,
    blurb: "410px, plain header, inline actions",
    label: "Compact Form",
  },
  {
    key: "approval" as const,
    blurb: "410px, styled footer, approval flow",
    label: "Branded Approval",
  },
  {
    key: "company" as const,
    blurb: "960px, wide content, right footer actions",
    label: "Company Details",
  },
  {
    key: "pricing" as const,
    blurb: "720px, summary content, centered focus",
    label: "Pricing Summary",
  },
  {
    key: "review" as const,
    blurb: "880px, tabs and list content, footer CTA",
    label: "Operations Reviews",
  },
];

function ModalLaunchCard({
  blurb,
  label,
  onOpen,
}: {
  blurb: string;
  label: string;
  onOpen: () => void;
}) {
  return (
    <div className="rounded-[24px] border border-[#ebe9f7] bg-[#fbfaff] p-8">
      <div className="flex h-full flex-col items-start gap-4">
        <p className="text-sm font-medium text-[#8c89b6]">{blurb}</p>
        <h2 className="text-2xl font-semibold text-[#1d1b4a]">{label}</h2>
        <Button onClick={onOpen} variant="outlined">
          Open {label}
        </Button>
      </div>
    </div>
  );
}

export default function ModalShowcase() {
  const [activeModal, setActiveModal] = useState<ModalExample>("approval");
  const mounted = useSyncExternalStore(
    () => () => { },
    () => true,
    () => false,
  );

  const closeModal = () => setActiveModal(null as never);
  const openModal = (example: ModalExample) => setActiveModal(example);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f5fb] px-6 py-16">
      <section className="flex w-full max-w-6xl flex-col gap-10 rounded-[32px] bg-white px-8 py-10 shadow-[0_20px_60px_rgba(65,64,153,0.08)] sm:px-12">
        <div className="space-y-3 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Reusable Modal
          </p>
          <h1 className="text-3xl font-semibold text-[#1d1b4a]">
            Modal combinations with reusable content and widths
          </h1>
          <p className="max-w-3xl text-base leading-7 text-[#6b6a8f]">
            This gallery shows the same modal component handling compact forms,
            branded approvals, wide information layouts, pricing summaries, and
            review screens with different widths and footer behaviors.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {modalCards.map((card) => (
            <ModalLaunchCard
              key={card.key}
              blurb={card.blurb}
              label={card.label}
              onOpen={() => openModal(card.key)}
            />
          ))}
        </div>

        {mounted ? (
          <>
            <Modal
              actions={
                <>
                  <Button
                    color="neutral"
                    onClick={closeModal}
                    style={{ minWidth: 120 }}
                    variant="outlined"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => console.log("Create partner clicked")}
                    style={{ minWidth: 140 }}
                  >
                    Create Partner
                  </Button>
                </>
              }
              onClose={closeModal}
              open={activeModal === "compact"}
              title="Create Partner"
              width={410}
            >
              <div className="space-y-5">
                <div className="space-y-2">
                  <label
                    className="block text-base font-semibold text-[#2f2a63]"
                    htmlFor="compact-partner-name"
                  >
                    Partner Name <span className="text-[#ea4335]">*</span>
                  </label>
                  <Input
                    id="compact-partner-name"
                    placeholder="Enter Partner Name"
                    size="large"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    className="block text-base font-semibold text-[#2f2a63]"
                    htmlFor="compact-category"
                  >
                    Category
                  </label>
                  <Select
                    id="compact-category"
                    options={[
                      { label: "Enterprise", value: "enterprise" },
                      { label: "Retail", value: "retail" },
                      { label: "SME", value: "sme" },
                    ]}
                    placeholder="Select Category"
                    size="large"
                  />
                </div>

                <Checkbox>Send onboarding email after creation</Checkbox>
              </div>
            </Modal>

            <Modal
              actions={
                <>
                  <Button
                    color="neutral"
                    onClick={closeModal}
                    style={{ minWidth: 120 }}
                    variant="outlined"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => console.log("Proceed clicked")}
                    style={{ minWidth: 140 }}
                  >
                    Proceed
                  </Button>
                </>
              }
              actionsAlign="space-between"
              footer
              onClose={closeModal}
              open={activeModal === "approval"}
              title="Approve Partner"
              width={410}
            >
              <div className="space-y-6">
                <ContactCard
                  data={{
                    email: "contact@techcorp.com",
                    partner: "TechCorp Solutions",
                  }}
                  variant="danger"
                />

                <div className="space-y-2">
                  <label
                    className="block text-base font-semibold text-[#2f2a63]"
                    htmlFor="approval-partner-id"
                  >
                    Partner ID <span className="text-[#ea4335]">*</span>
                  </label>
                  <Input
                    id="approval-partner-id"
                    placeholder="Enter Partner ID"
                    size="large"
                  />
                  <p className="text-sm text-[#9a98b4]">
                    This will be assigned to the approved partner
                  </p>
                </div>
              </div>
            </Modal>

            <Modal
              actions={
                <>
                  <Button
                    color="neutral"
                    onClick={closeModal}
                    style={{ minWidth: 120 }}
                    variant="outlined"
                  >
                    Close
                  </Button>
                  <Button
                    onClick={() => console.log("Save company info")}
                    style={{ minWidth: 160 }}
                  >
                    Save Changes
                  </Button>
                </>
              }
              actionsAlign="right"
              footer
              onClose={closeModal}
              open={activeModal === "company"}
              title="Company Profile"
              width={960}
            >
              <CompanyInfoCard
                data={{
                  address: "123 Business Park, Mumbai, Maharashtra 400001",
                  category: "Enterprise",
                  companyName: "Alpha Finance",
                  email: "contact@alphafinance.com",
                  gstNumber: "1200ABCDE1234F2568",
                  phone: "+91 98765 43210",
                  primaryContact: "Rajesh Kumar",
                  registeredOn: "15/01/2025",
                  taxId: "ABCDE1234F",
                }}
              />
            </Modal>

            <Modal
              actions={
                <>
                  <Button
                    color="neutral"
                    onClick={closeModal}
                    style={{ minWidth: 120 }}
                    variant="outlined"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={() => console.log("Confirm plan")}
                    style={{ minWidth: 160 }}
                  >
                    Confirm Plan
                  </Button>
                </>
              }
              footer
              onClose={closeModal}
              open={activeModal === "pricing"}
              title="Pricing Summary"
              width={720}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <Typography.Text className="text-base font-semibold text-[#2f2a63]">
                    Selected plan for Beta Finance
                  </Typography.Text>
                  <Typography.Paragraph className="m-0 text-base leading-7 text-[#6b6a8f]">
                    Review the monthly pricing mix and confirm the rollout
                    before sending it to the client.
                  </Typography.Paragraph>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <PriceCard data={{ title: "Monthly Fee", value: "₹2,500" }} />
                  <PriceCard data={{ title: "Setup Charges", value: "₹12,000" }} />
                  <PriceCard data={{ title: "Support SLA", value: "24 Hours" }} />
                </div>

                <Space size={[8, 8]} wrap>
                  <Tag color="blue">Enterprise</Tag>
                  <Tag color="green">KYC Included</Tag>
                  <Tag color="purple">Dedicated RM</Tag>
                </Space>
              </div>
            </Modal>

            <Modal
              actions={
                <>
                  <Button
                    color="neutral"
                    onClick={closeModal}
                    style={{ minWidth: 120 }}
                    variant="outlined"
                  >
                    Dismiss
                  </Button>
                  <Button
                    onClick={() => console.log("Submit review")}
                    style={{ minWidth: 170 }}
                  >
                    Submit Review
                  </Button>
                </>
              }
              closeOnBackdropClick={false}
              footer
              fitContentWidth
              onClose={closeModal}
              open={activeModal === "review"}
              title="Operations Review"
              width={880}
            >
              <div className="space-y-6">
                <Flex align="center" justify="space-between">
                  <div className="space-y-1">
                    <Typography.Text className="text-base font-semibold text-[#2f2a63]">
                      Daily onboarding queue
                    </Typography.Text>
                    <Typography.Paragraph className="m-0 text-sm leading-6 text-[#8f8db2]">
                      Review pending accounts and finalize approvals for the
                      morning batch.
                    </Typography.Paragraph>
                  </div>

                  <Avatar
                    style={{ backgroundColor: "#e9e8fb", color: "#414099" }}
                    size={44}
                  >
                    RM
                  </Avatar>
                </Flex>

                <Tabs
                  defaultActiveKey="pending"
                  items={[
                    {
                      badgeColor: "#ED1B2F",
                      badgeCount: 7,
                      key: "pending",
                      label: "Pending for Actions",
                    },
                    {
                      badgeColor: "#0CC496",
                      badgeCount: 4,
                      key: "approved",
                      label: "Approved",
                    },
                    {
                      badgeColor: "#000000",
                      badgeCount: 2,
                      key: "rejected",
                      label: "Rejected",
                    },
                  ]}
                  type="filter"
                />

                <div className="space-y-3">
                  <AccountOpeningItem
                    data={{
                      accountHolderName: "Aarav Capital",
                      accountStatus: "opened",
                      date: "19 May 2026",
                      fundingStatus: "completed",
                      kycStatus: "completed",
                    }}
                  />
                  <AccountOpeningItem
                    data={{
                      accountHolderName: "Northgate Traders",
                      accountStatus: "failed",
                      date: "19 May 2026",
                      fundingStatus: "failed",
                      kycStatus: "pending",
                    }}
                  />
                </div>
              </div>
            </Modal>
          </>
        ) : null}
      </section>
    </main>
  );
}
