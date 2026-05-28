export type ProductStatus = "available" | "beta" | "concept" | "current";

export type ProductSurface = {
  name: string;
  platform: string;
  summary: string;
  status: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  highlights: string[];
  imageState: "placeholder" | "empty";
};

export type Product = {
  id: string;
  name: string;
  englishName: string;
  category: string;
  slogan: string;
  summary: string;
  status: ProductStatus;
  platforms: string[];
  color: string;
  highlights: string[];
  surfaces?: ProductSurface[];
};

export const links = {
  chromeStore:
    "https://chromewebstore.google.com/detail/%E6%B5%AE%E5%85%89/ebnajlebipbaafecfjfdgeefppcadboe",
  floMacDownload: "https://dl.fl.vkr.me/fl-mac.dmg",
  email: "mailto:vkr@qq.com",
  domain: "https://vkr.me",
};

export const featuredProduct: Product = {
  id: "light",
  name: "浮光",
  englishName: "Light",
  category: "常用入口与效率",
  slogan: "让一切常用的，一触即达。",
  summary:
    "围绕新标签页、书签、快捷键、小组件和本地启动，把日常高频动作变成更快抵达的入口。",
  status: "available",
  platforms: ["Chrome", "macOS"],
  color: "blue",
  highlights: [
    "Chrome 书签无限层级同步",
    "38 键快捷直达",
    "提醒事项与 iCloud 同步能力",
    "30+ 动效背景与本地优先体验",
  ],
  surfaces: [
    {
      name: "浮光 Chrome 扩展",
      platform: "Chrome Extension",
      summary:
        "替换新标签页，整合书签、快捷键、日历、提醒事项、计算器、翻译、每日英语、古诗词和成语学习。",
      status: "已上架 Chrome 应用商店",
      primaryAction: {
        label: "安装 Chrome 扩展",
        href: links.chromeStore,
      },
      highlights: [
        "绑定任意 Chrome 书签文件夹",
        "跨层级全局搜索",
        "小组件自由排列",
        "完全离线、零广告、零追踪",
      ],
      imageState: "placeholder",
    },
    {
      name: "浮光 Mac 启动器",
      platform: "macOS App",
      summary:
        "为 Mac 常用入口准备的原生启动器。支持直达模式和面板模式，用键盘把高频操作带到眼前。",
      status: "仅支持 macOS 26+",
      primaryAction: {
        label: "下载 Mac 启动器",
        href: links.floMacDownload,
      },
      secondaryAction: {
        label: "查看安装说明",
        href: "#install",
      },
      highlights: [
        "Ctrl + 绑定键一键直达",
        "Ctrl 唤出面板后单按绑定键",
        "需要开启辅助功能权限",
        "适合本地应用和常用入口",
      ],
      imageState: "empty",
    },
    {
      name: "浮光同步助手",
      platform: "Companion App",
      summary:
        "作为 Chrome 扩展的配套应用，在扩展内引导下载安装，用来连接提醒事项功能与 Apple 提醒事项 / iCloud。",
      status: "随扩展内引导安装",
      highlights: [
        "连接扩展提醒事项",
        "同步到 Apple 提醒事项",
        "支持 iCloud 协作链路",
        "跟随浮光扩展场景使用",
      ],
      imageState: "empty",
    },
  ],
};

export const productMatrix: Product[] = [
  featuredProduct,
  {
    id: "harbor",
    name: "浮屿",
    englishName: "Harbor",
    category: "品牌母港",
    slogan: "所有灵感，终会靠岸。",
    summary:
      "浮宇宙的品牌母港，也是 AI Native Product Designer 的作品宇宙入口。",
    status: "current",
    platforms: ["Web"],
    color: "cyan",
    highlights: ["品牌官网", "作品入口", "FLO 世界观", "设计实验"],
  },
  {
    id: "memory",
    name: "浮现",
    englishName: "Memory",
    category: "灵感与念想",
    slogan: "让一闪而过的念想重逢。",
    summary:
      "轻量记录灵感与念想，并在未来某一刻让它重新浮现。",
    status: "beta",
    platforms: ["iOS", "MVP"],
    color: "violet",
    highlights: ["快速记录", "随机浮现", "情绪化主题", "轻量灵感容器"],
  },
];

export const platformFilters = ["全部", "Chrome", "macOS", "Web", "iOS"];

export const macInstallSteps = [
  {
    title: "下载并安装",
    body: "下载浮光 Mac 启动器安装包，并拖入应用程序。",
    code: links.floMacDownload,
  },
  {
    title: "移除隔离属性",
    body: "打开终端，执行下面命令。",
    code: "xattr -cr /Applications/浮光.app",
  },
  {
    title: "开启辅助功能权限",
    body: "进入系统设置，打开隐私与安全性，点击辅助功能，将浮光.app 添加进去。",
  },
  {
    title: "开始使用",
    body: "直达模式：按 Ctrl + 绑定键。面板模式：按 Ctrl 唤出浮光面板，再单按对应绑定键。",
  },
];
