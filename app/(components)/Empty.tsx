"use client";

import { Empty as AntEmpty, Typography } from "antd";
import type { EmptyProps as AntEmptyProps } from "antd";
import type { ReactNode } from "react";
import styles from "./Empty.module.css";

export type EmptyType = "default" | "datagrid" | "not-found";

export type EmptyProps = {
  message?: ReactNode;
  type?: EmptyType;
} & Omit<AntEmptyProps, "description" | "image">;

const emptyImageByType: Record<EmptyType, ReactNode> = {
  default: AntEmpty.PRESENTED_IMAGE_DEFAULT,
  datagrid: AntEmpty.PRESENTED_IMAGE_DEFAULT,
  "not-found": AntEmpty.PRESENTED_IMAGE_DEFAULT,
};

const defaultMessageByType: Partial<Record<EmptyType, ReactNode>> = {
  default: "No data available",
  datagrid: "No data available",
};

const typeClassNames: Record<EmptyType, string> = {
  default: styles.typeDefault,
  datagrid: styles.typeDatagrid,
  "not-found": styles.typeNotFound,
};

export default function Empty({
  message,
  type = "default",
  className = "",
  ...props
}: EmptyProps) {
  const resolvedMessage = message === undefined ? defaultMessageByType[type] : message;
  const emptyClassName = [styles.root, typeClassNames[type], className].filter(Boolean).join(" ");

  return (
    <AntEmpty
      {...props}
      className={emptyClassName}
      description={
        resolvedMessage == null ? false : (
          <Typography.Text className={styles.message}>{resolvedMessage}</Typography.Text>
        )
      }
      image={emptyImageByType[type]}
    />
  );
}
