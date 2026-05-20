"use client";

import {
  CreditCardOutlined,
  HistoryOutlined,
  RightOutlined,
  RiseOutlined,
  TeamOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Badge, Flex, Layout, Menu, Typography } from "antd";
import type { MenuProps } from "antd";
import { useRouter } from "next/navigation";
import { isValidElement } from "react";
import type { ReactNode } from "react";
import styles from "./Sidebar.module.css";

function ChargesIcon() {
  return <span className={styles.currencyIcon}>₹</span>;
}

export const sidebarIconMap = {
  overview: <RiseOutlined />,
  leads: <UsergroupAddOutlined />,
  partners: <TeamOutlined />,
  limits: <CreditCardOutlined />,
  charges: <ChargesIcon />,
  activity: <HistoryOutlined />,
};

export type SidebarIconKey = keyof typeof sidebarIconMap;

export type SidebarMenuItem = {
  key: string;
  label: string;
  icon?: SidebarIconKey | ReactNode;
  path?: string;
  badge?: number;
  height?: 44 | 46 | 52;
  active?: boolean;
  hasArrow?: boolean;
  suffix?: ReactNode;
  disabled?: boolean;
};

export type SidebarMenuSection = {
  section: string;
  items: SidebarMenuItem[];
};

export type SidebarProps = {
  data: SidebarMenuSection[];
  activeKey?: string;
  width?: number | string;
  className?: string;
  onItemClick?: (item: SidebarMenuItem) => void;
};

function SidebarItemLabel({
  active,
  item,
}: {
  active: boolean;
  item: SidebarMenuItem;
}) {
  const showArrow = item.hasArrow ?? active;

  return (
    <Flex align="center" className={styles.itemRow} justify="space-between">
      <Typography.Text className={styles.itemText}>{item.label}</Typography.Text>

      {item.badge || showArrow || item.suffix ? (
        <Flex align="center" gap={12}>
          {typeof item.badge === "number" ? (
            <Badge
              className={styles.itemBadge}
              count={item.badge}
              overflowCount={999}
            />
          ) : null}

          {item.suffix ? (
            item.suffix
          ) : showArrow ? (
            <RightOutlined className={styles.activeArrow} />
          ) : null}
        </Flex>
      ) : null}
    </Flex>
  );
}

function resolveSidebarIcon(icon?: SidebarIconKey | ReactNode) {
  if (!icon) {
    return null;
  }

  if (typeof icon === "string") {
    return icon in sidebarIconMap
      ? sidebarIconMap[icon as SidebarIconKey]
      : null;
  }

  return isValidElement(icon) ? icon : null;
}

function resolveItemClassName(item: SidebarMenuItem) {
  if (item.height === 46) {
    return styles.itemMedium;
  }

  if (item.height === 52) {
    return styles.itemTall;
  }

  return styles.itemDefault;
}

export default function Sidebar({
  data,
  activeKey,
  width = 280,
  className = "",
  onItemClick,
}: SidebarProps) {
  const router = useRouter();
  const sidebarClassName = [styles.sidebar, className].filter(Boolean).join(" ");

  const itemMap = Object.fromEntries(
    data.flatMap((section) => section.items.map((item) => [item.key, item])),
  ) as Record<string, SidebarMenuItem>;
  const derivedActiveKey =
    activeKey ?? data.flatMap((section) => section.items).find((item) => item.active)?.key;

  const handleMenuClick: MenuProps["onClick"] = ({ key }) => {
    const item = itemMap[key];

    if (!item) {
      return;
    }

    onItemClick?.(item);

    if (item.path) {
      router.push(item.path);
    }
  };

  return (
    <Layout.Sider
      className={sidebarClassName}
      theme="light"
      trigger={null}
      width={width}
    >
      <Flex className={styles.inner} vertical>
        {data.map((section) => (
          <Flex key={section.section} className={styles.section} vertical>
            <Typography.Text className={styles.sectionTitle}>
              {section.section}
            </Typography.Text>

            <Menu
              className={styles.menu}
              items={section.items.map((item) => ({
                className: resolveItemClassName(item),
                disabled: item.disabled,
                icon: <span className={styles.menuIcon}>{resolveSidebarIcon(item.icon)}</span>,
                key: item.key,
                label: (
                  <SidebarItemLabel active={derivedActiveKey === item.key} item={item} />
                ),
              }))}
              mode="inline"
              onClick={handleMenuClick}
              selectable
              selectedKeys={derivedActiveKey ? [derivedActiveKey] : []}
            />
          </Flex>
        ))}
      </Flex>
    </Layout.Sider>
  );
}
