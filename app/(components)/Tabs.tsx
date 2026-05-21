"use client";

import { Flex, Tabs as AntTabs, Typography } from "antd";
import { useState } from "react";
import type { ReactNode } from "react";
import Tag from "./Tag";
import styles from "./Tabs.module.css";

type TabsType = "filter" | "navigation";

export type TabsItem = {
  key: string;
  label: ReactNode;
  badgeCount?: number;
  badgeColor?: string;
  disabled?: boolean;
};

export type TabsProps = {
  items: TabsItem[];
  type?: TabsType;
  defaultActiveKey?: string;
  activeKey?: string;
  className?: string;
  onChange?: (key: string) => void;
};

function resolveCountBgColor(color?: string): "#ED1B2F" | "#0CC496" | "#332556" {
  const normalizedColor = color?.toLowerCase();

  if (normalizedColor === "#0cc496") {
    return "#0CC496";
  }

  if (normalizedColor === "#000000" || normalizedColor === "#332556") {
    return "#332556";
  }

  return "#ED1B2F";
}

function FilterTabLabel({ item }: { item: TabsItem }) {
  return (
    <Flex align="center" gap={8}>
      <Typography.Text className={styles.filterTabText}>{item.label}</Typography.Text>
      {typeof item.badgeCount === "number" ? (
        <Tag type="count" countBgColor={resolveCountBgColor(item.badgeColor)} >
          {item.badgeCount}
        </Tag>
      ) : null}
    </Flex>
  );
}

export default function Tabs({
  items,
  type = "navigation",
  defaultActiveKey,
  activeKey,
  className = "",
  onChange,
}: TabsProps) {
  const [internalActiveKey, setInternalActiveKey] = useState(
    defaultActiveKey ?? items[0]?.key ?? "",
  );
  const currentActiveKey = activeKey ?? internalActiveKey;
  const wrapperClassName = [styles.wrapper, className].filter(Boolean).join(" ");

  const handleChange = (key: string) => {
    if (activeKey === undefined) {
      setInternalActiveKey(key);
    }

    onChange?.(key);
  };

  if (type === "filter") {
    return (
      <Flex className={`${wrapperClassName} ${styles.filterContainer}`} gap={12}>
        {items.map((item) => {
          const tabClassName = [
            styles.filterTab,
            currentActiveKey === item.key ? styles.filterTabActive : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <Flex
              key={item.key}
              align="center"
              className={tabClassName}
              onClick={() => !item.disabled && handleChange(item.key)}
            >
              <FilterTabLabel item={item} />
            </Flex>
          );
        })}
      </Flex>
    );
  }

  return (
    <div className={`${wrapperClassName} ${styles.navigationTabs}`}>
      <AntTabs
        activeKey={currentActiveKey}
        items={items.map((item) => ({
          disabled: item.disabled,
          key: item.key,
          label: item.label,
        }))}
        onChange={handleChange}
      />
    </div>
  );
}
