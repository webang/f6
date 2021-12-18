---
order: 0
title: 基本用法
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
      <Cell title={"单元格"} value={"100"} link />
      <Cell title={"单元格"} value={button} link />
      <Cell title={"单元格"} label={"描述信息"} value={"100"} link />
      <Cell
        onClick={() => Toast.show({ message: "😄" })}
        title={"点我试试"}
        value={"100"}
        link
      />
    </Cell.Group>
  );
}
```