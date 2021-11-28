---
order: 0
title: 顶部对其
---

```jsx
import { Button, Popover, Cell } from "f6";

function App() {
  return (
    <Cell.Group>
      <Cell
        title="top-start"
        link
        value={
          <Popover
            placement="top-start"
            reference={<Button size={"mini"}>显示</Button>}
          >
            <div style={{ width: 100 }}>hello world</div>
          </Popover>
        }
      />
      <Cell
        title="top"
        link
        value={
          <Popover
            placement="top"
            reference={<Button size={"mini"}>显示</Button>}
          >
            <div style={{ width: 100 }}>hello world</div>
          </Popover>
        }
      />
      <Cell
        title="top-end"
        link
        value={
          <Popover
            placement="top-end"
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