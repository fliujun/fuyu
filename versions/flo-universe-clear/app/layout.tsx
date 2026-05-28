import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "浮宇宙 FLO | 产品导航",
  description:
    "浮宇宙 FLO 是一组围绕效率、灵感与日常入口生长的数字产品。浮光让一切常用的，一触即达。",
  metadataBase: new URL("https://vkr.me"),
  openGraph: {
    title: "浮宇宙 FLO",
    description:
      "一组围绕效率、灵感与日常入口生长的数字产品。",
    url: "https://vkr.me",
    siteName: "浮宇宙 FLO",
    locale: "zh_CN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
