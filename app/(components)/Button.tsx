import { Button as AntButton } from "antd";
import type { ButtonProps as AntButtonProps } from "antd";
import type { CSSProperties, ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonVariant = "filled" | "outlined";
type ButtonColor = "primary" | "secondary" | "danger" | "neutral";

export type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  color?: ButtonColor;
} & Omit<AntButtonProps, "children" | "color" | "variant" | "type" | "block">;

const buttonStyles: Record<ButtonColor, Record<ButtonVariant, CSSProperties>> = {
  primary: {
    filled: {
      backgroundColor: "var(--primary)",
      borderColor: "var(--primary)",
      color: "#ffffff",
    },
    outlined: {
      backgroundColor: "transparent",
      borderColor: "var(--primary)",
      color: "var(--primary)",
    },
  },
  secondary: {
    filled: {
      backgroundColor: "var(--secondary)",
      borderColor: "var(--secondary)",
      color: "#ffffff",
    },
    outlined: {
      backgroundColor: "transparent",
      borderColor: "var(--secondary)",
      color: "var(--secondary)",
    },
  },
  danger: {
    filled: {
      backgroundColor: "var(--danger)",
      borderColor: "var(--danger)",
      color: "#ffffff",
    },
    outlined: {
      backgroundColor: "transparent",
      borderColor: "var(--danger)",
      color: "var(--danger)",
    },
  },
  neutral: {
    filled: {
      backgroundColor: "var(--neutral-surface)",
      borderColor: "var(--neutral-surface)",
      color: "var(--neutral-text)",
    },
    outlined: {
      backgroundColor: "transparent",
      borderColor: "var(--neutral-border)",
      color: "var(--neutral-text)",
    },
  },
};

export default function Button({
  children,
  variant = "filled",
  color = "primary",
  className = "",
  htmlType = "button",
  style,
  ...props
}: ButtonProps) {
  const buttonClassName = [styles.button, className].filter(Boolean).join(" ");

  return (
    <AntButton
      {...props}
      className={buttonClassName}
      htmlType={htmlType}
      style={{ ...buttonStyles[color][variant], ...style }}
      variant={variant}
    >
      {children}
    </AntButton>
  );
}
