"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono, Work_Sans } from "next/font/google";

import { Flex, Layout, Skeleton } from "antd";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "./(components)/Header";
import Sidebar from "./(components)/Sidebar";
import BreadCrumb from "./(components)/BreadCrumb";
import Button from "./(components)/Button";
import type { SidebarMenuSection } from "./(components)/Sidebar";
import "./globals.css";
import styles from "./layout.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const headerData = {
  userName: "Admin User",
  userRole: "Super Admin",
  notificationCount: 3,
};

const notifications = [
  {
    id: 1,
    title: "New partner application",
    description: "TechCorp Solutions has submitted a new application",
    time: "5 minutes ago",
  },
  {
    id: 2,
    title: "Account approved",
    description: "Alpha Finance account has been approved",
    time: "1 hour ago",
  },
  {
    id: 3,
    title: "Limit exceeded",
    description: "Beta Traders has exceeded their monthly limit",
    time: "2 hours ago",
  },
];

const searchItems = [
  {
    id: 1,
    title: "Tech solutions Inc.",
    subtitle: "Edited by: Peter Griffin",
    timestamp: "4 min ago",
    category: "Limits",
    initials: "TS",
    avatarColor: "#4b49b6",
  },
  {
    id: 2,
    title: "Tech solutions Inc.",
    subtitle: "Edited by: Peter Griffin",
    timestamp: "15 days ago",
    category: "Partners",
    initials: "TS",
    avatarColor: "#4b49b6",
  },
  {
    id: 3,
    title: "Alpha Finance Corp",
    subtitle: "Edited by: John Doe",
    timestamp: "2 hours ago",
    category: "Leads",
    initials: "AF",
    avatarColor: "#0cc496",
  },
  {
    id: 4,
    title: "Beta Traders Ltd",
    subtitle: "Edited by: Jane Smith",
    timestamp: "1 day ago",
    category: "Partners",
    initials: "BT",
    avatarColor: "#ed1b2f",
  },
];

const componentTitles: Record<string, { title: string; subtitle: string; showActions?: boolean }> = {
  "/button": { title: "Button", subtitle: "Primary, secondary, danger, and neutral button variants." },
  "/button-group": { title: "Button Group", subtitle: "Config-driven action row that renders multiple buttons from one array." },
  "/bread-crumb": { title: "Bread Crumb", subtitle: "Dynamic page header with optional back route, subtitle, and actions." },
  "/sidebar": { title: "Sidebar", subtitle: "Grouped sidebar navigation with dynamic sections, badges, and active states." },
  "/header": { title: "Header", subtitle: "Top app header with Fino logo, search, notifications, and user controls." },
  "/log-filter-card": { title: "Log Filter Card", subtitle: "Search and filter log summary card with configurable tabs and counters." },
  "/dashboard-info-card": { title: "Dashboard Info Card", subtitle: "Reusable dashboard card that conditionally renders activity or action lists." },
  "/stat-card": { title: "Stat Card", subtitle: "Dashboard summary cards with change pills and highlighted state." },
  "/limit-card": { title: "Limit Card", subtitle: "Usage limit cards with circular utilization charts and color variants.", showActions: true },
  "/modal": { title: "Modal", subtitle: "Reusable modal with title prop, close button, and child-driven body content." },
  "/contact-card": { title: "Contact Card", subtitle: "Partner and email contact card with success, danger, and warning variants.", showActions: true },
  "/company-info-card": { title: "Company Info Card", subtitle: "Company information card with contact details, category badge, and edit action.", showActions: true },
  "/lead-card": { title: "Lead Card", subtitle: "Lead summary card with reusable approved, pending, and rejected states.", showActions: true },
  "/partner-card": { title: "Partner Card", subtitle: "Compact partner business card with active and disabled dashboard states." },
  "/price-card": { title: "Price Card", subtitle: "Simple pricing display card with title and value." },
  "/tabs": { title: "Tabs", subtitle: "Reusable tabs component for filter pills and navigation underline styles." },
  "/account-opening-item": { title: "Account Opening Item", subtitle: "List item for account openings with status indicators." },
  "/doc-select-card": { title: "Doc Select Card", subtitle: "Selectable document cards with icons and descriptions.", showActions: true },
  "/tag": { title: "Tag", subtitle: "Versatile tag component with status, count, change, and default variants." },
};

