---
order: 0
title: 基本用法
---

```jsx
import { useState } from "react";
import { Field, Cell, Toast, Button } from "f6";

export default function () {
  const [value, setValue] = useState("");
  return (
    <>
      <Cell title="账户">
        <Field
          placeholder="请输入账户"
          value={value}
          onChange={(v) => setValue(v)}
        />
      </Cell>
      <Cell title="账户">
        <Field title="账户" placeholder="请输入账户" />
      </Cell>
      <div style={{ height: 8 }}></div>
      <Button block onClick={() => setValue((v) => v + 1)}>
        ++
      </Button>
    </>
  );
}
```