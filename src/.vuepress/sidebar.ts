import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "指南",
      icon: "laptop-code",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    },
    {
      text: "插件开发",
      icon: "book",
      prefix: "plugin/",
      children: "structure",
    },
  ],
});
