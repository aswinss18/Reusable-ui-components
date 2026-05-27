"use client";
import { Card, Flex, Typography, Progress } from "antd";
import type { CardProps } from "antd";
import { designTokens } from "../theme";
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

const progressStrokeColors: Record<LimitCardVariant, string> = {
  danger: designTokens.productColors.progressDanger,
  success: designTokens.productColors.progressSuccess,
  warning: designTokens.productColors.progressWarning,
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

  const boundedPercent = Math.max(0, Math.min(100, utilizedPercent));

  // Start at 0, flip to real value after mount — AntD's CSS transition does the rest
  const cardClassName = [styles.card, className].filter(Boolean).join(" ");

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
              strokeColor={progressStrokeColors[variant]}
              railColor={designTokens.productColors.controlBorder}
              strokeWidth={10}
              size={76}
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
