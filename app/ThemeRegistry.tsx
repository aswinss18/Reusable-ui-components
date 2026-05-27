import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { appTheme } from "./theme";
import ThemeTokenLogger from "./ThemeTokenLogger";

export default function ThemeRegistry({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AntdRegistry layer>
      <ConfigProvider theme={appTheme}>
        <ThemeTokenLogger />
        {children}
      </ConfigProvider>
    </AntdRegistry>
  );
}
