---
order: 1
title: 清除所有
---

```jsx
import { Cell, Button, Toast } from 'f6';

export default function App() {
  return (
    <Cell.Group>
      <Cell title={"主动清除"} link onClick={() => {
        Toast.clear();
      }} />
    </Cell.Group>
  )
}
```