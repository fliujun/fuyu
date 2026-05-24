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
  { x: "12%", y: "18%", size: 3, glow: 18, opacity: 0.28, delay: 0.2, duration: 8 },
  { x: "20%", y: "64%", size: 7, glow: 34, opacity: 0.18, delay: 1.8, duration: 12 },
  { x: "34%", y: "26%", size: 2, glow: 14, opacity: 0.42, delay: 0.9, duration: 9 },
  { x: "45%", y: "58%", size: 4, glow: 22, opacity: 0.24, delay: 2.4, duration: 13 },
  { x: "57%", y: "22%", size: 9, glow: 42, opacity: 0.16, delay: 1.2, duration: 11 },
  { x: "67%", y: "72%", size: 3, glow: 24, opacity: 0.36, delay: 0.4, duration: 13 },
  { x: "78%", y: "36%", size: 5, glow: 30, opacity: 0.22, delay: 2.8, duration: 10 },
  { x: "89%", y: "78%", size: 2, glow: 18, opacity: 0.5, delay: 1.5, duration: 12 },
  { x: "28%", y: "84%", size: 11, glow: 44, opacity: 0.12, delay: 2.1, duration: 15 },
  { x: "84%", y: "18%", size: 6, glow: 36, opacity: 0.18, delay: 0.7, duration: 14 },
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
            className="absolute rounded-full bg-flo-glow"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              boxShadow: `0 0 ${particle.glow}px rgba(244,213,141,0.38), 0 0 ${particle.glow * 1.7}px rgba(137,174,230,0.14)`,
            }}
            initial={{ opacity: particle.opacity * 0.55, y: 0, scale: 0.92 }}
            animate={
              prefersReducedMotion
                ? { opacity: particle.opacity }
                : {
                    opacity: [particle.opacity * 0.58, Math.min(particle.opacity * 1.9, 0.72), particle.opacity * 0.72],
                    y: [-8, 10, -8],
                    x: [0, 5, 0],
                    scale: [0.88, 1.18, 0.96],
                  }
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
            className="text-[clamp(3.2rem,18vw,10rem)] font-medium leading-none text-flo-foam drop-shadow-[0_0_28px_rgba(137,174,230,0.16)]"
            initial={{ opacity: 0, y: 26, scale: 0.96, filter: "blur(22px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{
              duration: prefersReducedMotion ? 0.01 : 1.8,
              delay: prefersReducedMotion ? 0.2 : floDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.span
              className="block"
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                      y: [0, -4, 0],
                      scale: [1, 1.018, 1],
                      filter: ["brightness(1)", "brightness(1.08)", "brightness(1)"],
                    }
              }
              transition={{
                delay: floDelay + 1.2,
                duration: 5.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              FLO
            </motion.span>
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
            className="flo-interactive opening-enter-button mt-5 rounded-full border border-flo-aura/32 bg-white/[0.035] px-6 py-3.5 text-sm text-flo-foam/90 shadow-[0_0_0_rgba(137,174,230,0)] outline-none backdrop-blur-md"
            onClick={enterSea}
            whileHover={prefersReducedMotion ? undefined : { scale: 1.035 }}
            whileTap={
              prefersReducedMotion
                ? undefined
                : {
                    scale: 0.95,
                    filter: "brightness(1.16)",
                  }
            }
            initial={{ opacity: 0, y: 12 }}
            animate={
              prefersReducedMotion
                ? { opacity: 1, y: 0 }
                : {
                    opacity: 1,
                    y: 0,
                    borderColor: ["rgba(137,174,230,0.32)", "rgba(244,213,141,0.54)", "rgba(137,174,230,0.38)"],
                    backgroundColor: ["rgba(255,255,255,0.035)", "rgba(137,174,230,0.09)", "rgba(255,255,255,0.04)"],
                    boxShadow: [
                      "0 0 14px rgba(137,174,230,0.08)",
                      "0 0 46px rgba(137,174,230,0.28), 0 0 20px rgba(244,213,141,0.15)",
                      "0 0 18px rgba(137,174,230,0.11)",
                    ],
                  }
            }
            transition={{
              opacity: { delay: prefersReducedMotion ? 0.3 : floDelay + 1.05, duration: 1 },
              y: { delay: prefersReducedMotion ? 0.3 : floDelay + 1.05, duration: 1 },
              borderColor: { delay: floDelay + 1.2, duration: 3.2, repeat: Infinity, ease: "easeInOut" },
              backgroundColor: { delay: floDelay + 1.2, duration: 3.2, repeat: Infinity, ease: "easeInOut" },
              boxShadow: { delay: floDelay + 1.2, duration: 3.2, repeat: Infinity, ease: "easeInOut" },
            }}
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
