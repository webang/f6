---
order: 1
title: 填充模式
---

```jsx
import { Button, Space } from 'f6';

export default function App() {
  return (
    <Space>
      <Button color="default" fill="solid">默认按钮</Button>
      <Button color="default" fill="outline">默认按钮</Button>
      <Button color="default" fill="none">默认按钮</Button>

      <Button color="primary" fill="solid">默认按钮</Button>
      <Button color="primary" fill="outline">默认按钮</Button>
      <Button color="primary" fill="none">默认按钮</Button>

      <Button color="danger" fill="solid">危险按钮</Button>
      <Button color="danger" fill="outline">危险按钮</Button>
      <Button color="danger" fill="none">危险按钮</Button>

      <Button color="warning" fill="solid">默认按钮</Button>
      <Button color="warning" fill="outline">默认按钮</Button>
      <Button color="warning" fill="none">默认按钮</Button>

      <Button color="success" fill="solid">默认按钮</Button>
      <Button color="success" fill="outline">默认按钮</Button>
      <Button color="success" fill="none">默认按钮</Button>
    </Space>
  )
}
```