# 安装


## 使用社区奇妙工具

通过本段提供的方案完成安装后，直接跳到 [6. 检查是否安装成功](#%E6%A3%80%E6%9F%A5%E6%98%AF%E5%90%A6%E5%AE%89%E8%A3%85%E6%88%90%E5%8A%9F) 即可。

如果需要手动进行安装，请从 [2. 下载 LiteLoaderQQNT 本体](#下载-liteloaderqqnt-本体) 开始。

### 通过安装工具进行安装

::: warning 警告
在 Windows 上使用这些工具时，请做好 QQNT 无法通过文件校验的准备。

在遇到这种情况时，仍推荐阅读 [3. 在 Windows 上绕过 QQNT 文件校验](#在-windows-上绕过-qqnt-文件校验)。
:::

- <https://github.com/Mzdyl/LiteLoaderQQNT_Install> 

  使用 Python 编写的安装脚本，支持 Windows / Linux / MacOS。

- <https://github.com/NapNeko/NapCat-Windows-Boot> 

  来自 NapCat 项目的启动器，可以一键启动，支持 Windows

### 通过 AUR 安装 （Arch Linux）

- <https://aur.archlinux.org/packages/liteloader-qqnt-bin> 对应 Release 版本
- <https://aur.archlinux.org/packages/liteloader-qqnt-git> 对应仓库最新提交

在卸载 `liteloader-qqnt` 时，推荐重新安装 QQNT 本体，以防止文件哈希不同于原版。

推荐阅读 [5. 更改插件数据目录](#更改插件数据目录-可选) ，以防止 LiteLoaderQQNT 试图在无权限目录下执行写操作。

## 下载 LiteLoaderQQNT 本体

你需要先下载 LiteLoaderQQNT 到任意位置，以下有两种方式

- **Release** （稳定版）
前往 [LiteLoaderQQNT Release 页](https://github.com/LiteLoaderQQNT/LiteLoaderQQNT/releases/latest)，下载 `LiteLoaderQQNT.zip` 文件解压到任意位置

- **Clone** （最新提交）
使用 Git 工具将 LiteLoaderQQNT 仓库 Clone 到本地任意位置

``` shell
git clone --depth 1 https://github.com/LiteLoaderQQNT/LiteLoaderQQNT.git
```

## 在 Windows 上绕过 QQNT 文件校验

~~原 https://github.com/LiteLoaderQQNT/QQNTFileVerifyPatch/releases 暂无公开发布计划，请使用 Telegram 群内的版本。~~

对于 Windows 系统用户，还需要绕过 QQNT 文件校验。

请根据你的操作系统架构在 Telegram 群内下载 `dbghelp_*.dll` 文件，将其重命名为 `dbghelp.dll` 后放入 `QQ.exe` 同级目录下。

## 修改文件手动安装

1. 转到 QQNT 安装目录

2. 查看 QQNT 安装目录，是否存在 `versions` 文件夹
   - 如果存在，则 `app` 路径为 `QQNT\versions\版本号\resources\app`
   - 否则 `app` 路径为 `QQNT\resources\app`

3. 在 `app\app_launcher` （若缺失 `app_launcher` 目录就自己创建）中创建一个 `LiteLoader.js` （文件名 `LiteLoader` 可随意设定， 需保留拓展名 `.js`）文件并写入以下内容：

   ```javascript
   require(String.raw`修改为 LiteLoaderQQNT 的绝对路径，保留反引号`)
   ```

4. 修改 `app\package.json` 文件，将 `main` 后值改为 `./app_launcher/LiteLoader.js`，其中 `LiteLoader` 可以改成你创建的文件名

   ```diff
   -   "main": "./application.asar/app_launcher/index.js",
   +   "main": "./app_launcher/LiteLoader.js",
   ```

## 更改插件数据目录 （可选）

支持设置 `LITELOADERQQNT_PROFILE` 环境变量指定 `data` `plugins` 存储位置，即可不在本体目录进行读写操作。当本体目录无写权限时（如 MacOS 与 Linux 平台 QQNT，以及类似于 flatpak 打包的 QQNT），请设定该变量到当前用户具有可读写权限的位置。

如果你想将本体与存储目录合并在一起需将 `LITELOADERQQNT_PROFILE` 环境变量删除，将 `data` `plugins` 移动回本体根目录下。

## 检查是否安装成功

按照上述教程完成安装后，有两种方法检查 LiteLoaderQQNT 是否成功安装

- 运行 QQNT 并打开设置，查看左侧列表是否出现 `LiteLoaderQQNT` 选项
- 使用终端运行 QQNT 查看是否有 LiteLoaderQQNT 相关内容输出显示

如果有显示，即安装成功，玩的开心！
