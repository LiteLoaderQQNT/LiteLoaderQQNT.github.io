# LiteLoader API

::: warning 警告
此文档为 LiteLoaderQQNT 1.2.2 编写
:::

## 介绍

一组可在 `main` `renderer` `preload` 环境内使用的常量与方法，仅暴露与 LiteLoaderQQNT 相关内容

## 用法

``` javascript
LiteLoader: {
    path: {
        root    // 本体目录路径
        profile // 存储目录路径（如果指定了 LITELOADERQQNT_PROFILE 环境变量，否则跟本体目录路径一样）
        data    // 数据目录路径
        plugins // 插件目录路径
    }
    versions {
        qqnt        // QQNT 版本号
        liteloader  // LiteLoaderQQNT 版本号
        node        // Node.js 版本号
        chrome      // Chrome 版本号
        electron    // Electron 版本号
    }
    os: {
        platform    // 系统平台名称
    }
    package: {
        liteloader  // LiteLoaderQQNT package.json 文件内容
        qqnt        // QQNT package.json 文件内容
    }
    plugins: {
        slug: {
            incompatible    // 插件是否兼容
            disabled        // 插件是否禁用
            manifest        // 插件 manifest.json 文件内容
            path: {
                plugin  // 插件本体根目录路径
                data    // 插件数据根目录路径
                injects: {
                    main        // 插件主进程脚本文件路径
                    renderer    // 插件渲染进程脚本文件路径
                    preload     // 插件预加载脚本文件路径
                }
            }
        }
    }
    api: {
        openPath(path)      // 打开指定目录
        openExternal(uri)   // 打开外部连接
        config: {
            set(slug, new_config)       // 设置配置文件
            get(slug, default_config)   // 获取配置文件
        },
        plugin: {
            install(file_path, undone = false),
            delete(slug, delete_data = false, undone = false),
            disable(slug, undone = false)
        }
    }
}
```