function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Small delay to ensure styles are loaded
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const sidebarData: SidebarMenuSection[] = [
    {
      section: "Main",
      items: [
        {
          key: "home",
          label: "Components",
          icon: "overview",
          path: "/",
          active: pathname === "/",
        },
      ],
    },
    {
      section: "Components",
      items: [
        { key: "button", label: "Button", icon: "overview", path: "/button", active: pathname === "/button" },
        { key: "button-group", label: "Button Group", icon: "overview", path: "/button-group", active: pathname === "/button-group" },
        { key: "bread-crumb", label: "Bread Crumb", icon: "overview", path: "/bread-crumb", active: pathname === "/bread-crumb" },
        { key: "sidebar", label: "Sidebar", icon: "overview", path: "/sidebar", active: pathname === "/sidebar" },
        { key: "header", label: "Header", icon: "overview", path: "/header", active: pathname === "/header" },
        { key: "log-filter-card", label: "Log Filter Card", icon: "activity", path: "/log-filter-card", active: pathname === "/log-filter-card" },
        { key: "dashboard-info-card", label: "Dashboard Info Card", icon: "overview", path: "/dashboard-info-card", active: pathname === "/dashboard-info-card" },
        { key: "stat-card", label: "Stat Card", icon: "overview", path: "/stat-card", active: pathname === "/stat-card" },
        { key: "limit-card", label: "Limit Card", icon: "limits", path: "/limit-card", active: pathname === "/limit-card" },
        { key: "modal", label: "Modal", icon: "overview", path: "/modal", active: pathname === "/modal" },
        { key: "contact-card", label: "Contact Card", icon: "partners", path: "/contact-card", active: pathname === "/contact-card" },
        { key: "company-info-card", label: "Company Info Card", icon: "partners", path: "/company-info-card", active: pathname === "/company-info-card" },
        { key: "lead-card", label: "Lead Card", icon: "leads", path: "/lead-card", active: pathname === "/lead-card" },
        { key: "partner-card", label: "Partner Card", icon: "partners", path: "/partner-card", active: pathname === "/partner-card" },
        { key: "price-card", label: "Price Card", icon: "charges", path: "/price-card", active: pathname === "/price-card" },
        { key: "tabs", label: "Tabs", icon: "overview", path: "/tabs", active: pathname === "/tabs" },
        { key: "account-opening-item", label: "Account Opening Item", icon: "activity", path: "/account-opening-item", active: pathname === "/account-opening-item" },
        { key: "doc-select-card", label: "Doc Select Card", icon: "overview", path: "/doc-select-card", active: pathname === "/doc-select-card" },
        { key: "tag", label: "Tag", icon: "overview", path: "/tag", active: pathname === "/tag" },
      ],
    },
  ];

  const pageConfig = pathname !== "/" && componentTitles[pathname] ? componentTitles[pathname] : null;
  
  const breadcrumbData = pageConfig
    ? {
        title: pageConfig.title,
        subtitle: pageConfig.subtitle,
        backButton: "/",
      }
    : null;

  const breadcrumbActions = pageConfig?.showActions ? (
    <>
      <Button color="neutral" variant="outlined">
        Manage
      </Button>
      <Button>Generate Report</Button>
    </>
  ) : undefined;

  if (isLoading) {
    return (
      <Layout className={styles.appLayout}>
        <Layout.Header className={styles.skeletonHeader}>
          <Flex align="center" justify="space-between" style={{ height: '100%', padding: '0 24px' }}>
            <Skeleton.Input active size="small" style={{ width: 178, height: 26 }} />
            <Flex align="center" gap={16}>
              <Skeleton.Input active size="large" style={{ width: 300 }} />
              <Skeleton.Avatar active size={24} shape="circle" />
              <Skeleton.Avatar active size={34} shape="circle" />
              <Skeleton.Avatar active size={20} shape="circle" />
            </Flex>
          </Flex>
        </Layout.Header>
        <Layout className={styles.mainLayout}>
          <Layout.Sider className={styles.skeletonSidebar} width={280}>
            <Flex vertical gap={24} style={{ padding: '24px' }}>
              <Flex vertical gap={12}>
                <Skeleton.Input active size="small" style={{ width: 100, height: 12 }} />
                <Skeleton.Button active block style={{ height: 44 }} />
                <Skeleton.Button active block style={{ height: 44 }} />
              </Flex>
              <Flex vertical gap={12}>
                <Skeleton.Input active size="small" style={{ width: 150, height: 12 }} />
                <Skeleton.Button active block style={{ height: 44 }} />
                <Skeleton.Button active block style={{ height: 44 }} />
                <Skeleton.Button active block style={{ height: 44 }} />
                <Skeleton.Button active block style={{ height: 44 }} />
              </Flex>
            </Flex>
          </Layout.Sider>
          <Layout.Content className={`${styles.contentLayout} content-scrollbar`}>
            <Flex vertical className={styles.contentInner}>
              <Flex className={styles.skeletonCard} vertical gap={16}>
                <Skeleton active title={{ width: '40%' }} paragraph={{ rows: 4 }} />
              </Flex>
            </Flex>
          </Layout.Content>
        </Layout>
      </Layout>
    );
  }

  return (
    <Layout className={styles.appLayout}>
      <Header data={headerData} notifications={notifications} searchItems={searchItems} />
      <Layout className={styles.mainLayout}>
        <Sidebar data={sidebarData} collapsible={true} />
        <Layout.Content className={`${styles.contentLayout} content-scrollbar`}>
          <Flex vertical className={styles.contentInner}>
            {breadcrumbData && (
              <Flex className={styles.breadcrumbWrapper}>
                <BreadCrumb data={breadcrumbData} actions={breadcrumbActions} />
              </Flex>
            )}
            {children}
          </Flex>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}
