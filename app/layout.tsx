"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono, Work_Sans } from "next/font/google";
import { Flex, Layout } from "antd";
import { usePathname } from "next/navigation";
import Header from "./(components)/Header";
import Sidebar from "./(components)/Sidebar";
import BreadCrumb from "./(components)/BreadCrumb";
import Button from "./(components)/Button";
import type { SidebarMenuSection } from "./(components)/Sidebar";
import "./globals.css";

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

const componentTitles: Record<string, { title: string; subtitle: string; showActions?: boolean }> = {
  "/button": { title: "Button", subtitle: "Primary, secondary, danger, and neutral button variants." },
  "/button-group": { title: "Button Group", subtitle: "Config-driven action row that renders multiple buttons from one array." },
  "/bread-crumb": { title: "Bread Crumb", subtitle: "Dynamic page header with optional back route, subtitle, and actions." },
  "/sidebar": { title: "Sidebar", subtitle: "Grouped sidebar navigation with dynamic sections, badges, and active states." },
  "/header": { title: "Header", subtitle: "Top app header with Fino logo, search, notifications, and user controls." },
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
    <Layout style={{ minHeight: "100vh" }}>
      <Header data={headerData} />
      <Layout>
        <Sidebar data={sidebarData} />
        <Layout.Content style={{ background: "#f6f5fb" }}>
          <div style={{ padding: "24px" }}>
            {breadcrumbData && (
              <Flex style={{ marginBottom: "24px" }}>
                <BreadCrumb data={breadcrumbData} actions={breadcrumbActions} />
              </Flex>
            )}
            {children}
          </div>
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
