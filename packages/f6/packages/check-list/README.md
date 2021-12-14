---
category: 表单组件
title: CheckList
subTitle: 选择清单
---

### CheckListProps

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| value | 当前值 |  `string[]` | `[]` |
| defaultValue | 默认值 |  `string[]` | `[]` |
| multiple | 是否多选 | `boolean` | `true` |
| onChange | 监听变化 | `(value: string[]) => void` | - |

```ts
export interface CheckListProps {
  value?: string[];
  defaultValue?: string[];
  multiple?: boolean;
  activeIcon?: ReactNode;
  onChange?: (value: string[]) => void;
}
```

### CheckListItemProps

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| value | 代表值 |  `string` | `[]` |
| disabled | 禁选状态 |  `boolean` | `false` |
| onClick | 点击事件 | `() => void` | - |

```tsx
export interface CheckListItemProps {
  value: string;
  disabled?: boolean;
  onClick?: () => void;
}
```