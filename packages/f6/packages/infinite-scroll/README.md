---
category: Components
title: InfiniteScroll
subTitle: 组件
---

### 介绍

`InfiniteScroll` 无限滚动，常用于加载远程数据。

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| loading | 是否加载中 | `boolean` | `false` |
| disabled | 是否允许滚动触发事件 | `boolean` | `true` |
| onLoad | 滚动到底部后回调 | `(finish?: () => void) => void` | - |
| footer | 底部提示 | `(params: { loading: boolean; disabled: boolean }) => ReactNode` | - |

```tsx
export interface InfiniteScrollProps {
  disabled?: boolean;
  loading?: boolean;
  onLoad?: (finish?: () => void) => void;
  footer?: (params: { loading: boolean; disabled: boolean }) => ReactNode;
}

export interface InfiniteScrollMethods {
  finish: () => void;
}
```