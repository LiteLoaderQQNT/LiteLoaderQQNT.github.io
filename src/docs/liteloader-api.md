# LiteLoader API

::: warning 警告
此文档为 LiteLoaderQQNT 1.0.0 编写
:::



## 介绍

一组可在 `main` `renderer` `preload` 环境内使用的常量与方法，仅暴露与 LiteLoaderQQNT 相关内容



## 用法



``` javascript
LiteLoader.path.root    // 本体目录路径
LiteLoader.path.profile // 存储目录路径（如果指定了 LITELOADERQQNT_PROFILE 环境变量）
LiteLoader.path.data    // 数据目录路径
LiteLoader.path.plugins // 插件目录路径

LiteLoader.versions.qqnt        // QQNT 版本号
LiteLoader.versions.liteloader  // LiteLoaderQQNT 版本号
LiteLoader.versions.node        // Node.js 版本号
LiteLoader.versions.chrome      // Chrome 版本号
LiteLoader.versions.electron    // Electron 版本号

LiteLoader.os.platform  // 系统平台名称

LiteLoader.package.liteloader   // LiteLoaderQQNT package.json 文件内容
LiteLoader.package.qqnt         // QQNT package.json 文件内容

LiteLoader.config.LiteLoader.disabled_plugins   // 已禁用插件的列表

LiteLoader.plugins["slug"].manifest                 // 插件 manifest.json 文件内容
LiteLoader.plugins["slug"].incompatible             // 插件是否兼容
LiteLoader.plugins["slug"].disabled                 // 插件是否禁用
LiteLoader.plugins["slug"].path.plugin              // 插件本体根目录路径
LiteLoader.plugins["slug"].path.data                // 插件数据根目录路径
LiteLoader.plugins["slug"].path.injects.main        // 插件主进程脚本文件路径
LiteLoader.plugins["slug"].path.injects.renderer    // 插件渲染进程脚本文件路径
LiteLoader.plugins["slug"].path.injects.preload     // 插件预加载脚本文件路径

LiteLoader.api.openPath(path)                   // 打开指定目录
LiteLoader.api.openExternal(uri)                // 打开外部连接
LiteLoader.api.disablePlugin(slug)              // 禁用指定插件
LiteLoader.api.config.set(slug, new_config)     // 设置配置文件
LiteLoader.api.config.get(slug, default_config) // 获取配置文件
```
