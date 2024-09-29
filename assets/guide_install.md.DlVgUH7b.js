import{_ as a,c as t,a2 as i,o as r}from"./chunks/framework.Dtz5kk4D.js";const Q=JSON.parse('{"title":"安装","description":"","frontmatter":{},"headers":[],"relativePath":"guide/install.md","filePath":"guide/install.md","lastUpdated":1727581212000}'),l={name:"guide/install.md"};function o(s,e,d,n,p,h){return r(),t("div",null,e[0]||(e[0]=[i('<h1 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">警告</p><p>此文档为 LiteLoaderQQNT 1.2.2 编写</p></div><h2 id="使用社区奇妙工具" tabindex="-1">使用社区奇妙工具 <a class="header-anchor" href="#使用社区奇妙工具" aria-label="Permalink to &quot;使用社区奇妙工具&quot;">​</a></h2><p>一些社区开发的安装工具来帮助你快速安装</p><ul><li><p><a href="https://github.com/Mzdyl/LiteLoaderQQNT_Install" target="_blank" rel="noreferrer">https://github.com/Mzdyl/LiteLoaderQQNT_Install</a><br> 使用 Python 编写的安装脚本，支持 Windows Linux MacOS</p></li><li><p><a href="https://github.com/huiyadanli/RevokeMsgPatcher" target="_blank" rel="noreferrer">https://github.com/huiyadanli/RevokeMsgPatcher</a><br> 微信/QQ/TIM防撤回补丁，对 QQNT 安装 LiteLoaderQQNT</p></li><li><p><a href="https://github.com/NapNeko/NapCat-Windows-Boot" target="_blank" rel="noreferrer">https://github.com/NapNeko/NapCat-Windows-Boot</a><br> 来自 NapCat 项目的启动器，可以一键启动，支持 Windows</p></li></ul><p>使用 Arch Linux 系统可以通过 AUR 安装</p><ul><li><a href="https://aur.archlinux.org/packages/liteloader-qqnt-bin" target="_blank" rel="noreferrer">https://aur.archlinux.org/packages/liteloader-qqnt-bin</a></li><li><a href="https://aur.archlinux.org/packages/liteloader-qqnt-git" target="_blank" rel="noreferrer">https://aur.archlinux.org/packages/liteloader-qqnt-git</a></li></ul><h2 id="安装前的准备工作" tabindex="-1">安装前的准备工作 <a class="header-anchor" href="#安装前的准备工作" aria-label="Permalink to &quot;安装前的准备工作&quot;">​</a></h2><p>你需要先下载 LiteLoaderQQNT 到任意位置，以下有两种方式</p><ul><li><p><strong>Release</strong>（推荐，正式发布版本）<br> 前往 <a href="https://github.com/LiteLoaderQQNT/LiteLoaderQQNT" target="_blank" rel="noreferrer">LiteLoaderQQNT</a> 仓库，在 Release 的 Latest 下载 <code>LiteLoaderQQNT.zip</code> 文件解压到任意位置</p></li><li><p><strong>Clone</strong>（不推荐，开发中版本）<br> 使用 Git 工具将 LiteLoaderQQNT 仓库 Clone 到本地任意位置</p></li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --depth</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/LiteLoaderQQNT/LiteLoaderQQNT.git</span></span></code></pre></div><p>对于 Windows 系统用户，还需要去除 QQNT 文件校验，以下有两种方式</p><ul><li><p><a href="https://github.com/LiteLoaderQQNT/QQNTFileVerifyPatch/tree/DLLHijackMethod" target="_blank" rel="noreferrer"><strong>DLLHijackMethod</strong></a>（推荐，简单好用）<br> 在 Release 下载 dll 文件，重命名为 dbghelp.dll 放入 QQ.exe 同级目录下即可</p></li><li><p><a href="https://github.com/LiteLoaderQQNT/QQNTFileVerifyPatch" target="_blank" rel="noreferrer"><strong>QQNTFileVerifyPatch</strong></a>（不推荐，麻烦可能被检测）<br> 在 Release 下载 exe 文件，运行将弹出文件选择框，进入 QQNT 安装目录选择 QQ.exe 或 QQNT.dll 开始修补，每次更新都需要重新修补</p></li></ul><h2 id="修改文件手动安装" tabindex="-1">修改文件手动安装 <a class="header-anchor" href="#修改文件手动安装" aria-label="Permalink to &quot;修改文件手动安装&quot;">​</a></h2><p>先找到 app 文件夹的路径，修改里面的两个文件</p><ul><li>查看 QQNT 根目录，是否存在 <code>versions</code> 文件夹 <ul><li>是，则路径为 <code>QQNT\\versions\\版本号\\resources\\app</code></li><li>否，则路径为 <code>QQNT\\resources\\app</code></li></ul></li></ul><p>在 app 目录中，创建一个文件，修改一个文件</p><ul><li>创建 <code>app/app_launcher/*.js</code> 文件，其中 * 为文件名可随意设置，写入 <code>require(String.raw`*`)</code> 其中 * 为 LiteLoaderQQNT 的路径</li><li>修改 <code>app/package.json</code> 文件，将 <code>main</code> 后面的路径改为 <code>./app_launcher/*.js</code> 其中 * 为你刚才创建的文件名</li></ul><h2 id="更改插件数据目录" tabindex="-1">更改插件数据目录 <a class="header-anchor" href="#更改插件数据目录" aria-label="Permalink to &quot;更改插件数据目录&quot;">​</a></h2><p>支持设置 <code>LITELOADERQQNT_PROFILE</code> 环境变量指定 <code>data</code> <code>plugins</code> 存储位置，即可不在本体目录进行读写操作，比如 MacOS 与 Linux 平台 QQNT，以及类似于 flatpak 打包的 QQNT，让其实现成为可能</p><p>如果你想将本体与存储目录合并在一起需将 <code>LITELOADERQQNT_PROFILE</code> 环境变量删除，将 <code>data</code> <code>plugins</code> 移动回本体根目录下</p><h2 id="检查是否安装成功" tabindex="-1">检查是否安装成功 <a class="header-anchor" href="#检查是否安装成功" aria-label="Permalink to &quot;检查是否安装成功&quot;">​</a></h2><p>按照上述教程完成安装后，有两种方法检查 LiteLoaderQQNT 是否成功安装</p><ul><li>运行 QQNT 并打开设置，查看左侧列表是否出现 <code>LiteLoaderQQNT</code> 选项</li><li>使用终端运行 QQNT 查看是否有 LiteLoaderQQNT 相关内容输出显示</li></ul><p>如果有显示，即安装成功，玩的开心！</p>',25)]))}const u=a(l,[["render",o]]);export{Q as __pageData,u as default};
