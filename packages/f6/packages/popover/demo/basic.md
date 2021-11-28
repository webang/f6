---
order: 0
title: 基本用法
---

```jsx
import { Button, Popover, Cell } from "f6";

function App() {
  return (
    <Cell.Group>
      <Cell
        title="bottom-start"
        link
        value={
          <Popover
            placement="bottom-start"
            reference={<Button size={"mini"}>显示</Button>}
          >
            <div style={{ width: 100 }}>hello world</div>
          </Popover>
        }
      />
      <Cell
        title="bottom"
        link
        value={
          <Popover
            placement="bottom"
            reference={<Button size={"mini"}>显示</Button>}
          >
            <div style={{ width: 100 }}>hello world</div>
          </Popover>
        }
      />
      <Cell
        title="bottom-end"
        link
        value={
          <Popover
            placement="bottom-end"
            reference={<Button size={"mini"}>显示</Button>}
          >
            <div style={{ width: 100 }}>this is a long tip</div>
          </Popover>
        }
      />
    </Cell.Group>
  );
}

export default App;
```