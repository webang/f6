---
order: 0
title: 基本用法
---

```jsx
import { Affix, BackTop } from 'f6';

export default function App() {
  return (
    <div>
      <div style={{ height: 400 }} />
      <BackTop bottom={20}></BackTop>
      <div style={{ height: 400 }} />
    </div>
  )
}
```