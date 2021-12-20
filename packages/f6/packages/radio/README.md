---
category: Components
title: Radio
subTitle: 组件
---

### 介绍

`Radio` 单选框。

> 只有手动点击，才会出发 onChange 事件

### Radio

```tsx
export type RadioValue = string|number;

export interface RadioProps {
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  value?: RadioValue;
  onChange: (checked: boolean) => void;
  icon: (checked: boolean) => ReactNode;
  block?: boolean;
}
```

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| defaultChecked | 默认选状态中 | `boolean` | `false` |
| checked | 当前是否选中 | `boolean` | `false` |
| disabled | 禁用状态 | `boolean` | `false` |
| value | 在 group 中的标识 | `RadioValue` | - |
| onChange | change callback | `(checked: boolean) => void` | - |
| icon | 图标 | `icon: (checked: boolean) => ReactNode` | - |
| block | block element | `boolean` | `false` | 

### Radio.Group

```tsx
export interface RadioGroupProps {
  defaultValue?: RadioValue|null;
  value?: RadioValue|null;
  disabled?: boolean;
  onChange?: (val: RadioValue|null) => void;
}
```

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| defaultValue | 默认值 | `RadioValue` | `false` |
| value | 当前值 | `RadioValue` | `false` |
| disabled | 禁用状态 | `boolean` | `false` |
| onChange | change callback | `(value: RadioValue) => void` | - |