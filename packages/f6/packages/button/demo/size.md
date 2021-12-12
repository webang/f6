---
order: 2
title: 按钮大小
---

```jsx
import { Button, Space } from 'f6';

function App() {
  return (
    <Space>
      <Button type="primary" size="middle">默认大小</Button>
      <Button type="primary" size="small">小型按钮</Button>
      <Button type="primary" size="mini">迷你按钮</Button>
    </Space>
  )
}

export default App;
```