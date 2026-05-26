"use client";

import { Card, Flex, Pagination, Table, Typography } from "antd";
import type { CardProps, PaginationProps, TableProps } from "antd";
import { useState, type ReactNode } from "react";
import Empty from "./Empty";
import Tag from "./Tag";
import styles from "./DataGrid.module.css";

export type DataGridTypographyTone = "primary" | "secondary" | "muted";
export type DataGridValueType = "string" | "component";
export type DataGridComponentType = "tag" | "typography";

export type DataGridRow = {
  id?: number | string;
  __dataGridRowKey?: string;
  __isPlaceholder?: boolean;
  [key: string]: unknown;
};

export type DataGridConfigItem = {
  name: string;
  key: string;
  valueType?: DataGridValueType;
  componentType?: DataGridComponentType;
  icon?: ReactNode;
  width?: number;
  align?: "left" | "center" | "right";
  typographyTone?: DataGridTypographyTone;
  render?: (value: unknown, record: DataGridRow, index: number) => ReactNode;
};

export type DataGridProps = {
  config: DataGridConfigItem[];
  data: DataGridRow[];
  pagination?: boolean;
  pageSize?: number;
  rowKey?: string;
  emptyText?: ReactNode;
} & Omit<CardProps, "children" | "title">;

const typographyToneClassNames: Record<DataGridTypographyTone, string> = {
  primary: styles.typographyPrimary,
  secondary: styles.typographySecondary,
  muted: styles.typographyMuted,
};

const renderPaginationItem: PaginationProps["itemRender"] = (
  _page,
  type,
  element,
) => {
  if (type === "prev") {
    return <Typography.Text className={styles.paginationText}>Previous</Typography.Text>;
  }

  if (type === "next") {
    return <Typography.Text className={styles.paginationText}>Next</Typography.Text>;
  }

  return element;
};

export default function DataGrid({
  config,
  data,
  pagination = false,
  pageSize = 7,
  rowKey = "id",
  emptyText = "No data available",
  className = "",
  ...props
}: DataGridProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(data.length / pageSize));
  const resolvedCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (resolvedCurrentPage - 1) * pageSize;
  const paginatedData = pagination ? data.slice(startIndex, startIndex + pageSize) : data;
  const placeholderCount =
    pagination &&
    data.length > 0 &&
    paginatedData.length > 0 &&
    paginatedData.length < pageSize
      ? pageSize - paginatedData.length
      : 0;
  const tableData: DataGridRow[] = [
    ...paginatedData,
    ...createPlaceholderRows({
      count: placeholderCount,
      data,
      pageSize,
      startIndex,
    }),
  ].map((record, index) => ({
    ...record,
    __dataGridRowKey:
      record.__dataGridRowKey ??
      String(
        record[rowKey] ??
          record.id ??
          record.key ??
          record.created_at ??
          `row-${resolvedCurrentPage}-${index}`,
      ),
  }));

  const tableColumns: TableProps<DataGridRow>["columns"] = config.map((item) => ({
    title: item.name,
    dataIndex: item.key,
    key: item.key,
    width: item.width,
    align: item.align,
    render: (value, record, index) => renderCell(item, value, record, index),
  }));

  const cardClassName = [styles.card, className].filter(Boolean).join(" ");

  return (
    <Flex vertical className={styles.wrapper} gap={10}>
      <Card className={cardClassName} {...props}>
        <Flex vertical className={styles.cardContent}>
          <Table<DataGridRow>
            className={styles.table}
            columns={tableColumns}
            dataSource={tableData}
            locale={{ emptyText: renderEmptyState(emptyText) }}
            pagination={false}
            rowKey="__dataGridRowKey"
            rowClassName={(record) => (record.__isPlaceholder ? styles.placeholderRow : "")}
          />
        </Flex>
      </Card>
      {pagination ? (
        <Flex align="center" className={styles.footer} justify="space-between" gap={16}>
          <Flex align="center" gap={4}>
            <Typography.Text className={styles.footerText}>Showing</Typography.Text>
            <Typography.Text className={styles.footerCount}>{paginatedData.length}</Typography.Text>
            <Typography.Text className={styles.footerText}>of</Typography.Text>
            <Typography.Text className={styles.footerCount}>{data.length}</Typography.Text>
            <Typography.Text className={styles.footerText}>logs</Typography.Text>
          </Flex>

          <Pagination
            className={styles.pagination}
            current={resolvedCurrentPage}
            itemRender={renderPaginationItem}
            onChange={setCurrentPage}
            pageSize={pageSize}
            showSizeChanger={false}
            size="small"
            total={data.length}
          />
        </Flex>
      ) : null}
    </Flex>
  );
}

