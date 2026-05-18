"use client";

import { Flex, Typography, Badge } from "antd";
import { useState } from "react";
import styles from "./StatusFilterTabs.module.css";

type TabStatus = "pending" | "approved" | "rejected";

export type StatusFilterTabsProps = {
  pendingCount?: number;
  approvedCount?: number;
  rejectedCount?: number;
  defaultActiveTab?: TabStatus;
  onChange?: (status: TabStatus) => void;
};

export default function StatusFilterTabs({
  pendingCount = 3,
  approvedCount = 1,
  rejectedCount = 1,
  defaultActiveTab = "pending",
  onChange,
}: StatusFilterTabsProps) {
  const [activeTab, setActiveTab] = useState<TabStatus>(defaultActiveTab);

  const handleTabClick = (status: TabStatus) => {
    setActiveTab(status);
    console.log("Tab changed to:", status);
    onChange?.(status);
  };

  return (
    <Flex className={styles.container} gap={12} align="center">
      <Flex
        className={`${styles.tab} ${activeTab === "pending" ? styles.active : ""}`}
        align="center"
        gap={8}
        onClick={() => handleTabClick("pending")}
      >
        <Typography.Text className={styles.tabText}>
          Pending for Actions
        </Typography.Text>
        <Badge
          count={pendingCount}
          className={styles.badge}
          style={{ backgroundColor: "#ED1B2F" }}
        />
      </Flex>

      <Flex
        className={`${styles.tab} ${activeTab === "approved" ? styles.active : ""}`}
        align="center"
        gap={8}
        onClick={() => handleTabClick("approved")}
      >
        <Typography.Text className={styles.tabText}>
          Approved
        </Typography.Text>
        <Badge
          count={approvedCount}
          className={styles.badge}
          style={{ backgroundColor: "#0CC496" }}
        />
      </Flex>

      <Flex
        className={`${styles.tab} ${activeTab === "rejected" ? styles.active : ""}`}
        align="center"
        gap={8}
        onClick={() => handleTabClick("rejected")}
      >
        <Typography.Text className={styles.tabText}>
          Rejected
        </Typography.Text>
        <Badge
          count={rejectedCount}
          className={styles.badge}
          style={{ backgroundColor: "#000000" }}
        />
      </Flex>
    </Flex>
  );
}
