"use client";

import { Flex, Typography, Tag } from "antd";
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";
import styles from "./AccountOpeningItem.module.css";

type FundingStatus = "completed" | "failed";
type KYCStatus = "completed" | "pending";
type AccountStatus = "opened" | "failed";

export type AccountOpeningItemProps = {
  date: string;
  accountHolderName: string;
  fundingStatus: FundingStatus;
  kycStatus: KYCStatus;
  accountStatus: AccountStatus;
  onClick?: () => void;
};

const fundingStatusConfig = {
  completed: {
    icon: <CheckCircleFilled style={{ fontSize: 18, color: "#1CB791" }} />,
  },
  failed: {
    icon: <CloseCircleFilled style={{ fontSize: 18, color: "#DB3529" }} />,
  },
};

const kycStatusConfig = {
  completed: {
    label: "Completed",
    color: "#1CB791",
    backgroundColor: "#2BCCA433",
    borderColor: "#1CB791",
  },
  pending: {
    label: "Pending",
    color: "#A65F00",
    backgroundColor: "#FEF9C2",
    borderColor: "#A65F00",
  },
};

const accountStatusConfig = {
  opened: {
    label: "Opened",
    color: "#1CB791",
    backgroundColor: "#2BCCA433",
    borderColor: "#1CB791",
  },
  failed: {
    label: "Failed",
    color: "#DB3529",
    backgroundColor: "#FFE2E2",
    borderColor: "#DB3529",
  },
};

export default function AccountOpeningItem({
  date,
  accountHolderName,
  fundingStatus,
  kycStatus,
  accountStatus,
  onClick,
}: AccountOpeningItemProps) {
  const fundingConfig = fundingStatusConfig[fundingStatus];
  const kycConfig = kycStatusConfig[kycStatus];
  const accountConfig = accountStatusConfig[accountStatus];

  return (
    <Flex
      className={styles.item}
      align="center"
      justify="space-between"
      onClick={onClick}
    >
      <Flex className={styles.dateColumn} align="center">
        <Typography.Text className={styles.date}>{date}</Typography.Text>
      </Flex>

      <Flex className={styles.nameColumn} align="center">
        <Typography.Text className={styles.name}>
          {accountHolderName}
        </Typography.Text>
      </Flex>

      <Flex className={styles.fundingColumn} align="center" justify="center">
        {fundingConfig.icon}
      </Flex>

      <Flex className={styles.kycColumn} align="center" justify="center">
        <Tag
          className={styles.tag}
          style={{
            color: kycConfig.color,
            backgroundColor: kycConfig.backgroundColor,
          }}
        >
          {kycConfig.label}
        </Tag>
      </Flex>

      <Flex className={styles.accountColumn} align="center" justify="center">
        <Tag
          className={styles.tag}
          style={{
            color: accountConfig.color,
            backgroundColor: accountConfig.backgroundColor,
          }}
        >
          {accountConfig.label}
        </Tag>
      </Flex>
    </Flex>
  );
}
