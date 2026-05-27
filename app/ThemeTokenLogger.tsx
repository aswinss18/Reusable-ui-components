"use client";

import { theme } from "antd";
import { useEffect } from "react";

export default function ThemeTokenLogger() {
  const { cssVar, token } = theme.useToken();

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.log("Ant Design theme tokens:", token);
      console.log("Ant Design CSS variable tokens:", cssVar);
    }
  }, [cssVar, token]);

  return null;
}
