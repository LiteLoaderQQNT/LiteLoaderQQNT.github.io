# Web Components

::: warning 警告
此文档为 LiteLoaderQQNT 1.0.0 编写
:::



## 介绍

LiteLoaderQQNT 使用 Web Components 封装了 QQNT 设置界面的一些组件，使你能够简单且快速的构建 QQNT 原生样式的插件配置界面

自定义标签全部由 `setting-` 开头，自定义属性全部由 `data-` `is-` 开头并且是响应式，以下是已封装实现的组件标签以及属性

- `setting-section` - 每一节的设置
  - `data-title` - 标题
- `setting-panel` - 选项容器
- `setting-list` - 选项列表
  - `data-direction` - 排列方向
    - `column` - 纵向
    - `row` - 横向
  - `is-collapsible` - 是否为可折叠列表
    - `data-title` - 标题
- `setting-item` - 选项条目
  - `data-direction` - 排列方向
    - `column` - 纵向
    - `row` - 横向
- `setting-select` - 下拉选择框
- `setting-option` - 选择框选项
  - `data-value` - 数据值
  - `is-selected` - 是否为已选择
- `setting-switch` - 开关按钮
  - `is-active` - 是否为激活
- `setting-button` - 普通按钮
  - `data-type` - 类型
    - `primary` - 主要
    - `secondary` - 次要
  - `is-disabled` - 是否为禁用
- `setting-text` - 文本
  - `data-type` - 类型
    - `secondary` - 次要
- `setting-divider` - 分割线
  - `data-orientation` - 方向
    - `horizontal` - 水平
    - `vertical` - 垂直



## 用法
