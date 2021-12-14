---
category: 基础组件
title: Button
subTitle: 按钮
---

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| type | 按钮类型，可选值为：`primary` `info` `success` `warning` `danger` | string | `default` |
| size | 按钮大小，可选值为：`large` `middle` `small` `mini` | string | `middle` |
| square | 按钮形状，可选值为：`square` `round` | string | `square` |
| block | 是否块级按钮 | boolean | `false` |
| plain | 是否朴素按钮 | boolean | `false` |
| loading | 是否加载状态 | boolean | `false` |
| disabled | 是否禁用状态 | boolean | `false` |
| title | 按钮文字 | ReactNode | - |
| onClick |	非必需，点击后触发的回调函数 | `React.MouseEventHandler<Element>` | - |

```tsx
export type ButtonType = "primary" | "info" | "success" | "warning" | "danger" | "text";
export type ButtonSize = "large" | "small" | "mini" | "middle";
export type ButtonShape = 'round' | 'square';

interface BaseButtonProps {
  className?: string;
  title?: ReactNode; // 内容
  shape?: ButtonShape; // 形状
  type?: ButtonType; // 类型
  size?: ButtonSize; // 尺寸
  text?: string; // 按钮文字
  color?: string; // 按钮颜色
  block?: boolean; // 是否为块级元素
  plain?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

type NativeButtonProps =
  BaseButtonProps &
  ButtonHTMLAttributes<HTMLElement>;

export type ButtonProps = BaseButtonProps & NativeButtonProps;
```