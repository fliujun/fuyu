"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type OpeningSceneProps = {
  onEnterSea: () => void;
};

const openingLines = [
  ["有些网页，", "会在深夜再次被打开。"],
  ["有些灵感，", "会突然浮现。"],
  ["有些旅途，", "会在很多年后重新被想起。"],
  ["有些连接，", "只是想安静地穿过不同设备。"],
  ["而有些念想，", "只需要一个地方缓缓靠岸。"],
  ["于是我开始用 Vibe Coding，", "创造一些有情绪的数字产品。"],
  ["我把它们叫做："],
];

const particles = [
  { x: "12%", y: "18%", size: 2, delay: 0.2, duration: 8 },
  { x: "24%", y: "72%", size: 3, delay: 1.8, duration: 11 },
  { x: "36%", y: "28%", size: 2, delay: 0.9, duration: 9 },
  { x: "48%", y: "62%", size: 2, delay: 2.4, duration: 12 },
  { x: "61%", y: "20%", size: 3, delay: 1.2, duration: 10 },
  { x: "74%", y: "68%", size: 2, delay: 0.4, duration: 13 },
  { x: "86%", y: "34%", size: 2, delay: 2.8, duration: 9 },
  { x: "92%", y: "78%", size: 3, delay: 1.5, duration: 12 },
];

const floDelay = 1.8;

export function OpeningScene({ onEnterSea }: OpeningSceneProps) {
  const [isLeaving, setIsLeaving] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const enterSea = () => {
    setIsLeaving(true);
    window.setTimeout(onEnterSea, prefersReducedMotion ? 80 : 850);
  };

  return (
    <motion.section
      className="relative flex h-[100svh] cursor-default touch-manipulation items-center overflow-hidden bg-flo-abyss-950 px-5 py-5 sm:px-10 lg:px-16"
      aria-labelledby="opening-title"
      animate={isLeaving ? { opacity: 0, scale: 1.015, filter: "blur(18px)" } : { opacity: 1 }}
      transition={{ duration: prefersReducedMotion ? 0.01 : 1, ease: "easeInOut" }}
    >
      <motion.div
        className="absolute inset-0 opening-aurora"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                backgroundPosition: ["0% 50%", "100% 48%", "0% 50%"],
              }
        }
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 opening-vignette" />
      <div className="absolute inset-x-0 bottom-0 h-[42svh] opening-sea" />
      <div className="pointer-events-none absolute inset-0">
        {particles.map((particle) => (
          <motion.span
            key={`${particle.x}-${particle.y}`}
            className="absolute rounded-full bg-flo-glow shadow-[0_0_18px_rgba(244,213,141,0.34)]"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
            }}
            initial={{ opacity: 0.15, y: 0 }}
            animate={
              prefersReducedMotion
                ? { opacity: 0.32 }
                : { opacity: [0.12, 0.48, 0.18], y: [-8, 10, -8], x: [0, 5, 0] }
            }
            transition={{
              delay: particle.delay,
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto grid h-full w-full max-w-6xl content-center gap-5 md:grid-cols-[0.82fr_0.58fr] md:items-end md:gap-12">
        <motion.p
          className="flo-kicker md:col-span-2"
          initial={{ opacity: 0, y: 16, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 1.4, ease: "easeOut" }}
        >
          深夜海面 / Opening
        </motion.p>
        <motion.div
          className="space-y-2.5 text-balance text-[0.9rem] leading-[1.55] text-flo-foam/82 min-[390px]:text-[0.98rem] sm:space-y-3 sm:text-[1.25rem] sm:leading-[1.62] md:text-[1.34rem] lg:text-[1.55rem]"
          initial={{ opacity: 0, y: 28, filter: "blur(16px)" }}
          animate={{ opacity: 1, y: -10, filter: "blur(0px)" }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 1.75, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
        >
          {openingLines.map((lineGroup) => (
            <p key={lineGroup.join("")} className="max-w-3xl">
              {lineGroup.map((line) => (
                <span className="block" key={line}>
                  {line}
                </span>
              ))}
            </p>
          ))}
        </motion.div>
        <div className="md:text-right">
          <motion.h1
            id="opening-title"
            className="text-[clamp(3.2rem,18vw,10rem)] font-medium leading-none text-flo-foam"
            initial={{ opacity: 0, y: 26, scale: 0.96, filter: "blur(22px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{
              duration: prefersReducedMotion ? 0.01 : 1.8,
              delay: prefersReducedMotion ? 0.2 : floDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            FLO
          </motion.h1>
          <motion.p
            className="mt-3 text-xs leading-6 text-flo-muted sm:text-base sm:leading-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.64 }}
            transition={{
              delay: prefersReducedMotion ? 0.3 : floDelay + 0.8,
              duration: prefersReducedMotion ? 0.01 : 1.2,
            }}
          >
            所有灵感，终会靠岸。
          </motion.p>
          <motion.button
            type="button"
            className="flo-interactive mt-5 rounded-full border border-flo-aura/24 bg-white/[0.025] px-5 py-3 text-sm text-flo-foam/82 outline-none"
            onClick={enterSea}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: prefersReducedMotion ? 0.3 : floDelay + 1.05, duration: 1 }}
          >
            进入海面
          </motion.button>
        </div>
      </div>
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-flo-glow/20 blur-3xl"
        initial={{ opacity: 0, scale: 0.4 }}
        animate={isLeaving ? { opacity: 0.65, scale: 11 } : { opacity: 0, scale: 0.4 }}
        transition={{ duration: prefersReducedMotion ? 0.01 : 1, ease: "easeInOut" }}
      />
    </motion.section>
  );
}
