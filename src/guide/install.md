# 安装

::: warning 警告
此文档为 LiteLoaderQQNT 1.0.0 编写
:::



## 第三方工具

一些社区开发的安装工具来帮助你快速安装，或跳过此条目来阅读官方安装教程

- https://github.com/Mzdyl/LiteLoaderQQNT_Install/



## 下载

你需要先下载 LiteLoaderQQNT 到任意位置，以下有两种方式

- **通过 Release**

  前往 LiteLoaderQQNT 仓库，在 Release 中 Latest 内，下载 `LiteLoaderQQNT.zip` 文件，将压缩包内 LiteLoaderQQNT 目录解压到任意位置

  LiteLoaderQQNT：https://github.com/LiteLoaderQQNT/LiteLoaderQQNT

- **通过 Clone**

  使用 Git 工具将 LiteLoaderQQNT 仓库 Clone 到本地任意位置

  ``` shell
  git clone --depth 1 https://github.com/LiteLoaderQQNT/LiteLoaderQQNT.git
  ```



## 安装

找到 QQNT 安装目录，编辑 `resources\app\app_launcher\index.js` 文件，在最前端插入一行``require(String.raw`此处为你 LiteLoaderQQNT 目录路径`);``

``` javascript
require(String.raw`C:\LiteloaderQQNT`); // 此处换成你 LiteLoaderQQNT 目录位置
require('./launcher.node').load('external_index', module);
```

::: warning 警告
请确保拥有 QQNT 安装目录的读写权限！如果不想给予 QQNT 安装目录读写权限

- 按照下文 `存储位置` 一节进行设置
- 将 `LiteLoaderQQNT/src/preload.js` 复制到 `QQNT/resources/app/versions/此处为版本号/application/preload.js`

LiteLoaderQQNT 会在第二步骤的文件不一致或没有文件时自动复制，也就是说在更新本体后需再进行一次这步骤
:::



## 修补

::: warning 警告
此条目仅需 Windows 用户查看，其他系统无需继续阅读此条目
:::

由于 Windows 系统平台 QQNT 被添加文件完整性验证，你需要额外步骤来解除限制,有下列三种方式：

- **DLLHijackMethod**

    在 Release 下载 dll 文件，重命名为 dbghelp.dll 放入 QQ.exe 同级目录下即可  
    https://github.com/LiteLoaderQQNT/QQNTFileVerifyPatch/tree/DLLHijackMethod

- **QQNTFileVerifyPatch**

    在 Release 下载 exe 文件，运行将弹出文件选择框，进入 QQNT 安装目录选择 QQ.exe 开始修补，每次更新都需要重新修补  
    https://github.com/LiteLoaderQQNT/QQNTFileVerifyPatch

- **PatcherNFixer**

    在 Release 下载 zip 文件，解压后运行 exe 将弹出图形化界面，根据软件界面提示选择相应选项与修补方式，每次更新都需要重新修补  
    https://github.com/xh321/LiteLoaderQQNT-PatcherNFixer

- **V8Killer**

    此方式目前过于麻烦，且需要自行寻找对应的 RVA 偏移量，只说明此方式的可行性，需自行探索使用方式  
    https://github.com/ShellWen/v8_killer


## 检查

按照上述教程完成安装后，有两种方法检查 LiteLoaderQQNT 是否成功安装

- 运行 QQNT 并打开设置，查看左侧列表是否出现 `LiteLoaderQQNT` 选项
- 使用终端运行 QQNT 查看是否有 LiteLoaderQQNT 相关内容输出显示

如果有显示，即安装成功，玩的开心！



## 存储目录

支持设置 `LITELOADERQQNT_PROFILE` 环境变量指定 `data` `plugins` `config.json` 存储位置，即可不在本体目录进行读写操作，比如 MacOS 与 Linux 平台 QQNT，以及类似于 flatpak 打包的 QQNT，让其实现成为可能

如果你想将本体与存储目录合并在一起（便携软件）需将 `LITELOADERQQNT_PROFILE` 环境变量删除，将 `data` `plugins` `config.json` 移动回本体根目录下



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

  1. 删除 LiteLoaderQQNT 0.x 版本本体目录
  2. 删除 `LITELOADERQQNT_PROFILE` 环境变量
  3. 删除 `LITELOADERQQNT_PROFILE` 存储目录
  4. 删除 `QQNT/resources/app/versions/版本号/plugin-preloads.js`
