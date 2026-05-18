"use client";

import { Card } from "antd";
import type { CardProps } from "antd";
import type { CSSProperties } from "react";
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

const TRACK_COLOR = "#d2d2dd";
const TRACK_STROKE_WIDTH = 2;
const VALUE_STROKE_WIDTH = 10;
const SVG_SIZE = 96;
const CENTER = SVG_SIZE / 2;
const RADIUS = 36;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function LimitProgress({
  percent,
  color,
}: {
  percent: number;
  color: string;
}) {
  const boundedPercent = Math.max(0, Math.min(100, percent));
  const angle = (360 * boundedPercent) / 100;
  const rotation = 90 - angle / 2;
  const dashOffset = CIRCUMFERENCE * (1 - boundedPercent / 100);

  const circleStyle = {
    transform: `rotate(${rotation}deg)`,
    transformOrigin: "50% 50%",
  } satisfies CSSProperties;

  return (
    <div className={styles.progressWrap}>
      <svg
        aria-hidden="true"
        height={SVG_SIZE}
        viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
        width={SVG_SIZE}
      >
        <circle
          cx={CENTER}
          cy={CENTER}
          fill="none"
          r={RADIUS}
          stroke={TRACK_COLOR}
          strokeWidth={TRACK_STROKE_WIDTH}
        />
        <circle
          cx={CENTER}
          cy={CENTER}
          fill="none"
          r={RADIUS}
          stroke={color}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          strokeWidth={VALUE_STROKE_WIDTH}
          style={circleStyle}
        />
        <text
          className={styles.progressText}
          dominantBaseline="middle"
          textAnchor="middle"
          x="50%"
          y="50%"
        >
          {boundedPercent}
          <tspan className={styles.progressPercent}>%</tspan>
        </text>
      </svg>
    </div>
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

  return (
    <Card className={cardClassName} {...props}>
      <div className={styles.content}>
        <div className={styles.leftBlock}>
          <span className={styles.title}>{title}</span>
          <div className={styles.value}>
            <span>{currentValue}</span>
            <span className={styles.valueSecondary}>/{totalValue}</span>
          </div>
        </div>

        <div className={styles.rightBlock}>
          <span className={styles.utilized}>{utilizedLabel}</span>
          <LimitProgress color={progressColors[variant]} percent={utilizedPercent} />
        </div>
      </div>
    </Card>
  );
}
