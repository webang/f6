---
category: 展示组件
title: Swipe
subTitle: 轮播
---

### 介绍

`Swipe` 轮播组件。

### API

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| direction | 轮播方向 | `vertical` \| `horzontal` | `horzontal` |
| loop | 循环模式 | `boolean` | `true` |
| autoplay | 自动抡博 | `boolean` | `true` |
| activeIndex | 当前索引 | `number` | `0` |
| delay | 轮播间歇(ms) | `number` | `1000` |
| effect | 轮播滑动效果 | `slide` `scale` | `slide` |
| spaceBetween | 间距 | `number` | `0` |
| width | 宽度 | `string number` | - |
| height | 高度 | `string number` | - |
| onIndexChange | 激活索引变化事件 | `(index: number) => void` | - |

```tsx
export interface SwipeProps {
  direction?: "horizontal" | "vertical";
  loop?: boolean;
  duration?: number;
  activeIndex?: number;
  autoplay?: number;
  delay?: number;
  effect?: "slide" | "scale";
  spaceBetween?: number;
  width?: number;
  height?: number;
  onIndexChange?: (index: number) => void;
}
```