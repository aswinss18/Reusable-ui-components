import { Button as AntButton } from "antd";
import type { ButtonProps as AntButtonProps } from "antd";
import type { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonVariant = "filled" | "outlined";
type ButtonColor = "primary" | "secondary" | "danger" | "neutral";

export type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  color?: ButtonColor;
} & Omit<AntButtonProps, "children" | "color" | "variant" | "type" | "block">;

const buttonToneClassNames: Record<ButtonColor, Record<ButtonVariant, string>> = {
  primary: {
    filled: styles.buttonPrimaryFilled,
    outlined: styles.buttonPrimaryOutlined,
  },
  secondary: {
    filled: styles.buttonSecondaryFilled,
    outlined: styles.buttonSecondaryOutlined,
  },
  danger: {
    filled: styles.buttonDangerFilled,
    outlined: styles.buttonDangerOutlined,
  },
  neutral: {
    filled: styles.buttonNeutralFilled,
    outlined: styles.buttonNeutralOutlined,
  },
};

export default function Button({
  children,
  variant = "filled",
  color = "primary",
  className = "",
  htmlType = "button",
  ...props
}: ButtonProps) {
  const buttonClassName = [
    styles.button,
    buttonToneClassNames[color][variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <AntButton
      {...props}
      className={buttonClassName}
      htmlType={htmlType}
      variant={variant}
    >
      {children}
    </AntButton>
  );
}
