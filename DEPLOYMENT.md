# Cloudflare Pages 部署说明

## 项目状态

- Next.js 使用 App Router。
- `next.config.ts` 已配置 `output: "export"`，构建后输出静态目录 `out/`。
- 页面不依赖 Node.js 服务端能力。
- 图片配置为 `unoptimized: true`，适合静态托管。
- 域名目标：`vkr.me`。

## Cloudflare Pages 配置

在 Cloudflare Pages 创建项目时使用：

- Framework preset: `Next.js` 或 `None`
- Build command: `npm run build`
- Build output directory: `out`
- Root directory: `/`
- Node.js version: `20`

## 环境变量

当前项目不需要环境变量。

## 自定义域名

1. 在 Cloudflare Pages 项目的 `Custom domains` 中添加 `vkr.me`。
2. 按 Cloudflare 提示完成 DNS 绑定。
3. 等待证书签发完成后访问 `https://vkr.me`。

## 本地验证

部署前建议运行：

```bash
npm run lint
npm run build
```

构建成功后，确认 `out/` 目录存在即可部署。
