"use client";

import { Card, Flex, Typography } from "antd";
import type { CardProps } from "antd";
import styles from "./LimitCard.module.css";

type LimitCardVariant = "danger" | "success" | "warning";

export type LimitCardProps = {
  title: string;
  currentValue: string;
  totalValue: string;
  utilizedPercent: number;
  variant?: LimitCardVariant;
  utilizedLabel?: string;
} & Omit<CardProps, "children" | "title">;

const progressColors: Record<LimitCardVariant, string> = {
  danger: "#D62A23",
  success: "#00A63E",
  warning: "#F0B100",
};

const PROGRESS_SIZE = 75.95;
const TRACK_STROKE_WIDTH = 2;
const VALUE_STROKE_WIDTH = 10;
const PROGRESS_RADIUS = (PROGRESS_SIZE - VALUE_STROKE_WIDTH) / 2;
const PROGRESS_CENTER = PROGRESS_SIZE / 2;

function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number,
) {
  const angleInRadians = (angleInDegrees * Math.PI) / 180;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc({
  cx,
  cy,
  radius,
  startAngle,
  endAngle,
  counterClockwise = false,
}: {
  cx: number;
  cy: number;
  radius: number;
  startAngle: number;
  endAngle: number;
  counterClockwise?: boolean;
}) {
  const start = polarToCartesian(cx, cy, radius, startAngle);
  const end = polarToCartesian(cx, cy, radius, endAngle);
  const angleDelta = counterClockwise
    ? (startAngle - endAngle + 360) % 360
    : (endAngle - startAngle + 360) % 360;
  const largeArcFlag = angleDelta > 180 ? 1 : 0;
  const sweepFlag = counterClockwise ? 0 : 1;

  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} ${sweepFlag} ${end.x} ${end.y}`;
}

function LimitProgress({
  percent,
  color,
}: {
  percent: number;
  color: string;
}) {
  const boundedPercent = Math.max(0, Math.min(100, percent));
  const progressSweep = (boundedPercent / 100) * 359.5;
  const trackPath = describeArc({
    cx: PROGRESS_CENTER,
    cy: PROGRESS_CENTER,
    endAngle: 449.5,
    radius: PROGRESS_RADIUS,
    startAngle: 90,
  });
  const progressPath = describeArc({
    counterClockwise: true,
    cx: PROGRESS_CENTER,
    cy: PROGRESS_CENTER,
    endAngle: 90 - progressSweep,
    radius: PROGRESS_RADIUS,
    startAngle: 90,
  });

  return (
    <svg
      aria-hidden="true"
      className={styles.progressSvg}
      viewBox={`0 0 ${PROGRESS_SIZE} ${PROGRESS_SIZE}`}
    >
      <path
        d={trackPath}
        fill="none"
        stroke="#D9D9D9"
        strokeLinecap="round"
        strokeWidth={TRACK_STROKE_WIDTH}
      />
      {boundedPercent > 0 ? (
        <path
          d={progressPath}
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeWidth={VALUE_STROKE_WIDTH}
        />
      ) : null}
    </svg>
  );
}

export default function LimitCard({
  title,
  currentValue,
  totalValue,
  utilizedPercent,
  variant = "danger",
  utilizedLabel = "Utilized",
  className = "",
  ...props
}: LimitCardProps) {
  const cardClassName = [styles.card, className].filter(Boolean).join(" ");
  const boundedPercent = Math.max(0, Math.min(100, utilizedPercent));

  return (
    <Card className={cardClassName} {...props}>
      <Flex className={styles.content} justify="space-between">
        <Flex className={styles.leftBlock} vertical>
          <Typography.Text className={styles.title}>{title}</Typography.Text>
          <Flex align="baseline" className={styles.value} wrap>
            <Typography.Text className={styles.valuePrimary}>
              {currentValue}
            </Typography.Text>
            <Typography.Text className={styles.valueSecondary}>
              /{totalValue}
            </Typography.Text>
          </Flex>
        </Flex>

        <Flex align="center" className={styles.rightBlock} vertical>
          <Typography.Text className={styles.utilized}>
            {utilizedLabel}
          </Typography.Text>
          <Flex align="center" className={styles.progressWrap} justify="center">
            <LimitProgress color={progressColors[variant]} percent={boundedPercent} />
            <Typography.Text className={styles.progressText}>
              {boundedPercent}
              <Typography.Text className={styles.progressPercent}>
                %
              </Typography.Text>
            </Typography.Text>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
