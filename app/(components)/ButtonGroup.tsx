"use client";

import { Flex } from "antd";
import type { CSSProperties, ReactNode } from "react";
import Button, { type ButtonProps } from "./Button";

type ButtonGroupAlign = "left" | "center" | "right";

export type ButtonGroupButtonConfig = {
  key?: string;
  label: ReactNode;
  className?: string;
  style?: CSSProperties;
  minWidth?: number | string;
} & Omit<ButtonProps, "children" | "className" | "style">;

export type ButtonGroupProps = {
  buttons: ButtonGroupButtonConfig[];
  align?: ButtonGroupAlign;
  gap?: number;
  className?: string;
  style?: CSSProperties;
  matchWidth?: boolean;
};

function getLabelLength(label: ReactNode) {
  if (typeof label === "string" || typeof label === "number") {
    return String(label).length;
  }

  return 0;
}

export default function ButtonGroup({
  buttons,
  align = "center",
  gap = 12,
  className = "",
  style,
  matchWidth = false,
}: ButtonGroupProps) {
  const maxLabelLength = Math.max(0, ...buttons.map((button) => getLabelLength(button.label)));
  const sharedMinWidth = matchWidth ? maxLabelLength * 10 + 60 : undefined;
  const justify =
    align === "left" ? "flex-start" : align === "right" ? "flex-end" : "center";
  const wrapperClassName = className.trim();

  return (
    <Flex className={wrapperClassName} gap={gap} justify={justify} style={style} wrap>
      {buttons.map((button, index) => {
        const { key, label, minWidth, style: buttonStyle, ...buttonProps } = button;

        return (
          <Button
            key={key ?? `button-group-item-${index}`}
            {...buttonProps}
            style={{
              minWidth: minWidth ?? sharedMinWidth,
              ...buttonStyle,
            }}
          >
            {label}
          </Button>
        );
      })}
    </Flex>
  );
}
