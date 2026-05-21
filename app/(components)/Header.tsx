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
  data: HeaderData;
  trailingAction?: ReactNode;
  searchValue?: string;
  onSearchChange?: InputProps["onChange"];
  className?: string;
};

export type HeaderData = {
  logoSrc?: string;
  logoAlt?: string;
  searchPlaceholder?: string;
  notificationCount?: number;
  userInitials?: string;
  userName: ReactNode;
  userRole?: ReactNode;
};

export default function Header({
  data,
  trailingAction = <LogoutOutlined className={styles.logoutIcon} />,
  searchValue,
  onSearchChange,
  className = "",
}: HeaderProps) {
  const {
    logoSrc = "/fino.png",
    logoAlt = "Fino logo",
    searchPlaceholder = "Search...",
    notificationCount = 1,
    userInitials = "AD",
    userName,
    userRole = "Super Admin",
  } = data;
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
            className={styles.notificationBadge}
            count={notificationCount}
            overflowCount={99}
            size="small"
          >
            <BellOutlined className={styles.bellIcon} />
          </Badge>

          <Divider className={styles.divider} orientation="vertical" />

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

          <Flex align="center" className={styles.trailingAction} justify="center">
            {trailingAction}
          </Flex>
        </Flex>
      </Flex>
    </Layout.Header>
  );
}
