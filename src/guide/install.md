# 安装

::: warning 警告
此文档为 LiteLoaderQQNT 1.0.0 编写
:::



## 第三方工具

一些社区开发的安装工具来帮助你快速安装，或跳过此条目来阅读官方安装教程

- https://github.com/Mzdyl/LiteLoaderQQNT_Install/



## 全新安装

### 下载

你需要先下载 LiteLoaderQQNT 到任意位置，以下有两种方式

- **通过 Release**

  前往 LiteLoaderQQNT 仓库，在 Release 中 Latest 内，下载 `LiteLoaderQQNT.zip` 文件，将压缩包内 LiteLoaderQQNT 目录解压到任意位置

  LiteLoaderQQNT：https://github.com/LiteLoaderQQNT/LiteLoaderQQNT

- **通过 Clone**

  使用 Git 工具将 LiteLoaderQQNT 仓库 Clone 到本地任意位置

  ``` shell
  git clone --depth 1 https://github.com/LiteLoaderQQNT/LiteLoaderQQNT.git
  ```



### 安装

找到 QQNT 安装目录，编辑 `resources\app\app_launcher\index.js` 文件，在最前端插入一行 `require("此处为你 LiteLoaderQQNT 目录路径");`

``` javascript
require("E:\\LiteLoaderQQNT"); // 此处换成你 LiteLoaderQQNT 目录位置
require('./launcher.node').load('external_index', module);
```

::: tip 提示
路径分隔符建议使用 `/`（通用）或使用 `\\`（仅限 Windows），单独使用 `\` 会导致报错
:::

::: warning 警告
请确保拥有 QQNT 安装目录的读写权限！如果不想给予 QQNT 安装目录读写权限

- 按照下文 `存储位置` 一节进行设置
- 将 `LiteLoaderQQNT/src/preload.js` 复制到 `QQNT/resources/app/versions/此处为版本号/application/preload.js`

LiteLoaderQQNT 会在第二步骤的文件不一致或没有文件时自动复制，也就是说在更新本体后需再进行一次这步骤
:::



## 从 0.x 更新

::: warning 警告
如果你是 0.x 版本的老用户想升级到 1.x 版本，请阅读此条目
:::

完成上述安装，还原 0.x 版本需修改的 `package.json` 文件 `main` 字段

- **如果你想保留插件数据，比如防撤回的数据**

  1. 在存储目录中将 `plugins_data` 重命名为 `data`
  2. 除 `data` 外，删除其他所有文件
  3. 根据上述 `存储目录` 一栏进行操作

- **如果你想完全重新开始，不会保留任何数据**

  1. 删除 `LITELOADERQQNT_PROFILE` 环境变量
  2. 删除 `LITELOADERQQNT_PROFILE` 存储目录
  3. 删除 LiteLoaderQQNT 0.x 版本本体目录



### 修补

::: warning 警告
此条目仅需 Windows 用户查看，其他系统无需继续阅读此条目
:::

由于 Windows 系统平台 QQNT 被添加文件完整性验证，你需要额外步骤来解除限制

前往 QQNTFileVerifyPatch 仓库，在 Release 中 Latest 内，下载 `QQNTPatcher_*.exe`（标*部分根据你系统架构选择）文件，以管理员身份运行将弹出文件选择框，进入 QQNT 安装目录选择 QQ.exe 开始修补，等待输出修补完成即可关闭软件

QQNTFileVerifyPatch：https://github.com/LiteLoaderQQNT/QQNTFileVerifyPatch



## 存储目录

支持设置 `LITELOADERQQNT_PROFILE` 环境变量指定 `data` `plugins` `config.json` 存储位置，即可不在本体目录进行读写操作，比如 MacOS 与 Linux 平台 QQNT，以及类似于 flatpak 打包的 QQNT，让其实现成为可能

如果你想将本体与存储目录合并在一起（便携软件）需将 `LITELOADERQQNT_PROFILE` 环境变量删除，将 `data` `plugins` `config.json` 移动回本体根目录下



## 检查

按照上述教程完成安装后，有两种方法检查 LiteLoaderQQNT 是否成功安装

- 运行 QQNT 并打开设置，查看左侧列表是否出现 `LiteLoaderQQNT` 选项
- 使用终端运行 QQNT 查看是否有 LiteLoaderQQNT 相关内容输出显示

如果有显示，即安装成功，玩的开心！
