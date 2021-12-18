---
category: 展示组件
title: Flow
subTitle: 步骤条
---

### 介绍

`Flow` 步骤条，常用于流程化展示处理进度。

### FlowProps

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| current | 当前步骤索引 | number | `0` |
| direction | 排列方向 | `horizontal \| vertical` | `horizontal` |
| finishIcon | 已完成图标 | ReactNode | - |
| processIcon | 处理中图标 | ReactNode | - |
| waitingIcon | 等待中图标 ｜ ReactNode | - |

```tsx
export interface FlowContext {
  current: number;
  direction: 'horizontal' | 'vertical';
  finishIcon: ReactNode;
  processIcon: ReactNode;
  waitingIcon: ReactNode;
}

export interface FlowProps extends FlowContext {}
```

### FlowItemProps

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| index | 索引 | number | - |
| title | 标题 | ReactNode | - |
| description | 描述 | ReactNode | - |

```tsx
export interface FlowItemProps {
  index: number;
  title: ReactNode;
  description: ReactNode;
}
```