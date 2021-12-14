---
order: 1
title: 设置容器
---

```jsx
import React from "react";
import { Affix, Button } from "f6";

export default function App() {
  const ref = React.useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      style={{
        height: "200px",
        background: "#607d8b",
        overflow: "scroll",
        position: "relative",
      }}
    >
      <div style={{ height: "40px" }}></div>
      <Affix top={10} container={() => ref.current}>
        <Button size="sm" shape="round" type="primary">
          首页
        </Button>
      </Affix>
      <div style={{ height: "300px" }}></div>
    </div>
  );
}
```