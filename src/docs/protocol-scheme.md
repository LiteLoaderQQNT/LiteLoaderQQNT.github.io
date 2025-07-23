# 自定义协议方案

::: warning 警告
此文档为 LiteLoaderQQNT 1.2.4 编写  
目前版本暂时仅支持 Windows 64 位，需搭配频道内未公开的 dbghelp.dll 方可使用
:::

## 介绍

一些自定义的 URL 协议方案，方便插件开发

## 用法

### local

`file` 协议的代替方案，读取本地文件，使用绝对路径  
`host` 可填写 `root` `profile` 到目录下拼接路径
