"use client";

import { Flex, Typography, Tag } from "antd";
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";
import styles from "./AccountOpeningItem.module.css";

type FundingStatus = "completed" | "failed";
type KYCStatus = "completed" | "pending";
type AccountStatus = "opened" | "failed";

export type AccountOpeningItemProps = {
  data: AccountOpeningItemData;
  onClick?: () => void;
};

export type AccountOpeningItemData = {
  date: string;
  accountHolderName: string;
  fundingStatus: FundingStatus;
  kycStatus: KYCStatus;
  accountStatus: AccountStatus;
};

const fundingStatusConfig = {
  completed: {
    icon: CheckCircleFilled,
    iconClassName: [styles.fundingIcon, styles.fundingIconCompleted].join(" "),
  },
  failed: {
    icon: CloseCircleFilled,
    iconClassName: [styles.fundingIcon, styles.fundingIconFailed].join(" "),
  },
};

const kycStatusConfig = {
  completed: {
    label: "Completed",
    toneClassName: styles.tagCompleted,
  },
  pending: {
    label: "Pending",
    toneClassName: styles.tagPending,
  },
};

const accountStatusConfig = {
  opened: {
    label: "Opened",
    toneClassName: styles.tagOpened,
  },
  failed: {
    label: "Failed",
    toneClassName: styles.tagFailed,
  },
};

export default function AccountOpeningItem({
  data,
  onClick,
}: AccountOpeningItemProps) {
  const {
    date,
    accountHolderName,
    fundingStatus,
    kycStatus,
    accountStatus,
  } = data;
  const fundingConfig = fundingStatusConfig[fundingStatus];
  const kycConfig = kycStatusConfig[kycStatus];
  const accountConfig = accountStatusConfig[accountStatus];
  const FundingIcon = fundingConfig.icon;

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
        <FundingIcon className={fundingConfig.iconClassName} />
      </Flex>

      <Flex className={styles.kycColumn} align="center" justify="center">
        <Tag className={[styles.tag, kycConfig.toneClassName].join(" ")}>
          {kycConfig.label}
        </Tag>
      </Flex>

      <Flex className={styles.accountColumn} align="center" justify="center">
        <Tag className={[styles.tag, accountConfig.toneClassName].join(" ")}>
          {accountConfig.label}
        </Tag>
      </Flex>
    </Flex>
  );
}
