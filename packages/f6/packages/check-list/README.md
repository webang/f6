---
category: 表单组件
title: CheckList
subTitle: 选择清单
---

### 介绍

`CheckList` 选择清单，可以设置单选或者复选。

### CheckListProps

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| value | 当前值 |  `string[]` | `[]` |
| defaultValue | 默认值 |  `string[]` | `[]` |
| multiple | 是否多选 | `boolean` | `true` |
| onChange | 监听变化 | `(value: string[]) => void` | - |
| renderIcon | 图标 | `(checked: boolean) => ReactNode` | - |
| labelPosition | 标题位置 | `left \| right` |  `left` |

```ts
export interface CheckListProps {
  value?: string[];
  defaultValue?: string[];
  multiple?: boolean;
  renderIcon?: (checked: boolean) => ReactNode;
  onChange?: (value: string[]) => void;
  labelPosition?: 'left' | 'right'
}

const defaultProps = {
  multiple: false,
  defaultValue: [],
  labelPosition: 'left' as 'left' | 'right'
}
```

### CheckListItemProps

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| value | 代表值 |  `string` | `[]` |
| disabled | 禁选状态 |  `boolean` | `false` |
| onClick | 点击事件 | `() => void` | - |
| renderIcon | 图标 | `(checked: boolean) => ReactNode` | - |

```tsx
export interface CheckListItemProps {
  value: string;
  disabled?: boolean;
  onClick?: () => void;
  renderIcon?: (checked: boolean) => ReactNode;
}
```