"use client";

import { Avatar, Button, Card, Flex, Tag, Typography } from "antd";
import type { ButtonProps, CardProps } from "antd";
import type { CSSProperties } from "react";
import styles from "./PartnerCard.module.css";

export type PartnerCardState = "active" | "disabled";
export type PartnerCardGrowthTone = "negative" | "neutral" | "positive";

export type PartnerCardProps = {
  data: PartnerCardData;
  growthTone?: PartnerCardGrowthTone;
  state?: PartnerCardState;
  actionLabel?: string;
  disabledLabel?: string;
  onManage?: ButtonProps["onClick"];
} & Omit<CardProps, "children" | "extra" | "title">;

export type PartnerCardData = {
  avatarText: string;
  partnerName: string;
  partnerCode: string;
  revenue: string;
  accountsOpen: string;
  growth: string;
  partnerStatus?: string;
};

type MetricItemProps = {
  label: string;
  value: string;
  renderAsTag?: boolean;
  tone?: PartnerCardGrowthTone;
  className?: string;
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

function MetricItem({
  label,
  value,
  renderAsTag = false,
  tone = "positive",
  className = "",
}: MetricItemProps) {
  const itemClassName = [styles.metricItem, className].filter(Boolean).join(" ");

  return (
    <Flex className={itemClassName} vertical gap={6}>
      <Typography.Text className={styles.metricLabel}>{label}</Typography.Text>
      {renderAsTag ? (
        <Tag className={styles.growthTag} style={growthToneStyles[tone]}>
          {value}
        </Tag>
      ) : (
        <Typography.Text className={styles.metricValue}>{value}</Typography.Text>
      )}
    </Flex>
  );
}

export default function PartnerCard({
  data,
  growthTone,
  state = "active",
  actionLabel = "Manage",
  disabledLabel = "Disabled",
  onManage,
  className = "",
  ...props
}: PartnerCardProps) {
  const {
    avatarText,
    partnerName,
    partnerCode,
    revenue,
    accountsOpen,
    growth,
    partnerStatus,
  } = data;
  const cardClassName = [
    styles.card,
    state === "disabled" ? styles.cardDisabled : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const resolvedGrowthTone =
    growthTone ?? (growth.startsWith("+") ? "positive" : growth.startsWith("-") ? "negative" : "neutral");

  return (
    <Card className={cardClassName} {...props}>
      {state === "disabled" ? <Tag className={styles.disabledBadge}>{disabledLabel}</Tag> : null}

      <Flex align="center" className={styles.row} gap={24} justify="space-between">
        <Flex align="center" className={styles.identityBlock} gap={14}>
          <Avatar className={styles.avatar} size={42}>
            {avatarText}
          </Avatar>

          <Flex className={styles.identityText} vertical gap={5}>
            <Typography.Text className={styles.partnerName}>{partnerName}</Typography.Text>
            <Tag className={styles.partnerCodeTag}>{partnerCode}</Tag>
          </Flex>
        </Flex>

        <Flex align="center" className={styles.metricsRow} gap={34}>
          <MetricItem className={styles.revenueMetric} label="Revenue" value={revenue} />
          <MetricItem
            className={styles.accountsMetric}
            label="Accounts Open"
            value={accountsOpen}
          />
          <MetricItem
            className={styles.growthMetric}
            label="Growth"
            renderAsTag
            tone={state === "disabled" ? "neutral" : resolvedGrowthTone}
            value={growth}
          />
          {partnerStatus ? (
            <MetricItem
              className={styles.statusMetric}
              label="Status"
              value={partnerStatus}
            />
          ) : null}
        </Flex>

        <Flex className={styles.actionBlock} justify="flex-end">
          <Button className={styles.manageButton} onClick={onManage}>
            {actionLabel}
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
}
