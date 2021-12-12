---
order: 1
title: 朴素按钮
---

```jsx
import { Button, Space } from 'f6';

export default function App() {
  return (
    <Space>
      <Button type="default" plain>默认按钮</Button>
      <Button type="primary" plain>主要按钮</Button>
      <Button type="success" plain>成功按钮</Button>
      <Button type="danger" plain>危险按钮</Button>
      <Button type="warning" plain>警告按钮</Button>
    </Space>
  )
}
```