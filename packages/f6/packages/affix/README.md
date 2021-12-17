---
category: 布局组件
title: Affix
---

### 介绍

Affix 与 `position: sticky` 实现的效果一致，当组件在容器范围内时，会按照正常的布局排列，当组件滚出容器范围时，始终会固定在容器的指定位置。

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| top | 距离顶部距离 | number | `0` |
| container | 相对偏移的容器 | `(() => HTMLElement) \| Window` | `window` |
| wrapperStyle | 容器样式 | `(params: { fixed: boolean }) => React.CSSProperties` | - |

```tsx
export interface AffixProps {
  top?: number;
  container?: (() => HTMLElement) | Window;
  wrapperStyle?: (params: { fixed: boolean }) => React.CSSProperties;
}
```