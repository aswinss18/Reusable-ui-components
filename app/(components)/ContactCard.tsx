"use client";

import { Card, Flex, Typography } from "antd";
import type { CardProps } from "antd";
import styles from "./ContactCard.module.css";

type ContactCardVariant = "danger" | "success" | "warning";

export type ContactCardProps = {
  data: ContactCardData;
  variant?: ContactCardVariant;
} & Omit<CardProps, "children" | "title" | "variant">;

export type ContactCardData = {
  partner: string;
  email: string;
  partnerLabel?: string;
  emailLabel?: string;
};

export default function ContactCard({
  data,
  variant = "success",
  className = "",
  ...props
}: ContactCardProps) {
  const {
    partner,
    email,
    partnerLabel = "Partner:",
    emailLabel = "Email:",
  } = data;
  const cardClassName = [
    styles.card,
    variant === "danger"
      ? styles.cardDanger
      : variant === "warning"
        ? styles.cardWarning
        : styles.cardSuccess,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Card
      {...props}
      className={cardClassName}
      classNames={{ body: styles.body }}
      variant="borderless"
    >
      <Flex className={styles.content} vertical>
        <Typography.Text className={styles.line}>
          <span className={styles.label}>{partnerLabel}</span>
          <span className={styles.value}>{` ${partner}`}</span>
        </Typography.Text>
        <Typography.Text className={styles.line}>
          <span className={styles.label}>{emailLabel}</span>
          <span className={styles.value}>{` ${email}`}</span>
        </Typography.Text>
      </Flex>
    </Card>
  );
}