function renderEmptyState(emptyText: ReactNode) {
  return <Empty className={styles.emptyState} message={emptyText} type="datagrid" />;
}

function renderCell(
  item: DataGridConfigItem,
  value: unknown,
  record: DataGridRow,
  index: number,
) {
  if (item.render) {
    return item.render(value, record, index);
  }

  const resolvedValue = value == null ? "-" : String(value);
  const normalizedValue =
    item.key === "created_at" ? resolvedValue : resolvedValue.replace(/\s*\n\s*/g, " ");
  const hasIcon = Boolean(item.icon);
  const isPlaceholder = Boolean(record.__isPlaceholder);
  let cellNode: ReactNode;

  if (item.key === "created_at") {
    const [timestamp, ...details] = resolvedValue.split("\n");

    cellNode = (
      <Flex className={styles.timestampValue} gap={2} vertical>
        <Typography.Text className={styles.timestampPrimary}>{timestamp || "-"}</Typography.Text>
        <Typography.Text className={styles.timestampSecondary}>
          {details.join(" ").trim() || "-"}
        </Typography.Text>
      </Flex>
    );
  } else if (item.valueType === "component" && item.componentType === "tag") {
    cellNode = (
      <Tag outline rounded statusValue={normalizedValue} type="status">
        {normalizedValue}
      </Tag>
    );
  } else if (item.valueType === "component" && item.componentType === "typography") {
    const typographyTone = item.typographyTone ?? "primary";
    const textNode = (
      <Typography.Text className={typographyToneClassNames[typographyTone]}>
        {normalizedValue}
      </Typography.Text>
    );

    if (!hasIcon) {
      cellNode = textNode;
    } else {
      cellNode = (
        <Flex align="center" className={styles.iconValue} gap={8}>
          <Flex align="center" className={styles.cellIcon} justify="center">
            {item.icon}
          </Flex>
          {textNode}
        </Flex>
      );
    }
  } else if (hasIcon) {
    cellNode = (
      <Flex align="center" className={styles.iconValue} gap={8}>
        <Flex align="center" className={styles.cellIcon} justify="center">
          {item.icon}
        </Flex>
        <Typography.Text className={styles.typographySecondary}>
          {normalizedValue}
        </Typography.Text>
      </Flex>
    );
  } else {
    cellNode = (
      <Typography.Text className={styles.typographySecondary}>
        {normalizedValue}
      </Typography.Text>
    );
  }

  if (isPlaceholder) {
    return <Flex className={styles.placeholderContent}>{cellNode}</Flex>;
  }

  return cellNode;
}

function createPlaceholderRows({
  count,
  data,
  pageSize,
  startIndex,
}: {
  count: number;
  data: DataGridRow[];
  pageSize: number;
  startIndex: number;
}): DataGridRow[] {
  if (count <= 0 || data.length === 0) {
    return [];
  }

  const referencePageStart = Math.max(0, startIndex - pageSize);
  const referencePageRows = data.slice(referencePageStart, referencePageStart + pageSize);
  const fallbackRows = referencePageRows.length > 0 ? referencePageRows : data.slice(0, pageSize);

  return Array.from({ length: count }, (_, index) => {
    const sourceRow = fallbackRows[index % fallbackRows.length] ?? data[index % data.length];

    return {
      ...sourceRow,
      __dataGridRowKey: `placeholder-row-${startIndex + index}`,
      __isPlaceholder: true,
    };
  });
}
