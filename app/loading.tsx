import { Flex, Spin } from "antd";
import styles from "./layout.module.css";

export default function Loading() {
  return (
    <Flex align="center" className={styles.loaderScreen} justify="center">
      <Spin size="large" className={styles.loaderSpinner} />
    </Flex>
  );
}
