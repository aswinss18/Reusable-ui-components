"use client";

import { Typography } from "antd";
import type { CardProps } from "antd";
import type { ReactNode } from "react";
import InfoCard from "./InfoCard";
import styles from "./DocSelectCard.module.css";

export type DocSelectCardProps = {
  children: ReactNode;
  selected?: boolean;
  onSelect?: () => void;
  icon: ReactNode;
  selectedIndicator?: ReactNode;
} & Omit<CardProps, "onClick" | "title">;

type SlotProps = {
  children: ReactNode;
};

function DocSelectCardRoot({
  children,
  selected = false,
  onSelect,
  icon,
  selectedIndicator,
  className = "",
  ...props
}: DocSelectCardProps) {
  const cardClassName = [styles.card, selected ? styles.cardSelected : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <InfoCard
      {...props}
      bodyClassName={styles.body}
      className={cardClassName}
      interactive={Boolean(onSelect)}
      onPress={onSelect}
    >
      <InfoCard.Stack className={styles.content} justify="space-between">
        <InfoCard.Row align="start" justify="space-between">
          <div className={styles.iconWrap}>{icon}</div>
          {selected ? selectedIndicator : null}
        </InfoCard.Row>

        <InfoCard.Stack className={styles.copy} gap={10}>
          {children}
        </InfoCard.Stack>
      </InfoCard.Stack>
    </InfoCard>
  );
}

function DocSelectCardTitle({ children }: SlotProps) {
  return (
    <Typography.Title className={styles.title} level={3}>
      {children}
    </Typography.Title>
  );
}

function DocSelectCardDescription({ children }: SlotProps) {
  return <Typography.Paragraph className={styles.description}>{children}</Typography.Paragraph>;
}

function DocSelectCardCheck({ children }: SlotProps) {
  return <div className={styles.checkIcon}>{children}</div>;
}

const DocSelectCard = Object.assign(DocSelectCardRoot, {
  Title: DocSelectCardTitle,
  Description: DocSelectCardDescription,
  Check: DocSelectCardCheck,
});

export default DocSelectCard;
