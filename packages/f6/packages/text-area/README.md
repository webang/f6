---
category: 表单组件
title: Input
---

### 介绍

`TextArea` 文本域输入。

### FieldProps

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| value | 当前值 | string | - |
| defaultValue | 默认值 | string | `''` |
| disabled | 是否禁用 | `boolean` | `false` |
| readOnly | 是否只读 | `boolean` | `false` |
| clearable | 展示清除按钮 | `boolean` | `true` |
| placeholder | 提示 | `string` | `true` |
| rules | 校验规则列表 | FieldRule[] | `[]` |
| validateOnBlur | blur时校验 | `boolean` | `true` |
| validateOnChange | change时校验 | `boolean` | `true` |
| immediateCheck | 首次挂载是否检验 | `boolean` | `false` |
| resetErrorOnClear | 当清空时，清除错误提示 | `boolean` | `true` |
| onChange | 变化事件 | `(value?: string) => void` | - |
| onFocus | 聚焦事件 | `() => void` | - |
| onBlur | 失焦事件 | `() => void` | - |
| showCount | 是否显示计数器 | `boolean` | `true` |
| autoSize | 是否自适应高度 | `boolean` | `false` |

```tsx
export interface FieldRule {
  test: (val: string) => boolean;
  message: string;
}

export interface TextAreaProps {
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  readOnly?: boolean;
  clearable?: boolean;
  placeholder?: string;
  rules?: FieldRule[];
  immediateCheck?: boolean;
  resetErrorOnClear?: boolean;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
  onChange?: (value?: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  showCount?: boolean;
  autoSize?: { minRows: number; maxRows: number } | boolean;
}
```