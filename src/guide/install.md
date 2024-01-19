# 安装

::: warning 警告
此文档为 LiteLoaderQQNT 1.0.0 编写
:::



## 下载

你需要先下载 LiteLoaderQQNT 到任意位置，以下有两种方式

### 通过 Release

前往 LiteLoaderQQNT 仓库，在 Release 中 Latest 内 下载 LiteLoaderQQNT 文件，将压缩包内 LiteLoaderQQNT 目录解压到任意位置

### 通过 Clone

使用 Git 工具将 LiteLoaderQQNT 仓库 Clone 到本地任意位置

``` shell
git clone --depth 1 https://LiteLoaderQQNT/LiteLoaderQQNT.git
```

### 通过 第三方工具

目前还没有第三方工具，这里只是招租位



## 安装

找到 QQNT 安装目录，编辑 `resources\app\app_launcher\index.js` 文件，在最前端插入一行 `require("此处为你 LiteLoaderQQNT 目录路径");`

``` javascript
require("E:\\LiteLoaderQQNT"); // 此处换成你 LiteLoaderQQNT 目录位置
require('./launcher.node').load('external_index', module);
```

::: tip 提示
路径分隔符建议使用 `/`（通用）或使用`\\`（仅限 Windows），单独使用 `\` 会导致报错
:::

::: warning 警告
请确保 LiteLoaderQQNT 拥有 QQNT 安装目录的读写权限！
:::



## 修补

::: warning 警告
此条目仅需 Windows 用户查看，其他系统无需继续阅读此条目
:::

由于 Windows 系统平台 QQNT 被添加文件完整性验证，你需要额外步骤来解除限制

你需要前往 QQNTFileVerifyPatch 仓库 Release 内，下载 QQNTPatcher 文件，以管理员身份运行将弹出文件选择框，进入 QQNT 安装目录选择 QQ.exe 开始修补，等待输出修补完成即可关闭软件



## 检查

按照上述教程完成安装后，有两种方法检查 LiteLoaderQQNT 是否成功安装

- 运行 QQNT 并打开设置，查看左侧列表是否出现 `LiteLoaderQQNT` 选项
- 使用终端运行 QQNT 查看是否有 LiteLoaderQQNT 相关内容输出显示

如果有显示，即安装成功，玩的开心！
