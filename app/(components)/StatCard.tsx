"use client";

import { Card, Tag } from "antd";
import type { CardProps } from "antd";
import type { ReactNode } from "react";
import styles from "./StatCard.module.css";

export type StatCardProps = {
  title: string;
  value: string;
  change?: string;
  subtitle?: string;
  icon?: ReactNode;
  highlighted?: boolean;
} & Omit<CardProps, "children" | "title">;

export default function StatCard({
  title,
  value,
  change,
  subtitle,
  icon,
  highlighted = false,
  className = "",
  ...props
}: StatCardProps) {
  const cardClassName = [styles.card, highlighted ? styles.highlighted : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Card className={cardClassName} {...props}>
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <span className={styles.title}>{title}</span>
          <span className={styles.value}>{value}</span>
          {change ? <Tag className={styles.pill}>{change}</Tag> : null}
          {subtitle ? <span className={styles.subtitle}>{subtitle}</span> : null}
        </div>
        {icon ? <div className={styles.iconBox}>{icon}</div> : null}
      </div>
    </Card>
  );
}
