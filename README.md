# 谢威的博客

记录学习和思考的个人博客，使用 Astro 与 Astro Theme Pure 构建，部署到 GitHub Pages。

## 环境要求

- Node.js >= 22.12
- npm

## 本地开发

```bash
npm install
npm run dev
```

默认访问地址为 `http://localhost:4321`。

## 构建

```bash
npm run build
npm run preview
```

静态文件会生成到 `dist/`。

## 内容目录

- 博客文章：`src/content/blog/`
- 文档：`src/content/docs/`
- 站点配置：`src/site.config.ts`
- 页面：`src/pages/`
- 静态资源：`public/`

文章使用 Markdown 或 MDX，必要字段为 `title`、`description` 和 `publishDate`，可选字段包括 `tags`、`heroImage`、`draft`、`pin`。

## 部署到 GitHub Pages

仓库已经包含 `.github/workflows/deploy.yml`。首次部署时：

1. 在 GitHub 创建仓库并在本地关联远端。
2. 推送 `main` 分支。
3. 打开仓库的 `Settings → Pages`。
4. 将 `Build and deployment` 的来源设置为 `GitHub Actions`。
5. 等待 Actions 完成部署。

默认域名按用户站点 `https://history-turing.github.io` 配置。如果仓库名不是 `history-turing.github.io`，需要同时在 `astro.config.ts` 中设置对应的 `base`，例如仓库名为 `blog` 时使用 `/blog`。

## 评论

评论目前暂时关闭。接入自己的 Waline 服务后，在 `src/site.config.ts` 中设置：

```ts
waline: {
  enable: true,
  server: 'https://your-waline.example.com/'
}
```

## 自定义站点

- 站点名称、作者、描述、导航、社交链接：`src/site.config.ts`
- 正式域名与部署路径：`astro.config.ts`
- 首页：`src/pages/index.astro`
- 关于页：`src/pages/about/index.astro`
- 项目页：`src/pages/projects/index.astro`
- 友链：`public/links.json`
- 头像：`src/assets/avatar.jpg`
- 分享封面：`public/images/social-card.png`
