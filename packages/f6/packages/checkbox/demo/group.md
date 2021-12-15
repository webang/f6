---
order: 2
title: 复选框组
---

```jsx
import React from "react";
import { Checkbox, Space, Cell, Toast } from "f6";

export default function App() {
  const onChange = (v) => {
    Toast.show({ message: v.join(",") });
  };
  return (
    <Checkbox.Group defaultValue="1" onChange={onChange}>
      <Space>
        <Checkbox value={"1"}>北京</Checkbox>
        <Checkbox value={"2"}>深圳</Checkbox>
      </Space>
    </Checkbox.Group>
  );
}
```