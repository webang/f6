---
category: 操作反馈
title: Popover
subTitle: 气泡
---

### 介绍

Popover 已轻微弹窗的方式，呈现在所触发元素的周围，弹窗内容可以是任意的，通常是提示文本或者菜单列表。

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| reference | 触发元素 | boolean | `false` |
| placement | 弹窗位置 | `PlacementType` ｜ - |
| verticalDistance | 垂直距离 | `number` | `8` |
| horizontalDistance | 水平距离 | `number` | `8` |

```tsx
export interface PopoverProps {
  reference: React.ReactElement;
  placement?: PlacementType;
  verticalDistance?: number;
  horizontalDistance?: number;
}

export type PlacementType =
  | "top"
  | "top-start"
  | "top-end"
  | "left"
  | "left-start"
  | "left-end"
  | "right"
  | "right-start"
  | "right-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end";
```