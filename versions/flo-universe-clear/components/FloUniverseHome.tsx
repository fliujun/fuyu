import {
  featuredProduct,
  links,
  macInstallSteps,
  productMatrix,
} from "../data/products";
import { ProductMatrix } from "./ProductMatrix";
import { ProductPreview } from "./ProductPreview";

export function FloUniverseHome() {
  return (
    <main>
      <header className="site-header" aria-label="主导航">
        <a className="brand-mark" href="#top" aria-label="回到首页">
          <span className="brand-symbol">浮</span>
          <span>
            <strong>浮宇宙</strong>
            <small>FLO</small>
          </span>
        </a>
        <nav className="nav-links" aria-label="页面导航">
          <a href="#light">浮光</a>
          <a href="#products">产品</a>
          <a href="#install">下载</a>
          <a href="#about">关于</a>
        </nav>
      </header>

      <section id="top" className="hero-section section-shell">
        <div className="hero-copy">
          <p className="eyebrow">浮宇宙 FLO</p>
          <h1>更轻快地抵达日常里的数字产品。</h1>
          <p className="hero-subtitle">
            浮宇宙是一组围绕效率、灵感与日常入口生长的产品。现在主推浮光，让一切常用的，一触即达。
          </p>
          <div className="hero-actions" aria-label="主要操作">
            <a className="button button-primary" href={links.chromeStore}>
              安装 Chrome 扩展
            </a>
            <a className="button button-secondary" href={links.floMacDownload}>
              下载 Mac 启动器
            </a>
          </div>
          <div className="trust-row" aria-label="浮光特点">
            <span>本地优先</span>
            <span>零广告</span>
            <span>无需注册</span>
            <span>永久免费</span>
          </div>
        </div>
        <ProductPreview variant="hero" />
      </section>

      <section id="light" className="section-shell light-section">
        <div className="section-heading">
          <p className="eyebrow">主推作品</p>
          <h2>{featuredProduct.name}</h2>
          <p>{featuredProduct.slogan}</p>
        </div>

        <div className="feature-grid" aria-label="浮光核心能力">
          {featuredProduct.highlights.map((item) => (
            <article className="feature-card" key={item}>
              <span className="feature-dot" aria-hidden="true" />
              <h3>{item}</h3>
            </article>
          ))}
        </div>

        <div className="surface-grid">
          {featuredProduct.surfaces?.map((surface) => (
            <article className="surface-card" key={surface.name}>
              <div className="surface-media">
                <ProductPreview
                  variant={surface.imageState === "placeholder" ? "compact" : "empty"}
                />
              </div>
              <div className="surface-content">
                <p className="platform-label">{surface.platform}</p>
                <h3>{surface.name}</h3>
                <p>{surface.summary}</p>
                <span className="status-pill">{surface.status}</span>
                <ul>
                  {surface.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="card-actions">
                  {surface.primaryAction ? (
                    <a className="button button-small" href={surface.primaryAction.href}>
                      {surface.primaryAction.label}
                    </a>
                  ) : null}
                  {surface.secondaryAction ? (
                    <a
                      className="button button-small button-ghost"
                      href={surface.secondaryAction.href}
                    >
                      {surface.secondaryAction.label}
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="products" className="section-shell products-section">
        <div className="section-heading">
          <p className="eyebrow">产品矩阵</p>
          <h2>一个品牌，多个场景。</h2>
          <p>
            FLO 是整个品牌。浮光、浮屿、浮现，是围绕不同大场景生长出来的子品牌，每个子品牌都可以继续扩展到不同平台。
          </p>
        </div>
        <ProductMatrix products={productMatrix} />
      </section>

      <section id="install" className="section-shell install-section">
        <div className="section-heading install-heading">
          <p className="eyebrow">下载与安装</p>
          <h2>从浮光开始使用浮宇宙。</h2>
          <p>
            Chrome 扩展可直接安装。Mac 启动器当前仅支持 macOS 26+，安装后需要手动开启辅助功能权限。
          </p>
        </div>
        <div className="install-layout">
          <div className="download-panel">
            <a className="download-row" href={links.chromeStore}>
              <span>
                <strong>浮光 Chrome 扩展</strong>
                <small>新标签页、书签、快捷键与小组件</small>
              </span>
              <b>安装</b>
            </a>
            <a className="download-row" href={links.floMacDownload}>
              <span>
                <strong>浮光 Mac 启动器</strong>
                <small>Ctrl 快捷直达与面板启动</small>
              </span>
              <b>下载 DMG</b>
            </a>
          </div>
          <div className="steps-panel">
            {macInstallSteps.map((step, index) => (
              <details key={step.title} open={index === 0}>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {step.title}
                </summary>
                <p>{step.body}</p>
                {step.code ? <code>{step.code}</code> : null}
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-shell about-section">
        <div>
          <p className="eyebrow">About FLO</p>
          <h2>浮宇宙会继续长出新的产品。</h2>
        </div>
        <div className="about-copy">
          <p>
            我是一名产品经理，也是一个正在用 AI 与代码构建数字产品的人。
          </p>
          <p>
            这个版本先把产品入口讲清楚，把下载路径放到用户最容易抵达的位置。后续新增产品时，只需要继续把它放进浮宇宙的结构里。
          </p>
          <div className="identity-tags">
            <span>AI Native Product Designer</span>
            <span>产品经理</span>
            <span>Vibe Coding 创作者</span>
            <span>FLO 浮宇宙构建者</span>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <span>FLO - Products for lighter digital routines.</span>
        <nav aria-label="页脚链接">
          <a href={links.email}>Email</a>
          <a href={links.domain}>vkr.me</a>
          <a href={links.chromeStore}>Chrome 商店</a>
        </nav>
      </footer>
    </main>
  );
}
