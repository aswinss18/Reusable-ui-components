"use client";

import { ArrowLeftOutlined } from "@ant-design/icons";
import { Flex, Typography } from "antd";
import type { ReactNode } from "react";
import Link from "next/link";
import styles from "./BreadCrumb.module.css";

export type BreadCrumbProps = {
  data: BreadCrumbData;
  actions?: ReactNode;
  className?: string;
};

export type BreadCrumbData = {
  title: ReactNode;
  subtitle?: ReactNode;
  backButton?: string;
};

function formatBackLabel(route: string) {
  const segments = route.split("/").filter(Boolean);
  const lastSegment = segments.at(-1);

  if (!lastSegment) {
    return "Back";
  }

  const titleCase = decodeURIComponent(lastSegment)
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return `Back to ${titleCase}`;
}

export default function BreadCrumb({
  data,
  actions,
  className = "",
}: BreadCrumbProps) {
  const { title, subtitle, backButton } = data;
  const wrapperClassName = [styles.wrapper, className].filter(Boolean).join(" ");

  return (
    <Flex align="flex-start" className={wrapperClassName} justify="space-between">
      <Flex className={styles.leftColumn} vertical>
        {backButton ? (
          <Link className={styles.backLink} href={backButton}>
            <Flex align="center" gap={8}>
              <ArrowLeftOutlined className={styles.backIcon} />
              <Typography.Text className={styles.backText}>
                {formatBackLabel(backButton)}
              </Typography.Text>
            </Flex>
          </Link>
        ) : null}

        <Typography.Text className={styles.title}>{title}</Typography.Text>

        {subtitle ? (
          <Typography.Text className={styles.subtitle}>{subtitle}</Typography.Text>
        ) : null}
      </Flex>

      {actions ? (
        <Flex align="center" className={styles.actions} gap={12}>
          {actions}
        </Flex>
      ) : null}
    </Flex>
  );
}
