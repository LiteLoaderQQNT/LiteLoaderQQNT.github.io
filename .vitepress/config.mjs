import { defineConfig } from "vitepress";


export default defineConfig({
    srcDir: "src",
    lang: "zh-Hans",
    title: "LiteLoaderQQNT",
    description: "QQNT 插件加载器",
    sitemap: {
        hostname: "https://liteloaderqqnt.github.io"
    },
    themeConfig: {
        sidebar: [
            {
                text: "开始使用",
                collapsed: false,
                items: [
                    { text: "安装", link: "/guide/install" },
                    { text: "插件", link: "/guide/plugins" }
                ]
            },
            {
                text: "开发文档",
                collapsed: false,
                items: [
                    { text: "开始你的第一个插件", link: "/docs/new-plugin" },
                    { text: "LiteLoader API", link: "/docs/liteloader-api" },
                    { text: "Web Components", link: "/docs/web-components" },
                    { text: "自定义协议方案", link: "/docs/protocol-scheme" }
                ]
            }
        ],
        docFooter: {
            prev: "上一页",
            next: "下一页"
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/LiteLoaderQQNT/LiteLoaderQQNT' }
        ]
    }
});
