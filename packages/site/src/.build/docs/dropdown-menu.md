<div class="block-panel"><h3>普通用法</h3>

```jsx
import React from "react";
import { Dialog, Button, DropdownMenu, Toast } from "f6";

export default function App() {
  const [visible2, setVisible2] = React.useState(false);
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
    {
      title: "地区",
      actions: [
        {
          name: "国内",
          value: "国内",
        },
        {
          name: "国外",
          value: "国外",
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
        onClickMenu={({ index, value }) => {
          Toast.show({ message: `${index}-${value}` });
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
<h3> Props</h3>

thi is Props content


</div>
<div class="block-panel">
<h3> API</h3>

this is API content
</div>