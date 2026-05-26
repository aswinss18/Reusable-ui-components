"use client";

import { Card, Flex, Typography } from "antd";
import Button from "./(components)/Button";
import Result from "./(components)/Result";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <Card variant="borderless" className={styles.pageCard}>
      <Flex vertical align="center" justify="center" gap={20} className={styles.stateStack}>
        <Result message={null} type="not-found" />
      </Flex>
    </Card>
  );
}
