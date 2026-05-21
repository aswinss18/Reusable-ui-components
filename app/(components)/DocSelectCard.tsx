"use client";

import { Flex, Typography } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import type { ReactNode } from "react";
import styles from "./DocSelectCard.module.css";

export type DocSelectCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  selected?: boolean;
  onClick?: () => void;
};

export default function DocSelectCard({
  icon,
  title,
  description,
  selected = false,
  onClick,
}: DocSelectCardProps) {
  return (
    <Flex
      className={`${styles.card} ${selected ? styles.selected : ""}`}
      vertical
      gap={12}
      onClick={onClick}
    >
      <Flex justify="space-between" align="flex-start">
        <Flex className={styles.iconContainer} align="center" justify="center">
          {icon}
        </Flex>
        {selected && (
          <CheckCircleOutlined className={styles.checkIcon} />
        )}
      </Flex>

      <Flex vertical gap={4}>
        <Typography.Text className={styles.title}>{title}</Typography.Text>
        <Typography.Text className={styles.description}>
          {description}
        </Typography.Text>
      </Flex>
    </Flex>
  );
}
