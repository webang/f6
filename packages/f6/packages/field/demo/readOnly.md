---
order: 1
title: 只读状态
---

```jsx
import { useState } from "react";
import { Cell, Field } from "f6";

export default function () {
  const [value, setValue] = useState("hello world");

  return (
    <>
      <Cell title="账户">
        <Field readOnly placeholder="请输入账户" />
      </Cell>
      <Cell title="账户">
        <Field title="账户" value={value} readOnly placeholder="请输入账户" />
      </Cell>
    </>
  );
}
```