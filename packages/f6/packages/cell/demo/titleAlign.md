---
order: 0
title: 标题对齐方式
---

```jsx
import { Cell, Button, Toast } from "f6";

const button = (
  <Button size="mini" color="primary">
    详情
  </Button>
);

export default function () {
  return (
    <Cell.Group>
      <Cell titleAlign="left" title={"单元格"} value={"100"}>
        一曲新词酒一杯
      </Cell>
      <Cell titleAlign="top" title={"单元格"} value={button} link>
        一曲新词酒一杯
      </Cell>
    </Cell.Group>
  );
}
```