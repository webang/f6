---
order: 99
title: 加载动画
---

```jsx
import { Cell, Button, Toast } from 'f6';

export default function App() {
  return (
    <Cell.Group>
      <Cell title={"oval"} link onClick={() => {
        Toast.show({
          type: 'loading',
          spinner: 'oval',
          message: 'Loading',
        });
      }} />
      <Cell title={"lines"} link onClick={() => {
        Toast.show({
          type: 'loading',
          spinner: 'lines',
          message: 'Loading',
        });
      }} />
      <Cell title={"crescent"} link onClick={() => {
        Toast.show({
          type: 'loading',
          spinner: 'crescent',
          message: 'Loading',
        });
      }} />
    </Cell.Group>
  )
}
```