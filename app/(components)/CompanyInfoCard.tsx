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
  onEdit?: () => void;
} & Omit<CardProps, "children" | "title" | "extra">;

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
    <Flex align="flex-start" className={styles.contactItem} gap={12}>
      <Flex align="center" className={styles.contactIcon} justify="center">
        {icon}
      </Flex>
      <Flex className={styles.contactText} vertical gap={2}>
        <Typography.Text className={styles.label}>{label}</Typography.Text>
        <Typography.Text className={styles.value}>{value}</Typography.Text>
      </Flex>
    </Flex>
  );
}

export default function CompanyInfoCard({
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
  onEdit,
  className = "",
  ...props
}: CompanyInfoCardProps) {
  const cardClassName = [styles.card, className].filter(Boolean).join(" ");

  return (
    <Card className={cardClassName} {...props}>
      <Flex className={styles.container} vertical>
        <Flex align="center" justify="space-between">
          <Flex align="center" gap={12}>
            <BankOutlined className={styles.headerIcon} />
            <Typography.Text className={styles.title}>{title}</Typography.Text>
          </Flex>

          <Button
            aria-label="Edit company information"
            className={styles.editButton}
            icon={<EditOutlined className={styles.editIcon} />}
            onClick={onEdit}
            type="text"
          />
        </Flex>

        <Flex className={styles.content} gap={28}>
          <Flex className={styles.leftColumn} gap={24}>
            <Flex className={styles.leftGroup} vertical gap={22}>
              <InfoItem label="Company Name" value={companyName} />
              <InfoItem label="Tax ID" value={taxId} />
              <InfoItem label="GST Number" value={gstNumber} />
            </Flex>

            <Flex className={styles.leftGroup} vertical gap={22}>
              <Flex className={styles.infoItem} vertical gap={4}>
                <Typography.Text className={styles.label}>Category</Typography.Text>
                <Tag className={styles.categoryTag}>{category}</Tag>
              </Flex>
              <InfoItem label="Registered On" value={registeredOn} />
            </Flex>
          </Flex>

          <Divider className={styles.divider} type="vertical" />

          <Flex className={styles.rightColumn} vertical gap={18}>
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
