---
order: 1
title: 底部边框
---

```jsx
import { Cell, Button } from "f6";

const button = (<Button size="mini" type="primary">详情</Button>);

export default function() {
  return (
    <Cell.Group>
      <Cell
        title={"无边框"}
        value={button}
        link
        border={false}
      />
      <Cell title={"有边框"} value={"100"} link />
      <Cell
        title={"无边框"}
        value={"100"}
        link
      />
    </Cell.Group>
  )
}
```