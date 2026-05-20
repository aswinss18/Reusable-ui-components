"use client";

import { Typography } from "antd";
import type { CardProps } from "antd";
import type { ReactNode } from "react";
import InfoCard from "./InfoCard";
import styles from "./PriceCard.module.css";

export type PriceCardProps = {
  children: ReactNode;
} & Omit<CardProps, "title" | "variant">;

type SlotProps = {
  children: ReactNode;
};

function PriceCardRoot({ children, className = "", ...props }: PriceCardProps) {
  const cardClassName = [styles.card, className].filter(Boolean).join(" ");

  return (
    <InfoCard bodyClassName={styles.body} className={cardClassName} {...props}>
      <InfoCard.Stack gap={4}>
        {children}
      </InfoCard.Stack>
    </InfoCard>
  );
}

function PriceCardTitle({ children }: SlotProps) {
  return <Typography.Text className={styles.title}>{children}</Typography.Text>;
}

function PriceCardValue({ children }: SlotProps) {
  return <Typography.Text className={styles.value}>{children}</Typography.Text>;
}

const PriceCard = Object.assign(PriceCardRoot, {
  Title: PriceCardTitle,
  Value: PriceCardValue,
});

export default PriceCard;
