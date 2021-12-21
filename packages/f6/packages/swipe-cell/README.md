---
category: 操作反馈
title: SwipeCell
subTitle: 滑动操作
---

### 介绍

`SwipeCell` 滑动操作。

### API

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| right | 右侧插槽 | `React.ReactNode` | - |
| left | 左侧插槽 | `React.ReactNode` | - |

```tsx
export interface SwipeCellProps {
  className?: string;
  right?: React.ReactNode;
  left?: React.ReactNode;
}
```