import type { Metadata } from "next";
import { FloUniverseHome } from "@/versions/flo-universe-clear/components/FloUniverseHome";
import "./flo-universe.css";

export const metadata: Metadata = {
  title: "浮宇宙 FLO | 产品导航",
  description:
    "浮宇宙 FLO 是一组围绕效率、灵感与日常入口生长的数字产品。浮光让一切常用的，一触即达。",
  alternates: {
    canonical: "/flo-universe/",
  },
  openGraph: {
    title: "浮宇宙 FLO | 产品导航",
    description:
      "一组围绕效率、灵感与日常入口生长的数字产品。",
    url: "https://vkr.me/flo-universe/",
    siteName: "浮宇宙 FLO",
    locale: "zh_CN",
    type: "website",
  },
};

export default function FloUniversePage() {
  return (
    <div className="flo-clear-page">
      <FloUniverseHome />
    </div>
  );
}
