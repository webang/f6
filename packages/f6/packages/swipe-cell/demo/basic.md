---
order: 0
title: 基本用法
---

```jsx
import { Cell, SwipeCell, Button } from "f6";

export default function App() {
  return (
    <>
      <SwipeCell
        left={
          <Button type="primary" style={{ borderRadius: 0 }}>
            收藏
          </Button>
        }
        right={
          <Button type="danger" style={{ borderRadius: 0 }}>
            删除
          </Button>
        }
      >
        <Cell title="默认按钮" value="100"></Cell>
      </SwipeCell>
      <SwipeCell
        right={
          <Button type="primary" style={{ borderRadius: 0 }}>
            删除
          </Button>
        }
      >
        <Cell title="默认按钮" value="100"></Cell>
      </SwipeCell>
    </>
  );
}
```
