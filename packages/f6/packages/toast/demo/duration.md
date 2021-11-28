---
order: 4
title: 持续时长
---

```jsx
import { Cell, Button, Toast } from 'f6';

export default function App() {
  return (
    <Cell.Group>
      <Cell title={"不主动关闭"} link onClick={() => {
        const ref = Toast.show({
          position: 'middle',
          message: '请求成功',
          duration: 0
        });
        let count = 0
        const t = setInterval(() => {
          count++;
          ref.setContent(count)
          if (count > 10) {
            ref.close();
            clearInterval(t);
          }
        }, 1000)
      }} />
      <Cell title={"一段时间后关闭"} link onClick={() => {
        const ref = Toast.show({
          position: 'bottom',
          message: '请求成功',
          duration: 1000
        });
      }} />
    </Cell.Group>
  )
}
```