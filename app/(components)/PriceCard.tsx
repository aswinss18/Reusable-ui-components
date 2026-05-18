"use client";

import { Card, Flex, Typography } from "antd";
import type { CardProps } from "antd";
import styles from "./PriceCard.module.css";

export type PriceCardProps = {
  title: string;
  value: string;
} & Omit<CardProps, "children" | "title" | "variant">;

export default function PriceCard({
  title,
  value,
  className = "",
  ...props
}: PriceCardProps) {
  const cardClassName = [styles.card, className].filter(Boolean).join(" ");

  return (
    <Card className={cardClassName} {...props}>
      <Flex vertical gap={4}>
        <Typography.Text className={styles.title}>{title}</Typography.Text>
        <Typography.Text className={styles.value}>{value}</Typography.Text>
      </Flex>
    </Card>
  );
}
