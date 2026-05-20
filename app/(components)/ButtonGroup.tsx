"use client";

import { Flex } from "antd";
import type { ReactNode } from "react";
import Button, { type ButtonProps } from "./Button";
import styles from "./ButtonGroup.module.css";

type ButtonGroupAlign = "left" | "center" | "right";

export type ButtonGroupButtonConfig = {
  key?: string;
  label: ReactNode;
  className?: string;
} & Omit<ButtonProps, "children" | "className">;

export type ButtonGroupProps = {
  buttons: ButtonGroupButtonConfig[];
  align?: ButtonGroupAlign;
  gap?: number;
  className?: string;
  matchWidth?: boolean;
};

export default function ButtonGroup({
  buttons,
  align = "center",
  gap = 12,
  className = "",
  matchWidth = false,
}: ButtonGroupProps) {
  const wrapperClassName = [
    styles.group,
    align === "left"
      ? styles.alignLeft
      : align === "right"
        ? styles.alignRight
        : styles.alignCenter,
    matchWidth ? styles.matchWidth : "",
    className.trim(),
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Flex className={wrapperClassName} gap={gap} wrap>
      {buttons.map((button, index) => {
        const { key, label, className: buttonClassName = "", ...buttonProps } = button;

        return (
          <div key={key ?? `button-group-item-${index}`} className={styles.item}>
            <Button {...buttonProps} className={buttonClassName}>
              {label}
            </Button>
          </div>
        );
      })}
    </Flex>
  );
}
