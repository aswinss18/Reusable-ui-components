"use client";

import { Progress, Typography } from "antd";
import type { CardProps } from "antd";
import type { ReactNode } from "react";
import InfoCard from "./InfoCard";
import styles from "./LimitCard.module.css";

type LimitCardVariant = "danger" | "success" | "warning";

export type LimitCardProps = {
  children: ReactNode;
  utilizedPercent: number;
  variant?: LimitCardVariant;
  utilizedLabel?: string;
} & Omit<CardProps, "title" | "variant">;

type SlotProps = {
  children: ReactNode;
};

const progressColors: Record<LimitCardVariant, string> = {
  danger: "#D62A23",
  success: "#00A63E",
  warning: "#F0B100",
};

function LimitCardRoot({
  children,
  utilizedPercent,
  variant = "danger",
  utilizedLabel = "Utilized",
  className = "",
  ...props
}: LimitCardProps) {
  const cardClassName = [styles.card, className].filter(Boolean).join(" ");
  const boundedPercent = Math.max(0, Math.min(100, utilizedPercent));

  return (
    <InfoCard bodyClassName={styles.body} className={cardClassName} {...props}>
      <InfoCard.Row className={styles.content} justify="space-between" align="center">
        <InfoCard.Stack className={styles.leftBlock} justify="center">
          {children}
        </InfoCard.Stack>

        <InfoCard.Stack
          align="center"
          className={styles.rightBlock}
          justify="center"
        >
          <Typography.Text className={styles.utilized}>{utilizedLabel}</Typography.Text>
          <InfoCard.Row className={styles.progressContainer}>
            <Progress
              type="circle"
              percent={boundedPercent}
              size={76}
              strokeColor={progressColors[variant]}
              railColor="#D9D9D9"
              strokeWidth={10}
              format={() => (
                <Typography.Text className={styles.progressText}>
                  {boundedPercent}
                  <Typography.Text className={styles.progressPercent}>%</Typography.Text>
                </Typography.Text>
              )}
            />
          </InfoCard.Row>
        </InfoCard.Stack>
      </InfoCard.Row>
    </InfoCard>
  );
}

function LimitCardTitle({ children }: SlotProps) {
  return <Typography.Text className={styles.title}>{children}</Typography.Text>;
}

function LimitCardValue({ children }: SlotProps) {
  return (
    <InfoCard.Row align="baseline" className={styles.value}>
      {children}
    </InfoCard.Row>
  );
}

function LimitCardCurrentValue({ children }: SlotProps) {
  return <Typography.Text className={styles.valuePrimary}>{children}</Typography.Text>;
}

function LimitCardTotalValue({ children }: SlotProps) {
  return <Typography.Text className={styles.valueSecondary}>{children}</Typography.Text>;
}

const LimitCard = Object.assign(LimitCardRoot, {
  Title: LimitCardTitle,
  Value: LimitCardValue,
  CurrentValue: LimitCardCurrentValue,
  TotalValue: LimitCardTotalValue,
});

export default LimitCard;
