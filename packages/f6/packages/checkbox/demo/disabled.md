---
order: 1
title: 禁用状态
---

```jsx
import React from "react";
import { Checkbox, Cell, Toast } from "f6";

export default function App() {
  const [v, st] = React.useState(false);
  const onChange = (v) =>
    Toast.show({
      message: v ? "checked" : "unchecked",
    });
  return (
    <Cell.Group>
      <Cell
        title="格子"
        value={
          <Checkbox onChange={onChange} checked={v}>
            北京
          </Checkbox>
        }
      />
      <Cell title="格子" value={<Checkbox disabled>深圳</Checkbox>} />
    </Cell.Group>
  );
}
```
