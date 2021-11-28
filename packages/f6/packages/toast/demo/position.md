---
order: 10
title: 提示位置
---

```jsx
import { Cell, Button, Toast } from 'f6';

export default function App() {
  return (
    <Cell.Group>
      <Cell title={"top"} link onClick={() => {
        Toast.show({
          position: 'top',
          message: '请求成功',
        });
      }} />
      <Cell title={"middle"} link onClick={() => {
        Toast.show({
          position: 'middle',
          message: '请求成功'
        });
      }} />
      <Cell title={"bottom"} link onClick={() => {
        Toast.show({
          position: 'bottom',
          message: '请求成功'
        });
      }} />
    </Cell.Group>
  )
}
```