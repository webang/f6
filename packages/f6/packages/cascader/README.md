---
category: 表单组件
title: Cascader
---

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| options | 树形选项 | `CascaderViewOption[]` | `[]` |
| visible | 可见性 | `boolean` | `false` |
| defaultValue | 默认值，如果不匹配，则无效 | `string[]` | `[]` |
| onClose | 关闭事件 | `() => void` | - |
| onConfirm | 确认事件 | `(val: CascaderViewOption[]) => voi` | - |

```tsx
export interface CascaderProps {
  options: CascaderViewOption[]; // 选项列表
  visible: boolean; // 可见性
  defaultValue?: string[]; // 初始值
  onClose?: () => void; // 关闭事件
  onConfirm?: (val: CascaderViewOption[]) => void; // 确认事件
}

export interface CascaderViewOption {
  label: string;
  value: string;
  children?: CascaderViewOption[];
}
```