"use client";

import { CloseCircleOutlined, EditOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Tag, Typography } from "antd";
import type { CardProps } from "antd";
import type { CSSProperties, ReactNode } from "react";
import InfoCard from "./InfoCard";
import styles from "./LeadCard.module.css";

export type LeadCardStatus = "approved" | "pending" | "rejected";

export type LeadCardProps = {
  children: ReactNode;
} & Omit<CardProps, "actions" | "extra" | "title">;

type SlotProps = {
  children: ReactNode;
};

type AvatarProps = {
  children: ReactNode;
};

type DetailItemProps = {
  children: ReactNode;
  withBorder?: boolean;
};

type ButtonSlotProps = {
  onClick?: () => void;
};

const statusToneStyles: Record<LeadCardStatus, CSSProperties> = {
  approved: {
    backgroundColor: "rgba(12, 196, 150, 0.12)",
    color: "#1CB791",
  },
  pending: {
    backgroundColor: "#FEF9C2",
    color: "#A65F00",
  },
  rejected: {
    backgroundColor: "rgba(237, 27, 47, 0.12)",
    color: "#ED1B2F",
  },
};

function LeadCardRoot({ children, className = "", ...props }: LeadCardProps) {
  const cardClassName = [styles.card, className].filter(Boolean).join(" ");

  return (
    <InfoCard bodyClassName={styles.body} className={cardClassName} {...props}>
      {children}
    </InfoCard>
  );
}

function LeadCardContainer({ children }: SlotProps) {
  return (
    <InfoCard.Row align="flex-start" className={styles.container} gap={14}>
      {children}
    </InfoCard.Row>
  );
}

function LeadCardAvatar({ children }: AvatarProps) {
  return (
    <Avatar className={styles.avatar} size={50}>
      {children}
    </Avatar>
  );
}

function LeadCardContent({ children }: SlotProps) {
  return (
    <InfoCard.Stack className={styles.contentColumn} gap={12}>
      {children}
    </InfoCard.Stack>
  );
}

function LeadCardHeader({ children }: SlotProps) {
  return (
    <InfoCard.Row align="flex-start" className={styles.headerRow} justify="space-between" gap={16}>
      {children}
    </InfoCard.Row>
  );
}

function LeadCardHeaderText({ children }: SlotProps) {
  return (
    <InfoCard.Stack className={styles.headerText} gap={2}>
      {children}
    </InfoCard.Stack>
  );
}

function LeadCardTitleRow({ children }: SlotProps) {
  return (
    <InfoCard.Row align="center" className={styles.titleRow} gap={10} wrap>
      {children}
    </InfoCard.Row>
  );
}

function LeadCardCompanyName({ children }: SlotProps) {
  return <Typography.Text className={styles.companyName}>{children}</Typography.Text>;
}

function LeadCardCategoryTag({ children }: SlotProps) {
  return <Tag className={styles.categoryTag}>{children}</Tag>;
}

function LeadCardSubtitle({ children }: SlotProps) {
  return <Typography.Text className={styles.subtitle}>{children}</Typography.Text>;
}

function LeadCardHeaderActions({ children }: SlotProps) {
  return (
    <InfoCard.Row align="center" className={styles.headerActions} gap={10} wrap>
      {children}
    </InfoCard.Row>
  );
}

function LeadCardStatusTag({
  children,
  status = "pending",
}: {
  children: ReactNode;
  status?: LeadCardStatus;
}) {
  return (
    <Tag className={styles.statusTag} style={statusToneStyles[status]}>
      {children}
    </Tag>
  );
}

function LeadCardDetails({ children }: SlotProps) {
  return (
    <Card className={styles.detailsCard}>
      <InfoCard.Row align="stretch" className={styles.detailsRow}>
        {children}
      </InfoCard.Row>
    </Card>
  );
}

function LeadCardDetailItem({ children, withBorder = false }: DetailItemProps) {
  const itemClassName = [
    styles.detailItem,
    withBorder ? styles.detailItemBorder : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <InfoCard.Stack className={itemClassName} gap={2}>
      {children}
    </InfoCard.Stack>
  );
}

function LeadCardDetailLabel({ children }: SlotProps) {
  return <Typography.Text className={styles.detailLabel}>{children}</Typography.Text>;
}

function LeadCardDetailValue({ children }: SlotProps) {
  return <Typography.Text className={styles.detailValue}>{children}</Typography.Text>;
}

function LeadCardEditAction({ onClick }: ButtonSlotProps) {
  return (
    <InfoCard.Row align="center" className={styles.editAction} justify="center">
      <Button
        aria-label="Edit lead details"
        className={styles.editButton}
        icon={<EditOutlined className={styles.editIcon} />}
        onClick={onClick}
        type="text"
      />
    </InfoCard.Row>
  );
}

function LeadCardReason({ children }: SlotProps) {
  return (
    <Card className={styles.reasonCard}>
      <InfoCard.Row align="flex-start" gap={8}>
        <CloseCircleOutlined className={styles.reasonIcon} />
        <InfoCard.Stack className={styles.reasonTextBlock} gap={2}>
          {children}
        </InfoCard.Stack>
      </InfoCard.Row>
    </Card>
  );
}

function LeadCardReasonLabel({ children }: SlotProps) {
  return <Typography.Text className={styles.reasonLabel}>{children}</Typography.Text>;
}

function LeadCardReasonValue({ children }: SlotProps) {
  return <Typography.Text className={styles.reasonValue}>{children}</Typography.Text>;
}

function LeadCardAppliedOn({ children }: SlotProps) {
  return <Typography.Text className={styles.appliedOn}>{children}</Typography.Text>;
}

const LeadCard = Object.assign(LeadCardRoot, {
  Container: LeadCardContainer,
  Avatar: LeadCardAvatar,
  Content: LeadCardContent,
  Header: LeadCardHeader,
  HeaderText: LeadCardHeaderText,
  TitleRow: LeadCardTitleRow,
  CompanyName: LeadCardCompanyName,
  CategoryTag: LeadCardCategoryTag,
  Subtitle: LeadCardSubtitle,
  HeaderActions: LeadCardHeaderActions,
  StatusTag: LeadCardStatusTag,
  Details: LeadCardDetails,
  DetailItem: LeadCardDetailItem,
  DetailLabel: LeadCardDetailLabel,
  DetailValue: LeadCardDetailValue,
  EditAction: LeadCardEditAction,
  Reason: LeadCardReason,
  ReasonLabel: LeadCardReasonLabel,
  ReasonValue: LeadCardReasonValue,
  AppliedOn: LeadCardAppliedOn,
});

export default LeadCard;
