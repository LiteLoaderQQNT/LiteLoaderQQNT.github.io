# 开始你的第一个插件

::: warning 警告
此文档为 LiteLoaderQQNT 1.0.0 编写
:::



## 准备工作

- 所需知识
  - 前端基础知识
  - Node.js
  - Electron
- 环境搭建
  - QQNT
  - LiteLoaderQQNT
  - 代码编辑器



## 调试代码

::: tip 提示
QQNT 移除了 Chrome DevTools 与 Node.js 远程调试
:::

为了查看主进程输出，你需要使用终端（UTF-8 编码）来启动 QQNT  
渲染进程需安装额外的插件（Chii DevTools）来获取残缺版 DevTools



## 编写插件

::: tip 提示

可使用 插件模板 来快速创建，使用下面 Git 命令（需额外安装） Clone 到插件目录即可

``` shell
git clone https://github.com/LiteLoaderQQNT/Plugin-Template.git --depth 1
```
:::

### 目录结构

- `LiteLoaderQQNT` - 本体
  - `data` - 数据目录
    - `Plugin-Template` - 插件根目录
      - `config.json`
      - ...
  - `plugins` - 插件目录
    - `Plugin-Template` - 插件根目录
      - `src`
      - `manifest.json`
      - ...
  - `src` - 本体源码
  - ...

### manifest.json

``` json
{
    // 必选，当前版本为 4
    "manifest_version": 4,
    // 可选，插件类型，可写 extension | theme
    "type": "extension",
    // 必选，插件名字
    "name": "插件模板",
    // 必选，代码内标识
    "slug": "plugin_template",
    // 必选，插件描述
    "description": "LiteLoaderQQNT的插件模板",
    // 必选，版本号
    "version": "0.1.0",
    // 可选，插件图标，写入相对路径字符串，也可以是 null
    "icon": null,
    // 必选，作者们的信息
    "authors": [
        {
            "name": "LiteLoaderQQNT",                       // 必选，作者名字
            "link": "https://github.com/LiteLoaderQQNT"     // 必选，作者链接
        }
    ],
    // 必选，插件支持的系统平台，Windows: win32 | Linux: linux | MacOS: darwin
    "platform": [
        "win32",
        "linux",
        "darwin"
    ],
    // 可选，要注入的脚本
    "injects": {
        "renderer": "./src/renderer.js",    // 可选，渲染进程
        "main": "./src/main.js",            // 可选，主进程
        "preload": "./src/preload.js"       // 可选，预加载脚本
    },
    // 可选，插件仓库信息
    "repository": {
        "repo": "LiteLoaderQQNT/Plugin-Template",   // 必选，仓库短地址
        "branch": "main",                           // 必选，分支名称
        "release": {
            "tag": "0.1.0",                         // 必选，tag 名称，不推荐写 latest
            "file": "Plugin-Template.zip"           // 必选，release 内的文件名
        }
    }
}
```

### 主进程

``` javascript
// 创建窗口时触发
exports.onBrowserWindowCreated = (window) => {
    // window 为 Electron 的 BrowserWindow 实例
}
```

### 渲染进程

``` javascript
// 打开设置界面触发
export const onSettingWindowCreated = (view) => {
    // view 为 Element 对象，修改将同步到插件设置界面
}
```

### 预加载脚本

``` javascript
// Electron 主进程 与 渲染进程 互相交互的桥梁
const { contextBridge, ipcRenderer } = require("electron");

// 在渲染进程的全局对象上暴露对象
contextBridge.exposeInMainWorld("plugin_template", {});
```



## 上传插件

如果你编写完成一个插件，想要上传到插件列表中提供给插件市场读取，请根据以下步骤进行：

1. 你需要将插件开源在 GitHub 中并发布 Release 附带 zip 格式插件压缩包，确保 manifest.json 在最顶层
2. 编辑 manifest.json 添加 repository 字段，确保 manifest.json 在最顶层，件市场会读取仓库内此文件
3. 插件列表仓库 提交 Issues 或 Pull requests，仿造 plugins.json 内格式，将你的插件追加到文件末尾

插件列表：https://github.com/LiteLoaderQQNT/Plugin-List
