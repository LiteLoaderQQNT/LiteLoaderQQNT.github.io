import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.4aTu-Nia.js";const o=JSON.parse('{"title":"LiteLoader API","description":"","frontmatter":{},"headers":[],"relativePath":"docs/liteloader-api.md","filePath":"docs/liteloader-api.md","lastUpdated":1712414145000}'),l={name:"docs/liteloader-api.md"},p=n(`<h1 id="liteloader-api" tabindex="-1">LiteLoader API <a class="header-anchor" href="#liteloader-api" aria-label="Permalink to &quot;LiteLoader API&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">警告</p><p>此文档为 LiteLoaderQQNT 1.1.x 编写</p></div><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>一组可在 <code>main</code> <code>renderer</code> <code>preload</code> 环境内使用的常量与方法，仅暴露与 LiteLoaderQQNT 相关内容</p><h2 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-label="Permalink to &quot;用法&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalThis.LiteLoader </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    path: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        root    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 本体目录路径</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        profile </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 存储目录路径（如果指定了 LITELOADERQQNT_PROFILE 环境变量）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        data    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 数据目录路径</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        plugins </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 插件目录路径</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    versions {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        qqnt        </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// QQNT 版本号</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        liteloader  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// LiteLoaderQQNT 版本号</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        node        </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Node.js 版本号</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        chrome      </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Chrome 版本号</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        electron    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Electron 版本号</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    os: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        platform    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 系统平台名称</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    package: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        liteloader  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// LiteLoaderQQNT package.json 文件内容</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        qqnt        </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// QQNT package.json 文件内容</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    plugins: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        slug: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            incompatible    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 插件是否兼容</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            disabled        </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 插件是否禁用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            manifest        </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 插件 manifest.json 文件内容</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            path: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                plugin  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 插件本体根目录路径</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                data    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 插件数据根目录路径</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                injects: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    main        </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 插件主进程脚本文件路径</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    renderer    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 插件渲染进程脚本文件路径</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    preload     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 插件预加载脚本文件路径</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    api: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        openPath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)      </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 打开指定目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        openExternal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">uri</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 打开外部连接</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        config: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(slug, new_config)       </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 设置配置文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(slug, default_config)   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获取配置文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,6),h=[p];function e(t,k,E,r,d,c){return a(),i("div",null,h)}const y=s(l,[["render",e]]);export{o as __pageData,y as default};
