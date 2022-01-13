---
order: 0
title: 基本用法
---

```jsx
import { Badge, Space } from "f6";

export default function App() {
  let tempStyle = {
    background: "#eee",
    width: "40px",
    height: "40px",
    display: "block",
    "border-radius": "8px",
  };
  return (
    <Space wrap>
      <Badge content="5">
        <div style={tempStyle}></div>
      </Badge>
      <Badge content="新">
        <div style={tempStyle}></div>
      </Badge>
      <Badge content="99">
        <div style={tempStyle}></div>
      </Badge>
    </Space>
  );
}
```
