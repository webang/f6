---
order: 2
title: 单选组
---

```jsx
import React from 'react';
import { Checkbox, Cell, Toast } from 'f6';

export default function App() {
  const onChange = (v) => {
    Toast.show({ message: v.join(',') })
  }
  return (
    <Checkbox.Group defaultValue="1" onChange={onChange}>
      <Checkbox value={"1"} >北京</Checkbox>
      <Checkbox value={"2"} >深圳</Checkbox>
    </Checkbox.Group>
  )
}
```