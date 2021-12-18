---
category: 操作反馈
title: Overlay
subTitle: 遮罩层
---

### 介绍

Overlay 用于覆盖屏幕全部的元素，用户无法点击被覆盖了的元素。

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| visible | 可见行 | boolean | `false` |
| timeout | 完成动画的时间 | `number` | `200` |
| transitionName | 动画名称 | `string` | `fade` |
| onClick | 点击事件 | `() => void` | - |

```tsx
export interface OverlayProps {
  visible?: boolean;
  timeout?: number;
  transitionName?: string;
  onClick?: () => void;
}
```