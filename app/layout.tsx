import "./globals.css";
import { Work_Sans } from "next/font/google";
import AppShell from "./AppShell";
import ThemeRegistry from "./ThemeRegistry";
import { themeCssVariables } from "./theme";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${workSans.variable} h-full antialiased`}
      style={themeCssVariables}
    >
      <body className="min-h-full flex flex-col">
        <ThemeRegistry>
          <AppShell>{children}</AppShell>
        </ThemeRegistry>
      </body>
    </html>
  );
}
