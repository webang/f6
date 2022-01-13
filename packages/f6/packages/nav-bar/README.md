---
category: 展示组件
title: Message
subTitle: 提示
---

### 介绍 

页面导航组件，常用于页面顶部。

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| left | 左侧内容 | `ReactNode` | - |
| right | 右侧内容 | `ReactNode` | - |
| backText | 返回文字 | `ReactNode` | - |
| backArrow | 显示返回按钮 | `boolean` | - |
| onBack | 返回事件 | `() => void` | - |

```tsx
export interface NavBarProps {
  left?: ReactNode;
  right?: ReactNode;
  backText?: ReactNode;
  backArrow?: boolean | ReactNode;
  children?: ReactNode;
  onBack?: () => void;
}
```