---
category: 基础组件
title: Button
---

### 介绍

Button 用于点击触发一个操作，它可以包含文本、图片等资源。

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| color | 按钮颜色，可选值为：`primary` `info` `success` `warning` `danger` | string | `default` |
| size | 按钮大小，可选值为：`large` `middle` `small` `mini` | string | `middle` |
| square | 按钮形状，可选值为：`square` `round` | string | `square` |
| block | 是否块级按钮 | boolean | `false` |
| fill | 填充模式 | `solid` \| `outline` \| `none` | `solid` |
| loading | 是否加载状态 | boolean | `false` |
| disabled | 是否禁用状态 | boolean | `false` |
| title | 按钮文字 | ReactNode | - |
| onClick |	非必需，点击后触发的回调函数 | `React.MouseEventHandler<Element>` | - |


```tsx
export type ButtonColor = "primary" | "info" | "success" | "warning" | "danger";
export type ButtonSize = "large" | "small" | "mini" | "middle";
export type ButtonShape = 'round' | 'square' | 'default';
export type ButtonFill = 'solid' | 'outline' | 'none';

interface BaseButtonProps {
  className?: string;
  title?: ReactNode; // 按钮内容
  shape?: ButtonShape; // 按钮形状
  color?: ButtonColor; // 按钮颜色
  size?: ButtonSize; // 尺寸
  fill?: ButtonFill; // 填充模式
  block?: boolean; // 是否为块级元素
  loading?: boolean;
  disabled?: boolean;
}

type NativeButtonProps =
  BaseButtonProps &
  ButtonHTMLAttributes<HTMLElement>;

export type ButtonProps = BaseButtonProps & NativeButtonProps;
```