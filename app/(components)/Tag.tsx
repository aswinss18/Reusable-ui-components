"use client";

import { Tag as AntTag } from "antd";
import type { ReactNode } from "react";
import styles from "./Tag.module.css";

type TagType = "status" | "default" | "count" | "change";
type StatusValue = "completed" | "opened" | "pending" | "failed" | "success" | "approved" | "rejected";
type CountBgColor = "#ED1B2F" | "#0CC496" | "#332556";

export type TagProps = {
  type: TagType;
  children: ReactNode;
  outline?: boolean;
  rounded?: boolean;
  statusValue?: StatusValue | string;
  countBgColor?: CountBgColor;
};

function normalizeStatusValue(value: string | undefined): StatusValue | undefined {
  if (!value) {
    return undefined;
  }

  const normalizedValue = value.trim().toLowerCase();

  if (normalizedValue === "completed") return "completed";
  if (normalizedValue === "opened") return "opened";
  if (normalizedValue === "pending") return "pending";
  if (normalizedValue === "failed") return "failed";
  if (normalizedValue === "success") return "success";
  if (normalizedValue === "approved") return "approved";
  if (normalizedValue === "rejected") return "rejected";

  return undefined;
}

export default function Tag({
  type,
  children,
  outline = false,
  rounded = false,
  statusValue,
  countBgColor,
}: TagProps) {
  const getStatusClasses = () => {
    if (type !== "status") return "";

    const resolvedStatusValue = normalizeStatusValue(
      statusValue ?? (typeof children === "string" ? children : String(children)),
    );

    if (!resolvedStatusValue) return "";

    const baseClass = outline ? styles.statusOutline : styles.status;

    switch (resolvedStatusValue) {
      case "completed":
      case "opened":
        return `${baseClass} ${outline ? styles.statusCompletedOutline : styles.statusCompleted}`;
      case "pending":
        return `${baseClass} ${outline ? styles.statusPendingOutline : styles.statusPending}`;
      case "failed":
        return `${baseClass} ${outline ? styles.statusFailedOutline : styles.statusFailed}`;
      case "success":
        return `${baseClass} ${outline ? styles.statusSuccessOutline : styles.statusSuccess}`;
      case "approved":
        return `${baseClass} ${outline ? styles.statusApprovedOutline : styles.statusApproved}`;
      case "rejected":
        return `${baseClass} ${outline ? styles.statusRejectedOutline : styles.statusRejected}`;
      default:
        return baseClass;
    }
  };

  const getCountClass = () => {
    if (type !== "count" || !countBgColor) return "";

    switch (countBgColor) {
      case "#ED1B2F":
        return styles.countRed;
      case "#0CC496":
        return styles.countGreen;
      case "#332556":
        return styles.countPurple;
      default:
        return "";
    }
  };

  const getChangeClass = () => {
    if (type !== "change") return "";

    const childString = String(children);
    const isPositive = childString.startsWith("+");
    
    return isPositive ? styles.changePositive : styles.changeNegative;
  };

  const getTagClasses = () => {
    const baseClasses = [styles.tag];

    // Add rounded or default border radius
    if (rounded) {
      baseClasses.push(styles.rounded);
    } else {
      baseClasses.push(styles.defaultRadius);
    }

    // Add type-specific classes
    switch (type) {
      case "status":
        baseClasses.push(getStatusClasses());
        break;
      case "default":
        baseClasses.push(styles.default);
        break;
      case "count":
        baseClasses.push(styles.count);
        baseClasses.push(getCountClass());
        break;
      case "change":
        baseClasses.push(styles.change);
        baseClasses.push(getChangeClass());
        break;
    }

    return baseClasses.filter(Boolean).join(" ");
  };

  return (
    <AntTag className={getTagClasses()} variant="filled">
      {children}
    </AntTag>
  );
}
