---
category: Components
title: Cell
subTitle: 单元格
---

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| title | 标题 | ReactNode | - |
| label | 描述 | ReactNode | - |
| value | 最右侧内容 | ReactNode | - |
| icon | 展示在最左侧的图标 | ReactNode ｜ - ｜
| border | 是否显示底部边框 | boolean | `true` |
| url | 点击跳转的地址 | string | - |

### API

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| onClick |	非必需，点击后触发的回调函数 | `React.MouseEventHandler<Element>` | - |