---
category: 操作反馈
title: PullRefresh
subTitle: 下拉刷新
---

### 介绍

`PullRefresh` 用于下拉触发刷新。

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| topPullDistance | 触发刷新时距离顶部的距离 | `number` | `40` |
| topMaxPullDistance | 最大下来距离 | `number` | `60` |
| loadingText | 加载提示 | `string` | `加载中` |
| pullText | 下拉提示 | `string` | `下拉刷新` |
| looseText | 可以刷新提示 | `string` | ReactNode |
| onLoad | 刷新回调 | `() => void` | - |

```tsx
export interface PullRefreshProps {
  topPullDistance?: number;
  topMaxPullDistance?: number;
  loadingText?: string;
  pullText?: string;
  looseText?: string;
  onLoad?: () => void;
}
```

### Refs

| 属性 | 说明 | 签名 |
| :-  | :- | :- |
| finish | 结束刷新 | `() => void` |
| refresh | 触发刷新 | `() => void` |

```tsx
export interface PullRefreshRef {
  finish: () => void;
  refresh: () => void;
}
```