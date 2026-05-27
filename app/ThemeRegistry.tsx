import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { appTheme } from "./theme";

export default function ThemeRegistry({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AntdRegistry layer>
      <ConfigProvider theme={appTheme}>{children}</ConfigProvider>
    </AntdRegistry>
  );
}
