# 介绍

::: warning 警告
此文档为 LiteLoaderQQNT 1.2.3 编写
:::

::: warning 警告
目前新版 QQNT 在 Windows 上会检测 LiteLoaderQQNT 所使用的修改方式，而非检测 LiteLoaderQQNT 本体，从而主动下线。（从何版本开始暂不明晰）

需要注意的是：

- 仅仅是关闭几个插件，简单的卸载 LiteLoaderQQNT 本体不会影响相关修改被检测到。
- 目前没有直接的证据可证明使用 LiteLoaderQQNT 会导致账号会被冻结/封锁，但已有相关报告出现，还请谨慎行事。

如果想要缓解被下线的症状：

- 请撤销你的修补行为（如 添加的 dbghelp.dll）。
- 降级（尚不明晰需要降级到何版本或热更新是否同样会波及）。
- ~~停止使用 QQNT 或收购腾讯（或收购腾讯的 QQ 有关部门）。~~
:::

## 这是什么

~~一个名为沫烬染的Furry闲着研究QQNT后决定狠狠的注入福瑞代码开发了此插件框架~~

LiteLoaderQQNT 是 QQNT 的插件加载器，一般在 QQNT 的环境内简称为 LiteLoader  
它可以让你自由地为 QQNT 添加各种插件，并实现例如美化主题、增加功能等各种功能  
支持 QQNT 桌面端 全架构 最低 `25765` 版本到官网最新版本（一般情况是这样的）

个人兴趣而制作，开发目的在于学习和探索，一切开发皆在学习，请勿用于非法用途  
因使用本项目产生的一切问题与后果由使用者自行承担，项目开发者不承担任何责任

## 外部链接

- **Telegram**  
群聊：<https://t.me/LiteLoaderQQNT>  
频道：<https://t.me/LiteLoaderQQNT_Channel>

- **LiteLoaderQQNT**  
框架本体：<https://github.com/LiteLoaderQQNT/LiteLoaderQQNT>  
插件模板：<https://github.com/LiteLoaderQQNT/Plugin-Template>  
插件列表：<https://github.com/LiteLoaderQQNT/Plugin-List>

## 开源协议

```txt
MIT License

Copyright (c) 2023 LiteLoaderQQNT

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
