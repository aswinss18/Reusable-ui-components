"use client";

import { Card, Flex, Typography } from "antd";
import type { CardProps } from "antd";
import type { CSSProperties } from "react";
import styles from "./ContactCard.module.css";

type ContactCardVariant = "danger" | "success" | "warning";

export type ContactCardProps = {
  partner: string;
  email: string;
  partnerLabel?: string;
  emailLabel?: string;
  variant?: ContactCardVariant;
} & Omit<CardProps, "children" | "title" | "variant">;

const toneStyles: Record<ContactCardVariant, CSSProperties> = {
  danger: {
    backgroundColor: "rgba(237, 27, 47, 0.1)",
    borderLeftColor: "#ED1B2F",
  },
  success: {
    backgroundColor: "rgba(12, 196, 150, 0.1)",
    borderLeftColor: "#0CC496",
  },
  warning: {
    backgroundColor: "rgba(240, 177, 0, 0.1)",
    borderLeftColor: "#F0B100",
  },
};

export default function ContactCard({
  partner,
  email,
  partnerLabel = "Partner:",
  emailLabel = "Email:",
  variant = "success",
  className = "",
  style,
  styles: cardStyles,
  ...props
}: ContactCardProps) {
  const cardClassName = [styles.card, className].filter(Boolean).join(" ");

  return (
    <Card
      {...props}
      className={cardClassName}
      style={{ ...toneStyles[variant], ...style }}
      styles={{
        body: {
          padding: "12px 16px",
          ...cardStyles?.body,
        },
      }}
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
