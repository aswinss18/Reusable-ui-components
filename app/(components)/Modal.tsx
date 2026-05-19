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
  titleBg?: string;
  actions?: ReactNode;
  actionsAlign?: ModalActionsAlign;
  width?: number | string;
} & Omit<
  AntModalProps,
  "children" | "closable" | "closeIcon" | "title" | "onCancel" | "width"
>;

export default function Modal({
  title,
  children,
  onClose,
  actions,
  actionsAlign = "right",
  open,
  titleBg,
  width = 410,
  rootClassName = "",
  footer = false,
  ...props
}: ModalProps) {
  const actionItems =
    Children.toArray(actions).length === 1 &&
    isValidElement(Children.toArray(actions)[0]) &&
    Children.toArray(actions)[0].type === Fragment
      ? Children.toArray(Children.toArray(actions)[0].props.children)
      : Children.toArray(actions);
  const hasStyledFooter = Boolean(footer);
  const modalClassName = [
    styles.modal,
    titleBg ? styles.modalColored : "",
    hasStyledFooter ? styles.modalWithFooter : "",
    rootClassName,
  ]
    .filter(Boolean)
    .join(" ");
  const headerInnerClassName = [
    styles.headerInner,
    titleBg ? styles.headerInnerColored : "",
  ]
    .filter(Boolean)
    .join(" ");
  const titleClassName = [
    styles.title,
    titleBg ? styles.titleColored : "",
  ]
    .filter(Boolean)
    .join(" ");
  const closeButtonClassName = [
    styles.closeButton,
    titleBg ? styles.closeButtonColored : "",
  ]
    .filter(Boolean)
    .join(" ");
  const modalStyle = titleBg
    ? ({ "--modal-title-bg": titleBg } as CSSProperties)
    : undefined;
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
      onCancel={onClose}
      open={open}
      rootClassName={modalClassName}
      style={modalStyle}
      title={
        <Flex justify="space-between" align="center" className={headerInnerClassName}>
          <Typography className={titleClassName}>{title}</Typography>
          <Button
            type="text"
            icon={<CloseOutlined />}
            onClick={onClose}
            aria-label="Close modal"
            className={closeButtonClassName}
          />
        </Flex>
      }
      width={width}
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
