"use client";

import {
  CreditCardOutlined,
  HistoryOutlined,
  RightOutlined,
  RiseOutlined,
  TeamOutlined,
  TransactionOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Badge, Flex, Layout, Menu, Typography } from "antd";
import type { MenuProps } from "antd";
import { useRouter } from "next/navigation";
import type { CSSProperties, ReactNode } from "react";
import styles from "./Sidebar.module.css";

export type SidebarItem = {
  key: string;
  label: string;
  icon?: ReactNode;
  href?: string;
  badgeCount?: number;
  suffix?: ReactNode;
  disabled?: boolean;
};

export type SidebarSection = {
  title: string;
  items: SidebarItem[];
};

export type SidebarProps = {
  sections: SidebarSection[];
  activeKey?: string;
  width?: number | string;
  className?: string;
  onItemClick?: (item: SidebarItem) => void;
};

export const sidebarExampleIcons = {
  overview: <RiseOutlined />,
  leads: <UsergroupAddOutlined />,
  partners: <TeamOutlined />,
  limits: <CreditCardOutlined />,
  charges: <TransactionOutlined />,
  activity: <HistoryOutlined />,
};

function SidebarItemLabel({
  active,
  item,
}: {
  active: boolean;
  item: SidebarItem;
}) {
  return (
    <Flex align="center" className={styles.itemRow} justify="space-between">
      <Typography.Text className={styles.itemText}>{item.label}</Typography.Text>

      {item.badgeCount || active || item.suffix ? (
        <Flex align="center" gap={12}>
          {typeof item.badgeCount === "number" ? (
            <Badge
              count={item.badgeCount}
              overflowCount={999}
              styles={{
                indicator: {
                  backgroundColor: "#ff2432",
                  boxShadow: "none",
                  color: "#ffffff",
                  fontFamily: "var(--font-work-sans), Arial, Helvetica, sans-serif",
                  fontSize: 12,
                  fontWeight: 600,
                  minWidth: 28,
                  height: 28,
                  lineHeight: "28px",
                },
              }}
            />
          ) : null}

          {item.suffix ? (
            item.suffix
          ) : active ? (
            <RightOutlined className={styles.activeArrow} />
          ) : null}
        </Flex>
      ) : null}
    </Flex>
  );
}

export default function Sidebar({
  sections,
  activeKey,
  width = 308,
  className = "",
  onItemClick,
}: SidebarProps) {
  const router = useRouter();
  const sidebarClassName = [styles.sidebar, className].filter(Boolean).join(" ");
  const sidebarStyle =
    typeof width === "string" ? ({ width } satisfies CSSProperties) : undefined;

  const itemMap = Object.fromEntries(
    sections.flatMap((section) => section.items.map((item) => [item.key, item])),
  ) as Record<string, SidebarItem>;

  const handleMenuClick: MenuProps["onClick"] = ({ key }) => {
    const item = itemMap[key];

    if (!item) {
      return;
    }

    onItemClick?.(item);

    if (item.href) {
      router.push(item.href);
    }
  };

  return (
    <Layout.Sider
      className={sidebarClassName}
      style={sidebarStyle}
      theme="light"
      trigger={null}
      width={typeof width === "number" ? width : undefined}
    >
      <Flex className={styles.inner} vertical>
        {sections.map((section) => (
          <Flex key={section.title} className={styles.section} vertical>
            <Typography.Text className={styles.sectionTitle}>
              {section.title}
            </Typography.Text>

            <Menu
              className={styles.menu}
              items={section.items.map((item) => ({
                disabled: item.disabled,
                icon: <span className={styles.menuIcon}>{item.icon}</span>,
                key: item.key,
                label: (
                  <SidebarItemLabel active={activeKey === item.key} item={item} />
                ),
              }))}
              mode="inline"
              onClick={handleMenuClick}
              selectable
              selectedKeys={activeKey ? [activeKey] : []}
            />
          </Flex>
        ))}
      </Flex>
    </Layout.Sider>
  );
}
