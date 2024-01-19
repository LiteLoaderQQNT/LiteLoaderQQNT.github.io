# Web Components

::: warning 警告
此文档为 LiteLoaderQQNT 1.0.0 编写
:::



## 介绍

LiteLoaderQQNT 使用 Web Components 封装了 QQNT 设置界面的一些组件，使你能够简单且快速的构建 QQNT 原生样式的插件配置界面

自定义标签全部由 `setting-` 开头，自定义属性全部由 `data-` `is-` 开头并且是响应式，以下是已封装实现的组件标签以及属性

|                 | data-title | data-value | data-type | data-direction |
|:---------------:|:----------:|:----------:|:---------:|:--------------:|
| setting-section |     √      |            |           |                |
|  setting-panel  |            |            |           |                |
|  setting-list   |     √      |            |           |       √        |
|  setting-item   |            |            |           |       √        |
| setting-select  |            |            |           |                |
| setting-option  |            |     √      |           |                |
| setting-switch  |            |            |           |                |
| setting-button  |            |            |     √     |                |
|  setting-text   |            |            |     √     |                |
| setting-divider |            |            |           |       √        |

|                 | is-collapsible | is-selected | is-active | is-disabled |
|:---------------:|:--------------:|:-----------:|:---------:|:-----------:|
| setting-section |                |             |           |             |
|  setting-panel  |                |             |           |             |
|  setting-list   |       √        |             |           |             |
|  setting-item   |                |             |           |             |
| setting-select  |                |             |           |             |
| setting-option  |                |      √      |           |             |
| setting-switch  |                |             |     √     |             |
| setting-button  |                |             |           |      √      |
|  setting-text   |                |             |           |             |
| setting-divider |                |             |           |             |


## 用法

### setting-section

每一节的设置

- `data-title` - 标题

``` html
<setting-section data-title="标题1">...</setting-section>
<setting-section data-title="标题2">...</setting-section>
<setting-section data-title="标题3">...</setting-section>
```

### setting-panel

选项容器

``` html
<setting-section data-title="标题">
    <setting-panel>...</setting-panel>
    <setting-panel>...</setting-panel>
    <setting-panel>...</setting-panel>
</setting-section>
```

### setting-list

选项列表

- `data-direction` - 排列方向
  - `column` - 纵向
  - `row` - 横向
- `is-collapsible` - 是否为可折叠列表
  - `data-title` - 标题
  - `data-direction` - 排列方向
    - `column` - 纵向

``` html
<setting-section data-title="标题">
    <setting-panel>
        <setting-list data-direction="column">...</setting-list>
        <setting-list data-direction="row">...</setting-list>
        <setting-list data-direction="column" is-collapsible data-title="折叠列表">...</setting-list>
    </setting-panel>
</setting-section>
```

### setting-item

::: tip 提示
一般无需给此组件添加属性，因为 `setting-list` 会根据自身属性来自动设置此组件的属性
:::

选项条目

- `data-direction` - 排列方向
  - `column` - 纵向
  - `row` - 横向

``` html
<setting-section data-title="标题">
    <setting-panel>
        <setting-list data-direction="column">
            <setting-item data-direction="row">...</setting-item>
        </setting-list>
        <setting-list data-direction="row">
            <setting-item data-direction="column">...</setting-item>
        </setting-list>
    </setting-panel>
</setting-section>
```

### setting-select

下拉选择框

``` html
<setting-section data-title="标题">
    <setting-panel>
        <setting-list data-direction="column">
            <setting-item>
                <setting-select>...</setting-select>
            </setting-item>
        </setting-list>
    </setting-panel>
</setting-section>
```

### setting-option

选择框选项

- `data-value` - 数据值
- `is-selected` - 是否为已选择

``` html
<setting-section data-title="标题">
    <setting-panel>
        <setting-list data-direction="column">
            <setting-item>
                <setting-select>
                    <setting-option data-value="1" is-selected>...</setting-option>
                    <setting-option data-value="2">...</setting-option>
                    <setting-option data-value="3">...</setting-option>
                </setting-select>
            </setting-item>
        </setting-list>
    </setting-panel>
</setting-section>
```

### setting-switch

开关按钮

- `is-active` - 是否为激活

``` html
<setting-section data-title="标题">
    <setting-panel>
        <setting-list data-direction="column">
            <setting-item>
                <setting-switch>...</setting-switch>
            </setting-item>
            <setting-item>
                <setting-switch is-active>...</setting-switch>
            </setting-item>
        </setting-list>
    </setting-panel>
</setting-section>
```

### setting-button

普通按钮

- `data-type` - 类型
  - `primary` - 主要
  - `secondary` - 次要
- `is-disabled` - 是否为禁用

``` html
<setting-section data-title="标题">
    <setting-panel>
        <setting-list data-direction="column">
            <setting-item>
                <setting-button data-type="primary">...</setting-button>
            </setting-item>
            <setting-item>
                <setting-button data-type="secondary">...</setting-button>
            </setting-item>
            <setting-item>
                <setting-button data-type="primary" is-disabled>...</setting-button>
            </setting-item>
            <setting-item>
                <setting-button data-type="secondary" is-disabled>...</setting-button>
            </setting-item>
        </setting-list>
    </setting-panel>
</setting-section>
```

### setting-text

文本

- `data-type` - 类型
  - `secondary` - 次要

``` html
<setting-section data-title="标题">
    <setting-panel>
        <setting-list data-direction="column">
            <setting-item>
                <div>
                    <setting-text>...</setting-text>
                    <setting-text data-type="secondary">...</setting-text>
                </div>
            </setting-item>
        </setting-list>
    </setting-panel>
</setting-section>
```

### setting-divider

::: tip 提示
一般无需使用此组件，因为 `setting-list` 会给每个 `setting-item` 之间添加此组件
:::

分割线

- `data-orientation` - 方向
  - `horizontal` - 水平
  - `vertical` - 垂直

``` html
<setting-section data-title="标题">
    <setting-panel>
        <setting-list data-direction="column">
            <setting-item>...</setting-item>
            <data-orientation data-orientation="horizontal"></data-orientation>
            <setting-item>...</setting-item>
        </setting-list>
        <setting-list data-direction="row">
            <setting-item>...</setting-item>
            <data-orientation data-orientation="vertical"></data-orientation>
            <setting-item>...</setting-item>
        </setting-list>
    </setting-panel>
</setting-section>
```
