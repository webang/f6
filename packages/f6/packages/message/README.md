---
category: 展示组件
title: Message
subTitle: 提示
---

### 介绍 

`Message` 常用于显著的展示一段提示。

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| type | 类型 | 见下 | `primary` |
| icon | 图标 | `ReactNode` | - |
| link | 展示箭头 | `boolean` | `false` |
| onClick | 点击事件 | `() => void` | - |

```tsx
export interface MessageProps {
  type?: 'primary' |  'success' | 'warning' | 'danger';
  icon?: ReactNode;
  link?: boolean;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}
```