---
category: 操作反馈
title: Popup
subTitle: 弹出层
---

### 介绍

`Popup` 常用于从四周弹出弹窗。

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| visible | 可见性 | boolean | `false` |
| position | 弹出位置 | `Direction` | `bottom` |
| animationDuration | 动画消耗时间 | `number` | `300` |
| onMaskClick | 幕布点击事件 | `() => void` | - |

```tsx
export interface PopupProps {
  visible?: boolean;
  position?: Direction;
  animationDuration?: number;
  onMaskClick: () => void;
  style?: CSSProperties;
  className?: string;
}

export type Direction = "top" | "bottom" | "left" | "right" | "middle";
```