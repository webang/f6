---
category: Components
title: Space
subTitle: 组件
---

### 介绍

`Space` 用于设置多个组件之间的间距。

### API

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| direction | 布局方向 | `vertical` \| `horizontal` | `horizontal` |
| wrap | 是否换行 | boolean | `true` |

```tsx
export interface SpaceProps {
  direction?: 'vertical' | 'horizontal',
  wrap?: boolean;
}
```