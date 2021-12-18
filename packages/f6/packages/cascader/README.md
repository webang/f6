---
category: 表单组件
title: Cascader
subTitle: 联动选择
---

### 介绍

`Cascader` 无限联动选择器，它的实现依赖 `Popup`。

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| options | 树形选项 | `CascaderViewOption[]` | `[]` |
| visible | 可见性 | `boolean` | `false` |
| defaultValue | 默认值，value数组，如果不匹配，则无效 | `string[]` | `[]` |
| onConfirm | 确认事件 | `(val: CascaderViewOption[]) => void` | - |
| onClose | 关闭事件 | `() => void` | - |

```tsx
export interface CascaderProps {
  options: CascaderViewOption[];
  visible?: boolean;
  defaultValue?: string[];
  onClose?: () => void;
  onConfirm?: (val: CascaderViewOption[]) => void;
}

export interface CascaderViewOption {
  label: string;
  value: string;
  children?: CascaderViewOption[];
}
```