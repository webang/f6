---
order: 1
title: 右侧对其
---

```jsx
import { Button, Popover, Cell } from "f6";

function App() {
  return (
    <Cell.Group>
      <Cell
        title="right-start"
        link
        value={
          <Popover
            placement="right-start"
            content={<div style={{ width: 100 }}>hello world</div>}
          >
            <Button size={"mini"}>显示</Button>
          </Popover>
        }
      />
      <Cell
        title="right"
        link
        value={
          <Popover
            placement="right"
            content={<div style={{ width: 100 }}>hello world</div>}
            reference={<Button size={"mini"}>显示</Button>}
          >
            <Button size={"mini"}>显示</Button>
          </Popover>
        }
      />
      <Cell
        title="right-end"
        link
        value={
          <Popover
            placement="right-end"
            content={<div style={{ width: 100 }}>this is a long tip</div>}
            reference={<Button size={"mini"}>显示</Button>}
          >
            <Button size={"mini"}>显示</Button>
          </Popover>
        }
      />
    </Cell.Group>
  );
}

export default App;
```