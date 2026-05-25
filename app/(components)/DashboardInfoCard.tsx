"use client";

import { RightOutlined, SettingOutlined } from "@ant-design/icons";
import { Avatar, Card, Flex, Tag, Typography } from "antd";
import type { CardProps } from "antd";
import type { ReactNode } from "react";
import styles from "./DashboardInfoCard.module.css";

export type DashboardInfoCardType = "activity" | "action";
export type DashboardInfoActivityTone = "positive" | "neutral" | "danger";
export type DashboardInfoActionTone = "primary" | "danger";

export type DashboardInfoActivityItem = {
  id: number | string;
  name: string;
  subtitle: string;
  avatarText: string;
  value: string;
  valueTone?: DashboardInfoActivityTone;
};

export type DashboardInfoActionItem = {
  id: number | string;
  name: string;
  subtitle: string;
  icon?: ReactNode;
  tone?: DashboardInfoActionTone;
};

type DashboardInfoBaseProps = {
  title: string;
  subtitle: string;
  action?: (item: DashboardInfoActivityItem | DashboardInfoActionItem) => void;
} & Omit<CardProps, "children" | "title">;

type DashboardInfoActivityProps = DashboardInfoBaseProps & {
  cardType: "activity";
  data: DashboardInfoActivityItem[];
};

type DashboardInfoActionProps = DashboardInfoBaseProps & {
  cardType: "action";
  data: DashboardInfoActionItem[];
};

export type DashboardInfoCardProps =
  | DashboardInfoActivityProps
  | DashboardInfoActionProps;

const activityToneClassNames: Record<DashboardInfoActivityTone, string> = {
  positive: styles.activityValuePositive,
  neutral: styles.activityValueNeutral,
  danger: styles.activityValueDanger,
};

const actionToneClassNames: Record<DashboardInfoActionTone, string> = {
  primary: styles.actionItemPrimary,
  danger: styles.actionItemDanger,
};

const actionIconToneClassNames: Record<DashboardInfoActionTone, string> = {
  primary: styles.actionIconPrimary,
  danger: styles.actionIconDanger,
};

export default function DashboardInfoCard({
  title,
  subtitle,
  cardType,
  data,
  action,
  className = "",
  ...props
}: DashboardInfoCardProps) {
  const cardClassName = [styles.card, className].filter(Boolean).join(" ");

  const handleItemClick = (item: DashboardInfoActivityItem | DashboardInfoActionItem) => {
    if (action) {
      action(item);
      return;
    }

    console.log("DashboardInfoCard item clicked:", item.name, item);
  };

  return (
    <Card className={cardClassName} {...props}>
      <Flex vertical className={styles.content} gap={24}>
        <Flex className={styles.headerBlock} vertical gap={4}>
          <Typography.Text className={styles.title}>{title}</Typography.Text>
          <Typography.Text className={styles.subtitle}>{subtitle}</Typography.Text>
        </Flex>

        <Flex className={styles.itemsList} vertical gap={16}>
          {cardType === "activity"
            ? data.map((item) => (
                <Card
                  key={item.id}
                  className={styles.activityItem}
                  onClick={() => handleItemClick(item)}
                >
                  <Flex align="center" className={styles.activityRow} justify="space-between" gap={16}>
                    <Flex align="center" className={styles.identityBlock} gap={14}>
                      <Avatar className={styles.activityAvatar} size={40}>
                        {item.avatarText}
                      </Avatar>

                      <Flex className={styles.identityText} vertical gap={2}>
                        <Typography.Text className={styles.itemTitle}>{item.name}</Typography.Text>
                        <Typography.Text className={styles.itemSubtitle}>{item.subtitle}</Typography.Text>
                      </Flex>
                    </Flex>

                    <Tag
                      className={[
                        styles.activityValueTag,
                        activityToneClassNames[item.valueTone ?? "positive"],
                      ].join(" ")}
                    >
                      {item.value}
                    </Tag>
                  </Flex>
                </Card>
              ))
            : data.map((item) => {
                const tone = item.tone ?? "primary";

                return (
                  <Card
                    key={item.id}
                    className={[styles.actionItem, actionToneClassNames[tone]].join(" ")}
                    onClick={() => handleItemClick(item)}
                  >
                    <Flex align="center" className={styles.actionRow} justify="space-between" gap={16}>
                      <Flex align="center" className={styles.identityBlock} gap={14}>
                        <Avatar
                          className={[styles.actionIconAvatar, actionIconToneClassNames[tone]].join(" ")}
                          size={38}
                        >
                          {item.icon ?? <SettingOutlined />}
                        </Avatar>

                        <Flex className={styles.identityText} vertical gap={2}>
                          <Typography.Text className={styles.itemTitle}>{item.name}</Typography.Text>
                          <Typography.Text className={styles.itemSubtitle}>{item.subtitle}</Typography.Text>
                        </Flex>
                      </Flex>

                      <RightOutlined className={styles.actionArrow} />
                    </Flex>
                  </Card>
                );
              })}
        </Flex>
      </Flex>
    </Card>
  );
}
