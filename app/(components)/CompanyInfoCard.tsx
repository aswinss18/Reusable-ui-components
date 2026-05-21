"use client";

import {
  BankOutlined,
  EditOutlined,
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Button, Card, Divider, Flex, Tag, Typography } from "antd";
import type { CardProps } from "antd";
import type { ReactNode } from "react";
import styles from "./CompanyInfoCard.module.css";

export type CompanyInfoCardProps = {
  data: CompanyInfoCardData;
  onEdit?: () => void;
} & Omit<CardProps, "children" | "title" | "extra">;

export type CompanyInfoCardData = {
  title?: string;
  companyName: string;
  category: string;
  taxId: string;
  registeredOn: string;
  gstNumber: string;
  primaryContact: string;
  email: string;
  phone: string;
  address: string;
};

type InfoItemProps = {
  label: string;
  value: string;
};

type ContactItemProps = {
  icon: ReactNode;
  label: string;
  value: string;
};

function InfoItem({ label, value }: InfoItemProps) {
  return (
    <Flex className={styles.infoItem} vertical gap={4}>
      <Typography.Text className={styles.label}>{label}</Typography.Text>
      <Typography.Text className={styles.value}>{value}</Typography.Text>
    </Flex>
  );
}

function ContactItem({ icon, label, value }: ContactItemProps) {
  return (
    <Flex align="flex-start" className={styles.contactItem} gap={8}>
      <Flex align="center" className={styles.contactIcon} justify="center">
        {icon}
      </Flex>
      <Flex className={styles.contactText} vertical gap={0}>
        <Typography.Text className={styles.label}>{label}</Typography.Text>
        <Typography.Text className={styles.value}>{value}</Typography.Text>
      </Flex>
    </Flex>
  );
}

export default function CompanyInfoCard({
  data,
  onEdit,
  className = "",
  ...props
}: CompanyInfoCardProps) {
  const {
    title = "Company Information",
    companyName,
    category,
    taxId,
    registeredOn,
    gstNumber,
    primaryContact,
    email,
    phone,
    address,
  } = data;
  const cardClassName = [styles.card, className].filter(Boolean).join(" ");

  return (
    <Card className={cardClassName} {...props}>
      <Flex className={styles.container} vertical>
        <Flex align="center" className={styles.header}>
          <Flex align="center" className={styles.titleGroup}>
            <BankOutlined className={styles.headerIcon} />
            <Typography.Text className={styles.title}>{title}</Typography.Text>
          </Flex>
        </Flex>

        <Button
          aria-label="Edit company information"
          className={styles.editButton}
          icon={<EditOutlined className={styles.editIcon} />}
          onClick={onEdit}
          type="text"
        />

        <Flex className={styles.content}>
          <div className={styles.leftSection}>
            <div className={styles.infoGrid}>
              <InfoItem label="Company Name" value={companyName} />
              <Flex className={styles.categoryItem} vertical>
                <Typography.Text className={styles.label}>Category</Typography.Text>
                <Tag className={styles.categoryTag}>{category}</Tag>
              </Flex>
              <InfoItem label="Tax ID" value={taxId} />
              <InfoItem label="Registered On" value={registeredOn} />
              <InfoItem label="GST Number" value={gstNumber} />
            </div>
          </div>

          <Divider className={styles.divider} orientation="vertical" />

          <Flex className={styles.rightColumn} vertical gap={12}>
            <ContactItem
              icon={<TeamOutlined className={styles.contactIconGraphic} />}
              label="Primary Contact"
              value={primaryContact}
            />
            <ContactItem
              icon={<MailOutlined className={styles.contactIconGraphic} />}
              label="Email"
              value={email}
            />
            <ContactItem
              icon={<PhoneOutlined className={styles.contactIconGraphic} />}
              label="Phone"
              value={phone}
            />
            <ContactItem
              icon={<EnvironmentOutlined className={styles.contactIconGraphic} />}
              label="Address"
              value={address}
            />
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
