---
order: 2
title: 输入密码
---

```jsx
import { useState } from 'react';
import { Cell, Input, Toast, Button } from "f6";

export default function () {
  const [value, setValue] = useState('')

  return (
    <Cell title="密码">
      <Input type="password" placeholder="请输入密码" />
    </Cell>
  );
}
```