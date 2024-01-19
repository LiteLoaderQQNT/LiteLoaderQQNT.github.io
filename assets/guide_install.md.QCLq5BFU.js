import{_ as a,c as i,o as s,V as e}from"./chunks/framework.LLn18gvy.js";const Q=JSON.parse('{"title":"安装","description":"","frontmatter":{},"headers":[],"relativePath":"guide/install.md","filePath":"guide/install.md","lastUpdated":1705682681000}'),t={name:"guide/install.md"},l=e(`<h1 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">警告</p><p>此文档为 LiteLoaderQQNT 1.0.0 编写</p></div><h2 id="下载" tabindex="-1">下载 <a class="header-anchor" href="#下载" aria-label="Permalink to &quot;下载&quot;">​</a></h2><p>你需要先下载 LiteLoaderQQNT 到任意位置，以下有两种方式</p><h3 id="通过-release" tabindex="-1">通过 Release <a class="header-anchor" href="#通过-release" aria-label="Permalink to &quot;通过 Release&quot;">​</a></h3><p>前往 LiteLoaderQQNT 仓库，在 Release 中 Latest 内 下载 LiteLoaderQQNT 文件，将压缩包内 LiteLoaderQQNT 目录解压到任意位置</p><h3 id="通过-clone" tabindex="-1">通过 Clone <a class="header-anchor" href="#通过-clone" aria-label="Permalink to &quot;通过 Clone&quot;">​</a></h3><p>使用 Git 工具将 LiteLoaderQQNT 仓库 Clone 到本地任意位置</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --depth</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://LiteLoaderQQNT/LiteLoaderQQNT.git</span></span></code></pre></div><h3 id="通过-第三方工具" tabindex="-1">通过 第三方工具 <a class="header-anchor" href="#通过-第三方工具" aria-label="Permalink to &quot;通过 第三方工具&quot;">​</a></h3><p>目前还没有第三方工具，这里只是招租位</p><h2 id="安装-1" tabindex="-1">安装 <a class="header-anchor" href="#安装-1" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>找到 QQNT 安装目录，编辑 <code>resources\\app\\app_launcher\\index.js</code> 文件，在最前端插入一行 <code>require(&quot;此处为你 LiteLoaderQQNT 目录路径&quot;);</code></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;E:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">LiteLoaderQQNT&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 此处换成你 LiteLoaderQQNT 目录位置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./launcher.node&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">load</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;external_index&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>路径分隔符建议使用 <code>/</code>（通用）或使用<code>\\\\</code>（仅限 Windows），单独使用 <code>\\</code> 会导致报错</p></div><div class="warning custom-block"><p class="custom-block-title">警告</p><p>请确保 LiteLoaderQQNT 拥有 QQNT 安装目录的读写权限！</p></div><h2 id="修补" tabindex="-1">修补 <a class="header-anchor" href="#修补" aria-label="Permalink to &quot;修补&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">警告</p><p>此条目仅需 Windows 用户查看，其他系统无需继续阅读此条目</p></div><p>由于 Windows 系统平台 QQNT 被添加文件完整性验证，你需要额外步骤来解除限制</p><p>你需要前往 QQNTFileVerifyPatch 仓库 Release 内，下载 QQNTPatcher 文件，以管理员身份运行将弹出文件选择框，进入 QQNT 安装目录选择 QQ.exe 开始修补，等待输出修补完成即可关闭软件</p><h2 id="检查" tabindex="-1">检查 <a class="header-anchor" href="#检查" aria-label="Permalink to &quot;检查&quot;">​</a></h2><p>按照上述教程完成安装后，有两种方法检查 LiteLoaderQQNT 是否成功安装</p><ul><li>运行 QQNT 并打开设置，查看左侧列表是否出现 <code>LiteLoaderQQNT</code> 选项</li><li>使用终端运行 QQNT 查看是否有 LiteLoaderQQNT 相关内容输出显示</li></ul><p>如果有显示，即安装成功，玩的开心！</p>`,24),h=[l];function n(o,d,p,r,c,k){return s(),i("div",null,h)}const g=a(t,[["render",n]]);export{Q as __pageData,g as default};
