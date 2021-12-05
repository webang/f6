---
order: 1
title: 换行
---

```jsx
import { Button, Space } from 'f6';

export default function App() {
  return (
    <Space wrap>
      <Button type="default">默认按钮</Button>
      <Button type="primary">主要按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="default">默认按钮</Button>
      <Button type="primary">主要按钮</Button>
      <Button type="warning">警告按钮</Button>
    </Space>
  )
}
```