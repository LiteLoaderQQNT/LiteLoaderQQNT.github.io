import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "LiteLoaderQQNT",
  description: "QQNT的插件加载器：LiteLoaderQQNT —— 轻量 · 简洁 · 开源",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
