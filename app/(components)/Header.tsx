"use client";

import {
  BellOutlined,
  LogoutOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Divider, Flex, Image, Input, Layout, Typography } from "antd";
import type { InputProps } from "antd";
import type { ReactNode } from "react";
import styles from "./Header.module.css";

export type HeaderProps = {
  logoSrc?: string;
  logoAlt?: string;
  searchPlaceholder?: string;
  searchValue?: string;
  onSearchChange?: InputProps["onChange"];
  notificationCount?: number;
  userInitials?: string;
  userName: ReactNode;
  userRole?: ReactNode;
  trailingAction?: ReactNode;
  className?: string;
};

export default function Header({
  logoSrc = "/fino.png",
  logoAlt = "Fino logo",
  searchPlaceholder = "Search...",
  searchValue,
  onSearchChange,
  notificationCount = 1,
  userInitials = "AD",
  userName,
  userRole = "Super Admin",
  trailingAction = <LogoutOutlined className={styles.logoutIcon} />,
  className = "",
}: HeaderProps) {
  const headerClassName = [styles.header, className].filter(Boolean).join(" ");

  return (
    <Layout.Header className={headerClassName}>
      <Flex align="center" className={styles.inner} justify="space-between">
        <Image
          alt={logoAlt}
          className={styles.logo}
          height={25.58}
          preview={false}
          src={logoSrc}
          width={178.27}
        />

        <Flex align="center" className={styles.rightSection} gap={16}>
          <Input
            className={styles.search}
            onChange={onSearchChange}
            placeholder={searchPlaceholder}
            prefix={<SearchOutlined className={styles.searchIcon} />}
            value={searchValue}
          />

          <Badge
            count={notificationCount}
            overflowCount={99}
            size="small"
            styles={{
              indicator: {
                backgroundColor: "#ff2432",
                boxShadow: "none",
                color: "#ffffff",
                fontFamily: "var(--font-work-sans), Arial, Helvetica, sans-serif",
                fontSize: 10,
                fontWeight: 600,
                minWidth: 16,
                height: 16,
                lineHeight: "16px",
              },
            }}
          >
            <BellOutlined className={styles.bellIcon} />
          </Badge>

          <Divider className={styles.divider} type="vertical" />

          <Flex align="center" gap={12}>
            <Avatar className={styles.avatar} size={34}>
              {userInitials}
            </Avatar>

            <Flex className={styles.userText} vertical gap={0}>
              <Typography.Text className={styles.userName}>
                {userName}
              </Typography.Text>
              {userRole ? (
                <Typography.Text className={styles.userRole}>
                  {userRole}
                </Typography.Text>
              ) : null}
            </Flex>
          </Flex>

          <Divider className={styles.divider} type="vertical" />

          <Flex align="center" className={styles.trailingAction} justify="center">
            {trailingAction}
          </Flex>
        </Flex>
      </Flex>
    </Layout.Header>
  );
}
