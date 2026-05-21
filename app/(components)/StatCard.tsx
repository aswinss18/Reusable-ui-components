"use client";

import { Card, Flex, Typography } from "antd";
import type { CardProps } from "antd";
import type { ReactNode } from "react";
import Tag from "./Tag";
import styles from "./StatCard.module.css";

export type StatCardProps = {
  data: StatCardData;
  icon?: ReactNode;
  highlighted?: boolean;
} & Omit<CardProps, "children" | "title">;

export type StatCardData = {
  title: string;
  value: string;
  change?: string;
  subtitle?: string;
};

export default function StatCard({
  data,
  icon,
  highlighted = false,
  className = "",
  ...props
}: StatCardProps) {
  const { title, value, change, subtitle } = data;
  const cardClassName = [styles.card, highlighted ? styles.highlighted : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Card className={cardClassName} {...props}>
      <Flex className={styles.content}>
        <Flex className={styles.textBlock} vertical>
          <Typography.Text className={styles.title}>{title}</Typography.Text>
          <Typography.Text className={styles.value}>{value}</Typography.Text>
          {change ? (
            <Tag type="change" >
              {change}
            </Tag>
          ) : null}
          {subtitle ? <Typography.Text className={styles.subtitle}>{subtitle}</Typography.Text> : null}
        </Flex>
        {icon ? <Flex className={styles.iconBox}>{icon}</Flex> : null}
      </Flex>
    </Card>
  );
}
