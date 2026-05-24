export type FloProduct = {
  id: FloProductId;
  name: string;
  concept: string;
  status: string;
  islandText: string;
  slogan: string;
  description: string;
  abilities: string[];
  cta: {
    primary: string;
    secondary: string;
  };
  links?: {
    primary?: string;
    secondary?: string;
  };
  palette: {
    aura: string;
    glow: string;
    mist: string;
  };
};

export type FloProductId = "light" | "memory" | "journey" | "link" | "harbor";

export const floProducts: FloProduct[] = [
  {
    id: "light",
    name: "浮光",
    concept: "Light",
    status: "已上架 Chrome 应用市场",
    islandText: "有些网页，会在深夜再次被打开。",
    slogan: "浮标悬于眼前，光启新页即达。",
    description:
      "一款 Chrome 新标签页扩展，让书签、快捷键与小组件，以更轻、更美的方式浮在眼前。",
    abilities: ["38 键快捷跳转", "Chrome 原生书签绑定", "30 种动态背景与全局毛玻璃美学", "6 大效率组件"],
    cta: { primary: "Chrome 应用商店", secondary: "查看设计笔记" },
    links: {
      primary:
        "https://chromewebstore.google.com/detail/%E6%B5%AE%E5%85%89/ebnajlebipbaafecfjfdgeefppcadboe?authuser=0&hl=zh-CN",
    },
    palette: { aura: "#89AEE6", glow: "#F4D58D", mist: "#ECF3FF" },
  },
  {
    id: "memory",
    name: "浮现",
    concept: "Memory",
    status: "MVP 打磨中",
    islandText: "让一闪而过的念想重逢。",
    slogan: "让一闪而过的念想重逢。",
    description:
      "它不是备忘录，也不是第二大脑。它只是一个地方，让那些还没想清楚的念头，在未来的某一刻重新浮现。",
    abilities: ["快速记录", "随机浮现", "情绪化主题", "轻量灵感容器"],
    cta: { primary: "查看浮现", secondary: "MVP 打磨中" },
    palette: { aura: "#7C6EE6", glow: "#89AEE6", mist: "#8B7DFF" },
  },
  {
    id: "journey",
    name: "浮游",
    concept: "Journey",
    status: "规划中",
    islandText: "有些旅途，会在很多年后重新被想起。",
    slogan: "让旅途更轻，让同行更顺。",
    description:
      "为 J 人制作计划，为 P 人轻松浏览。攻略、打卡、AA 记账，都在一条轻盈的旅途时间线里。",
    abilities: ["团队旅行计划", "权限分明的共享攻略", "实地打卡记录", "AA 记账"],
    cta: { primary: "查看概念", secondary: "规划中" },
    palette: { aura: "#7DA7D9", glow: "#FFC857", mist: "#78D5C6" },
  },
  {
    id: "link",
    name: "浮链",
    concept: "Link",
    status: "规划中",
    islandText: "让消息安静地穿过设备之间。",
    slogan: "让通知穿过设备之间。",
    description:
      "为多手机、多系统、多屏幕用户，搭一条安静的消息链路。不打扰，不丢失，不被平台割裂。",
    abilities: ["跨平台 Push 同步", "手机与电脑通知桥接", "多设备消息聚合", "本地优先与隐私优先"],
    cta: { primary: "查看概念", secondary: "规划中" },
    palette: { aura: "#94B8FF", glow: "#B7F4DA", mist: "#DDE7F2" },
  },
  {
    id: "harbor",
    name: "浮屿",
    concept: "Harbor",
    status: "当前所在",
    islandText: "所有灵感，终会靠岸。",
    slogan: "所有灵感，终会靠岸。",
    description:
      "FLO 的数字母港，也是我作为 AI Native Product Designer 的作品宇宙入口。",
    abilities: ["产品宇宙", "个人品牌", "Vibe Coding 实验", "情绪化数字产品"],
    cta: { primary: "关于我", secondary: "回到海面" },
    palette: { aura: "#0B1020", glow: "#F4D58D", mist: "#89AEE6" },
  },
];
