"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type AboutSectionProps = {
  onBackToSea: () => void;
};

const identities = ["AI Native Product Designer", "产品经理", "Vibe Coding 创作者", "FLO 浮宇宙构建者"];

const contacts = [
  { label: "Email", value: "vkr@qq.com", icon: "email" },
  { label: "Domain", value: "vkr.me", icon: "domain" },
  { label: "小红书", value: "aabber", icon: "xiaohongshu" },
  { label: "微信", value: "aliujun", icon: "wechat" },
];

function ContactIcon({ icon }: { icon: string }) {
  if (icon === "email") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          d="M4.75 6.75h14.5v10.5H4.75V6.75Zm.5.55 6.75 5.15L18.75 7.3"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
    );
  }

  if (icon === "domain") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          d="M12 4.75a7.25 7.25 0 1 1 0 14.5 7.25 7.25 0 0 1 0-14.5Zm-6.7 7.25h13.4M12 4.75c2 1.85 3 4.27 3 7.25s-1 5.4-3 7.25c-2-1.85-3-4.27-3-7.25s1-5.4 3-7.25Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
    );
  }

  return <span aria-hidden="true" className={`contact-mask contact-mask-${icon}`} />;
}

export function AboutSection({ onBackToSea }: AboutSectionProps) {
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  const copyContact = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedLabel(label);
      window.setTimeout(() => setCopiedLabel(null), 1500);
    } catch {
      setCopiedLabel("复制失败");
      window.setTimeout(() => setCopiedLabel(null), 1500);
    }
  };

  return (
    <section
      id="about-section"
      className="about-section relative h-[100dvh] overflow-y-auto px-5 pb-[calc(env(safe-area-inset-bottom)+1.5rem)] pt-[calc(env(safe-area-inset-top)+1rem)] sm:px-10 md:overflow-hidden md:py-5 lg:px-16"
      aria-labelledby="about-title"
    >
      <div className="about-glow pointer-events-none absolute inset-0" />
      <button
        type="button"
        className="flo-interactive relative z-20 mb-5 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-xs text-flo-foam/72 outline-none md:absolute md:left-10 md:top-8 md:mb-0 md:text-sm"
        onClick={onBackToSea}
      >
        返回海面
      </button>

      <AnimatePresence>
        {copiedLabel ? (
          <motion.div
            className="absolute right-5 top-5 z-30 rounded-full border border-flo-aura/20 bg-flo-abyss-900/80 px-4 py-2 text-xs text-flo-foam/82 backdrop-blur-md sm:right-10 sm:top-8"
            initial={{ opacity: 0, y: -8, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -8, filter: "blur(8px)" }}
          >
            {copiedLabel === "复制失败" ? "复制失败，请手动复制" : `${copiedLabel} 已复制`}
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="relative z-10 mx-auto grid min-h-full w-full max-w-6xl content-start gap-5 md:h-full md:content-center md:gap-7 md:pt-12 lg:grid-cols-[0.9fr_0.82fr] lg:items-end lg:gap-12 lg:pt-0">
        <div className="max-w-2xl">
          <p className="flo-kicker mb-4 md:mb-5">About / 产品哲学</p>
          <h2 id="about-title" className="fog-reveal max-w-2xl text-[2.35rem] font-medium leading-tight text-flo-foam min-[390px]:text-[2.65rem] sm:text-5xl lg:text-6xl">
            技术不只应该更强大，也应该更温柔。
          </h2>
          <div className="mt-5 flex flex-wrap gap-2 md:mt-6">
            {identities.map((identity) => (
              <span key={identity} className="rounded-full border border-white/10 bg-white/[0.018] px-3 py-1.5 text-xs text-flo-foam/70 sm:px-4 sm:py-2 sm:text-sm">
                {identity}
              </span>
            ))}
          </div>
          <div className="mt-5 text-sm leading-7 text-flo-foam/50 md:mt-7">
            <p>FLO — Emotional products for the digital age.</p>
            <p className="text-flo-glow/70">所有灵感，终会靠岸。</p>
          </div>
        </div>

        <div>
          <div className="fog-reveal space-y-3 text-base leading-8 text-flo-foam/72 md:space-y-4 md:text-lg md:leading-9">
            <p>
              我是一名产品经理，
              <br />
              也是一个正在用 AI 与代码构建数字产品的人。
            </p>
            <p>
              我喜欢轻盈、留白、微光、偶遇感，
              <br />
              也相信技术不该只追求更快，还应该变得更温柔。
            </p>
            <p className="text-flo-glow/82">于是，慢慢有了 FLO。</p>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2 sm:gap-3 md:mt-7">
            {contacts.map((contact) => (
              <button
                key={contact.label}
                type="button"
                className="flo-panel flo-interactive flex min-w-0 items-center gap-2 rounded-lg p-2.5 text-left outline-none min-[390px]:gap-3 min-[390px]:p-3 sm:p-4"
                onClick={() => copyContact(contact.label, contact.value)}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-flo-aura/82 min-[390px]:h-9 min-[390px]:w-9">
                  <ContactIcon icon={contact.icon} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.64rem] uppercase tracking-[0.16em] text-flo-muted">{contact.label}</span>
                  <span className="mt-1 block truncate text-sm text-flo-foam/82 sm:text-base">{contact.value}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
