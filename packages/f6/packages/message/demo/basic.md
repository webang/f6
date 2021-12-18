---
order: 0
title: 基本用法
---

```jsx
import React from 'react';
import { Message } from 'f6';

const style = {
  marginBottom: 10
}

function App() {
  return (
    <>
      <Message color="primary" style={style}>这是一段默认的普通文字描述</Message>
      <Message type="warning" style={style}>这是一段默认的普通文字描述</Message>
      <Message type="danger" style={style}>这是一段默认的普通文字描述</Message>
      <Message type="success" style={style}>这是一段默认的普通文字描述，这是一段默认的普通文字描述，这是一段默认的普通文字描述，这是一段默认的普通文字描述</Message>
    </>
  )
}

export default App;
```