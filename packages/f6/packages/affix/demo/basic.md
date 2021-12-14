---
order: 0
title: 基本用法
---

```jsx
import { Affix, Button } from "f6";

export default function App() {
  return (
    <div style={{ height: "700px", background: "#607d8b" }}>
      <Affix top={20}>
        <Button size="sm" shape="round" color="primary">
          首页
        </Button>
      </Affix>
    </div>
  );
}
```