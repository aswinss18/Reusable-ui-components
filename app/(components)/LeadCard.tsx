"use client";

import { CloseCircleOutlined, EditOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Flex, Tag, Typography } from "antd";
import type { CardProps } from "antd";
import type { ReactNode } from "react";
import styles from "./LeadCard.module.css";

export type LeadCardStatus = "approved" | "pending" | "rejected";

export type LeadCardProps = {
  data: LeadCardData;
  actions?: ReactNode;
  onEdit?: () => void;
  showEditAction?: boolean;
} & Omit<CardProps, "actions" | "children" | "extra" | "title">;

export type LeadCardData = {
  avatarText: string;
  companyName: string;
  category?: string;
  subtitle: string;
  contactPerson: string;
  mobileNumber: string;
  emailAddress: string;
  appliedOn: string;
  status?: LeadCardStatus;
  statusLabel?: string;
  rejectionReason?: string;
};

type DetailItemProps = {
  label: string;
  value: string;
  withBorder?: boolean;
};

const statusToneClassNames: Record<LeadCardStatus, string> = {
  approved: styles.statusApproved,
  pending: styles.statusPending,
  rejected: styles.statusRejected,
};

const statusLabels: Record<LeadCardStatus, string> = {
  approved: "Approved",
  pending: "Pending",
  rejected: "Rejected",
};

function DetailItem({ label, value, withBorder = false }: DetailItemProps) {
  const itemClassName = [
    styles.detailItem,
    withBorder ? styles.detailItemBorder : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Flex className={itemClassName} vertical gap={2}>
      <Typography.Text className={styles.detailLabel}>{label}</Typography.Text>
      <Typography.Text className={styles.detailValue}>{value}</Typography.Text>
    </Flex>
  );
}

export default function LeadCard({
  data,
  actions,
  onEdit,
  showEditAction = true,
  className = "",
  ...props
}: LeadCardProps) {
  const {
    avatarText,
    companyName,
    category,
    subtitle,
    contactPerson,
    mobileNumber,
    emailAddress,
    appliedOn,
    status = "pending",
    statusLabel,
    rejectionReason,
  } = data;
  const cardClassName = [styles.card, className].filter(Boolean).join(" ");
  const showRejectionReason = status === "rejected" && Boolean(rejectionReason);
  const showHeaderActions = Boolean(actions);

  return (
    <Card className={cardClassName} {...props}>
      <Flex align="flex-start" className={styles.container} gap={14}>
        <Avatar className={styles.avatar} size={50}>
          {avatarText}
        </Avatar>

        <Flex className={styles.contentColumn} vertical gap={12}>
          <Flex align="flex-start" className={styles.headerRow} justify="space-between" gap={16}>
            <Flex className={styles.headerText} vertical gap={2}>
              <Flex align="center" className={styles.titleRow} gap={10} wrap>
                <Typography.Text className={styles.companyName}>
                  {companyName}
                </Typography.Text>
                {category ? <Tag className={styles.categoryTag}>{category}</Tag> : null}
              </Flex>

              <Typography.Text className={styles.subtitle}>{subtitle}</Typography.Text>
            </Flex>

            {showHeaderActions ? (
              <Flex align="center" className={styles.headerActions} gap={10} wrap>
                {actions}
              </Flex>
            ) : (
              <Tag className={[styles.statusTag, statusToneClassNames[status]].join(" ")}>
                {statusLabel ?? statusLabels[status]}
              </Tag>
            )}
          </Flex>

          <Card className={styles.detailsCard}>
            <Flex align="stretch" className={styles.detailsRow}>
              <DetailItem label="Contact Person" value={contactPerson} withBorder />
              <DetailItem label="Mobile Number" value={mobileNumber} withBorder />
              <DetailItem label="Email Address" value={emailAddress} />

              {showEditAction ? (
                <Flex align="center" className={styles.editAction} justify="center">
                  <Button
                    aria-label="Edit lead details"
                    className={styles.editButton}
                    icon={<EditOutlined className={styles.editIcon} />}
                    onClick={onEdit}
                    type="text"
                  />
                </Flex>
              ) : null}
            </Flex>
          </Card>

          {showRejectionReason ? (
            <Card className={styles.reasonCard}>
              <Flex align="flex-start" gap={8}>
                <CloseCircleOutlined className={styles.reasonIcon} />
                <Flex className={styles.reasonTextBlock} vertical gap={2}>
                  <Typography.Text className={styles.reasonLabel}>
                    Rejection Reason:
                  </Typography.Text>
                  <Typography.Text className={styles.reasonValue}>
                    {rejectionReason}
                  </Typography.Text>
                </Flex>
              </Flex>
            </Card>
          ) : null}

          <Typography.Text className={styles.appliedOn}>
            Applied on: {appliedOn}
          </Typography.Text>
        </Flex>
      </Flex>
    </Card>
  );
}
