"use client";

import { CloseOutlined } from "@ant-design/icons";
import { Modal as AntModal } from "antd";
import type { ModalProps as AntModalProps } from "antd";
import type { CSSProperties, ReactNode } from "react";
import styles from "./Modal.module.css";

export type ModalProps = {
  title: ReactNode;
  children: ReactNode;
  onClose: () => void;
  titleBg?: string;
} & Omit<AntModalProps, "children" | "closable" | "closeIcon" | "footer" | "title" | "onCancel">;

export default function Modal({
  title,
  children,
  onClose,
  open,
  titleBg,
  width = 410,
  rootClassName = "",
  ...props
}: ModalProps) {
  const modalClassName = [
    styles.modal,
    titleBg ? styles.modalColored : "",
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
    ? ({ "--modal-title-bg": titleBg } satisfies CSSProperties)
    : undefined;

  return (
    <AntModal
      {...props}
      centered
      closable={false}
      footer={null}
      onCancel={onClose}
      open={open}
      rootClassName={modalClassName}
      style={modalStyle}
      title={
        <div className={headerInnerClassName}>
          <div className={titleClassName}>{title}</div>
          <button
            aria-label="Close modal"
            className={closeButtonClassName}
            onClick={onClose}
            type="button"
          >
            <CloseOutlined />
          </button>
        </div>
      }
      width={width}
    >
      {children}
    </AntModal>
  );
}
