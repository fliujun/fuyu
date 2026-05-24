"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { floProducts, type FloProduct, type FloProductId } from "@/data/products";

type ProductFieldProps = {
  selectedProductId: FloProductId;
  onBack: () => void;
};

const atmosphereCopy: Record<FloProductId, string[]> = {
  light: ["快捷键", "书签", "新标签页"],
  memory: ["一闪而过", "未来某刻", "重新浮现"],
  journey: ["计划", "同行", "时间线"],
  link: ["Push", "设备", "消息链路"],
  harbor: ["母港", "作品宇宙", "靠岸"],
};

function ProductMotif({ product }: { product: FloProduct }) {
  const labels = atmosphereCopy[product.id];
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute left-[9%] top-[18%] h-28 w-28 rounded-full opacity-30 blur-2xl sm:h-44 sm:w-44"
        style={{ background: product.palette.glow }}
        animate={prefersReducedMotion ? undefined : { x: [0, 18, 0], y: [0, -12, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[12%] right-[12%] h-44 w-44 rounded-full opacity-24 blur-3xl sm:h-72 sm:w-72"
        style={{ background: product.palette.aura }}
        animate={prefersReducedMotion ? undefined : { x: [0, -18, 0], y: [0, 16, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-x-0 bottom-0 h-1/2 product-field-sea" />
      <div className="absolute inset-0 product-field-grain opacity-45" />
      <div className="absolute right-[8%] top-1/2 hidden w-48 -translate-y-1/2 flex-col gap-7 text-right text-xs text-flo-foam/16 md:flex">
        {labels.map((label, index) => (
          <motion.span
            key={label}
            initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.45 + index * 0.25, duration: 1.2, ease: "easeOut" }}
          >
            {label}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

export function ProductField({ selectedProductId, onBack }: ProductFieldProps) {
  const selectedProduct = floProducts.find((product) => product.id === selectedProductId) ?? floProducts[4];
  const prefersReducedMotion = useReducedMotion();
  const [notice, setNotice] = useState<string | null>(null);

  const showNotice = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(null), 1600);
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onBack();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onBack]);

  const handlePrimaryCta = () => {
    if (selectedProduct.links?.primary && selectedProduct.links.primary !== "#") {
      window.open(selectedProduct.links.primary, "_blank", "noopener,noreferrer");
      return;
    }

    showNotice(`${selectedProduct.cta.primary}暂时还在海面下。`);
  };

  const handleSecondaryCta = () => {
    if (selectedProduct.cta.secondary === "回到海面") {
      onBack();
      return;
    }

    if (selectedProduct.links?.secondary) {
      window.open(selectedProduct.links.secondary, "_blank", "noopener,noreferrer");
      return;
    }

    showNotice(`${selectedProduct.cta.secondary}还没有公开内容。`);
  };

  return (
    <motion.section
      id="product-field"
      className="product-field relative h-[100dvh] overflow-y-auto px-5 pb-[calc(env(safe-area-inset-bottom)+1.5rem)] pt-[calc(env(safe-area-inset-top)+1rem)] sm:px-10 md:overflow-hidden md:py-5 lg:px-16"
      aria-labelledby="product-field-title"
      initial={{ opacity: 0, filter: "blur(24px)", scale: 1.035 }}
      animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
      exit={{ opacity: 0, filter: "blur(22px)", scale: 0.92 }}
      transition={{ duration: prefersReducedMotion ? 0.01 : 1.05, ease: [0.22, 1, 0.36, 1] }}
      style={
        {
          "--field-aura": selectedProduct.palette.aura,
          "--field-glow": selectedProduct.palette.glow,
          "--field-mist": selectedProduct.palette.mist,
        } as CSSProperties
      }
    >
      <motion.div
        className="absolute inset-0 product-field-aurora"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                backgroundPosition: ["0% 48%", "100% 52%", "0% 48%"],
              }
        }
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <ProductMotif product={selectedProduct} />

      <AnimatePresence>
        {notice ? (
          <motion.div
            className="absolute right-5 top-5 z-30 max-w-[14rem] rounded-full border border-flo-aura/20 bg-flo-abyss-900/80 px-4 py-2 text-xs text-flo-foam/82 backdrop-blur-md sm:right-10 sm:top-8"
            initial={{ opacity: 0, y: -8, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -8, filter: "blur(8px)" }}
          >
            {notice}
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        type="button"
        className="flo-interactive relative z-20 mb-5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-flo-foam/72 outline-none backdrop-blur-md md:absolute md:left-10 md:top-8 md:mb-0 md:text-sm"
        onClick={onBack}
        aria-label="返回浮屿海面"
        whileTap={{ scale: 0.98 }}
      >
        返回海面
      </motion.button>

      <div className="relative z-10 mx-auto grid min-h-full w-full max-w-6xl content-start gap-5 md:h-full md:content-center md:pt-11 lg:grid-cols-[0.96fr_0.72fr] lg:items-center lg:gap-10 lg:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(14px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.15, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="flo-kicker mb-3 sm:mb-6">Product Field / {selectedProduct.concept}</p>
          <h2 id="product-field-title" className="text-[clamp(2.7rem,18vw,8rem)] font-medium leading-[0.9] text-flo-foam md:text-[clamp(2.8rem,11vw,8rem)]">
            {selectedProduct.name}
          </h2>
          <p className="mt-2 text-base text-flo-aura sm:mt-3 sm:text-xl">{selectedProduct.concept}</p>
          <p className="mt-4 max-w-2xl text-xl font-medium leading-snug text-flo-foam min-[390px]:text-2xl sm:mt-6 sm:text-4xl lg:text-5xl">
            {selectedProduct.slogan}
          </p>
          <p className="mt-3 max-w-xl text-xs leading-6 text-flo-foam/70 min-[390px]:text-sm sm:mt-5 sm:text-base sm:leading-8">
            {selectedProduct.description}
          </p>

          <div className="mt-4 flex gap-2 sm:mt-6 sm:gap-3">
            <button
              type="button"
              className="flo-interactive rounded-full border border-flo-glow/20 bg-flo-glow/10 px-4 py-2.5 text-xs text-flo-foam outline-none sm:px-5 sm:py-3 sm:text-sm"
              onClick={handlePrimaryCta}
            >
              {selectedProduct.cta.primary}
            </button>
            <button
              type="button"
              className="flo-interactive rounded-full border border-white/10 bg-white/[0.022] px-4 py-2.5 text-xs text-flo-foam/72 outline-none sm:px-5 sm:py-3 sm:text-sm"
              onClick={handleSecondaryCta}
            >
              {selectedProduct.cta.secondary}
            </button>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-2 pb-1 lg:grid-cols-1 xl:grid-cols-2"
          initial={{ opacity: 0, y: 22, filter: "blur(14px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.15, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          {selectedProduct.abilities.slice(0, 4).map((ability, index) => (
            <motion.div
              key={ability}
              className="flo-panel relative overflow-hidden rounded-lg p-3 text-xs leading-5 text-flo-foam/74 backdrop-blur-md sm:p-4 sm:text-sm sm:leading-6"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.56 + index * 0.12, ease: "easeOut" }}
            >
              <span
                className="absolute -right-8 -top-8 h-20 w-20 rounded-full opacity-18 blur-2xl"
                style={{ background: selectedProduct.palette.glow }}
              />
              <span className="relative">{ability}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--field-glow)] opacity-0 blur-3xl"
        exit={{ opacity: [0, 0.58, 0], scale: [1, 0.42, 0.08] }}
        transition={{ duration: prefersReducedMotion ? 0.01 : 0.85, ease: "easeInOut" }}
      />
    </motion.section>
  );
}
