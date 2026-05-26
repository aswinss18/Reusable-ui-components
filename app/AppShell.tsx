"use client";

import { Flex, Layout } from "antd";
import { usePathname } from "next/navigation";
import Header from "./(components)/Header";
import Sidebar from "./(components)/Sidebar";
import BreadCrumb from "./(components)/BreadCrumb";
import Button from "./(components)/Button";
import type { SidebarMenuSection } from "./(components)/Sidebar";
import styles from "./layout.module.css";

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
  "/result": { title: "Result", subtitle: "Reusable Ant Design wrapper for empty states, confirmations, route errors, and server errors." },
  "/sidebar": { title: "Sidebar", subtitle: "Grouped sidebar navigation with dynamic sections, badges, and active states." },
  "/header": { title: "Header", subtitle: "Top app header with Fino logo, search, notifications, and user controls." },
  "/log-filter-card": { title: "Log Filter Card", subtitle: "Search and filter log summary card with configurable tabs and counters." },
  "/dashboard-info-card": { title: "Dashboard Info Card", subtitle: "Reusable dashboard card that conditionally renders activity or action lists." },
  "/data-grid": { title: "Data Grid", subtitle: "Config-driven table with key-based cells, icons, component rendering, and pagination." },
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

export default function AppShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

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
        { key: "result", label: "Result", icon: "overview", path: "/result", active: pathname === "/result" },
        { key: "sidebar", label: "Sidebar", icon: "overview", path: "/sidebar", active: pathname === "/sidebar" },
        { key: "header", label: "Header", icon: "overview", path: "/header", active: pathname === "/header" },
        { key: "log-filter-card", label: "Log Filter Card", icon: "activity", path: "/log-filter-card", active: pathname === "/log-filter-card" },
        { key: "dashboard-info-card", label: "Dashboard Info Card", icon: "overview", path: "/dashboard-info-card", active: pathname === "/dashboard-info-card" },
        { key: "data-grid", label: "Data Grid", icon: "overview", path: "/data-grid", active: pathname === "/data-grid" },
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
