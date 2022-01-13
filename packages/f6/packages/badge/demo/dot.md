---
order: 0
title: 展示小红点
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
    <Badge content={Badge.dot}>
      <div style={tempStyle}></div>
    </Badge>
  );
}
```
