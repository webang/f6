---
category: 操作反馈
title: BackTop
---

### 介绍

点击 `BackTop` 能快速的回到页面顶部，只有当页面的滚动距离大于阈值时才会出现。

### API

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| distance | 滚动距离阈值，超出这个值显示按钮 | number | `10` |

```ts
export interface BackTopProps {
  distance?: number;
}
```