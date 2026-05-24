"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProductField } from "@/components/products/ProductField";
import { AboutSection } from "@/components/scene/AboutSection";
import { IslandScene } from "@/components/scene/IslandScene";
import { OpeningScene } from "@/components/scene/OpeningScene";
import type { FloProductId } from "@/data/products";

type FloView = "opening" | "sea" | "product" | "about";

export function FloExperience() {
  const [view, setView] = useState<FloView>("opening");
  const [selectedProductId, setSelectedProductId] = useState<FloProductId>("light");

  const selectProduct = (productId: FloProductId) => {
    setSelectedProductId(productId);
    setView("product");
  };

  return (
    <div className="flo-shell h-[100svh] overflow-hidden">
      <AnimatePresence mode="wait">
        {view === "opening" ? (
          <OpeningScene key="opening" onEnterSea={() => setView("sea")} />
        ) : null}

        {view === "sea" ? (
          <motion.div
            key="sea"
            className="h-[100svh] overflow-hidden"
            initial={{ opacity: 0, filter: "blur(16px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(18px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <IslandScene
              selectedProductId={selectedProductId}
              onSelectProduct={selectProduct}
              onOpenAbout={() => setView("about")}
              onOpenOpening={() => setView("opening")}
            />
          </motion.div>
        ) : null}

        {view === "product" ? (
          <ProductField
            key={`product-${selectedProductId}`}
            selectedProductId={selectedProductId}
            onBack={() => setView("sea")}
          />
        ) : null}

        {view === "about" ? (
          <AboutSection key="about" onBackToSea={() => setView("sea")} />
        ) : null}
      </AnimatePresence>
    </div>
  );
}
