---
category: 基本组件
title: Cell
---

### 介绍

Cell 充当列表中的展示项，常包含标题、图标以及描述。

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| title | 标题 | `ReactNode` | - |
| titleAlign | 标题对其方式 | `top \| left` | - |
| label | 底部描述 | `ReactNode` | - |
| icon | 左侧图标 | `ReactNode` | - |
| value | 最右侧内容 | `ReactNode` | - |
| border | 是否显示底部边框 | `boolean` | `true` |
| onClick |	点击后触发的回调函数 | `React.MouseEventHandler<Element>` | - |

```tsx
export interface CellProps {
  className?: string;
  title: ReactNode;
  titleAlign?: "left" | "top";
  titleClass?: string;
  label?: ReactNode;
  value?: ReactNode;
  icon?: ReactNode;
  bodyStyle?: React.CSSProperties;
  border?: boolean;
  link?: boolean;
  onClick?: React.MouseEventHandler<Element>;
}
```