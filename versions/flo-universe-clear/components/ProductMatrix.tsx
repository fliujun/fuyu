"use client";

import { useMemo, useState } from "react";
import { platformFilters, type Product } from "@/data/products";

type ProductMatrixProps = {
  products: Product[];
};

const statusLabels: Record<Product["status"], string> = {
  available: "可使用",
  beta: "打磨中",
  concept: "规划中",
  current: "当前所在",
};

export function ProductMatrix({ products }: ProductMatrixProps) {
  const [activeFilter, setActiveFilter] = useState("全部");

  const visibleProducts = useMemo(() => {
    if (activeFilter === "全部") {
      return products;
    }

    return products.filter((product) => product.platforms.includes(activeFilter));
  }, [activeFilter, products]);

  return (
    <div className="matrix-shell">
      <div className="filter-bar" aria-label="按平台筛选产品">
        {platformFilters.map((filter) => (
          <button
            className={filter === activeFilter ? "is-active" : ""}
            key={filter}
            onClick={() => setActiveFilter(filter)}
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="product-grid">
        {visibleProducts.map((product) => (
          <article className={`product-card tone-${product.color}`} key={product.id}>
            <div className="product-card-top">
              <span>{product.category}</span>
              <b>{statusLabels[product.status]}</b>
            </div>
            <h3>
              {product.name}
              <small>{product.englishName}</small>
            </h3>
            <p className="product-slogan">{product.slogan}</p>
            <p>{product.summary}</p>
            <div className="platform-row">
              {product.platforms.map((platform) => (
                <span key={platform}>{platform}</span>
              ))}
            </div>
            <ul>
              {product.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
