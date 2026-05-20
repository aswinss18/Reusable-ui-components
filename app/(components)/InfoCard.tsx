"use client";

import { Card, Flex } from "antd";
import type { CardProps, FlexProps } from "antd";
import type { HTMLAttributes, MouseEventHandler, KeyboardEventHandler, ReactNode } from "react";
import styles from "./InfoCard.module.css";

type LayoutProps = {
  children: ReactNode;
  className?: string;
  gap?: FlexProps["gap"];
  align?: FlexProps["align"];
  justify?: FlexProps["justify"];
  wrap?: FlexProps["wrap"];
};

export type InfoCardProps = {
  children: ReactNode;
  bodyClassName?: string;
  interactive?: boolean;
  onPress?: () => void;
} & Omit<CardProps, "title" | "classNames" | "onClick" | "onKeyDown"> &
  Pick<HTMLAttributes<HTMLDivElement>, "onClick" | "onKeyDown" | "role" | "tabIndex">;

function InfoCardRoot({
  children,
  bodyClassName = "",
  interactive = false,
  onPress,
  className = "",
  onClick,
  onKeyDown,
  role,
  tabIndex,
  ...props
}: InfoCardProps) {
  const cardClassName = [styles.root, className].filter(Boolean).join(" ");
  const bodyClassNames = [styles.body, bodyClassName].filter(Boolean).join(" ");

  const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
    onClick?.(event);
    onPress?.();
  };

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    onKeyDown?.(event);

    if (!interactive || !onPress) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onPress();
    }
  };

  return (
    <Card
      {...props}
      className={cardClassName}
      classNames={{ body: bodyClassNames }}
      onClick={onClick || onPress ? handleClick : undefined}
      onKeyDown={interactive || onKeyDown ? handleKeyDown : undefined}
      role={interactive ? role ?? "button" : role}
      tabIndex={interactive ? tabIndex ?? 0 : tabIndex}
    >
      {children}
    </Card>
  );
}

function InfoCardRow({
  children,
  className = "",
  gap,
  align,
  justify,
  wrap,
}: LayoutProps) {
  return (
    <Flex align={align} className={className} gap={gap} justify={justify} wrap={wrap}>
      {children}
    </Flex>
  );
}

function InfoCardStack({
  children,
  className = "",
  gap,
  align,
  justify,
  wrap,
}: LayoutProps) {
  return (
    <Flex
      align={align}
      className={className}
      gap={gap}
      justify={justify}
      vertical
      wrap={wrap}
    >
      {children}
    </Flex>
  );
}

const InfoCard = Object.assign(InfoCardRoot, {
  Row: InfoCardRow,
  Stack: InfoCardStack,
});

export default InfoCard;
