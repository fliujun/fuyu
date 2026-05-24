"use client";

import { motion, useReducedMotion } from "framer-motion";
import { floProducts, type FloProduct, type FloProductId } from "@/data/products";

type IslandSceneProps = {
  selectedProductId: FloProductId | null;
  onSelectProduct: (productId: FloProductId) => void;
  onOpenAbout: () => void;
  onOpenOpening: () => void;
};

const islandPositions: Record<FloProductId, { x: string; y: string; size: string; delay: number }> = {
  light: { x: "18%", y: "34%", size: "10.5rem", delay: 0 },
  memory: { x: "39%", y: "58%", size: "9.5rem", delay: 0.5 },
  journey: { x: "61%", y: "32%", size: "11rem", delay: 0.9 },
  link: { x: "78%", y: "58%", size: "9.75rem", delay: 1.2 },
  harbor: { x: "49%", y: "23%", size: "12rem", delay: 1.6 },
};

const connectionPoints = [
  ["18%", "34%", "49%", "23%"],
  ["49%", "23%", "61%", "32%"],
  ["61%", "32%", "78%", "58%"],
  ["18%", "34%", "39%", "58%"],
  ["39%", "58%", "78%", "58%"],
] as const;

function IslandButton({
  product,
  isSelected,
  onSelectProduct,
}: {
  product: FloProduct;
  isSelected: boolean;
  onSelectProduct: (productId: FloProductId) => void;
}) {
  const prefersReducedMotion = useReducedMotion();
  const position = islandPositions[product.id];

  return (
    <motion.button
      type="button"
      className="group absolute -translate-x-1/2 -translate-y-1/2 text-left outline-none"
      style={{ left: position.x, top: position.y }}
      onClick={() => onSelectProduct(product.id)}
      aria-label={`查看${product.name} / ${product.concept}，${product.status}`}
      initial={{ opacity: 0, y: 18, filter: "blur(16px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.45 }}
      animate={
        prefersReducedMotion
          ? undefined
          : {
              y: [0, -10, 0],
            }
      }
      transition={{
        opacity: { duration: 1, delay: position.delay * 0.16 },
        y: { duration: 5.5 + position.delay, repeat: Infinity, ease: "easeInOut" },
        filter: { duration: 1 },
      }}
      data-product-island="true"
    >
      <span
        className="relative block rounded-full transition duration-500 group-hover:scale-[1.04] group-focus-visible:scale-[1.04]"
        style={{ width: position.size, height: position.size }}
      >
        <span
          className="absolute inset-[-22%] rounded-full opacity-32 blur-3xl transition duration-700 group-hover:opacity-58 group-focus-visible:opacity-58"
          style={{
            background: `radial-gradient(circle, ${product.palette.glow} 0%, ${product.palette.aura} 36%, transparent 70%)`,
          }}
        />
        <span
          className="absolute inset-[8%] rounded-[42%_58%_46%_54%/54%_42%_58%_46%] border border-white/10 bg-white/[0.032] shadow-[inset_0_0_38px_rgba(255,255,255,0.045)] backdrop-blur-sm transition duration-700 group-hover:border-flo-aura/30 group-focus-visible:border-flo-aura/40"
          style={{
            background: `radial-gradient(circle at 34% 28%, ${product.palette.mist}44, transparent 31%), radial-gradient(circle at 70% 68%, ${product.palette.glow}26, transparent 36%), linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.018))`,
          }}
        />
        <span
          className="absolute left-1/2 top-1/2 h-[42%] w-[64%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-42 blur-xl"
          style={{ background: product.palette.aura }}
        />
        <span className="absolute inset-0 flex flex-col justify-center px-5 text-center">
          <span className="text-lg font-medium text-flo-foam">{product.name}</span>
          <span className="mt-1 text-xs text-flo-aura">{product.concept}</span>
          <span className="mt-3 text-[0.68rem] leading-5 text-flo-foam/62">{product.status}</span>
        </span>
        {isSelected ? (
          <motion.span
            className="absolute inset-[-38%] rounded-full border border-flo-glow/30"
            initial={{ opacity: 0, scale: 0.72 }}
            animate={{ opacity: [0, 0.85, 0], scale: [0.78, 1.28, 1.72] }}
            transition={{ duration: 1.15, ease: "easeOut" }}
          />
        ) : null}
      </span>
    </motion.button>
  );
}

function MobileIslandButton({
  product,
  isSelected,
  onSelectProduct,
}: {
  product: FloProduct;
  isSelected: boolean;
  onSelectProduct: (productId: FloProductId) => void;
}) {
  return (
    <button
      type="button"
      className="flo-panel flo-interactive group relative min-h-20 overflow-hidden rounded-lg px-3 py-2.5 text-left outline-none min-[390px]:min-h-24 min-[390px]:px-4 min-[390px]:py-3"
      onClick={() => onSelectProduct(product.id)}
      aria-label={`查看${product.name} / ${product.concept}，${product.status}`}
      data-product-island="true"
    >
      <span
        className="absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-24 blur-2xl transition duration-700 group-hover:opacity-42"
        style={{ background: product.palette.glow }}
      />
      <span className="relative flex items-center gap-4">
        <span
          className="h-12 w-12 shrink-0 rounded-[45%_55%_50%_50%/55%_42%_58%_45%] border border-white/12 min-[390px]:h-14 min-[390px]:w-14"
          style={{
            background: `radial-gradient(circle at 35% 30%, ${product.palette.mist}55, transparent 36%), radial-gradient(circle at 70% 70%, ${product.palette.glow}38, transparent 44%), rgba(255,255,255,0.04)`,
          }}
        />
        <span>
          <span className="block text-lg font-medium text-flo-foam min-[390px]:text-xl">{product.name}</span>
          <span className="mt-1 block text-xs text-flo-aura/82">{product.concept} / {product.status}</span>
          <span className="mt-1.5 block text-xs leading-5 text-flo-foam/66 min-[390px]:text-sm">{product.islandText}</span>
        </span>
      </span>
      {isSelected ? <span className="absolute inset-0 border border-flo-glow/30" /> : null}
    </button>
  );
}

export function IslandScene({ selectedProductId, onSelectProduct, onOpenAbout, onOpenOpening }: IslandSceneProps) {
  return (
    <section
      id="island-scene"
      className="island-section relative h-[100dvh] overflow-y-auto px-5 pb-[calc(env(safe-area-inset-bottom)+1.5rem)] pt-[calc(env(safe-area-inset-top)+1rem)] sm:px-10 md:overflow-hidden md:py-5 lg:px-16"
      aria-labelledby="island-title"
    >
      <div className="island-aurora absolute inset-0" />
      <div className="island-sea absolute inset-x-0 bottom-0 h-[68%]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,6,14,0.58)_88%)]" />

      <nav className="relative z-20 mb-8 ml-auto flex justify-end gap-2 md:absolute md:right-10 md:top-8 md:mb-0" aria-label="页面入口">
        <button type="button" className="flo-interactive rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-xs text-flo-foam/68 outline-none" onClick={onOpenOpening}>
          Opening
        </button>
        <button type="button" className="flo-interactive rounded-full border border-flo-aura/20 bg-white/[0.025] px-4 py-2 text-xs text-flo-foam/78 outline-none" onClick={onOpenAbout}>
          产品哲学
        </button>
      </nav>

      <div className="relative z-10 mx-auto flex min-h-full w-full max-w-7xl flex-col md:h-full md:pt-16">
        <div className="flex shrink-0 flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="flo-kicker mb-3 sm:mb-5">Island / 浮屿海面</p>
            <h2 id="island-title" className="fog-reveal max-w-2xl text-[2.15rem] font-medium leading-tight text-flo-foam min-[390px]:text-[2.55rem] sm:text-5xl lg:text-6xl">
              FLO 的产品，漂浮在同一片深夜海面。
            </h2>
          </div>
          <p className="fog-reveal max-w-sm text-xs leading-6 text-flo-foam/58 sm:text-base sm:leading-8">
            每一座岛屿都是一个产品意识场。它们以微弱光线相连，像深夜海面上彼此记得的坐标。
          </p>
        </div>

        <div className="relative mt-4 hidden flex-1 md:block">
          <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-70" aria-hidden="true">
            <defs>
              <linearGradient id="island-line" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="rgba(137,174,230,0)" />
                <stop offset="48%" stopColor="rgba(137,174,230,0.32)" />
                <stop offset="100%" stopColor="rgba(244,213,141,0)" />
              </linearGradient>
            </defs>
            {connectionPoints.map(([x1, y1, x2, y2], index) => (
              <motion.line
                key={`${x1}-${y1}-${x2}-${y2}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="url(#island-line)"
                strokeWidth="1"
                strokeDasharray="2 12"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, delay: 0.25 + index * 0.12, ease: "easeOut" }}
              />
            ))}
          </svg>

          {floProducts.map((product) => (
            <IslandButton
              key={product.id}
              product={product}
              isSelected={selectedProductId === product.id}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>

        <div className="mt-5 grid min-h-0 flex-1 gap-3 md:hidden">
          {floProducts.map((product) => (
            <MobileIslandButton
              key={product.id}
              product={product}
              isSelected={selectedProductId === product.id}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
