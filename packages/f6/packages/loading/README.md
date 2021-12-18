---
category: 基础组件
title: Loading
subTitle: 加载
---

### 介绍

Loading 用于展示加载状态，包括加载动画和描述，它基于 spinner。

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| spinnerType | spinner 类型 | `lines \| oval \| crescent` | `crescent` |
| spinnerSize | spinner 大小 | `string \| number` | `24` |
| vertical | 是否垂直排列 | `boolean` | `false` |
| message | 文字 | `ReactNode` | `Loading` |

```tsx
export interface LoadingProps {
  spinnerType?: SpinnerType;
  spinnerSize?: string|number;
  className?: string;
  style?: React.CSSProperties;
  vertical?: boolean;
  message?: ReactNode;
}
```