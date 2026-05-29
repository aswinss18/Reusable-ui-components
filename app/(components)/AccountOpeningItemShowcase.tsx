"use client";

import { Flex, Typography } from "antd";
import AccountOpeningItem from "./AccountOpeningItem";
import styles from "./AccountOpeningItem.module.css";

export default function AccountOpeningItemShowcase() {
  const handleItemClick = (name: string, date: string) => {
    console.log("Clicked on account opening:", { name, date });
  };

  const dummyData = [
    {
      accountHolderName: "Sachin Sharma",
      accountStatus: "opened" as const,
      date: "20-03-2026",
      fundingStatus: "completed" as const,
      kycStatus: "completed" as const,
    },
    {
      accountHolderName: "Priya Patel",
      accountStatus: "opened" as const,
      date: "20-03-2026",
      fundingStatus: "completed" as const,
      kycStatus: "pending" as const,
    },
    {
      accountHolderName: "Rahul Kumar",
      accountStatus: "failed" as const,
      date: "19-03-2026",
      fundingStatus: "failed" as const,
      kycStatus: "pending" as const,
    },
    {
      accountHolderName: "Anita Desai",
      accountStatus: "opened" as const,
      date: "19-03-2026",
      fundingStatus: "completed" as const,
      kycStatus: "completed" as const,
    },
    {
      accountHolderName: "Vikram Singh",
      accountStatus: "opened" as const,
      date: "18-03-2026",
      fundingStatus: "completed" as const,
      kycStatus: "pending" as const,
    },
    {
      accountHolderName: "Meera Reddy",
      accountStatus: "failed" as const,
      date: "18-03-2026",
      fundingStatus: "failed" as const,
      kycStatus: "pending" as const,
    },
  ];

  return (
    <section className="flex w-full flex-col gap-10 rounded-[32px] bg-white px-8 py-10 shadow-[0_20px_60px_rgba(65,64,153,0.08)] sm:px-12">
        <div className="space-y-3 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Reusable Account Opening Item
          </p>
          <h1 className="text-3xl font-semibold text-[#1d1b4a]">
            One component for account opening list items
          </h1>
          <p className="max-w-2xl text-base leading-7 text-[#6b6a8f]">
            This account opening item uses Ant Design only and displays account
            opening information with status indicators. Check the console for clicks.
          </p>
        </div>

        <Flex vertical gap={0}>
          {/* Header */}
          <Flex
            className={styles.headerRow}
            align="center"
            justify="space-between"
          >
            <Flex className={styles.headerDateColumn}>
              <Typography.Text className={styles.headerLabel}>
                Date
              </Typography.Text>
            </Flex>
            <Flex className={styles.headerNameColumn}>
              <Typography.Text className={styles.headerLabel}>
                Account holder name
              </Typography.Text>
            </Flex>
            <Flex className={styles.headerFundingColumn}>
              <Typography.Text className={styles.headerLabel}>
                Funding Status
              </Typography.Text>
            </Flex>
            <Flex className={styles.headerStatusColumn}>
              <Typography.Text className={styles.headerLabel}>
                KYC Status
              </Typography.Text>
            </Flex>
            <Flex className={styles.headerStatusColumn}>
              <Typography.Text className={styles.headerLabel}>
                Account Status
              </Typography.Text>
            </Flex>
          </Flex>

          {/* Items */}
          {dummyData.map((item, index) => (
            <AccountOpeningItem
              key={index}
              data={item}
              onClick={() => handleItemClick(item.accountHolderName, item.date)}
            />
          ))}
        </Flex>
      </section>
  );
}
