"use client";

import { Avatar, Button, Tag, Typography } from "antd";
import type { ButtonProps, CardProps } from "antd";
import type { CSSProperties, ReactNode } from "react";
import InfoCard from "./InfoCard";
import styles from "./PartnerCard.module.css";

export type PartnerCardState = "active" | "disabled";
export type PartnerCardGrowthTone = "negative" | "neutral" | "positive";

export type PartnerCardProps = {
  children: ReactNode;
  state?: PartnerCardState;
} & Omit<CardProps, "extra" | "title">;

type SlotProps = {
  children: ReactNode;
};

type AvatarProps = {
  children: ReactNode;
};

type MetricProps = {
  children: ReactNode;
  kind?: "revenue" | "accounts" | "growth" | "status";
};

type GrowthTagProps = {
  children: ReactNode;
  tone?: PartnerCardGrowthTone;
};

type ButtonSlotProps = {
  children: ReactNode;
  onClick?: ButtonProps["onClick"];
};

const growthToneStyles: Record<PartnerCardGrowthTone, CSSProperties> = {
  negative: {
    backgroundColor: "rgba(237, 27, 47, 0.12)",
    color: "#ED1B2F",
  },
  neutral: {
    backgroundColor: "#E8E8E8",
    color: "#8D8D8D",
  },
  positive: {
    backgroundColor: "rgba(12, 196, 150, 0.12)",
    color: "#1CB791",
  },
};

function PartnerCardRoot({
  children,
  state = "active",
  className = "",
  ...props
}: PartnerCardProps) {
  const cardClassName = [
    styles.card,
    state === "disabled" ? styles.cardDisabled : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <InfoCard bodyClassName={styles.body} className={cardClassName} {...props}>
      {children}
    </InfoCard>
  );
}

function PartnerCardRow({ children }: SlotProps) {
  return (
    <InfoCard.Row align="center" className={styles.row} gap={24} justify="space-between">
      {children}
    </InfoCard.Row>
  );
}

function PartnerCardIdentity({ children }: SlotProps) {
  return (
    <InfoCard.Row align="center" className={styles.identityBlock} gap={14}>
      {children}
    </InfoCard.Row>
  );
}

function PartnerCardAvatar({ children }: AvatarProps) {
  return (
    <Avatar className={styles.avatar} size={42}>
      {children}
    </Avatar>
  );
}

function PartnerCardIdentityText({ children }: SlotProps) {
  return (
    <InfoCard.Stack className={styles.identityText} gap={5}>
      {children}
    </InfoCard.Stack>
  );
}

function PartnerCardName({ children }: SlotProps) {
  return <Typography.Text className={styles.partnerName}>{children}</Typography.Text>;
}

function PartnerCardCode({ children }: SlotProps) {
  return <Tag className={styles.partnerCodeTag}>{children}</Tag>;
}

function PartnerCardMetrics({ children }: SlotProps) {
  return (
    <InfoCard.Row align="center" className={styles.metricsRow} gap={34}>
      {children}
    </InfoCard.Row>
  );
}

const metricKindClassNames: Record<NonNullable<MetricProps["kind"]>, string> = {
  revenue: styles.revenueMetric,
  accounts: styles.accountsMetric,
  growth: styles.growthMetric,
  status: styles.statusMetric,
};

function PartnerCardMetric({ children, kind }: MetricProps) {
  const itemClassName = [
    styles.metricItem,
    kind ? metricKindClassNames[kind] : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <InfoCard.Stack className={itemClassName} gap={6}>
      {children}
    </InfoCard.Stack>
  );
}

function PartnerCardMetricLabel({ children }: SlotProps) {
  return <Typography.Text className={styles.metricLabel}>{children}</Typography.Text>;
}

function PartnerCardMetricValue({ children }: SlotProps) {
  return <Typography.Text className={styles.metricValue}>{children}</Typography.Text>;
}

function PartnerCardGrowthTag({ children, tone = "positive" }: GrowthTagProps) {
  return (
    <Tag className={styles.growthTag} style={growthToneStyles[tone]}>
      {children}
    </Tag>
  );
}

function PartnerCardActions({ children }: SlotProps) {
  return (
    <InfoCard.Row className={styles.actionBlock} justify="flex-end">
      {children}
    </InfoCard.Row>
  );
}

function PartnerCardManageButton({ children, onClick }: ButtonSlotProps) {
  return (
    <Button className={styles.manageButton} onClick={onClick}>
      {children}
    </Button>
  );
}

function PartnerCardDisabledBadge({ children }: SlotProps) {
  return <Tag className={styles.disabledBadge}>{children}</Tag>;
}

const PartnerCard = Object.assign(PartnerCardRoot, {
  Row: PartnerCardRow,
  Identity: PartnerCardIdentity,
  Avatar: PartnerCardAvatar,
  IdentityText: PartnerCardIdentityText,
  Name: PartnerCardName,
  Code: PartnerCardCode,
  Metrics: PartnerCardMetrics,
  Metric: PartnerCardMetric,
  MetricLabel: PartnerCardMetricLabel,
  MetricValue: PartnerCardMetricValue,
  GrowthTag: PartnerCardGrowthTag,
  Actions: PartnerCardActions,
  ManageButton: PartnerCardManageButton,
  DisabledBadge: PartnerCardDisabledBadge,
});

export default PartnerCard;
