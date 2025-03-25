# 安装

::: warning 警告
此文档为 LiteLoaderQQNT 1.2.3 编写
:::

## 使用社区奇妙工具

> 一些社区开发的安装工具来帮助你快速安装

- <https://github.com/Mzdyl/LiteLoaderQQNT_Install>  
使用 Python 编写的安装脚本，支持 Windows Linux MacOS

- <https://github.com/huiyadanli/RevokeMsgPatcher>  
微信/QQ/TIM防撤回补丁，对 QQNT 安装 LiteLoaderQQNT

- <https://github.com/NapNeko/NapCat-Windows-Boot>  
来自 NapCat 项目的启动器，可以一键启动，支持 Windows

使用 Arch Linux 系统可以通过 AUR 安装

- <https://aur.archlinux.org/packages/liteloader-qqnt-bin>
- <https://aur.archlinux.org/packages/liteloader-qqnt-git>

## 安装前的准备工作

你需要先下载 LiteLoaderQQNT 到任意位置，以下有两种方式

- **Release**  
前往 [LiteLoaderQQNT Release页](https://github.com/LiteLoaderQQNT/LiteLoaderQQNT/releases/latest)，下载 `LiteLoaderQQNT.zip` 文件解压到任意位置

- **Clone**  
使用 Git 工具将 LiteLoaderQQNT 仓库 Clone 到本地任意位置

``` shell
git clone --depth 1 https://github.com/LiteLoaderQQNT/LiteLoaderQQNT.git
```

对于 Windows 系统用户，还需要绕过 QQNT 文件校验，可以通过下方链接下载
<https://github.com/LiteLoaderQQNT/QQNTFileVerifyPatch/releases>
，在Release中，有两个版本，分别是

- **DLLHijack**

  下载 dll 文件后，重命名为 dbghelp.dll 放入 QQ 安装目录下即可

- **Patcher**

  下载 exe 文件，运行将弹出文件选择框，进入 QQNT 安装目录选择 QQ.exe 或 QQNT.dll 开始修补，每次更新都需要重新修补

## 修改文件手动安装

1. 转到 QQNT 安装目录

2. 查看 QQNT 安装目录，是否存在 `versions` 文件夹
   - 如果存在，则app路径为 `QQNT\versions\版本号\resources\app`
   - 否则app路径为 `QQNT\resources\app`

3. 在`app\app_launcher`中创建一个`LiteLoader.js` 文件，其中 `LiteLoader` 为文件名可随意设置，写入 ``require(String.raw`*`)`` 其中 \* 为 LiteLoaderQQNT 的路径，要填写绝对路径

4. 修改 `app\package.json` 文件，将 `main` 后值改为 `./app_launcher/LiteLoader.js`，其中 `LiteLoader` 可以改成你创建的文件名

## 更改插件数据目录

支持设置 `LITELOADERQQNT_PROFILE` 环境变量指定 `data` `plugins` 存储位置，即可不在本体目录进行读写操作，比如 MacOS 与 Linux 平台 QQNT，以及类似于 flatpak 打包的 QQNT，让其实现成为可能  

如果你想将本体与存储目录合并在一起需将 `LITELOADERQQNT_PROFILE` 环境变量删除，将 `data` `plugins` 移动回本体根目录下

## 检查是否安装成功

按照上述教程完成安装后，有两种方法检查 LiteLoaderQQNT 是否成功安装

- 运行 QQNT 并打开设置，查看左侧列表是否出现 `LiteLoaderQQNT` 选项
- 使用终端运行 QQNT 查看是否有 LiteLoaderQQNT 相关内容输出显示

如果有显示，即安装成功，玩的开心！
