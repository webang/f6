---
category: 操作反馈
title: Popover
subTitle: 气泡
---

### 介绍

Popover 已轻微弹窗的方式，呈现在所触发元素的周围，弹窗内容可以是任意的，通常是提示文本或者菜单列表。

### API

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| reference | 触发元素 | `React.ReactElement` | `false` |
| placement | 弹窗位置 | `PlacementType` | - |
| verticalDistance | 垂直距离 | `number` | `8` |
| horizontalDistance | 水平距离 | `number` | `8` |
| trigger | 触发方式（目前只有`click`） | `click` | `click` |
| visible | 可见性(受控) | `boolean` | - |
| defaultVisible | 默认可见性 | `boolean` | `false` |
| onVisibleChange | 可见性变化，受控状态有用 | `(visible: boolean) => void` | - |

```tsx
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

export interface PopoverProps {
  reference: React.ReactElement;
  placement?: PlacementType;
  verticalDistance?: number;
  horizontalDistance?: number;
  trigger?: "click";
  visible?: boolean;
  defaultVisible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
}
```