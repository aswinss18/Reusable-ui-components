"use client";

import { SearchOutlined } from "@ant-design/icons";
import { Button, Card, Divider, Flex, Input, Typography } from "antd";
import type { CardProps } from "antd";
import { useEffect, useState } from "react";
import styles from "./LogFilterCard.module.css";

export type LogFilterItem = {
  id: number | string;
  name: string;
  action?: string;
  description?: string;
  user?: string;
  category?: string;
};

export type LogFilterCategory = {
  key: string;
  name: string;
  searchFunction?: (item: LogFilterItem) => boolean;
  filterFn?: (item: LogFilterItem) => boolean;
};

export type LogFilterStat = {
  key: string;
  label: string;
  value: number | string;
};

export type LogFilterCardProps = {
  items: LogFilterItem[];
  categories: LogFilterCategory[];
  stats: LogFilterStat[];
  defaultCategoryKey?: string;
  searchPlaceholder?: string;
  onFilteredResultsChange?: (
    filteredItems: LogFilterItem[],
    activeCategory: LogFilterCategory | undefined,
    searchValue: string,
  ) => void;
} & Omit<CardProps, "children" | "title">;

const matchesSearch = (item: LogFilterItem, query: string) => {
  if (!query) {
    return true;
  }

  const normalizedQuery = query.trim().toLowerCase();
  const searchableValues = [item.name, item.action, item.description, item.user];

  return searchableValues.some((value) => value?.toLowerCase().includes(normalizedQuery));
};

export default function LogFilterCard({
  items,
  categories,
  stats,
  defaultCategoryKey,
  searchPlaceholder = "Search logs by acton, description, or user...",
  onFilteredResultsChange,
  className = "",
  ...props
}: LogFilterCardProps) {
  const initialCategoryKey = defaultCategoryKey || categories[0]?.key || "";
  const [activeCategoryKey, setActiveCategoryKey] = useState(initialCategoryKey);
  const [searchValue, setSearchValue] = useState("");
  const resolvedActiveCategoryKey = categories.some((category) => category.key === activeCategoryKey)
    ? activeCategoryKey
    : initialCategoryKey;
  const activeCategory = categories.find((category) => category.key === resolvedActiveCategoryKey);
  const filteredItems = items.filter((item) => {
    const categoryMatcher = activeCategory?.searchFunction || activeCategory?.filterFn;
    const matchesCategory = categoryMatcher ? categoryMatcher(item) : true;
    return matchesCategory && matchesSearch(item, searchValue);
  });

  useEffect(() => {
    console.log(
      "Filtered log names:",
      filteredItems.map((item) => item.name),
    );

    onFilteredResultsChange?.(filteredItems, activeCategory, searchValue);
  }, [activeCategory, filteredItems, onFilteredResultsChange, searchValue]);

  const cardClassName = [styles.card, className].filter(Boolean).join(" ");

  return (
    <Card className={cardClassName} {...props}>
      <Flex vertical className={styles.content}>
        <Flex align="center" className={styles.topRow} gap={20}>
          <Input
            className={styles.searchInput}
            onChange={(event) => setSearchValue(event.target.value)}
            placeholder={searchPlaceholder}
            prefix={<SearchOutlined className={styles.searchIcon} />}
            value={searchValue}
          />

          <Flex className={styles.filterGroup} gap={12} wrap>
            {categories.map((category) => {
              const isActive = category.key === resolvedActiveCategoryKey;
              const buttonClassName = [
                styles.filterButton,
                isActive ? styles.filterButtonActive : "",
              ]
                .filter(Boolean)
                .join(" ");

              return (
                <Button
                  key={category.key}
                  className={buttonClassName}
                  onClick={() => setActiveCategoryKey(category.key)}
                  type="text"
                >
                  {category.name}
                </Button>
              );
            })}
          </Flex>
        </Flex>

        <Divider className={styles.divider} />

        <Flex className={styles.statsRow} justify="space-between" wrap>
          {stats.map((stat) => (
            <Flex key={stat.key} className={styles.statItem} vertical align="center">
              <Typography.Text className={styles.statValue}>{stat.value}</Typography.Text>
              <Typography.Text className={styles.statLabel}>{stat.label}</Typography.Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Card>
  );
}
