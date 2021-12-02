---
order: 1
title: 禁用状态
---

```jsx
import React from 'react';
import { Radio, Cell, Toast } from 'f6';

export default function App() {
  const [v, st] = React.useState(false);
  const onChange = (v) => Toast.show({ 
    message: v ? 'checked' : 'unchecked'
  })
  return (
    <Cell.Group>
      <Cell title="格子" value={<Radio onChange={onChange} checked={v}>北京</Radio>}></Cell>
      <Cell title="格子" value={<Radio disabled>深圳</Radio>}></Cell>
    </Cell.Group>
  )
}
```