---
order: 0
title: 基本用法
---

```jsx
import React from "react";
import { Button, Popover, Cell } from "f6";

function App() {
  const [visible, setVisible] = React.useState(true);
  return (
    <Cell.Group>
      <Cell
        title="bottom"
        link
        value={
          <Popover
            visible={visible}
            onVisibleChange={setVisible}
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