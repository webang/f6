---
category: 展示组件
title: Marquee
subTitle: 滚动
---

### 介绍

`Marquee` 常用于多个消息的滚动展示。

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| interval | 轮播间隔时间 | `number` | `2000` |
| duration | 一次滚动消耗的时间 | `number` | `250` |
| itemHeight | 滚动项的高度 | `number` | `30` |

```tsx
export interface MarqueeProps {
  interval?: number;
  duration?: number;
  itemHeight?: number;
}
```