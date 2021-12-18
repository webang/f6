---
category: 表单组件
title: NumberKeyboard
subTitle: 数字键盘
---

### 介绍

`NumberKeyboard` 虚拟数字键盘，比设备键盘更有安全性，样式可扩展。

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| visible | 可见行 | boolean | `false` |
| onInput | 输入事件 | `(type: NumberKeyboardInputType, value?: number) => void` | - |

```tsx
export interface NumberKeyboardProps {
  visible?: boolean;
  onInput?: (type: string, value?: number) => void;
}

export type NumberKeyboardInputType = 'input' | 'delete' | 'close';
```