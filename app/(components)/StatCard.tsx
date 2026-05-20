"use client";

import { Tag, Typography } from "antd";
import type { CardProps } from "antd";
import type { ReactNode } from "react";
import InfoCard from "./InfoCard";
import styles from "./StatCard.module.css";

export type StatCardProps = {
  children: ReactNode;
  highlighted?: boolean;
} & Omit<CardProps, "title">;

type SlotProps = {
  children: ReactNode;
};

function StatCardRoot({
  children,
  highlighted = false,
  className = "",
  ...props
}: StatCardProps) {
  const cardClassName = [styles.card, highlighted ? styles.highlighted : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <InfoCard bodyClassName={styles.body} className={cardClassName} {...props}>
      <InfoCard.Row className={styles.content}>{children}</InfoCard.Row>
    </InfoCard>
  );
}

function StatCardTextBlock({ children }: SlotProps) {
  return (
    <InfoCard.Stack className={styles.textBlock}>
      {children}
    </InfoCard.Stack>
  );
}

function StatCardTitle({ children }: SlotProps) {
  return <Typography.Text className={styles.title}>{children}</Typography.Text>;
}

function StatCardValue({ children }: SlotProps) {
  return <Typography.Text className={styles.value}>{children}</Typography.Text>;
}

function StatCardChange({ children }: SlotProps) {
  return <Tag className={styles.pill}>{children}</Tag>;
}

function StatCardSubtitle({ children }: SlotProps) {
  return <Typography.Text className={styles.subtitle}>{children}</Typography.Text>;
}

function StatCardIconBox({ children }: SlotProps) {
  return <InfoCard.Row className={styles.iconBox}>{children}</InfoCard.Row>;
}

const StatCard = Object.assign(StatCardRoot, {
  TextBlock: StatCardTextBlock,
  Title: StatCardTitle,
  Value: StatCardValue,
  Change: StatCardChange,
  Subtitle: StatCardSubtitle,
  IconBox: StatCardIconBox,
});

export default StatCard;
