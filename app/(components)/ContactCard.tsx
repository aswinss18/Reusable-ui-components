"use client";

import { Typography } from "antd";
import type { CardProps } from "antd";
import type { CSSProperties, ReactNode } from "react";
import InfoCard from "./InfoCard";
import styles from "./ContactCard.module.css";

type ContactCardVariant = "danger" | "success" | "warning";

export type ContactCardProps = {
  children: ReactNode;
  variant?: ContactCardVariant;
} & Omit<CardProps, "title" | "variant">;

type SlotProps = {
  children: ReactNode;
};

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

function ContactCardRoot({
  children,
  variant = "success",
  className = "",
  style,
  styles: cardStyles,
  ...props
}: ContactCardProps) {
  const cardClassName = [styles.card, className].filter(Boolean).join(" ");

  const bodyStyles =
    typeof cardStyles === "object" && cardStyles?.body
      ? { padding: "12px 16px", ...cardStyles.body }
      : { padding: "12px 16px" };

  return (
    <InfoCard
      {...props}
      bodyClassName={styles.body}
      className={cardClassName}
      style={{ ...toneStyles[variant], ...style }}
      styles={{ body: bodyStyles }}
      variant="borderless"
    >
      <InfoCard.Stack gap={4}>
        {children}
      </InfoCard.Stack>
    </InfoCard>
  );
}

function ContactCardRow({ children }: SlotProps) {
  return (
    <InfoCard.Row gap={4} wrap>
      {children}
    </InfoCard.Row>
  );
}

function ContactCardText({ children }: SlotProps) {
  return <Typography.Text className={styles.text}>{children}</Typography.Text>;
}

const ContactCard = Object.assign(ContactCardRoot, {
  Row: ContactCardRow,
  Text: ContactCardText,
});

export default ContactCard;
