---
order: 1
title: 垂直排列
---

```jsx
import React from 'react';
import { Button, Space, Overlay, Loading } from 'f6';

export default function App() {
  return (
    <Space>
      <Loading vertical spinnerSize={24} spinnerType="oval">加载中</Loading>
      <Loading vertical spinnerSize={24} spinnerType="oval">加载中</Loading>
      <Loading vertical spinnerSize={24} spinnerType="lines">加载中</Loading>
    </Space>
  )
}
```