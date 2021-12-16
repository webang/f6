---
order: 0
title: 普通用法
---

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