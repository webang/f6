---
category: 布局组件
title: Affix
subTitle: 固钉
---

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