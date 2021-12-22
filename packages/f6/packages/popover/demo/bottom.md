---
order: 1
title: 底部对齐
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
            content={<div style={{ width: 100 }}>hello world</div>}
          >
            <Button size={"mini"}>显示</Button>
          </Popover>
        }
      />
      <Cell
        title="bottom"
        link
        value={
          <Popover
            placement="bottom"
            content={<div style={{ width: 100 }}>hello world</div>}
          >
            <Button size={"mini"}>显示</Button>
          </Popover>
        }
      />
      <Cell
        title="bottom-end"
        link
        value={
          <Popover
            placement="bottom-end"
            content={<div style={{ width: 100 }}>this is a long tip</div>}
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