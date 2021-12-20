---
order: 0
title: 基本用法
---

```jsx
import React from "react";
import { Radio, Cell, Toast, Button, Space } from "f6";

export default function App() {
  const [checked, setChecked] = React.useState(true);
  const onChange = (v) => {
    setChecked(v);
    Toast.show({
      message: v ? "checked" : "unchecked",
    });
  }
  const onChange2 = (v) => {
    Toast.show({
      message: v ? "checked" : "unchecked",
    });
  }

  return (
    <Space direction="vertical">
      <Radio onChange={onChange} checked={checked}>深圳</Radio>
      <Radio onChange={onChange2} defaultChecked={true}>北京</Radio>
      <Radio defaultChecked={true} disabled>北京</Radio>
      <Radio disabled>深圳</Radio>
    </Space>
  );
}
```