---
category: Components
title: Space
subTitle: 组件
---

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| direction | 布局方向 | `vertical` \| `horzontal` | `horzontal` |
| wrap | 是否换行 | boolean | `true` |
| align | 副轴对其方式 | - | `start` |
| justify | 主轴对其方式 | - | `start` |

```tsx
export interface SpaceProps {
  direction?: 'vertical' | 'horizontal',
  align?: 'start' | 'end' | 'center' | 'baseline';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around';
  wrap?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
```