# 插件

::: warning 警告
此文档为 LiteLoaderQQNT 1.2.x 编写
:::



## 安装

### 手动安装

如果你有现成的插件，请先确保是与 LiteLoaderQQNT 兼容的，并且拥有对应依赖插件

将插件目录移动到 `LiteLoaderQQNT/plugins` 文件夹内，如果插件是压缩包请先解压

- `plugins` - LiteLoaderQQNT 插件目录
  - `xxx` - 你安装的插件根目录
    - `manifest.json` - 插件的清单文件
    - ...

### 自动安装

可以先手动安装社区内开发的插件市场类插件，在其中安装插件



## 卸载

目前并没有提供卸载插件的快捷操作，或使用社区内开发的插件，一些插件市场类插件会提供插件卸载功能  
在 `plugins` 目录中删除对应插件目录。若不想保留插件数据，可根据插件 `manifest.json` 内 `slug` 字段在 `data` 目录下删除对应目录



## 寻找

### 插件列表

官方维护着一份插件列表，收录了已知的大部分插件，可在官网首页中查看详情

### 通过搜索

LiteLoaderQQNT 的插件基本发布在 GitHub，善用搜索可以快速的找到所需插件

比如在搜索框键入关键词`LiteLoader`和`插件`，即可找到大量[LiteLoaderQQNT生态的插件](https://github.com/search?q=LiteLoader+%E6%8F%92%E4%BB%B6&type=repositories)

### 官网首页

LiteLoaderQQNt 官网下面已列出全部已收录插件，点击卡片即可跳转至对应仓库

### 插件市场

有一些社区内开发的插件市场，手动安装后可列出大量插件



## 开发

详见开发文档
