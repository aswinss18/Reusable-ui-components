"use client";

import { Card, Flex, Typography } from "antd";
import Button from "./(components)/Button";
import Empty from "./(components)/Empty";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <Card variant="borderless" className={styles.pageCard}>
      <Flex vertical align="center" justify="center" gap={20} className={styles.stateStack}>
        <Empty message={null} type="not-found" />

        <Flex vertical align="center" gap={8} className={styles.copyBlock}>
          <Typography.Title level={1} className={styles.errorCode}>
            404
          </Typography.Title>
          <Typography.Title level={2} className={styles.errorTitle}>
            Bad Request
          </Typography.Title>
          <Typography.Paragraph className={styles.errorDescription}>
            The page route you requested is unavailable or does not exist in this component
            library. Return to the components index and continue from one of the supported
            preview pages.
          </Typography.Paragraph>
        </Flex>

        <Flex gap={12} wrap justify="center" className={styles.actions}>
          <Button href="/">Back to Components</Button>
          <Button color="neutral" variant="outlined" href="/header">
            Open Header Showcase
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
}
