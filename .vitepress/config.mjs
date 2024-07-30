import { defineConfig } from "vitepress";


// https://vitepress.dev/reference/site-config
export default defineConfig({
    srcDir: "src",
    lang: "zh-Hans",
    title: "LiteLoaderQQNT",
    description: "QQNT 插件加载器",
    sitemap: {
        hostname: "https://liteloaderqqnt.github.io"
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "首页", link: "/" },
            { text: "开始使用", link: "/guide/introduction", activeMatch: "/guide" },
            { text: "开发文档", link: "/docs/introduction", activeMatch: "/docs" }
        ],
        sidebar: [
            {
                text: "开始使用",
                collapsed: false,
                items: [
                    { text: "介绍", link: "/guide/introduction" },
                    { text: "安装", link: "/guide/install" },
                    { text: "插件", link: "/guide/plugins" }
                ]
            },
            {
                text: "开发文档",
                collapsed: false,
                items: [
                    { text: "开始你的第一个插件", link: "/docs/introduction" },
                    { text: "LiteLoader API", link: "/docs/liteloader-api" },
                    { text: "Web Components", link: "/docs/web-components" },
                    { text: "自定义协议方案", link: "/docs/protocol-scheme" }
                ]
            }
        ],
        editLink: {
            pattern: "https://github.com/LiteLoaderQQNT/LiteLoaderQQNT.github.io/edit/main/src/:path",
            text: "在GitHub上编辑此页面"
        },
        lastUpdated: {
            text: "最后更新",
            formatOptions: {
                dateStyle: "medium",
                timeStyle: "short"
            }
        },
        docFooter: {
            prev: "上一页",
            next: "下一页"
        },
        search: {
            provider: "local",
        },
        footer: {
            message: "赞助：<a href='https://afdian.com/a/mojinran'>爱发电</a>",
            copyright: "基于 <a href='https://github.com/LiteLoaderQQNT/LiteLoaderQQNT/blob/main/LICENSE'>MIT</a> 许可发布"
        },
        externalLinkIcon: true
    }
});
