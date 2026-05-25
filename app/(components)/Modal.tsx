"use client";

import { CloseOutlined } from "@ant-design/icons";
import { Modal as AntModal, Button, Flex, Typography } from "antd";
import type { ModalProps as AntModalProps } from "antd";
import { Children, Fragment, isValidElement } from "react";
import type { ReactNode } from "react";
import styles from "./Modal.module.css";

type ModalActionsAlign = "right" | "space-between";
type ModalTitleBackground = "default" | "brand" | "deep";

export type ModalProps = {
  title: ReactNode;
  children: ReactNode;
  onClose: () => void;
  actions?: ReactNode;
  actionsAlign?: ModalActionsAlign;
  closeOnBackdropClick?: boolean;
  fitContentWidth?: boolean;
  titleBackground?: ModalTitleBackground;
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
  titleBackground = "default",
  open,
  width = 410,
  rootClassName = "",
  footer = false,
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
    titleBackground === "brand"
      ? styles.modalTitleBrand
      : titleBackground === "deep"
        ? styles.modalTitleDeep
        : "",
    hasStyledFooter ? styles.modalWithFooter : "",
    rootClassName,
  ]
    .filter(Boolean)
    .join(" ");
  const actionsContent = actions ? (
    <Flex
      align="center"
      className={styles.footerActions}
      justify={actionsAlign === "space-between" ? "space-between" : "flex-end"}
      gap={12}
    >
      {actionsAlign === "space-between" ? (
        <>
          <Flex className={styles.footerActionStart}>{actionItems[0] ?? null}</Flex>
          <Flex className={styles.footerActionEnd}>{actionItems[1] ?? null}</Flex>
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
      mask={{ closable: closeOnBackdropClick }}
      onCancel={onClose}
      open={open}
      rootClassName={modalClassName}
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
      width={fitContentWidth ? undefined : width}
    >
      <>
        {children}
        {actions && !hasStyledFooter ? (
          <Flex className={styles.inlineActions} gap={12}>{actionsContent}</Flex>
        ) : null}
      </>
    </AntModal>
  );
}
