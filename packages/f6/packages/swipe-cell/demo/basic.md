---
order: 0
title: 基本用法
---

```jsx
import { useState } from "react";
import { Cell, SwipeCell, Button } from "f6";

export default function App() {
  const [list, setList] = useState([
    {
      title: "李白",
    },
    {
      title: "杜甫",
    },
  ]);
  const render = () => {
    return list.map((it, index) => {
      return (
        <SwipeCell
          left={
            <Button color="danger" type="primary">
              收藏
            </Button>
          }
          right={
            <Button
              onClick={() => {
                setList((prev) => {
                  return prev.filter((it, i) => i !== index);
                });
              }}
              color="primary"
              type="primary"
            >
              删除
            </Button>
          }
        >
          <Cell title={it.title} value="100"></Cell>
        </SwipeCell>
      );
    });
  };
  return <>{render()}</>;
}
```