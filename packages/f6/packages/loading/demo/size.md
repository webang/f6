---
order: 1
title: 自定义大小
---

```jsx
import React from 'react';
import { Button, Space, Overlay, Loading } from 'f6';

export default function App() {
  return (
    <Space>
      <Loading spinnerSize={20} spinnerType="oval">Loading</Loading>
      <Loading spinnerSize={24} spinnerType="oval">Loading</Loading>
      <Loading spinnerSize={30} spinnerType="lines">Loading</Loading>
    </Space>
  )
}
```