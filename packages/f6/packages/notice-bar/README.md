---
category: 展示组件
title: NoticeBar
subTitle: 通知栏
---

### 介绍

`NoticeBar` 常用于滚动的展示一段长文本。

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| text | 内容 | ReactNode | - |
| step | 每帧进度大小 | `number` | `2` |
| start | 初始偏移距离 | `number` | `100` |

```tsx
export interface NoticeBarProps {
  text?: ReactNode;
  step?: number;
  start?: number;
}
```