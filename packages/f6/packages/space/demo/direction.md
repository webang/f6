---
order: 2
title: 换行
---

```jsx
import { Button, Space } from 'f6';

export default function App() {
  return (
    <Space wrap direction="vertical">
      <Button type="default">默认按钮</Button>
      <Button color="primary">主要按钮</Button>
      <Button type="warning">警告按钮</Button>
    </Space>
  )
}
```