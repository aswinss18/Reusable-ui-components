"use client";

import { Flex, Typography } from "antd";
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";
import Tag from "./Tag";
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
    statusValue: "Completed" as const,
  },
  pending: {
    label: "Pending",
    statusValue: "Pending" as const,
  },
};

const accountStatusConfig = {
  opened: {
    label: "Opened",
    statusValue: "Opened" as const,
  },
  failed: {
    label: "Failed",
    statusValue: "Failed" as const,
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
        <Tag type="status" statusValue={kycConfig.statusValue} >
          {kycConfig.label}
        </Tag>
      </Flex>

      <Flex className={styles.accountColumn} align="center" justify="center">
        <Tag type="status" statusValue={accountConfig.statusValue} >
          {accountConfig.label}
        </Tag>
      </Flex>
    </Flex>
  );
}
