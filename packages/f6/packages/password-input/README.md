---
category: 表单组件
title: PasswordInput
subTitle: 密码输入
---

### 介绍

`PasswordInput` 特定方式输入密码，主要是外观美化。

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| count | 密码长度 | `number` | `6` |
| onChange | - | `[]string` | - |

```tsx
export interface PasswordInputProps {
  className?: string;
  count?: number;
  onChange?: (val: string[]) => void;
}
```