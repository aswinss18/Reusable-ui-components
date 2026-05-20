"use client";

import { CloseOutlined } from "@ant-design/icons";
import { Modal as AntModal, Button, Flex, Typography } from "antd";
import type { ModalProps as AntModalProps } from "antd";
import { Children, Fragment, isValidElement } from "react";
import type { CSSProperties, ReactNode } from "react";
import styles from "./Modal.module.css";

type ModalActionsAlign = "right" | "space-between";

export type ModalProps = {
  title: ReactNode;
  children: ReactNode;
  onClose: () => void;
  actions?: ReactNode;
  actionsAlign?: ModalActionsAlign;
  closeOnBackdropClick?: boolean;
  fitContentWidth?: boolean;
  width?: number | string;
} & Omit<
  AntModalProps,
  "children" | "closable" | "closeIcon" | "title" | "onCancel" | "width" | "maskClosable"
>;

export default function Modal({
  title,
  children,
  onClose,
  actions,
  actionsAlign = "right",
  closeOnBackdropClick = true,
  fitContentWidth = false,
  open,
  width = 410,
  rootClassName = "",
  footer = false,
  style,
  ...props
}: ModalProps) {
  const rawActionItems = Children.toArray(actions);
  const firstActionItem = rawActionItems[0];
  const actionItems =
    rawActionItems.length === 1 &&
    isValidElement<{ children?: ReactNode }>(firstActionItem) &&
    firstActionItem.type === Fragment
      ? Children.toArray(firstActionItem.props.children)
      : rawActionItems;
  const hasStyledFooter = Boolean(footer);
  const modalClassName = [
    styles.modal,
    fitContentWidth ? styles.modalFitContent : "",
    hasStyledFooter ? styles.modalWithFooter : "",
    rootClassName,
  ]
    .filter(Boolean)
    .join(" ");
  const modalStyle: CSSProperties = fitContentWidth
    ? {
        ...style,
        maxWidth: "calc(100vw - 32px)",
        minWidth: typeof width === "number" ? `${width}px` : width,
      }
    : (style ?? {});
  const actionsContent = actions ? (
    <Flex
      align="center"
      className={styles.footerActions}
      justify={actionsAlign === "space-between" ? "space-between" : "flex-end"}
    >
      {actionsAlign === "space-between" ? (
        <>
          <div className={styles.footerActionStart}>{actionItems[0] ?? null}</div>
          <div className={styles.footerActionEnd}>{actionItems[1] ?? null}</div>
        </>
      ) : (
        actionItems
      )}
    </Flex>
  ) : null;
  const footerContent = hasStyledFooter ? actionsContent : null;

  return (
    <AntModal
      {...props}
      centered
      closable={false}
      footer={footerContent}
      maskClosable={closeOnBackdropClick}
      onCancel={onClose}
      open={open}
      rootClassName={modalClassName}
      style={modalStyle}
      title={
        <Flex justify="space-between" align="center" className={styles.headerInner}>
          <Typography className={styles.title}>{title}</Typography>
          <Button
            type="text"
            icon={<CloseOutlined />}
            onClick={onClose}
            aria-label="Close modal"
            className={styles.closeButton}
          />
        </Flex>
      }
      width={fitContentWidth ? "fit-content" : width}
    >
      <>
        {children}
        {actions && !hasStyledFooter ? (
          <div className={styles.inlineActions}>{actionsContent}</div>
        ) : null}
      </>
    </AntModal>
  );
}
