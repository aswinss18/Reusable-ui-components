"use client";

import { Empty as AntEmpty, Result as AntResult, Typography } from "antd";
import type { EmptyProps as AntEmptyProps, ResultProps as AntResultProps } from "antd";
import type { ReactNode } from "react";
import styles from "./Result.module.css";

export type ResultType =
  | "empty"
  | "datagrid"
  | "not-found"
  | "bad-request"
  | "confirmed"
  | "server-error";

export type ResultProps = {
  actions?: ReactNode;
  message?: ReactNode;
  title?: ReactNode;
  type?: ResultType;
} & Omit<AntEmptyProps, "description" | "image"> &
  Omit<AntResultProps, "status" | "title" | "subTitle" | "icon" | "extra">;

const emptyTypes = ["empty", "datagrid"] as const;
type EmptyResultType = (typeof emptyTypes)[number];

const emptyDefaults: Record<EmptyResultType, ReactNode> = {
  empty: "No data available",
  datagrid: "No data available",
};

const resultDefaults: Record<
  Exclude<ResultType, "empty" | "datagrid">,
  { status: AntResultProps["status"]; title: ReactNode; message: ReactNode }
> = {
  "not-found": {
    status: "404",
    title: "404",
    message: "The page you requested could not be found.",
  },
  "bad-request": {
    status: "403",
    title: "Bad Request",
    message: "The request cannot be completed with the current input or route state.",
  },
  confirmed: {
    status: "success",
    title: "Confirmed",
    message: "The requested action has been completed successfully.",
  },
  "server-error": {
    status: "500",
    title: "Server Error",
    message: "Something went wrong while processing the request.",
  },
};

const typeClassNames: Record<ResultType, string> = {
  empty: styles.typeEmpty,
  datagrid: styles.typeDatagrid,
  "not-found": styles.typeResult,
  "bad-request": styles.typeResult,
  confirmed: styles.typeResult,
  "server-error": styles.typeResult,
};

export default function Result({
  actions,
  message,
  title,
  type = "empty",
  className = "",
  ...props
}: ResultProps) {
  const resultClassName = [styles.root, typeClassNames[type], className].filter(Boolean).join(" ");

  if (isEmptyResultType(type)) {
    const resolvedMessage = message === undefined ? emptyDefaults[type] : message;
    const hasDescriptionContent = resolvedMessage != null || actions != null;

    return (
      <AntEmpty
        {...props}
        className={resultClassName}
        description={
          hasDescriptionContent ? (
            <div className={styles.description}>
              {resolvedMessage != null ? (
                <Typography.Text className={styles.message}>{resolvedMessage}</Typography.Text>
              ) : null}
              {actions != null ? <div className={styles.actions}>{actions}</div> : null}
            </div>
          ) : false
        }
        image={AntEmpty.PRESENTED_IMAGE_DEFAULT}
      />
    );
  }

  const config = resultDefaults[type];

  return (
    <AntResult
      {...props}
      className={resultClassName}
      extra={actions}
      status={config.status}
      subTitle={message ?? config.message}
      title={title ?? config.title}
    />
  );
}

function isEmptyResultType(type: ResultType): type is EmptyResultType {
  return type === "empty" || type === "datagrid";
}
