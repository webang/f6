<div class="block-panel"><h3>普通用法</h3>

```jsx
import React from "react";
import { DropdownMenu, Toast } from "f6";

export default function App() {
  const [visible, setVisible] = React.useState(false);
  const menus = [
    {
      title: "分类",
      actions: [
        {
          name: "服装",
          value: "服装",
        },
        {
          name: "生鲜",
          value: "生鲜",
        },
      ],
    },
    {
      title: "排序",
      actions: [
        {
          name: "销量优先",
          value: "销量优先",
        },
        {
          name: "价格优先",
          value: "价格优先",
        },
      ],
    },
  ];
  return (
    <div style={{ marginLeft: -16, marginRight: -16 }}>
      <div style={{ height: 200 }} />
      <DropdownMenu
        onClose={() => {
          Toast.show({ message: `close` });
        }}
        onClickItem={({ index, action }) => {
          Toast.show({ message: `${index}-${action.value}` });
        }}
      >
        {menus.map((it) => (
          <DropdownMenu.Item {...it}></DropdownMenu.Item>
        ))}
      </DropdownMenu>
      <div style={{ height: 400 }} />
    </div>
  );
}
```
</div>

<div class="block-panel">
<h3> DropdownMenuProps</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| onClose | 关闭时触发 | `() => void` | - |
| onClickItem | 点击时触发 | `(option: {index: number; action: DropdownMenuItemAction}) => void` | - |

```tsx
export interface DropdownMenuProps {
  className?: string;
  onClose?: () => void;
  onClickMenu?: (option: {index: number; action: DropdownMenuItemAction}) => void;
}
```


</div>
<div class="block-panel">
<h3> DropdownMenuItemProps</h3>

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
</div>