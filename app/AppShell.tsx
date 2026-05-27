"use client";

import { Flex, Layout } from "antd";
import { usePathname } from "next/navigation";
import Header from "./(components)/Header";
import Sidebar from "./(components)/Sidebar";
import BreadCrumb from "./(components)/BreadCrumb";
import Button from "./(components)/Button";
import { componentTitles, getSidebarData } from "./(config)/config";
import { headerData, notifications, searchItems } from "./(config)/DummyData";
import styles from "./layout.module.css";

export default function AppShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const sidebarData = getSidebarData(pathname);

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
