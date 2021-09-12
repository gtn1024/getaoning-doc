import { defineUserConfig } from "@vuepress/cli";
import type { DefaultThemeOptions } from "@vuepress/theme-default";
import { navbar, sidebar } from "./configs";

const isProd = process.env.NODE_ENV === "production";
export default defineUserConfig<DefaultThemeOptions>({
  head: [["link", { rel: "stylesheet", href: "/assets/css/style.css" }]],

  base: "/",

  // site-level locales config
  locales: {
    "/en/": {
      lang: "en-US",
      title: "Taoning's knowledge base",
      description: "Just some tutorials",
    },
    "/": {
      lang: "zh-CN",
      title: "Taoning 的知识库",
      description: "一些教程",
    },
  },

  bundler:
    // specify bundler via environment variable
    process.env.DOCS_BUNDLER ??
    // use vite in dev, use webpack in prod
    (isProd ? "@vuepress/webpack" : "@vuepress/vite"),

  themeConfig: {
    // logo: "/images/hero.png",

    repo: "gtn1024/getaoning-doc",

    docsDir: "docs",

    contributors: false,

    // theme-level locales config
    locales: {
      /**
       * English locale config
       *
       * As the default locale of @vuepress/theme-default is English,
       * we don't need to set all of the locale fields
       */
      "/en/": {
        selectLanguageName: "English",

        // navbar
        navbar: navbar.en,

        // sidebar
        sidebar: sidebar.en,

        // page meta
        editLinkText: "Edit this page on GitHub",
      },

      /**
       * Chinese locale config
       */
      "/": {
        // navbar
        navbar: navbar.zh,
        selectLanguageName: "简体中文",
        selectLanguageText: "选择语言",
        selectLanguageAriaLabel: "选择语言",

        // sidebar
        sidebar: sidebar.zh,

        // page meta
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdatedText: "上次更新",
        contributorsText: "贡献者",

        // custom containers
        tip: "提示",
        warning: "注意",
        danger: "警告",

        // 404 page
        notFound: ["这里什么都没有", "我们怎么到这来了？", "这是一个 404 页面", "看起来我们进入了错误的链接"],
        backToHome: "返回首页",

        // a11y
        openInNewWindow: "在新窗口打开",
        toggleDarkMode: "切换夜间模式",
        toggleSidebar: "切换侧边栏",
      },
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
    },
  },

  plugins: [
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "搜索",
          },
          "/en/": {
            placeholder: "Search",
          },
        },
      },
    ],
  ],
});
