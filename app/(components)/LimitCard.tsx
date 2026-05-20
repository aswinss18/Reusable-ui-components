"use client";

import { Card, Flex, Typography, Progress } from "antd";
import type { CardProps } from "antd";
import styles from "./LimitCard.module.css";

type LimitCardVariant = "danger" | "success" | "warning";

export type LimitCardProps = {
  data: LimitCardData;
  variant?: LimitCardVariant;
} & Omit<CardProps, "children" | "title" | "variant">;

export type LimitCardData = {
  title: string;
  currentValue: string;
  totalValue: string;
  utilizedPercent: number;
  utilizedLabel?: string;
};

export default function LimitCard({
  data,
  variant = "danger",
  className = "",
  ...props
}: LimitCardProps) {
  const {
    title,
    currentValue,
    totalValue,
    utilizedPercent,
    utilizedLabel = "Utilized",
  } = data;
  const cardClassName = [styles.card, className].filter(Boolean).join(" ");
  const boundedPercent = Math.max(0, Math.min(100, utilizedPercent));
  const progressClassName = [
    styles.progress,
    variant === "success"
      ? styles.progressSuccess
      : variant === "warning"
        ? styles.progressWarning
        : styles.progressDanger,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Card className={cardClassName} {...props}>
      <Flex className={styles.content} justify="space-between" align="center">
        {/* Left Block: Title and Value */}
        <Flex className={styles.leftBlock} vertical justify="center">
          <Typography.Text className={styles.title}>
            {title}
          </Typography.Text>
          <Flex align="baseline" className={styles.value}>
            <Typography.Text className={styles.valuePrimary}>
              {currentValue}
            </Typography.Text>
            <Typography.Text className={styles.valueSecondary}>
              /{totalValue}
            </Typography.Text>
          </Flex>
        </Flex>

        {/* Right Block: Progress Circle */}
        <Flex
          align="center"
          className={styles.rightBlock}
          vertical
          justify="center"
        >
          <Typography.Text className={styles.utilized}>
            {utilizedLabel}
          </Typography.Text>
          <Flex className={styles.progressContainer}>
            <Progress
              className={progressClassName}
              type="circle"
              percent={boundedPercent}
              size={76}
              strokeWidth={10}
              format={() => (
                <Typography.Text className={styles.progressText}>
                  {boundedPercent}
                  <Typography.Text className={styles.progressPercent}>%</Typography.Text>
                </Typography.Text>
              )}
            />
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
