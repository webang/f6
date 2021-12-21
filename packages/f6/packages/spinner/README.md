---
category: 基础组件
title: Spinner
subTitle: 转圈圈
---

### 介绍

Spinner 用于表明应用正在加载内容，或者处理耗时的任务，需要用户等待。

### API

```tsx
// crescent 月牙形
// oval 椭圆形
// lines 线性
export type SpinnerType = "lines" | "crescent" | "oval";

export interface SpinnerProps {
  size?: number | string;
  type?: SpinnerType;
  className?: string;
  style?: CSSProperties;
}
```

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| type | 动画类型 | `SpinnerType` | `crescent` |
| size | 大小 | `number \| string` | - |