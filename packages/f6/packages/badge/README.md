---
category: 展示组件
title: Badge
subTitle: 徽标
---

### 介绍

在右上角展示徽标数字或小红点。

### API

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| content | 徽标内容，传 Badge.dot，会显示小红点 | `React.ReactNode` \| `symbol` | - |
| color | 颜色 | string | `#FF411C` |

```ts
export type BadgeProps = {
  content?: React.ReactNode | symbol;
  color?: string;
  className?: string;
};
```