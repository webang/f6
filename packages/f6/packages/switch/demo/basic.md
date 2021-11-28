---
order: 0
title: 基本用法
---

```jsx
import { Switch } from 'f6';

export default function App() {
  return (
    <>
      <Switch></Switch>
      <div style={{ height: 20 }}></div>
      <Switch defaultValue={true}></Switch>
    </>
  )
}
```