import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vkr.me"),
  title: "浮屿 vkr.me — FLO",
  description:
    "用 Vibe Coding 打造有情绪的数字产品。浮光、浮现、浮游、浮链，全都靠岸于浮屿。",
  applicationName: "浮屿",
  keywords: [
    "浮屿",
    "FLO",
    "Floating Universe",
    "AI Native Product Designer",
    "Vibe Coding",
    "情绪化数字产品",
  ],
  authors: [{ name: "浮屿", url: "https://vkr.me" }],
  creator: "浮屿",
  publisher: "FLO",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "浮屿 vkr.me — FLO",
    description:
      "用 Vibe Coding 打造有情绪的数字产品。浮光、浮现、浮游、浮链，全都靠岸于浮屿。",
    url: "https://vkr.me",
    siteName: "浮屿",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "浮屿 vkr.me — FLO",
    description:
      "用 Vibe Coding 打造有情绪的数字产品。浮光、浮现、浮游、浮链，全都靠岸于浮屿。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-flo-abyss-950 text-flo-foam selection:bg-flo-glow/30 selection:text-flo-foam">
        {children}
      </body>
    </html>
  );
}
