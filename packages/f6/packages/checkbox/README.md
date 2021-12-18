---
category: 表单组件
title: Checkbox
subTitle: 复选框
---

### 介绍

`Checkbox` 模拟实现 `HTMLInputElement` `type = checkbox`，美化样式和增强功能。

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| defaultChecked | 默认选中 | boolean | `false` |
| disabled | 禁用状态 | boolean ｜ `false` |
| onChange | 更新事件 | `(checked: boolean) => void` | - |
| icon | 图标 | `ReactNode | ((checked: boolean) => ReactNode)` | 内置 |
| value | 代表的值，配置 group 使用 | `CheckboxValue` | - |

```tsx
export type CheckboxValue = string|number;

export interface CheckboxProps {
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  icon: ReactNode | ((checked: boolean) => ReactNode);
  value?: CheckboxValue;
}
```

### CheckboxGroupProps

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| defaultValue | 默认选中项 | `[]CheckboxValue` | `[]` |
| onChange | 更新事件 | `(val: CheckboxValue[]) => void` | - |

```tsx
export interface CheckboxGroupProps {
  defaultValue?: CheckboxValue[];
  onChange?: (val: CheckboxValue[]) => void;
}
```