"use client";

import {
  BankOutlined,
  EditOutlined,
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Button, Divider, Tag, Typography } from "antd";
import type { CardProps } from "antd";
import type { ReactNode } from "react";
import InfoCard from "./InfoCard";
import styles from "./CompanyInfoCard.module.css";

export type CompanyInfoCardProps = {
  children: ReactNode;
} & Omit<CardProps, "title" | "extra">;

type SlotProps = {
  children: ReactNode;
};

type ButtonSlotProps = {
  onClick?: () => void;
};

type ContactItemProps = {
  children: ReactNode;
  icon?: ReactNode;
};

function CompanyInfoCardRoot({
  children,
  className = "",
  ...props
}: CompanyInfoCardProps) {
  const cardClassName = [styles.card, className].filter(Boolean).join(" ");

  return (
    <InfoCard bodyClassName={styles.body} className={cardClassName} {...props}>
      {children}
    </InfoCard>
  );
}

function CompanyInfoCardContainer({ children }: SlotProps) {
  return (
    <InfoCard.Stack className={styles.container}>
      {children}
    </InfoCard.Stack>
  );
}

function CompanyInfoCardHeader({ children }: SlotProps) {
  return (
    <InfoCard.Row align="center" justify="space-between">
      {children}
    </InfoCard.Row>
  );
}

function CompanyInfoCardHeaderTitle({ children }: SlotProps) {
  return (
    <InfoCard.Row align="center" gap={12}>
      <BankOutlined className={styles.headerIcon} />
      <Typography.Text className={styles.title}>{children}</Typography.Text>
    </InfoCard.Row>
  );
}

function CompanyInfoCardEditButton({ onClick }: ButtonSlotProps) {
  return (
    <Button
      aria-label="Edit company information"
      className={styles.editButton}
      icon={<EditOutlined className={styles.editIcon} />}
      onClick={onClick}
      type="text"
    />
  );
}

function CompanyInfoCardContent({ children }: SlotProps) {
  return (
    <InfoCard.Row className={styles.content} gap={28}>
      {children}
    </InfoCard.Row>
  );
}

function CompanyInfoCardLeftColumn({ children }: SlotProps) {
  return <InfoCard.Row className={styles.leftColumn} gap={24}>{children}</InfoCard.Row>;
}

function CompanyInfoCardLeftGroup({ children }: SlotProps) {
  return (
    <InfoCard.Stack className={styles.leftGroup} gap={22}>
      {children}
    </InfoCard.Stack>
  );
}

function CompanyInfoCardRightColumn({ children }: SlotProps) {
  return (
    <InfoCard.Stack className={styles.rightColumn} gap={18}>
      {children}
    </InfoCard.Stack>
  );
}

function CompanyInfoCardDivider() {
  return <Divider className={styles.divider} orientation="vertical" />;
}

function CompanyInfoCardInfoItem({ children }: SlotProps) {
  return (
    <InfoCard.Stack className={styles.infoItem} gap={4}>
      {children}
    </InfoCard.Stack>
  );
}

function CompanyInfoCardContactItem({ children, icon }: ContactItemProps) {
  return (
    <InfoCard.Row align="flex-start" className={styles.contactItem} gap={12}>
      <InfoCard.Row align="center" className={styles.contactIcon} justify="center">
        {icon}
      </InfoCard.Row>
      <InfoCard.Stack className={styles.contactText} gap={2}>
        {children}
      </InfoCard.Stack>
    </InfoCard.Row>
  );
}

function CompanyInfoCardLabel({ children }: SlotProps) {
  return <Typography.Text className={styles.label}>{children}</Typography.Text>;
}

function CompanyInfoCardValue({ children }: SlotProps) {
  return <Typography.Text className={styles.value}>{children}</Typography.Text>;
}

function CompanyInfoCardCategoryTag({ children }: SlotProps) {
  return <Tag className={styles.categoryTag}>{children}</Tag>;
}

const CompanyInfoCard = Object.assign(CompanyInfoCardRoot, {
  Container: CompanyInfoCardContainer,
  Header: CompanyInfoCardHeader,
  HeaderTitle: CompanyInfoCardHeaderTitle,
  EditButton: CompanyInfoCardEditButton,
  Content: CompanyInfoCardContent,
  LeftColumn: CompanyInfoCardLeftColumn,
  LeftGroup: CompanyInfoCardLeftGroup,
  RightColumn: CompanyInfoCardRightColumn,
  Divider: CompanyInfoCardDivider,
  InfoItem: CompanyInfoCardInfoItem,
  ContactItem: CompanyInfoCardContactItem,
  Label: CompanyInfoCardLabel,
  Value: CompanyInfoCardValue,
  CategoryTag: CompanyInfoCardCategoryTag,
  Icons: {
    Team: <TeamOutlined className={styles.contactIconGraphic} />,
    Mail: <MailOutlined className={styles.contactIconGraphic} />,
    Phone: <PhoneOutlined className={styles.contactIconGraphic} />,
    Environment: <EnvironmentOutlined className={styles.contactIconGraphic} />,
  },
});

export default CompanyInfoCard;
