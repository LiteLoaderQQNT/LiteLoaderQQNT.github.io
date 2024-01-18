import{_ as s,c as i,o as a,V as n}from"./chunks/framework.LLn18gvy.js";const c=JSON.parse('{"title":"LiteLoader API","description":"","frontmatter":{},"headers":[],"relativePath":"docs/LiteLoader-API.md","filePath":"docs/LiteLoader-API.md","lastUpdated":1705604125000}'),t={name:"docs/LiteLoader-API.md"},e=n(`<h1 id="liteloader-api" tabindex="-1">LiteLoader API <a class="header-anchor" href="#liteloader-api" aria-label="Permalink to &quot;LiteLoader API&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">警告</p><p>此文档为 LiteLoaderQQNT 1.0.0 编写</p></div><h2 id="liteloader" tabindex="-1">LiteLoader <a class="header-anchor" href="#liteloader" aria-label="Permalink to &quot;LiteLoader&quot;">​</a></h2><p>一组可在 main | renderer | preload 环境内使用的常量与方法</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LiteLoader.path.root    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 本体根目录路径</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LiteLoader.path.data    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 数据根目录路径</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LiteLoader.path.plugins </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 插件根目录路径</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LiteLoader.versions.qqnt        </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// QQNT 版本号</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LiteLoader.versions.liteloader  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// LiteLoaderQQNT 版本号</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LiteLoader.versions.node        </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Node.js 版本号</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LiteLoader.versions.chrome      </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Chrome 版本号</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LiteLoader.versions.electron    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Electron 版本号</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LiteLoader.os.platform  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 系统平台名称</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LiteLoader.package.liteloader   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// LiteLoaderQQNT package.json 文件内容</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LiteLoader.package.qqnt         </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// QQNT package.json 文件内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LiteLoader.config.LiteLoader.disabled_plugins   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 已禁用插件的列表</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LiteLoader.plugins[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;slug&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].manifest                 </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 插件 manifest.json 文件内容</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LiteLoader.plugins[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;slug&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].incompatible             </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 插件是否兼容</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LiteLoader.plugins[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;slug&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].disabled                 </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 插件是否禁用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LiteLoader.plugins[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;slug&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].path.plugin              </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 插件本体根目录路径</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LiteLoader.plugins[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;slug&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].path.data                </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 插件数据根目录路径</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LiteLoader.plugins[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;slug&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].path.injects.main        </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 插件主进程脚本文件路径</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LiteLoader.plugins[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;slug&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].path.injects.renderer    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 插件渲染进程脚本文件路径</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LiteLoader.plugins[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;slug&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].path.injects.preload     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 插件预加载脚本文件路径</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LiteLoader.api.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">openExternal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(uri)                </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 打开外部连接</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LiteLoader.api.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">disablePlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(slug)              </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 禁用指定插件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LiteLoader.api.config.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(slug, new_config)     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 设置配置文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LiteLoader.api.config.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(slug, default_config) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获取配置文件</span></span></code></pre></div>`,5),l=[e];function p(h,k,r,d,E,o){return a(),i("div",null,l)}const y=s(t,[["render",p]]);export{c as __pageData,y as default};
