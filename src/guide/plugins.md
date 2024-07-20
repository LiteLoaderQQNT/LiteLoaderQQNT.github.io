# 插件

::: warning 警告
此文档为 LiteLoaderQQNT 1.1.x 编写
:::



## 安装

### 手动安装

::: warning 警告
LiteloaderQQNT 插件的存放路径并不是位于你在安装 LiteloaderQQNT 时解压或 Clone 至的任意位置，那里没有`plugins`这一文件夹，也并不需要额外创建，因为那样是无效的

具体要查看你的 LiteloaderQQNT 插件存放路径

- 打开QQ，确认LiteloaderQQNT已安装，如果已安装，点击`左下角三条杠`，再点击`设置`，接着点击左侧`LiteloaderQQNT`选项，在`目录`一栏中找到`数据目录位置`，点击右侧的`进入目录`，在弹出的文件资源管理器中找到`plugins`文件夹
:::

如果你有现成的插件，请先确保是与 LiteLoaderQQNT 兼容的，并且拥有对应依赖插件

将插件目录移动到 `LiteLoaderQQNT/plugins` 文件夹内，如果插件是压缩包请先解压

- `plugins` - LiteLoaderQQNT 插件目录
  - `xxx` - 你安装的插件根目录
    - `manifest.json` - 插件的清单文件
    - ...

### 自动安装

可以先手动安装第三方插件市场类插件，在其中安装插件



## 卸载

目前并没有提供卸载插件的快捷操作，或使用第三方插件，一些插件市场类插件会提供插件卸载功能  
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

有一些第三方插件市场，手动安装后可列出大量插件



## 开发

详见开发文档
