---
category: 表单组件
title: Field
---

### 介绍

Field 基于 `html input` 包装了一层，用于自定义一些功能以及样式美化。

### FieldProps

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| title | 标题 | `ReactNode` | - |
| titlePosition | 标题位置 | `FieldTitlePosition` | - |
| type | 输入框类型 | `string \| number \| textarea` | `text` |
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


```tsx
export interface FieldProps {
  title?: ReactNode;
  titlePosition: FieldTitlePosition;
  type?: FieldType;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  readOnly?: boolean;
  clearable?: boolean;
  placeholder?: string;
  rules?: FieldRule[];
  validateOnBlur?: boolean;
  validateOnChange?: boolean;
  immediateCheck?: boolean;
  resetErrorOnClear?: boolean;
  onChange?: (value?: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export type FieldType = "text" | "number" | "password";
export type FieldTitlePosition = 'top' | 'left';
export interface FieldRule {
  test: (val: string) => boolean;   // 校验规则
  message: ReactNode;               // 当 test 返回 true，用于展示的错误提示信息
}
```