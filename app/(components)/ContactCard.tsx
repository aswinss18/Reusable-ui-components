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
      variant="borderless"
    >
      <Flex gap={4} vertical>
        <Flex gap={4} wrap>
          <Typography.Text className={styles.text}>{partnerLabel}</Typography.Text>
          <Typography.Text className={styles.text}>{partner}</Typography.Text>
        </Flex>
        <Flex gap={4} wrap>
          <Typography.Text className={styles.text}>{emailLabel}</Typography.Text>
          <Typography.Text className={styles.text}>{email}</Typography.Text>
        </Flex>
      </Flex>
    </Card>
  );
}
