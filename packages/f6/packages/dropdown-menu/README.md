---
category: 操作反馈
title: DropdownMenu
subTitle: 下拉菜单
---

### DropdownMenuProps

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| onClose | 关闭时触发 | `() => void` | - |
| onClickItem | 点击时触发 | `(option: {index: number; action: DropdownMenuItemAction}) => void` | - |

```tsx
export interface DropdownMenuProps {
  className?: string;
  onClose?: () => void;
  onClickItem?: (option: {index: number; action: DropdownMenuItemAction}) => void;
}
```

### DropdownMenuItemProps

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| title | 标题 | `ReactNode` | - |
| actions | 操作项 | `DropdownMenuItemAction[]` | - |

```tsx
export interface DropdownMenuItemAction {
  name: ReactNode;
  value: string;
}

export interface DropdownMenuItemProps {
  title: string;
  className?: string;
  actions?: DropdownMenuItemAction[];
}
```