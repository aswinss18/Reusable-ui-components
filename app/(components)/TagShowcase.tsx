"use client";

import { Flex, Typography } from "antd";
import Tag from "./Tag";

export default function TagShowcase() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f5fb] px-6 py-16">
      <section className="flex w-full max-w-6xl flex-col gap-10 rounded-[32px] bg-white px-8 py-10 shadow-[0_20px_60px_rgba(65,64,153,0.08)] sm:px-12">
        <div className="space-y-3 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Reusable Tag Component
          </p>
          <h1 className="text-3xl font-semibold text-[#1d1b4a]">
            One component for all tag variations
          </h1>
          <p className="max-w-2xl text-base leading-7 text-[#6b6a8f]">
            This tag component uses Ant Design and supports multiple types: status,
            default, count, and change with various styling options.
          </p>
        </div>

        <Flex vertical gap={32}>
          {/* Status Tags */}
          <Flex vertical gap={16}>
            <Typography.Title level={4} style={{ margin: 0, color: "#1d1b4a" }}>
              Status Tags (Filled)
            </Typography.Title>
            <Flex gap={12} wrap="wrap">
              <Tag type="status" statusValue="Completed">Completed</Tag>
              <Tag type="status" statusValue="Opened">Opened</Tag>
              <Tag type="status" statusValue="Pending">Pending</Tag>
              <Tag type="status" statusValue="Failed">Failed</Tag>
              <Tag type="status" statusValue="Success">Success</Tag>
              <Tag type="status" statusValue="Approved">Approved</Tag>
              <Tag type="status" statusValue="Rejected">Rejected</Tag>
            </Flex>
          </Flex>

          {/* Status Tags Outline */}
          <Flex vertical gap={16}>
            <Typography.Title level={4} style={{ margin: 0, color: "#1d1b4a" }}>
              Status Tags (Outline)
            </Typography.Title>
            <Flex gap={12} wrap="wrap">
              <Tag type="status" statusValue="Completed" outline>Completed</Tag>
              <Tag type="status" statusValue="Opened" outline>Opened</Tag>
              <Tag type="status" statusValue="Pending" outline>Pending</Tag>
              <Tag type="status" statusValue="Failed" outline>Failed</Tag>
              <Tag type="status" statusValue="Success" outline>Success</Tag>
              <Tag type="status" statusValue="Approved" outline>Approved</Tag>
              <Tag type="status" statusValue="Rejected" outline>Rejected</Tag>
            </Flex>
          </Flex>

          {/* Status Tags Rounded */}
          <Flex vertical gap={16}>
            <Typography.Title level={4} style={{ margin: 0, color: "#1d1b4a" }}>
              Status Tags (Rounded)
            </Typography.Title>
            <Flex gap={12} wrap="wrap">
              <Tag type="status" statusValue="Completed" rounded>Completed</Tag>
              <Tag type="status" statusValue="Pending" rounded>Pending</Tag>
              <Tag type="status" statusValue="Failed" rounded>Failed</Tag>
              <Tag type="status" statusValue="Approved" rounded>Approved</Tag>
            </Flex>
          </Flex>

          {/* Default Tags */}
          <Flex vertical gap={16}>
            <Typography.Title level={4} style={{ margin: 0, color: "#1d1b4a" }}>
              Default Tags
            </Typography.Title>
            <Flex gap={12} wrap="wrap">
              <Tag type="default">Default Tag</Tag>
              <Tag type="default" rounded>Rounded Default</Tag>
            </Flex>
          </Flex>

          {/* Count Tags */}
          <Flex vertical gap={16}>
            <Typography.Title level={4} style={{ margin: 0, color: "#1d1b4a" }}>
              Count Tags
            </Typography.Title>
            <Flex gap={12} wrap="wrap">
              <Tag type="count" countBgColor="#ED1B2F">3</Tag>
              <Tag type="count" countBgColor="#0CC496">12</Tag>
              <Tag type="count" countBgColor="#332556">5</Tag>
              <Tag type="count" countBgColor="#ED1B2F" rounded>99+</Tag>
            </Flex>
          </Flex>

          {/* Change Tags */}
          <Flex vertical gap={16}>
            <Typography.Title level={4} style={{ margin: 0, color: "#1d1b4a" }}>
              Change Tags
            </Typography.Title>
            <Flex gap={12} wrap="wrap">
              <Tag type="change">+18%</Tag>
              <Tag type="change">+2</Tag>
              <Tag type="change">-18%</Tag>
              <Tag type="change">-2</Tag>
              <Tag type="change" rounded>+25%</Tag>
              <Tag type="change" rounded>-10%</Tag>
            </Flex>
          </Flex>
        </Flex>
      </section>
    </main>
  );
}
